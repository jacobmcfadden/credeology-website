import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../../redux/reducers/authReducer';

const SignupForm = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const register = () => {
    props.registerUser(firstName, lastName, phone, email, password);
}

  return (
    <div className="SignupForm">
        <span className="container__row-center">
            <input className="container__col-10 input" 
            name="firstName" 
            value={firstName} 
            onChange={event => setFirstName(event.target.value)} 
            type="text" 
            placeholder="First Name" />
        </span>
        <span className="container__row-center">
            <input className="container__col-10 input" 
            name="lastName" 
            value={lastName} 
            onChange={event => setLastName(event.target.value)} 
            type="text" 
            placeholder="Last Name"/>
        </span>
        <span className="container__row-center">
            <input className="container__col-10 input" 
            name="phone" 
            value={phone} 
            onChange={event => setPhone(event.target.value)} 
            type="text" 
            placeholder="Phone Number"/>
        </span>
        <span className="container__row-center">
            <input className="container__col-10 input" 
            name="email" 
            value={email} 
            onChange={event => setEmail(event.target.value)} 
            type="text" 
            placeholder="Email Address" />
        </span>
        <span className="container__row-center">
            <input className="container__col-10 input" 
            name="password" 
            value={password} 
            onChange={event => setPassword(event.target.value)} 
            type="text" 
            placeholder="Password"/>
        </span>
        <span className="container__row-center">
            <input className="container__col-10 input" 
            name="passwordConfirm" 
            value={passwordConfirm} 
            onChange={event => setPasswordConfirm(event.target.value)} 
            type="text" 
            placeholder="Confirm Password"/>
        </span>
        <span className="container__row-center mg-tb-1">
            <div className="container__col-12 link">
                <button className="lrg-btn" onClick={register}>Signup</button>
            </div>
        </span>
        <span className="container__row-center mg-tb-1">
            <div className="container__col-12">
                <Link to="/auth/login" className="link">Already have an account?</Link>
            </div>
        </span>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {registerUser})(SignupForm);