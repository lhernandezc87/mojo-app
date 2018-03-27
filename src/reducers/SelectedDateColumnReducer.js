export default function selectedDateColumn(state = '', action) {
  switch (action.type){
    case 'UPDATE_SELECTEDDATECOLUMN': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
