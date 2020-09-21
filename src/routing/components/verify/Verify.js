import React from 'react';

import CredeologyLogo from '../../../assets/logo/CredeologyLogo';
import VerifyForm from '../../../containers/forms/VerifyForm';

const Verify = (props) => {
  return (
    <div className="Verify">
      <div className="container">
        <div className="container__row justify-center">
            <div className="Authform container__row">
              <div className="container__row m-b-1 m-t-2">
                 <CredeologyLogo logoType="form"/>
                <div className="container__row">
                  <VerifyForm/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;