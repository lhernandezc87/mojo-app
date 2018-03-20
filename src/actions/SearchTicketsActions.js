import _ from 'lodash';

export function loadSearchTickets(page=1, column='id', dirrection='asc', words='', initDate='', endDate='') {

  return dispatch => {
    dispatch({type: "LOADING_TICKETS", payload: true})
    return fetch(getUrlJsonPaginated(page, column, dirrection, words='', initDate='', endDate=''), 
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

function getUrlJsonPaginated(page, column, dirrection, words='', initDate='', endDate=''){  
  var query = 'query=status.id:\(\<50\)' + 
              getDatesRange(initDate, endDate, column) + 
              '\&sf=' + column + 
              '\&r=' + getSortDirrection(dirrection) +
              '\&page=' + page;
  return (tickets_url_json + query + access_key);
}

function getSortDirrection(dirrection){
  return dirrection === 'asc' ? '0' : '1';
}

function getDatesRange(initDate, endDate, column){
  var col = column === '' ? 'created_on' : column;
  var initialDate = initDate === '' ? '*' : initDate;
  var finalDate = endDate === '' ? '*' : endDate;
  var dates = '\&'+ col + ':[' + initialDate + ' TO ' + finalDate + ']';
  return dates;
}

const tickets_url_json = 'http://mysupport.mojohelpdesk.com/api/tickets/search.json?';

const access_key = '\&access_key=34a0fb4cdeb5e350fa595108d57ff877c7cf2f3e';
