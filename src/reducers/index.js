import { combineReducers  } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    libraraies:()=>[ { id:1,name:'john'}],
    Auth:AuthReducer
});