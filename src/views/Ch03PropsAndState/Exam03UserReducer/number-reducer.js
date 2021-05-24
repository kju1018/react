//상태를 변경하는 함수
function reducer(state, action) {
  if(action.type === "INCREMENT"){
    return {
      // ...state,
      number: state.number + 1
    }
  } else if(action.type === "DECREMENT"){
    return {
      // ...state,
      number: state.number - 1
    }
  } else {
    return null;  
  }
  
};

export default reducer;