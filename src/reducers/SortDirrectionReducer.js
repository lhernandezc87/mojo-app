export default function sortDirrection(state = '', action) {
  switch (action.type){
    case 'UPDATE_SORTDIRECTION': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
