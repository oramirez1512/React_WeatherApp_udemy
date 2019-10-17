import React from 'react';
import PropTypes from 'prop-types';

const CustomerActions = ({ children }}) => {
    return (
        <div>
            <div className="customer-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

CustomerActions.propTypes = {
    children: PropTypes.number.isRequired,
};

export default CustomerActions;