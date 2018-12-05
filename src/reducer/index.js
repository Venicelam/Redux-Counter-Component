const initialState = { 
    counterSum: 0,
    counters: []

  };
   export default (state = initialState, { type, payload }) => {
    switch (type) {
    //   case "INCREASE":
    //     return { count: state.count + 1 };
    //    case "DECREASE":
    //     return { count: state.count - 1 };
       case "INCREASE_ONE_COUNT":
       const increaseCounters = state.counters.map
          (counterItem => {
            if (counterItem.id ===payload.id){
              return {number: counterItem.number +
              payload.changedNum, id: payload.id};
            } else {
              return counterItem;  
            }
        });
        return {...state, counters: increaseCounters};

        case "DECREASE_ONE_COUNT":
        const decreaseCounters = state.counters.map
            (counterItem => {
              if (counterItem.id ===payload.id){
               return {number: counterItem.number -
             payload.changedNum, id: payload.id};
            } else {
            return counterItem;
            }
         });
        return {...state, counters: decreaseCounters};

       case "COUNTERSUM":
      console.log(payload)
        return { ...state, counterSum: state.counterSum + payload };
       case "GENERATE_COUNTERS":
         return {
             counterSum: 0,
             counters: new Array(parseInt(payload)).fill(0).map(
                () =>{
                    return {number: 0, id: new Date().getTime + Math.random()}
                }
            )
        };

    
          
      default:
        return state;
    }
  };

