import React from 'react';
import UserExperienceImage from '../../../../assets/LandingMedia/UserExerienceImage';
import ConnectLogo from '../../../../assets/CredeologyIcons/Connect.png'
import ProjectLogo from '../../../../assets/CredeologyIcons/Projects.png'
import ClientsLogo from '../../../../assets/CredeologyIcons/Clients.png'

const UserExpSection = (props) => {
  return (
    <div className="Products">
      <div className="section-black">
        <div className="container">
          <div className="container__row">
            <div className="container__col-12">
              <div className="mainFeature m-h-1">
                <div className="mainFeatureImage-2 m-b-2">
                    <UserExperienceImage/>
                </div>
                <div className="mainFeatureInfo">
                    <div className="mainFeatureHeadline">
                        <h1 className="featureTitle">User Experience</h1>
                    </div>
                    <div className="mainFeatureParagraph">
                        <p className="featureText">
                            Layouts that require minimal training while maintaining a robust feature set is a must in modern application developemnt. 
                            But user experience is more than just a layout decision. Many applications in the business world today have to be
                            secure, each in a different way. Not only that they need to feel secure for the user experience. With many different
                            ways to go about that, the approach with credeology is to focus on responding to user interaction with the site. 
                        </p>
                    </div>
                </div>
              </div>
              <div className="cardList">
                <div className="cardContainer">
                <img src={ConnectLogo} alt="credeologyIcon" className="cardIcon-2"/>
                    <h3 className="cardTitle">Responsive layouts</h3>
                    <p className="cardParagraph">
                        A modern web application has to perform well on small phone screens all the way up to ultra-wide desktop monitors and everything in between.
                        Without loosing functionality, or the companies identity. This website was designed with Sass/Css using a mobile first approach. Allowing all 
                        MVP items to be designed for the smallest of screen then moving up from there so that the required functionality is not lost along the way. 
                    </p>
                </div>
                <div className="cardContainer">
                <img src={ProjectLogo} alt="credeologyIcon" className="cardIcon-2"/>
                    <h3 className="cardTitle">Color Templating</h3>
                    <p className="cardParagraph">
                        As human beings we interprete things we see on a subconscious level we also make relationship and connections with out a second thought.
                        Components in a layout are no exception to this. As a developer/designer we should be aware of these things and use them to our advantage.
                        Credeology uses a specific color for buttons and notifications for that reason. Helping users pickup on how the application works in less time
                        . While creating less visually cluttered UI as a whole.
                        
                    </p>
                </div>
                <div className="cardContainer">
                <img src={ClientsLogo} alt="credeologyIcon" className="cardIcon-2"/>
                    <h3 className="cardTitle">User Action Response</h3>
                    <p className="cardParagraph">
                      STILL need
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserExpSection;