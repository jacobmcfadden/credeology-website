import React from 'react';
import SignupForm from '../../widgets/forms/SignupForm';
const Signup = (props) => {
  return (
    <div className="Signup">
      <div className="section-dark">
        <div className="container">
          <div className="container__row-center">
            <div className="
            container__col-10
            container__col-sm-8 
            container__col-md-6 
            container__col-lg-6 
            container__col-xl-6">
              <SignupForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;