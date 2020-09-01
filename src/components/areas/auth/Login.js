import React from 'react';
import AuthForm from '../../widgets/forms/AuthForm';

const Login = (props) => {
  return (
    <div className="Login">
      <div className="section-dark">
        <div className="container">
          <div className="container__row-center">
            <div className="
            container__col-10
            container__col-sm-8 
            container__col-md-6 
            container__col-lg-6 
            container__col-xl-6">
              <AuthForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;