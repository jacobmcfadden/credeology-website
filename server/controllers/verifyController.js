const bcrypt = require('bcrypt');
const twilioClient = require('../twilioClient');
const nodemailerClient = require('../nodemailerClient');

module.exports = {
    sendEmailCode: async (req, res) => {
        const db = req.app.get('db');
        const {id, email} = req.session.user;
        
        // create code timestamp
        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);

        // generate random 6 digit code
        const code = Math.floor(100000 + Math.random() * 900000).toString();

        // hash the generated code in prep to store in database
        const salt = bcrypt.genSaltSync(10);
        const hashed_code = bcrypt.hashSync(code, salt);

        // Add the saved code to the database
        const verify_code = await db.auth.create_ver_code(hashed_code, today, true, email, id);
        
        // send the verification code
        if(!verify_code[0]) {
            return res.status(304).send('Oh no! A problem occurred while trying to generate your code.');
        } else {
            const messageBody = `Credeology code: ${code}. Valid for 5 minutes`;
            const subject = "Verification Code";
            const sendVer = await nodemailerClient.sendEmail(email, messageBody, subject);
            if(sendVer !== `Email was sent to ${email} sucessfully!`) {
                return res.status(550).send(sendVer);
            } else {
                res.status(200).send(sendVer);
            }
        }
    },
    sendPhoneCode: async (req, res) => {
        const db = req.app.get('db');
        const {id, phone} = req.session.user;
        // create code timestamp
        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);

        // generate random 6 digit code
        const code = Math.floor(100000 + Math.random() * 900000).toString();

        // hash the generated code in prep to store in database
        const salt = bcrypt.genSaltSync(10);
        const hashed_code = bcrypt.hashSync(code, salt);

        // Add the saved code to the database
        const verify_code = await db.auth.create_ver_code(hashed_code, today, false, phone, id);
        
        // send the verification code
        if(!verify_code[0]) {
            return res.status(304).send('Oh no! A problem occurred while trying to generate your code.');
        } else {
            const userNumber = `1${phone.replace(/\D+/g, "")}`;
            const messageBody = `Credeology code: ${code}. Valid for 5 minutes`;
            const sendVer = await twilioClient.sendSms(userNumber, messageBody);
            res.status(200).send(`Code Message Sent to ${phone}`);
        }
    },
    verifyEmail: async (req, res) => {
        const db = req.app.get('db');
        const {userInput} = req.body;
        const {id, email} = req.session.user;
        
        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);

        const codes = await db.auth.check_user_code([id, email, today]);
        if(!codes[0]) {
            return res.status(404).send('No active email verification codes, please resubmit a code request.');
        } else {
            const authenticated = bcrypt.compareSync(userInput, codes[0].hash_string);
            if(authenticated) {
                const [codeVerified] = await db.auth.update_user_verified_email([id, today]);
                if(!codeVerified) {
                    return res.status(304).send('Oh no! A problem occurred during update.');
                } else {
                    req.session.ver = {
                        isEmailVerified: codeVerified.verify_email ? true : false,
                        isPhoneVerified: codeVerified.verify_phone ? true : false,
                        twoFactorAuth: codeVerified.two_factor_auth
                    }
                    return res.status(200).send(req.session.ver)
                }
            } else {
                res.status(401).send('That code didnt match our records, check your input and try again.');
            }
        }
    },
    verifyPhone: async (req, res) => {
        const db = req.app.get('db');
        const {userInput} = req.body;
        const {id, phone} = req.session.user;

        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);

        const codes = await db.auth.check_user_code([id, phone, today]);
        if(!codes[0]) {
            return res.status(404).send('No active text verification codes, please resubmit a code request.');
        } else {
            const authenticated = await bcrypt.compareSync(userInput, codes[0].hash_string);
            if(authenticated) {
                const [codeVerified] = await db.auth.update_user_verified_phone([id, today]);
                if(!codeVerified) {
                    return res.status(304).send('Oh no! A problem occurred during update.');
                } else {
                    req.session.ver = {
                        isEmailVerified: codeVerified.verify_email ? true : false,
                        isPhoneVerified: codeVerified.verify_phone ? true : false,
                        twoFactorAuth: codeVerified.two_factor_auth
                    }
                    return res.status(200).send(req.session.ver)
                }
            } else {
                res.status(401).send('That code didnt match our records, check your input and try again.');
            }
        }
    },
    verifyOrganization: async (req, res) => {
        const {userInputName, userInputNumber} = req.body;
        const nameSearch = `DATA_GOV_URL like '%25${userInputName}%25'`;
        const numberSearch = `DATA_GOV_2'${userInputNumber}'`;
        const soda = require('soda-js');
        const consumer = new soda.Consumer('EXPLORE_DATA_GOV');

        consumer.query()
        .withDataset('GOV_DATASET')
        .limit(20)
        .where({ namelast: 'SMITH' })
        .order('namelast')
        .getRows()
            .on('success', function(rows) { console.log(rows); })
            .on('error', function(error) { console.error(error); });
    },
    getVer: async (req, res) => {
        if(req.session.ver){
           return res.status(200).send(req.session.ver)
        } else {
            res.status(401).send('Not verified');
        }
    },
    updateTwoFactorAuth: async (req, res) => {
        const db = req.app.get('db');
        const {twoFactorAuth} = req.body;
        const {id} = req.session.user;
        const datetime = new Date();
        const today = datetime.toISOString().slice(0,10);
        const [updatedUser] = await db.auth.update_user_two_factor_auth([id, today, twoFactorAuth]);
        if(!updatedUser) {
            return res.status(304).send('Oh no! A problem occurred during update.');
        } else {
            req.session.ver = {
                isEmailVerified: updatedUser.verify_email ? true : false,
                isPhoneVerified: updatedUser.verify_phone ? true : false,
                twoFactorAuth: updatedUser.two_factor_auth
            }
            return res.status(200).send(req.session.ver)
        }
    }
}