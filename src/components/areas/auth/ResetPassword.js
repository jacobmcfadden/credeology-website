import React from 'react';
import ResetPasswordForm from '../../widgets/forms/ResetPasswordForm';
const ResetPassword = (props) => {
  return (
    <div className="ResetPassword">
      <div className="section-dark">
        <div className="container">
          <div className="container__row-center">
            <div className="
            container__col-10
            container__col-sm-8 
            container__col-md-6 
            container__col-lg-6 
            container__col-xl-6">
              <ResetPasswordForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;