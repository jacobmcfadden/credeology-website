const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, phone, password} = req.body;
        const user = await db.auth.check_user(email, phone);
    
        if(!user[0]) {
            return res.status(401).send('You have entered invalid login credentials.');
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password);
            if(authenticated) {
                req.session.user = {
                    id: user[0].id,
                    email: user[0].email,
                    firstName: user[0].first_name,
                    lastName: user[0].last_name,
                    phone: user[0].phone,
                    isAdmin: user[0].is_admin
                }
                req.session.ver = {
                    isEmailVerified: user[0].verify_email ? true : false,
                    isPhoneVerified: user[0].verify_phone ? true : false,
                    two_factor_auth: user[0].two_factor_auth
                }
                return res.status(200).send(req.session.user)
            } else {
                res.status(401).send('You have entered invalid login credentials.')
            }
        }
    },
    register: async (req, res) => {
        const db = req.app.get('db');
        const {firstName, lastName, email, password, phone} = req.body;
        const existingUser = await db.auth.check_user(email, phone);
        if(existingUser[0]){
            return res.status(409).send('Email address or phone number linked to existing account.')
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
            isAdmin: newUser.is_admin
        }
        req.session.ver = {
            isEmailVerified: newUser.verify_email ? true : false,
            isPhoneVerified: newUser.verify_phone ? true : false,
            two_factor_auth: newUser.two_factor_auth
        }
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('You have been successfully logged out.');
    },
    getUser: async (req, res) => {
        if(req.session.user){
           return res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Please login or create an account.');
        }
    }
}