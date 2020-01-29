import {combineReducers} from 'redux';
const INITIAL_STATE={
    total:null
}
export default combineReducers({
    sumReducer:function(state=INITIAL_STATE,action){
        return {...state,total:action.payload};
    }
});
