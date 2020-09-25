import React from 'react';

import NotificationIcon from '../../assets/icons/communication/NotificationIcon';
import InfoIcon from '../../assets/icons/communication/InfoIcon';
import SuccessIcon from '../../assets/icons/status/SuccessIcon';
import WarningIcon from '../../assets/icons/status/WarningIcon';
import ErrorIcon from '../../assets/icons/status/ErrorIcon';
import CloseIcon from '../../assets/icons/system/CloseIcon';

const ConsoleNotification = (props) => {
    const {message, messageType} = props;
    
    const icon = () => {
        switch(messageType){
            case 'EventMessage':
                return <NotificationIcon className="noti-icon"/>;
            case 'SuccessMessage':
                return <SuccessIcon className="noti-icon"/>;
            case 'WarningMessage':
                return <WarningIcon className="noti-icon"/>;
            case 'ErrorMessage':
                return <ErrorIcon className="noti-icon"/>;
            case 'SystemMessage':
                return <InfoIcon className={'noti-icon'}/>;
            default:
                return <InfoIcon className={'noti-icon'}/>;
        }
    }

    return (
        <div className="ConsoleNotification">
            <div className={`${messageType ? messageType : 'SystemMessage'}`}>
                <div className="noti-container">
                    {icon()}
                    <p className="noti-message capt-show">{message}</p>
                </div>
                <CloseIcon className="hidden-trans"/>
            </div>
        </div>
    );
};

export default ConsoleNotification;