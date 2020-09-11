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

    const dynamicStatus = (event) => {
        if(event.target.value === '') {
            setInputInitiated(false);
            props.handleClick(event);
        } else {
            setInputInitiated(true);
            props.handleClick(event);
        }
    }

    return (
        <div className="FormInput container__row">
            <input 
                className={`
                    container__col-12
                    ${styling} 
                    ${hide ? "hidden" : ""} 
                    ${inputInitiated && inputInvalid ? 'invalid' : ''}
                    ${inputInitiated && !inputInvalid ? 'valid' : ''}
                `} 
                id={inputId}
                name={name} 
                value={value} 
                type={type}
                placeholder={placeholder} 
                required={required}
                onChange={event => dynamicStatus(event)} 
            />
            <label htmlFor={name} className="label">{label}</label>
            <Message
            message={inputInitiated && inputInvalid ? validationMessage : ''}
            messageColor={'caption-error'}
            useIcon={false}
            inline={true}
            />
        </div>
    );
};
  
export default FormInput;