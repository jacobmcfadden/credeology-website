import React from 'react';

import NotificationIcon from '../../assets/icons/communication/NotificationIcon';
import InfoIcon from '../../assets/icons/communication/InfoIcon';
import SuccessIcon from '../../assets/icons/status/SuccessIcon';
import WarningIcon from '../../assets/icons/status/WarningIcon';
import ErrorIcon from '../../assets/icons/status/ErrorIcon';

import CloseIcon from '../../assets/icons/system/CloseIcon';

const Notification = (props) => {
    const {message, messageType, handleClick} = props;
    
    const icon = () => {
        switch(messageType){
            case 'Notification':
                return <NotificationIcon className="noti-icon"/>;
            case 'SuccessMsg':
                return <SuccessIcon className="noti-icon"/>;
            case 'WarningMsg':
                return <WarningIcon className="noti-icon"/>;
            case 'ErrorMsg':
                return <ErrorIcon className="noti-icon"/>;
            case 'InfoMsg':
                return <InfoIcon className={'noti-icon'}/>;
            default:
                return <InfoIcon className={'noti-icon'}/>;
        }
    }

    return (
        <div className={`${messageType ? messageType : 'InfoMsg'}`}>
            <div className="noti-container">
                {icon()}
                <p className="noti-message capt-show">{message}</p>
            </div>
            <CloseIcon className="noti-close" onClick={e => handleClick(e)}/>
        </div>
    );
};

export default Notification;