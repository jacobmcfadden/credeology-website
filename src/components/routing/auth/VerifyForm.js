import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setPhoneSkip, verifyPhone, sendPhoneCode} from '../../../redux/reducers/authReducer';
import { useState } from 'react';

const VerifyForm = (props) => {
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [showEmailInput, setShowEmailInput] = useState(false);
    console.log(props.isPhoneVerified, props.isEmailVerified)
  
    const requestCode = (e) => {
        props.sendPhoneCode(props.userId, props.phone, props.authMessage);
    }
  
  
    return (
    <div className="VerifyForm">
        
        <span className="container__row-center">
            <p className="container__col-12 mg-b-1">Codes expire 5 minutes after they are sent so make sure you are ready!</p>
        </span>

        <hr className="mg-tb-1"/>

        <div className="mg-tb-2">
        <span className="container__row">
            <p className="container__col-12 uppercase-title">EMAIL VERIFICATION</p>
        </span>
        <span className="container__row-center mg-tb-1">
            <div className="container__col-12 link">
                <input name="email" type="text" className={`input ${showEmailInput ? 'show' : 'hidden'}`}/>
                <button name="email" className="lrg-btn" onClick={event => requestCode(event)}>Email code now!</button>
            </div>
        </span>
        </div>

        <div className="mg-tb-2">
            <span className="container__row">
                <p className="container__col-12 uppercase-title">PHONE VERIFICATION (OPTIONAL)</p>
            </span>
            <span className="container__row-center mg-t-1">
                <div className="container__col-12 link">
                    <input name="phone" type="text" className={`input ${showPhoneInput ? 'show' : 'hidden'}`}/>
                    <button name="phone" className="lrg-btn" onClick={event => requestCode(event)}>Text code now!</button>
                </div>
            </span>
                <span className="container__row-center mg-tb-1">
                <div className="container__col-12">
                    <Link to="#" className="link" onClick={props.setPhoneSkip}>Skip phone verification for now.</Link>
                </div>
            </span>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isEmailVerified: state.auth.user.isEmailVerified,
    isPhoneVerified: state.auth.user.isPhoneVerified,
    isPhoneVerifySkip: state.auth.isPhoneVerifySkip,
    userId: state.auth.user.id,
    phone: state.auth.user.phone,
    message: state.auth.authMessage
  });

export default connect(mapStateToProps, {setPhoneSkip, verifyPhone, sendPhoneCode})(VerifyForm);