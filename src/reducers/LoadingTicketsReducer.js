export default function tickets(state = false, action) {
  switch (action.type){
    case 'LOADING_TICKETS': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
