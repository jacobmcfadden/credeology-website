require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');

const app = express();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT, NEXMO_API_KEY, NEXMO_API_SECRET}=process.env;

const nexmo = new Nexmo({
    apiKey: '41f12fe3',
    apiSecret: 'x2vBMKnkWuuS5QkM'
   });

const awsCtrl = require('./controllers/awsController');
const auth = require('./controllers/authController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { madAge: 1000 * 60 * 60 * 48},
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
app.post('/verify/email', auth.sendEmailCode);
app.put('/verify/email', auth.verifyEmail);
app.post('/verify/phone', auth.sendPhoneCode);
app.put('/verify/phone', auth.verifyPhone);

app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));