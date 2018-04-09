export default function useSearchedTickets(state = false, action) {
  switch (action.type){
    case 'UPDATE_USESEARCHEDTICKETS': {
      return action.payload;
    } 
    default:
      return state;         
  }
}
