import {FETC_CUSTOMERS} from './../constants';
import {createAction} from 'redux-actions';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';

const url ='http://localhost:3001/customers';



export const fetchCustomers = createAction(FETC_CUSTOMERS, apiGet(urlCustomers));