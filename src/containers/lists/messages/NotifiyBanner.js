import React from 'react'
import {connect} from 'react-redux';

import Notification from '../../../components/messages/Notification';

import {removeNotification} from '../../../redux/reducers/notificationReducer';

const NotifyBanner = (props) => {
    const {notificationItems, removeNotification} = props;

    const handleClose = (event) => {
      removeNotification(event.target.key);
    }
    return (
      <div className="NotifyBanner container--fluid container__col-4 container__col-offset-8">          
        {notificationItems.map(item => {
          const {id} = item;
          return (
            <Notification key={id} messageType={item.messageType} message={item.message} handleClick={handleClose} />
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

export default connect(mapStateToProps, {removeNotification})(NotifyBanner);