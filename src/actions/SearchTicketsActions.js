import _ from 'lodash';

export function loadSearchTickets(page=1, column='id', dirrection='asc', words='', initDate='', endDate='') {

  return dispatch => {
    dispatch({type: "LOADING_TICKETS", payload: true})
    return fetch(getUrlJsonPaginated(page, column, dirrection), 
      {
        method: "GET",
        cache: 'no-cache'
      })
      .then((resp) => resp.json())
      .then((resp) => _.map(resp, ({ticket}) => ticket))
      .then((data) => {
        dispatch({type: "LOAD_SEARCHTICKETS", payload: data})
        dispatch({type: "LOADING_TICKETS", payload: false})        
      })
    .catch(function(error) {
      dispatch({ type: "LOAD_SEARCHTICKETS", payload: [], error: true})
      dispatch({type: "LOADING_TICKETS", payload: false})      
    });
  }
}

function getUrlJsonPaginated(page, column, dirrection){
  return (tickets_url_json + '\&per_page=' + tickets_per_page + '\&page=' + page);
}

const tickets_url_json = 'http://mysupport.mojohelpdesk.com/api/tickets.json?access_key=34a0fb4cdeb5e350fa595108d57ff877c7cf2f3e';

const tickets_per_page = '10';
