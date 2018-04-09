export default function initDate(state = '', action) {
  switch (action.type){
    case 'UPDATE_INITDATE': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
