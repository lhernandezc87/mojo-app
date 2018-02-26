export default function sortDirection(state = 'Desc', action) {
  switch (action.type){
    case 'UPDATE_SORTDIRECTION': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
