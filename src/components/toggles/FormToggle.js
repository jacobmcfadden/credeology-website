import React from 'react';

const FormToggle = (props) => {
    const {isActive, name, handleClick} = props;
    
    return (
        <div className={`FormToggle ${isActive === true ? 'toggle-on' : 'toggle-off'}`}>
            <div name={name} className={`ToggleSlider ${isActive ? 'switch-active' : 'switch-inactive'}`} onClick={(e) => handleClick(e)}>
    <div className={`${isActive ? 'ToggleText-on' : 'ToggleText-off'}`}>{isActive ? 'ON' : 'OFF'}</div> 
            </div>
        </div>
    );
};

export default FormToggle;