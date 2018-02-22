export function loadTickets(page=1) {

  return dispatch => {
    dispatch({type: "LOADING_TICKETS", payload: true})
    return fetch(getUrlJsonPaginated(page), {method: "GET"})
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({type: "LOAD_TICKETS", payload: data})
        dispatch({type: "LOADING_TICKETS", payload: false})        
      })
    .catch(function(error) {
      dispatch({ type: "LOAD_SHOES", payload: [], error: true})
      dispatch({type: "LOADING_TICKETS", payload: false})      
    });
  }
}

function getUrlJsonPaginated(page){
  return (tickets_url_json + '\&per_page=' + tickets_per_page + '\&page=' + page);
}

const tickets_url_json = 'http://mysupport.mojohelpdesk.com/api/tickets.json?access_key=34a0fb4cdeb5e350fa595108d57ff877c7cf2f3e';

const tickets_per_page = '12';
