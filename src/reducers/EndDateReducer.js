export default function endDate(state = '', action) {
  switch (action.type){
    case 'UPDATE_ENDDATE': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
