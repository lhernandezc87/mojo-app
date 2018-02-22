export default function tickets(state = [], action) {
  switch (action.type){
    case 'LOADING_TICKET': {
      return action.payload;
    }  
    default:
      return state;         
  }
}
