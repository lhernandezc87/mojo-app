export default function selectedColumn(state = 'id', action) {
  switch (action.type){
    case 'UPDATE_SORTDIRECTION': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
