const bcrypt = require('bcrypt');
const Nexmo = require('nexmo');



module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, phone, password} = req.body;
        const user = await db.auth.check_user(email, phone);
    
        if(!user[0]) {
            return res.status(401).send('Incorrect credentials');
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password);
            if(authenticated) {
                req.session.user = {
                    id: user[0].id,
                    email: user[0].email,
                    firstName: user[0].first_name,
                    lastName: user[0].last_name,
                    phone: user[0].phone,
                    isEmailVerified: user[0].verify_email ? true : false,
                    isPhoneVerified: user[0].verify_phone ? true : false,
                    isAdmin: user[0].is_admin
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Login credentials incorrect.')
            }
        }
    },
    register: async (req, res) => {
        const db = req.app.get('db');
        const {firstName, lastName, email, password, phone} = req.body;
        const existingUser = await db.auth.check_user(email, phone);
        if(existingUser[0]){
            return res.status(409).send('The email or phone is currently being used on an existing account.')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        const todayDate = (year + "-" + month + "-" + date);

        const isAdmin = false;
        const [newUser] = await db.auth.create_user([email, hash, firstName, lastName, phone, todayDate, isAdmin])
        req.session.user = {
            id: newUser.id,
            email: newUser.email,
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            phone: newUser.phone,
            verifyPhone: newUser.verify_phone,
            verifyEmail: newUser.verify_email,
            isAdmin: newUser.is_admin
        }
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('User has been logged out.');
    },
    getUser: async (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(440).send('No previous user session found.')
        }
    },
    sendEmailCode: async (req, res) => {
        const db = req.app.get('db');
        const {userId, phone} = req.body;
        const user = await db.auth.check_user_phone([userId, phone]);
        
        if(!user[0]) {
            return res.status(401).send('User Session phone number does not match any user records.');
        } else {
            // if null then everything checks out make the verification code
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            
            const salt = bcrypt.genSaltSync(10);
            const hashed_code = bcrypt.hashSync(code, salt);

            const datetime = new Date();
            const today = datetime.toISOString().slice(0,10);

            const messageBody = `Credeology code: ${code}. Valid for 5 minutes`;
            const verify_code = await db.auth.create_phone_code(hashed_code, today, false, user[0].phone, user[0].id);
            // send the verification code
            if(!verify_code[0]) {
                return res.status(401).send('No code creation took place due to server issues.');
            } else {
            nexmo.message.sendSms(
                '19043714911' , `1${phone.replace(/\D+/g, "")}`, messageBody, {type: 'unicode'},
                (err, responseData) => {if (responseData) {console.log(responseData);}}
            );
            return res.status(200).send(`Verification code was sent to ${phone} via text!`);
            }
        }
    },
    verifyEmail: async (req, res) => {
        const db = req.app.get('db');
        const {userId, phone, userInput} = req.body;
        
        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);

        const codes = await db.auth.check_user_code([userId, phone, userInput, today]);
        
        if(!codes[0]) {
            return res.status(401).send('No codes found please check input and submit again.');
        } else {
            const [phoneVerified] = await db.auth.update_user_verified_phone([userId, today]);
            if(!phoneVerified) {
                return res.status(401).send('Could not update the account due to server issues.');
            } else {
                req.session.user = {
                    id: phoneVerified.id,
                    email: phoneVerified.email,
                    firstName: phoneVerified.first_name,
                    lastName: phoneVerified.last_name,
                    phone: phoneVerified.phone,
                    verifyPhone: phoneVerified.verify_phone,
                    verifyEmail: phoneVerified.verify_email,
                    isAdmin: phoneVerified.is_admin
                }
                return res.status(200).send(req.session.user)
            }
        }
    },
    sendPhoneCode: async (req, res) => {
        const db = req.app.get('db');
        const {userId, phone} = req.body;
        const user = await db.auth.check_user_phone([userId, phone]);
        
        if(!user[0]) {
            return res.status(401).send('No Phone Matched!');
        } else {
            // if null then everything checks out make the verification code
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            
            const salt = bcrypt.genSaltSync(10);
            const hashed_code = bcrypt.hashSync(code, salt);

            const datetime = new Date();
            const today = datetime.toISOString().slice(0,10);

            const messageBody = `Credeology code: ${code}. Valid for 5 minutes`;
            const verify_code = await db.auth.create_phone_code(hashed_code, today, false, user[0].phone, user[0].id);
            // send the verification code
            if(!verify_code[0]) {
                return res.status(401).send('Problem with creation');
            } else {
            nexmo.message.sendSms(
                '19043714911' , `1${phone.replace(/\D+/g, "")}`, messageBody, {type: 'unicode'},
                (err, responseData) => {if (responseData) {console.log(responseData);}}
            );
            return res.status(200).send(`Code Message Sent to ${phone}`);
            }
        }
    },
    verifyPhone: async (req, res) => {
        const db = req.app.get('db');
        const {userId, phone, userInput} = req.body;
        
        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);

        const codes = await db.auth.check_user_code([userId, phone, userInput, today]);
        
        if(!codes[0]) {
            return res.status(401).send('No codes exist');
        } else {
            const [phoneVerified] = await db.auth.update_user_verified_phone([userId, today]);
            if(!phoneVerified) {
                return res.status(401).send('Could not update');
            } else {
                req.session.user = {
                    id: phoneVerified.id,
                    email: phoneVerified.email,
                    firstName: phoneVerified.first_name,
                    lastName: phoneVerified.last_name,
                    phone: phoneVerified.phone,
                    verifyPhone: phoneVerified.verify_phone,
                    verifyEmail: phoneVerified.verify_email,
                    isAdmin: phoneVerified.is_admin
                }
                return res.status(200).send(req.session.user)
            }
        }
    }
}