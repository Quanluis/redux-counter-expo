import * as types from './types';
console.log(types)

// initial state 
const intitalState = {
    count: 0
};

//reduce -> how state changes
const countReducer = (state=intitalState, action) => {
    console.log(action);
   switch(action.type){
     case types.INCREMENT:
     return {...state,
    count: state.count + 1 }
    case types.DECREMENT:
     return {
         ...state,
         count: state.count -1 
     };
     case types.DECREMENT_BY:
     return{
         ...state,
         count: state.count - action.payload.value
     };
     case types.INCREMENT_BY:
      return {
          ...state,
          count: state.count + action.payload.value
      };
    default: 
      return state; 
   }
};
 
export default countReducer;