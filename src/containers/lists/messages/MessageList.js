import React from 'react'
import {connect} from 'react-redux';

import Message from '../../../components/messages/Message';

const MessageList = (props) => {
    const {warning, error} = props;
    const concat = (...arrays) => [].concat(...arrays.filter(Array.isArray));
    
    const output = concat(error, warning)

    return (
        <div className="container__col-12">
          {output
            .map((otp, index) => <Message key={index} useIcon={true} messageColor={'caption'} message={otp} margin={'m-t-1'} />)}
        </div>
    )
};

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    warning: state.auth.warning
  });

export default connect(mapStateToProps)(MessageList);
