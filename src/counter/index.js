import * as types from './types';
console.log(types)

// initial state 
const intitalState = 0;

//reduce -> how state changes
const countReducer = (state=intitalState, action) => {
   switch(action.type){
     case types.INCREMENT:
     return state + 1;
    case types.DECREMENT:
     return state - 1;
    default: 
      return state; 
   }
};
 
export default countReducer;