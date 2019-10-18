import {handleActions} from 'redux-actions';
import { FETC_CUSTOMERS } from '../constants';

export const customers = handleActions({[FETC_CUSTOMERS]: (state, action) => [...action.payload],

}, []);

