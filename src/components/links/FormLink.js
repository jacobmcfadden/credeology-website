import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setPhoneSkip} from '../../redux/reducers/authReducer';
const FormLink = (props) => {
    const {hide, disable, value} = props;

    if(props.hide === false) {
        return (
            <div className="FormLink">
                <span className="container__row-center m-v-1">
                        <div className="container__col-12">
                            <Link to="#" className="link" onClick={props.setPhoneSkip}>Skip phone verification for now.</Link>
                        </div>
                </span>
            </div>
        );
    } else {
        // dont return anything
        return (
            <div className="FormLink"></div>
        );
    }
};
const mapStateToProps = (state) => ({
    isPhoneVerifySkip: state.auth.isPhoneVerifySkip
  });
  
export default connect(mapStateToProps, {setPhoneSkip})(FormLink);