import React from 'react';

const InlineMessage = (props) => {
    const {message, messageColor, margin} = props;
    
    return (
        <div className={`Message container__row-nowrap ${margin}`}>
            <p className={message ? messageColor : 'caption-light'}>{message}</p>
        </div>
    );
};

export default InlineMessage;