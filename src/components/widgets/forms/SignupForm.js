import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import Logo from '../../../assets/logo/Logo';
import Credeology from '../../../assets/logo/Credeology';

const SignupForm = (props) => {

  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    axios.post('/auth/register', {firstName, lastName, phone, email, password}).then(res => {
        this.props.loginUser(res.data);
        console.log('user has been registered')
        this.props.history.push('/dashboard');
    }).catch(err => {
        console.log(err);
        alert('Registration Failed')
    })
}

  return (
    <div className="SignupForm form pd-2">
            <div className="message-display">
            <p>{props.message}</p>
            </div>
            <div className="container__col-12 mg-tb-2">
                <Logo SVGClass="size-6" fill="fill-primary"/>  
                <Credeology margin="mg-t-1" size="size-3" fill="fill-dark"/>
            </div>
            {/* Could be a HOC below this point */}
            <span className="container__row-center">
                <input className="container__col-10 input" type="text" placeholder="First Name" />
            </span>
            <span className="container__row-center">
                <input className="container__col-10 input" type="text" placeholder="Last Name"/>
            </span>
            <span className="container__row-center">
                <input className="container__col-10 input" type="text" placeholder="Phone Number"/>
            </span>
            <span className="container__row-center">
                <input className="container__col-10 input" type="text" placeholder="Email Address" />
            </span>
            <span className="container__row-center">
                <input className="container__col-10 input" type="text" placeholder="Password"/>
            </span>
            <span className="container__row-center">
                <input className="container__col-10 input" type="text" placeholder="Confirm Password"/>
            </span>
            <span className="container__row-center mg-tb-1">
                <div className="container__col-12 link">
                    <button className="lrg-btn" onClick={register}>Signup</button>
                </div>
            </span>
            <span className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="/login" className="link">Already have an account?</Link>
                </div>
            </span>
    </div>
  );
}

export default SignupForm;