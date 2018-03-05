// initial state 
const intitalState = 0;

//reduce -> how state changes
const countReducer = (state=intitalState, action) => {
   switch(action.type){
     case "INCREMENT":
     return state + 1;
    case "DECREMENT":
     return state - 1;
    default: 
      return state; 
   }
};
 
export default countReducer;