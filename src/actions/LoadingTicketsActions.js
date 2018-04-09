export function updateLoadingTickets(state=false){
  return {
    type: 'LOADING_TICKETS',
    payload: state
  }
}
