import React from 'react';

import NotificationIcon from '../../assets/icons/communication/NotificationIcon';

const ConsoleButton = (props) => {
    return (
        <div className={props.isOpen === true ? "ConsoleButton-active" : "ConsoleButton"}>
            <NotificationIcon width="2.5rem" height="2.5rem" className="SettingIcon" onClick={e => props.handleClick(e)}/>
        </div>
    );
};
  
export default ConsoleButton;