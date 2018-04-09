export default function selectedTicket(state = {}, action) {
  switch (action.type){
    case 'UPDATE_SELECTEDTICKET': {
      return action.payload;
    } 
    default:
      return state;         
  }
}
