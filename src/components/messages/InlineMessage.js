import React from 'react';
import InfoIcon from '../../assets/icons/communication/InfoIcon';

const InlineMessage = (props) => {
    const {message, messageColor, useIcon, margin} = props;
    
    return (
        <div className={`Message container__row-nowrap ${margin}`}>
            <InfoIcon className={`container__col-1 ${message && useIcon ? messageColor + '' : 'caption-light m-r-2p'}`}/>
            <p className={message ? messageColor : 'caption-light'}>{message}</p>
        </div>
    );
};

export default InlineMessage;