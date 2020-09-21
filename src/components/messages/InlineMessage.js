import React from 'react';

const InlineMessage = (props) => {
    const {message, messageColor, margin} = props;
    
    return (
        <div className={`Message container__col-12 ${margin}`}>
            <p className={message ? messageColor : 'container__row caption-light'}>{message}</p>
        </div>
    );
};

export default InlineMessage;