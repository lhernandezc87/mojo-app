import React from 'react';
import PropTypes from 'prop-types';

export default class TicketRow extends React.Component {

  render(){
  	var data = this.props.data;
    return(
      <div className="RowTable">
		<div className="rowColumnData">
		 {data.id}
		</div>
		<div className="rowColumnData">
		 {data.title}
		</div>
		<div className="rowColumnData">
		 {data.updated_on}
		</div>
		<div className="rowColumnData">
		 {data.assigned_on}
		</div>
		<div className="rowColumnData">
		 {data.assigned_to_id}
		</div>
		<div className="rowColumnData">
		 {data.cc}
		</div>
		<div className="rowColumnData">
		 {data.company_id}
		</div>
		<div className="rowColumnData">
		 {data.created_from}
		</div>
		<div className="rowColumnData">
		 {data.created_on}
		</div>
		<div className="rowColumnData">
		 {data.description}
		</div>
		<div className="rowColumnData">
		 {data.due_on}
		</div>
		<div className="rowColumnData">
		 {data.first_assigned_on}
		</div>
		<div className="rowColumnData">
		 {data.is_attention_required}
		</div>
		<div className="rowColumnData">
		 {data.legacy_id}
		</div>
		<div className="rowColumnData">
		 {data.priority_id}
		</div>
		<div className="rowColumnData">
		 {data.rated_on}
		</div>
		<div className="rowColumnData">
		 {data.rating}
		</div>
		<div className="rowColumnData">
		 {data.scheduled_on}
		</div>
		<div className="rowColumnData">
		 {data.solved_on}
		</div>
		<div className="rowColumnData">
		 {data.status_changed_on}
		</div>
		<div className="rowColumnData">
		 {data.status_id}
		</div>
		<div className="rowColumnData">
		 {data.ticket_form_id}
		</div>
		<div className="rowColumnData">
		 {data.ticket_queue_id}
		</div>
		<div className="rowColumnData">
		 {data.ticket_type_id}
		</div>
		<div className="rowColumnData">
		 {data.user_attention_id}
		</div>
		<div className="rowColumnData">
		 {data.user_id}
		</div>
		<div className="rowColumnData">
		 {data.custom_field_category_sr}
		</div>
		<div className="rowColumnData">
		 {data.custom_field_impact_sr}
		</div>
		<div className="rowColumnData">
		 {data.custom_field_request}
		</div>
		<div className="rowColumnData">
		 {data.custom_field_urgency_sr}
		</div>
		<div className="rowColumnData">
		 {data.custom_field_workplace_sr}
		</div>
      </div>
    )
  }

}

TicketRow.propTypes = {
  data: PropTypes.object.isRequired
}
