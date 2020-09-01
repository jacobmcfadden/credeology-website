const bcrypt = require('bcrypt');

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
                    phone: newUser.phone,
                    verifyPhone: newUser.verify_phone,
                    verifyEmail: newUser.verify_email,
                    isAdmin: newUser.is_admin
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Email or password incorrect')
            }
        }
    },
    register: async (req, res) => {
        const db = req.app.get('db');
        const {firstName, lastName, email, password, phone} = req.body;
        const existingUser = await db.auth.check_user(email, phone);
        if(existingUser[0]){
            return res.status(409).send('Email or phone is being used for a different account.')
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
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}