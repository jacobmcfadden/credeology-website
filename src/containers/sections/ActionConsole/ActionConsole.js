import React, { useState } from 'react';
import {connect} from 'react-redux';
import ConsoleButton from '../../../components/buttons/ConsoleButton';
import NotifyBanner from '../../lists/messages/NotifiyBanner';
import ConsoleNotification from '../../../components/messages/ConsoleNotification';

import {removeNotification} from '../../../redux/reducers/notificationReducer';

const ActionConsole = (props) => {
    const {notificationItems} = props;
    const [showNotifications, setShowNotifications] = useState(false);
    
    const handleClick = () => {
        setShowNotifications(!showNotifications)
    }

    return (
        <div className={showNotifications ? "ActionConsole-active" : "ActionConsole"}>
            {showNotifications ? <NotifyBanner/> : ''}
            <ConsoleButton handleClick={handleClick} isOpen={showNotifications}/>
            {notificationItems.map((item, index) => {
          const {id} = item;
          return (
            <ConsoleNotification key={index} messageType={item.messageType} messageId={id} message={item.message}/>
          );
        })} 
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    notificationItems: state.noti.items,
    isOpen: state.noti.isOpen
  });

export default connect(mapStateToProps, {removeNotification})(ActionConsole);
