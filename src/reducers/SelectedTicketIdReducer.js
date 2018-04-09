export default function selectedTicketId(id = 0, action) {
  switch (action.type){
    case 'UPDATE_SELECTEDTICKETID': {
      return action.payload;
    } 
    default:
      return id;         
  }
}
