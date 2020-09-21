import React, { useState} from 'react';
import Message from '../messages/InlineMessage';

const FormInput = (props) => {
    const {
        styling, 
        hide, 
        inputInvalid, 
        inputId, 
        name,
        value, 
        type, 
        placeholder, 
        required, 
        label,
        validationMessage
    } = props;

    const [inputInitiated, setInputInitiated] = useState(false);

    return (
        <div className={`FormInput ${inputInitiated && inputInvalid ? 'invalid' : ''} ${inputInitiated && !inputInvalid ? 'valid' : ''} container__row m-t-25`}>
            <label htmlFor={name} className={`label ${inputInitiated && inputInvalid ? 'invalid' : ''} ${inputInitiated && !inputInvalid ? 'valid' : ''}`}>{label}</label>
            <input 
                className={`
                    container__col-12
                    ${styling} 
                    ${hide ? "hidden" : ""} 
                    ${inputInitiated && inputInvalid ? 'invalid' : ''} ${inputInitiated && !inputInvalid ? 'valid' : ''}
                    `} 
                id={inputId}
                name={name} 
                value={value} 
                type={type}
                placeholder={placeholder} 
                required={required}
                onChange={event => {
                    props.handleClick(event);
                    event.target.value === '' ? setInputInitiated(false) : setInputInitiated(true);
                }}
            />
            <Message
            message={validationMessage}
            messageColor={inputInitiated && inputInvalid ? 'caption-error' : 'caption-light'}
            useIcon={false}
            inline={true}
            />
        </div>
    );
};
  
export default FormInput;