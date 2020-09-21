import React from 'react';

import CheckCircleIcon from '../../assets/icons/status/SuccessIcon';
import HourglassFullIcon from '../../assets/icons/status/HourglassIcon';

const FormButton = (props) => {
    const {name, disable, hide, goalMet, isLoading, displayText, styling, handleClick} = props;

    return (
        <button 
        name={name} 
        className={`FormButton container__row justify-content ${disable ? 'disable' : ''} ${styling} ${hide ? "hidden" : ""} ${goalMet ? 'disabled bg-success border-success' : ''} ${isLoading ? 'disabled bg-primary border-blue' : ''}`}
        onClick={(event) => handleClick(event.target.name)}>
            <HourglassFullIcon width="2rem" height="2rem" className={`rotate ${isLoading ? "fill-icon container__col-12" : "hidden"}`}/>
            <CheckCircleIcon width="2rem" height="2rem" className={goalMet ? "fill-icon container__col-12" : "hidden"}/>
            <p className={isLoading || goalMet ? "hidden" : "container__col-12 disabled"}>{displayText}</p>
        </button>
    );
};
  
export default FormButton;