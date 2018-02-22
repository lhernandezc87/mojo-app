export default function tickets(state = [], action) {
  switch (action.type){
    case 'LOAD_TICKET': {
      if (!action.error) {
        return action.payload;
      }
      return state;
    } 
    default:
      return state;         
  }
}
