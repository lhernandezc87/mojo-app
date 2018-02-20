export default function pageNumber(state = [], action) {
  switch (action.type){
    case 'UPDATE_PAGENUMBER': {
      return action.payload;
    } 
    default:
      return state;         
  }
}
