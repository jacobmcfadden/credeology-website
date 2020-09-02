import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/reducers/authReducer';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        axios.post('/auth/login', {email, phone, password}).then(res => {
            props.message("Login Success!");
            props.loginUser(res.data);
        }).catch(err => {
            props.message(`${err} - Login Failed!`);
        })
    };

    return (
        <div className="LoginForm form pd-2">
            <span className="container__row-center">
                <input className="container__col-12 input" 
                name="email" 
                value={email} 
                onChange={event => setEmail(event.target.value)} 
                type="email" 
                placeholder="Email Address" />
            </span>
            <span className="container__row-center mg-t-1">
                <hr className="container__col-5"/>
                <p className="container__col-1">OR</p>
                <hr className="container__col-5"/>
            </span>
            <span className="container__row-center">
                <input className="container__col-12 input" 
                name="phone" 
                id="phone"
                value={phone} 
                onChange={event => setPhone(event.target.value)} 
                type="tel" 
                placeholder="Phone Number"
                required={true} />
            </span>
            <span className="container__row-center mg-tb-1">
                <input className="container__col-12 input" 
                name="password" 
                value={password} 
                onChange={event => setPassword(event.target.value)} 
                type="password" 
                placeholder="Password"/>
            </span>
            <span className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="/passwordReset" className="link">Forget your password?</Link>
                </div>
            </span>
            <span className="container__row-center mg-tb-1">
                <div className="container__col-12 link">
                    <button className="lrg-btn" onClick={login}>LOGIN</button>
                </div>
            </span>
            <span className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="/signup" className="link">Signup for a new account</Link>
                </div>
            </span>
        </div>
    );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {loginUser})(LoginForm);