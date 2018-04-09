export default function tickets(state = [], action) {
  switch (action.type){
    case 'LOAD_TICKETS': {
      if (!action.error) {
        return action.payload;
      }
      return state;
    } 
    default:
      return state;         
  }
}
