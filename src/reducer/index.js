const initialState = { 
    counterSum: 0
  };
   export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "INCREASE":
        return { count: state.count + 1 };
       case "DECREASE":
        return { count: state.count - 1 };
       case "COUNTERSUM":
      console.log(payload)
        return { counterSum: state.counterSum + payload };
      default:
        return state;
    }
  };
