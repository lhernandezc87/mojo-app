export default function selectedColumn(state = '', action) {
  switch (action.type){
    case 'UPDATE_SELECTEDCOLUMN': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
