import React from 'react';
import {Link} from 'react-router-dom';

const FormLink = (props) => {
    const {name, where, displayText, styling} = props;

    return (
        <div className={`FormLink`}>
            <Link
            to={where}
            name={name} 
            className={`container__row`} >
               <p className={`m-h-auto ${styling}`}>{displayText}</p>
            </Link>
        </div>
    );
};
  
export default FormLink;