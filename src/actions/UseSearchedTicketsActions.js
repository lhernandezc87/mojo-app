export function updateUseSearchedTickets(use=false) {
  return {
    type: 'UPDATE_USESEARCHEDTICKETS',
    payload: use
  }
}
