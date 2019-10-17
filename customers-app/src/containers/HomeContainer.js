import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/customerActions';
const HomeContainer = props => {
    return (
        <div>
            <AppFrame 
            header ='Home'
            body ={
                <div>
                    This is the main screen
                    <CustomerActions>
                        <Link to ="\customers">Clients list</Link>
                    </CustomerActions>
                </div>
            }>

            </AppFrame>
        </div>
    );
};

HomeContainer.propTypes = {
    
};

export default HomeContainer;