import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/reducers/authReducer';

const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [emailIncorrect, setEmailIncorrect] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneIncorrect, setPhoneIncorrect] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordIncorrect, setPasswordIncorrect] = useState(false);
    const history = useHistory();

    const onPhoneChange = (input) => {
        const phoneReg = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
        if(phoneReg.test(input)){
            setPhone(input);
            setPhoneIncorrect(false);
        } else {
            setPhone(input);
            setPhoneIncorrect(true);
        }
    }

    const onEmailChange = (input) => {
        const emailReg = RegExp(".+@.+\..+")
        if(emailReg.test(input)){
            setEmail(input);
            setEmailIncorrect(false);
        } else {
            setEmail(input);
            setEmailIncorrect(true);
        }
    }

    const onPasswordChange = (input) => {
        const pswReg = RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(pswReg.test(input)){
            setPassword(input);
            setPasswordIncorrect(false);
        } else {
            setPassword(input);
            setPasswordIncorrect(true);
        }
    }

    const handleInput = (value) => {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        return (
          value.replace(phoneRegex, '($1) $2-$3')
        )
      }

    const login = () => {
        if(password !== '' && passwordIncorrect === false) {
            if((email !== '' || phone !== '') && (emailIncorrect === false && phoneIncorrect === false)) {
                props.loginUser(email, phone, password)
            } else {
               console.log("error from login if email/phone")
            }
        } else {
           console.log("error from login if password conditional")
        }
        
    };

    return (
        <div className="LoginForm">
                <div className="container__row">
                    <input className={`container__col-12 input ${email === '' ? '' : emailIncorrect === false ? 'valid' : 'invalid' }`} 
                    id="email"
                    name="email" 
                    value={email} 
                    onChange={event => onEmailChange(event.target.value)} 
                    type="text" 
                    placeholder="Email Address" 
                    required={true}/>
                    <label htmlFor="email" className="label">Email Address</label>
                </div>

                <div className="container__row-center mg-t-1">
                    <hr className="container__col-5"/>
                    <p className="container__col-1">OR</p>
                    <hr className="container__col-5"/>
                </div>

                <div className="container__row">
                    <input 
                    className={`container__col-12 input ${phone === '' ? '' : phoneIncorrect === false ? 'valid' : 'invalid' }`} 
                    id="phone"
                    name="phone" 
                    value={handleInput(phone)} 
                    onChange={event => onPhoneChange(event.target.value)} 
                    type="text" 
                    placeholder="Phone Number"/>
                    <label htmlFor="phone" className="label">Phone Number</label>
                </div>

                <div className="container__row mg-tb-1">
                    <input className={`container__col-12 input ${password === '' ? '' : passwordIncorrect === false ? 'valid' : 'invalid' }`}  
                    id="password"
                    name="password" 
                    value={password} 
                    onChange={event => onPasswordChange(event.target.value)} 
                    type="password" 
                    placeholder="Password"/>
                    <label htmlFor="password" className="label">Password</label>
                </div>

                <div className="container__row-center mg-tb-1">
                    <div className="container__col-12 link">
                        <button className="lrg-btn" 
                        onClick={login}
                        >LOGIN</button>
                    </div>
                </div>

            <div className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="/auth/passwordReset" className="link">Forget your password?</Link>
                </div>
            </div>

            <div className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="/auth/signup" className="link">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(LoginForm);