export default function pageNumber(state = 1, action) {
  switch (action.type){
    case 'UPDATE_PAGENUMBER': {
      return action.payload;
    } 
    default:
      return state;         
  }
}
