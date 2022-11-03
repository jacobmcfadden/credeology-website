import React from 'react';
import UserAuthenticationImage from '../../../../assets/LandingMedia/UserAuthenticationImage';
import EstimateLogo from '../../../../assets/CredeologyIcons/Estimate.png'
import AdminLogo from '../../../../assets/CredeologyIcons/Admin.png'
import VendorLogo from '../../../../assets/CredeologyIcons/Vendors.png'

const UserAuthSection = (props) => {
  return (
    <div className="Features">
      <div className="section">
        <div className="container">
          <div className="container__row">
            <div className="container__col-12">
              <div className="mainFeature">
                <div className="mainFeatureImage m-b-2">
                    <UserAuthenticationImage/>
                </div>
                <div className="halfFeatureInfo">
                    <div className="mainFeatureHeadline">
                        <h1 className="featureTitle-center">Authentication</h1>
                    </div>
                    <div className="mainFeatureParagraph">
                        <p className="featureText">
                            Authentication is high on the list for any application with a user base. 
                            The entire authentication system for Credeology was designed and built custom using only Twilio, Nodemailer and the 
                            technologies listed in the footer. Providing user verification, two-factor authentication, and password recovery features.
                        </p>
                    </div>
                </div>
                <div className="halfFeatureInfo">
                    <div className="mainFeatureHeadline">
                        <h1 className="featureTitle-center">Notifications</h1>
                    </div>
                    <div className="mainFeatureParagraph">
                        <p className="featureText">
                            User interaction and input response can leave you in the dark while interacting with any application if implemented incorrectly.
                            Credeology provides users with a centralized notification system that gives feedback to actions they take
                            while using the app. In turn giving a better overall user experience.
                        </p>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuthSection;