require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT}=process.env;
const auth = require('./controllers/authController');

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
app.post('/auth/login', auth.login);
app.post('/auth/register', auth.register);
app.get('/auth/logout', auth.logout);
app.get('/auth/user', auth.getUser);

app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));