import _ from 'lodash';

export function updateSelectedTicket(ticket){
  return dispatch => {
    dispatch({type: "LOADING_TICKETS", payload: true})
    return fetch(getUrlJsonPaginated(ticket), 
      {
        method: "GET",
        cache: 'no-cache'
      })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({type: "UPDATE_SELECTEDTICKET", payload: data['ticket']})
        dispatch({type: "LOADING_TICKETS", payload: false})        
      })
    .catch(function(error) {
      dispatch({ type: "UPDATE_SELECTEDTICKET", payload: [], error: true})
      dispatch({type: "LOADING_TICKETS", payload: false})      
    });
  }
}

function getUrlJsonPaginated(ticketId){
  return (ticket_url_json + ticketId + ticket_url_json_end);
}

const ticket_url_json = 'http://mysupport.mojohelpdesk.com/api/tickets/';
const ticket_url_json_end = '.json?access_key=34a0fb4cdeb5e350fa595108d57ff877c7cf2f3e';
