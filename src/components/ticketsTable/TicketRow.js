import React from 'react';
import PropTypes from 'prop-types';

export default class TicketRow extends React.Component {

  render(){
  	var data = this.props.data;
    return(
      <tr className="RowTable">
		<td className="rowColumnData">
		 {data.id}
		</td>
		<td className="rowColumnData">
		 {data.title}
		</td>
		<td className="rowColumnData">
		 {data.updated_on}
		</td>
		<td className="rowColumnData">
		 {data.assigned_on}
		</td>
		<td className="rowColumnData">
		 {data.assigned_to_id}
		</td>
		<td className="rowColumnData">
		 {data.cc}
		</td>
		<td className="rowColumnData">
		 {data.company_id}
		</td>
		<td className="rowColumnData">
		 {data.created_from}
		</td>
		<td className="rowColumnData">
		 {data.created_on}
		</td>
		<td className="rowColumnData">
		 {data.description}
		</td>
		<td className="rowColumnData">
		 {data.due_on}
		</td>
		<td className="rowColumnData">
		 {data.first_assigned_on}
		</td>
		<td className="rowColumnData">
		 {data.is_attention_required}
		</td>
		<td className="rowColumnData">
		 {data.legacy_id}
		</td>
		<td className="rowColumnData">
		 {data.priority_id}
		</td>
		<td className="rowColumnData">
		 {data.rated_on}
		</td>
		<td className="rowColumnData">
		 {data.rating}
		</td>
		<td className="rowColumnData">
		 {data.scheduled_on}
		</td>
		<td className="rowColumnData">
		 {data.solved_on}
		</td>
		<td className="rowColumnData">
		 {data.status_changed_on}
		</td>
		<td className="rowColumnData">
		 {data.status_id}
		</td>
		<td className="rowColumnData">
		 {data.ticket_form_id}
		</td>
		<td className="rowColumnData">
		 {data.ticket_queue_id}
		</td>
		<td className="rowColumnData">
		 {data.ticket_type_id}
		</td>
		<td className="rowColumnData">
		 {data.user_attention_id}
		</td>
		<td className="rowColumnData">
		 {data.user_id}
		</td>
		<td className="rowColumnData">
		 {data.custom_field_category_sr}
		</td>
		<td className="rowColumnData">
		 {data.custom_field_impact_sr}
		</td>
		<td className="rowColumnData">
		 {data.custom_field_request}
		</td>
		<td className="rowColumnData">
		 {data.custom_field_urgency_sr}
		</td>
		<td className="rowColumnData">
		 {data.custom_field_workplace_sr}
		</td>
      </tr>
    )
  }

}

TicketRow.propTypes = {
  data: PropTypes.object.isRequired
}
