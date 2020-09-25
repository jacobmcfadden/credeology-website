require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const twilio = require('twilio');
// const config = require('./config/config');
const twilioNotifications = require('./middleware/twilioNotifications');

const app = express();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT}=process.env;


const awsCtrl = require('./controllers/awsController');
const auth = require('./controllers/authController');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(twilioNotifications.notifyOnError);

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}));


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Connected to db')
}).catch(err => console.log(err));

// Put endpoints here
app.post('/aws/signS3', awsCtrl.sign_s3);
app.post('/auth/login', auth.login);
app.post('/auth/register', auth.register);
app.post('/auth/logout', auth.logout);
app.get('/auth/user', auth.getUser);
app.post('/auth/recover', auth.recoverAccount);
app.put('/auth/reset', auth.resetPassword);
app.post('/verify/email', auth.sendEmailCode);
app.post('/verify/phone', auth.sendPhoneCode);
app.put('/verify/phone', auth.verifyPhone);
app.put('/verify/email', auth.verifyEmail);
app.put('/auth/tfa', auth.updateTwoFactorAuth);

app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));