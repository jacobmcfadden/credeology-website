import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../../../redux/reducers/authReducer';

import Logo from '../../../assets/logo/Logo';
import Credeology from '../../../assets/logo/Credeology';

const AuthForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const login = () => {
        axios.post('/auth/login', {username, password}).then(res => {
            setMessage("Login Success!");
            this.props.loginUser(res.data);
            this.props.history.push('/app')
        }).catch(err => {
            setMessage(`${err} - Login Failed!`);
        })
    }

    

  return (
    <div className="AuthForm form pd-2">
            <div className="message-display">
                <p>{props.message}</p>
            </div>
            <div className="container__col-12 mg-tb-2">
                <Logo SVGClass="size-6" fill="fill-primary"/>  
                <Credeology margin="mg-t-1" size="size-3" fill="fill-dark"/>
            </div>
            {/* Could be a HOC below this point */}
            <span className="container__row-center">
                <input className="container__col-12 input" 
                name="username" 
                value={username} 
                onChange={event => setUsername(event.target.value)} 
                type="text" 
                placeholder="Email Address" />
            </span>
            <span className="container__row-center">
                <input className="container__col-12 input" type="text" placeholder="Password"/>
            </span>
            <span className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="/passwordReset" className="link">Forget your password?</Link>
                </div>
            </span>
            <span className="container__row-center mg-tb-2">
                <hr className="container__col-5"/>
                <p className="container__col-1">OR</p>
                <hr className="container__col-5"/>
            </span>
           
            <span className="container__row-center mg-tb-1">
                <Link className="container__col-12 link">
                    <button className="lrg-btn" onClick={login}>LOGIN</button>
                </Link>
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

export default connect(mapStateToProps, {loginUser})(AuthForm);