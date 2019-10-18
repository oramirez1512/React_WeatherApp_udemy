import {FETC_CUSTOMERS} from './../constants';
import {createAction} from 'redux-actions';

const customers= [
    {
    "dni": "123456789",
    "name": "oramirez",
    "age": 24
},
{
    "dni": "123456189",
    "name": "Narcos",
    "age": 25
},{
    "dni": "125456189",
    "name": "aduran",
    "age": 24
}
];

export const fetchCustomers = createAction(FETC_CUSTOMERS, () => customers);