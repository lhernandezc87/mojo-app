export default function tickets(state = false, action) {
  switch (action.type){
    case 'LOADING_TICKET': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
