import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({name, editAction, delAction,urlPath}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link  to ={`${urlPath}${dni}`} >{name}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${dni}/edit`} >{editAction}</Link>
                </div>
                <div className="field">
                    <Link to ={`${urlPath}${dni}/del`} >{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;