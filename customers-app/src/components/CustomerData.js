import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <div>
           <div className="customer-data">
               <h2> Client Data</h2>
                <div><strong>Name</strong><i>{name}</i></div>
                <div><strong>DNI<i>{dni}</i></strong></div>
                <div><strong>Age<i>{age}</i></strong></div>               
               </div> 
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export default CustomerData;