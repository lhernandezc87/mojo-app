import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import HeaderColumn from './HeaderColumn';
import TicketRow from './TicketRow';

export default class TicketsTable extends React.Component {


  handleOnSort = (column, dirrection) => {
  	console.log(column, dirrection);
  }

  render(){
    const headers = tableHeaders.map((header) => (
      <HeaderColumn 
        key={header}
        column={header}
        onSortClick={this.handleOnSort}
      />
    ));


    const rows = ticketsdata.map((ticket) => (
      <TicketRow
        key={ticket.id}
        data={ticket}
      />
    ));
  	return(
  		<Table dark hover>
        <thead>
          <tr>
            {headers}
          </tr>
          </thead>
        <tbody>  			
          {rows}
        </tbody> 
  		</Table>
  	)
  }

}

TicketsTable.propTypes = {
  pageNumber: PropTypes.number,
  tickets: PropTypes.array.isRequired
}

const tableHeaders = ['id', 'title', 'updated_on', 'assigned_on', 'assigned_to_id', 'cc', 'company_id',
      'created_from', 'created_on', 'description', 'due_on', 'first_assigned_on', 'is_attention_required',
      'legacy_id', 'priority_id', 'rated_on', 'rating', 'scheduled_on', 'solved_on', 'status_changed_on',
      'status_id', 'ticket_form_id', 'ticket_queue_id', 'ticket_type_id', 'user_attention_id', 'user_id', 
      'custom_field_category_sr', 'custom_field_impact_sr', 'custom_field_request', 'custom_field_urgency_sr',
      'custom_field_workplace_sr'];

const ticketsdata = [
    {
            "assigned_on": "2018-02-22T15:52:46Z",
            "assigned_to_id": 944367,
            "cc": "",
            "company_id": 53593,
            "created_from": 0,
            "created_on": "2018-02-22T15:52:46Z",
            "description": "Assign MacBook PRO's to Ana María Chévez Mora and Maria Fernanda Coto Morales\n\n+ take old equipment to storage.",
            "due_on": null,
            "first_assigned_on": "2018-02-22T15:52:46Z",
            "id": 18478834,
            "is_attention_required": true,
            "legacy_id": null,
            "priority_id": 30,
            "rated_on": null,
            "rating": null,
            "scheduled_on": null,
            "solved_on": null,
            "status_changed_on": "2018-02-22T15:52:46Z",
            "status_id": 10,
            "ticket_form_id": 28770,
            "ticket_queue_id": 32907,
            "ticket_type_id": 97260,
            "title": "Assign MacBook PRO's to Ana María Chévez Mora and Maria Fernanda Coto Morales",
            "updated_on": "2018-02-22T15:52:46Z",
            "user_attention_id": null,
            "user_id": 1874806,
            "custom_field_category_sr": "Hardware",
            "custom_field_impact_sr": "Individual",
            "custom_field_request": "Service Request",
            "custom_field_urgency_sr": "Medium",
            "custom_field_workplace_sr": "Site 1"
        
    },
    {
            "assigned_on": "2018-02-22T15:39:53Z",
            "assigned_to_id": 1874806,
            "cc": "",
            "company_id": 53591,
            "created_from": 0,
            "created_on": "2018-02-21T20:11:48Z",
            "description": "I need a replacement for my headset(maintenance).",
            "due_on": null,
            "first_assigned_on": "2018-02-22T15:39:53Z",
            "id": 18469392,
            "is_attention_required": false,
            "legacy_id": null,
            "priority_id": 40,
            "rated_on": null,
            "rating": null,
            "scheduled_on": null,
            "solved_on": "2018-02-22T15:40:04Z",
            "status_changed_on": "2018-02-22T15:40:04Z",
            "status_id": 60,
            "ticket_form_id": 28770,
            "ticket_queue_id": 32907,
            "ticket_type_id": 97260,
            "title": "Headset replacement",
            "updated_on": "2018-02-22T15:40:04Z",
            "user_attention_id": 1,
            "user_id": 1043541,
            "custom_field_category_sr": "Headset",
            "custom_field_impact_sr": "Individual",
            "custom_field_request": "Service Request",
            "custom_field_urgency_sr": "Low",
            "custom_field_workplace_sr": "San Carlos"
        
    }]
      