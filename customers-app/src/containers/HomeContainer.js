import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';
class  HomeContainer extends Component{
    handleOnclick = () => {
        console.log("Handle on Click");
        this.props.history.push('/customers');
    }
    render(){
    return (
        <div>
            <AppFrame 
            header ='Home'
            body ={
                <div>
                    This is the main screen
                    <CustomerActions>
                        <button onClick ={this.handleOnclick}>Clients list</button>                        
                    </CustomerActions>
                </div>
            }>

            </AppFrame>
        </div>
    );
};
}


export default withRouter(HomeContainer);
