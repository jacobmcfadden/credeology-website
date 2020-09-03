import React from 'react';
import {Link} from 'react-router-dom';

const ResetPasswordForm = (props) => {
  return (
    <div className="ResetPasswordForm">
        <span className="container__row-center">
            <p className="container__col-12 title">Password Reset</p>
        </span>
        <span className="container__row-center">
            <p className="container__col-12">Please enter your email address so we can send you a reset code.</p>
        </span>
        <span className="container__row-center">
            <input className="container__col-12 input" type="text" placeholder="Email Address" />
        </span>
        <span className="container__row-center mg-t-2">
            <div className="container__col-12 link">
                <button className="lrg-btn">Send Email</button>
            </div>
        </span>
            <span className="container__row-center mg-tb-1">
            <div className="container__col-12">
                <Link to="/auth/login" className="link">Opps, back to Login!</Link>
            </div>
        </span>
        <span className="container__row-center mg-tb-1">
            <div className="container__col-12">
                <Link to="/auth/signup" className="link">Signup for a new account</Link>
            </div>
        </span>
    </div>
  );
}

export default ResetPasswordForm;