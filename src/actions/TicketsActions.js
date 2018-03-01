export function loadTickets(page=1, column='id', dirrection='asc') {

  return dispatch => {
    dispatch({type: "LOADING_TICKETS", payload: true})
    dataloca
    return fetch(getUrlJsonPaginated(page, column, dirrection), 
      {
        method: "GET",
        headers: {

                }
      })
      .then((resp) =>  {
        return resp.json();
        }
      )
      .then((data) => {
        dispatch({type: "LOAD_TICKETS", payload: data}),
        dispatch({type: "LOADING_TICKETS", payload: false})        
      })
    .catch(function(error) {
      dispatch({ type: "LOAD_TICKETS", payload: [], error: true}),
      dispatch({type: "LOADING_TICKETS", payload: false})      
    });
  }
}

function getUrlJsonPaginated(page, column, dirrection){
  return (tickets_url_json + '\&per_page=' + tickets_per_page + '\&page=' + page);
}

const tickets_url_json = "http://mysupport.mojohelpdesk.com/api/tickets.json?access_key=34a0fb4cdeb5e350fa595108d57ff877c7cf2f3e";

const tickets_per_page = "10";

const dataloca = [
{
ticket: {
assigned_on: null,
assigned_to_id: null,
cc: "",
company_id: 53591,
created_from: 0,
created_on: "2018-02-28T21:07:03Z",
description: "I can't remember my password to login to Journyx, can you please reset my user and password",
due_on: null,
first_assigned_on: null,
id: 18540597,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: null,
status_changed_on: "2018-02-28T21:07:03Z",
status_id: 10,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "Journyx Password",
updated_on: "2018-02-28T21:07:03Z",
user_attention_id: null,
user_id: 1773072,
custom_field_category_sr: "Software",
custom_field_impact_sr: "Areas/Teams/Departments",
custom_field_request: "Service Request",
custom_field_urgency_sr: "Medium",
custom_field_workplace_sr: "Remote"
}
},
{
ticket: {
assigned_on: "2018-02-28T20:30:55Z",
assigned_to_id: 944367,
cc: "",
company_id: 53591,
created_from: 0,
created_on: "2018-02-28T20:26:40Z",
description: "Remove video conference tool from Avellanas ",
due_on: null,
first_assigned_on: "2018-02-28T20:30:55Z",
id: 18540145,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: null,
status_changed_on: "2018-02-28T20:31:14Z",
status_id: 30,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "Remove video conference tool",
updated_on: "2018-02-28T20:31:14Z",
user_attention_id: 1,
user_id: 2252827,
custom_field_category_sr: "Hardware",
custom_field_impact_sr: "Areas/Teams/Departments",
custom_field_request: "Service Request",
custom_field_urgency_sr: "Low",
custom_field_workplace_sr: "Site 2"
}
},
{
ticket: {
assigned_on: "2018-02-28T19:56:14Z",
assigned_to_id: 575548,
cc: "",
company_id: 53591,
created_from: 0,
created_on: "2018-02-28T19:44:47Z",
description: "Part of the new program for hoteling I did interchange my desktop and monitors for an extra day WFH, so i went ahead and clean up my computer it's ready to be take back, basically we need to delete the user and it's ready. From now on i will use my personal computer to do every day work.",
due_on: null,
first_assigned_on: "2018-02-28T19:56:14Z",
id: 18539631,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: null,
status_changed_on: "2018-02-28T19:44:47Z",
status_id: 10,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "GAP Assets ",
updated_on: "2018-02-28T19:56:14Z",
user_attention_id: null,
user_id: 1879597,
custom_field_category_sr: "Hardware",
custom_field_impact_sr: "Individual",
custom_field_request: "Service Request",
custom_field_urgency_sr: "Low",
custom_field_workplace_sr: "Belen"
}
},
{
ticket: {
assigned_on: "2018-02-28T19:44:13Z",
assigned_to_id: 944367,
cc: "",
company_id: 53593,
created_from: 0,
created_on: "2018-02-28T19:41:14Z",
description: "My computer is not responding",
due_on: null,
first_assigned_on: "2018-02-28T19:44:13Z",
id: 18539573,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: "2018-02-28T19:55:59Z",
status_changed_on: "2018-02-28T19:55:59Z",
status_id: 50,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "My computer is not responding",
updated_on: "2018-02-28T19:55:59Z",
user_attention_id: 1,
user_id: 264309,
custom_field_category_sr: "Hardware",
custom_field_impact_sr: "Individual",
custom_field_request: "Service Request",
custom_field_urgency_sr: "Medium",
custom_field_workplace_sr: "Site 1"
}
},
{
ticket: {
assigned_on: "2018-02-28T19:44:06Z",
assigned_to_id: 1873585,
cc: "dvargas@growthaccelerationpartners.com",
company_id: 53591,
created_from: 0,
created_on: "2018-02-28T18:16:06Z",
description: "El último día de Emiliano sera el 13 de Abril de 2018. Él trabaja en Argentina, es un contractor. Lo relacionado a accesos por favor contactar al Delivery Manager: Silvia Oconitrillo Saludos, ",
due_on: null,
first_assigned_on: "2018-02-28T19:44:06Z",
id: 18538479,
is_attention_required: true,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: null,
status_changed_on: "2018-02-28T18:16:06Z",
status_id: 10,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "OffBoarding: Emiliano Belvedere . Salida el 13 de Abril ( Contractor from Argentina)",
updated_on: "2018-02-28T19:44:06Z",
user_attention_id: null,
user_id: 826467,
custom_field_category_sr: "Off-boarding",
custom_field_impact_sr: "Areas/Teams/Departments",
custom_field_request: "Service Request",
custom_field_urgency_sr: "Medium",
custom_field_workplace_sr: "Remote"
}
},
{
ticket: {
assigned_on: "2018-02-26T20:23:07Z",
assigned_to_id: 575548,
cc: "",
company_id: 53593,
created_from: 0,
created_on: "2018-02-26T20:23:07Z",
description: "Verify if all Hoteling Spots BELEN have monitors https://hoteling.wearegap.com/#/home/myBookedDesks?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMDEzODc1NTI4Mzk2MTE4NDIzMSIsImlhdCI6MTUxODYxNzYzNiwiZXhwIjoxNTE4NzA0MDM2fQ.1hyIWhWaQkE-qiYF5Ec946OVDxwJ_8ShjK4zBt3zMKE",
due_on: null,
first_assigned_on: "2018-02-26T20:23:07Z",
id: 18512619,
is_attention_required: false,
legacy_id: null,
priority_id: 30,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: null,
status_changed_on: "2018-02-28T20:42:58Z",
status_id: 20,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "Verify if all Hoteling Spots BELEN have monitors",
updated_on: "2018-02-28T21:18:12Z",
user_attention_id: 1,
user_id: 1874806,
custom_field_category_sr: "Hardware",
custom_field_impact_sr: "Location (CR, COL, US)",
custom_field_request: "Service Request",
custom_field_urgency_sr: "Medium",
custom_field_workplace_sr: "Belen"
}
},
{
ticket: {
assigned_on: "2018-02-26T19:59:58Z",
assigned_to_id: 1873585,
cc: "",
company_id: 53591,
created_from: 0,
created_on: "2018-02-26T19:48:09Z",
description: "Edier es un nuevo hire. Él va a empezar con nosotros el Miercoles 28 de Febrero, en Medellin. El correo de el seria ecamacho@growthaccelerationpartners.com. Por favor me ayuden con el espacio y el equipo técnico que se requiere. A continuacion el link del new hires matrix: https://docs.google.com/spreadsheets/d/1zZbdP-YzA1_oYsagt98up0vP7e4ZhUWtNz3n1EYCBYQ/edit#gid=901449463 El Personal Manager de Edier será Andres Zapata. Y la Delivery Manager del proyecto al que va es Camilo Acosta. Con ellos se puede conversar sobre el equipo que va a requerir Edier y la ubicación. Muchas gracias! ",
due_on: null,
first_assigned_on: "2018-02-26T19:59:58Z",
id: 18512124,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: "2018-02-28T18:07:38Z",
status_changed_on: "2018-02-28T18:07:38Z",
status_id: 50,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "Onboarding Edier Camacho Avila ",
updated_on: "2018-02-28T18:07:38Z",
user_attention_id: 1,
user_id: 839146,
custom_field_category_sr: "On-boarding",
custom_field_impact_sr: "Areas/Teams/Departments",
custom_field_request: "Service Request",
custom_field_urgency_sr: "High",
custom_field_workplace_sr: "Ruta N"
}
},
{
ticket: {
assigned_on: "2018-02-26T20:08:44Z",
assigned_to_id: 1873585,
cc: "sbalch@growthaccelerationpartners.com",
company_id: 53593,
created_from: 0,
created_on: "2018-02-26T19:20:31Z",
description: "Hello, Adrian Mantello will start on Sync1 this Wednesday, Feb 28. This should be ready today or tomorrow since he needs to work on the environment configuration. He needs the following configuration to start tomorrow: 1. GAP Email account. 2. License for Office 365 3. License Visual Studio Professional Annual cloud subscription. The same subscriptions that all Sync1 team members already have. Please use the license assigned to Diego Faciola",
due_on: null,
first_assigned_on: "2018-02-26T20:08:44Z",
id: 18511738,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: "2018-02-27T15:45:22Z",
status_changed_on: "2018-02-27T15:45:22Z",
status_id: 50,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "<Important>Active Email Account & Licenses for Adrian Mantello",
updated_on: "2018-02-28T16:01:25Z",
user_attention_id: 1,
user_id: 273705,
custom_field_category_sr: "License",
custom_field_impact_sr: "Individual",
custom_field_request: "Service Request",
custom_field_urgency_sr: "High",
custom_field_workplace_sr: "Remote"
}
},
{
ticket: {
assigned_on: "2018-02-26T16:55:02Z",
assigned_to_id: 575548,
cc: "",
company_id: 53593,
created_from: 0,
created_on: "2018-02-26T16:50:15Z",
description: "Enable a computer with windows 10 and Internet Explorer 11 that developers can access for testing. Right now all the developers are using a MAC computer so they are not able to test with IE11 and there are differente defects that need to be tested there.",
due_on: null,
first_assigned_on: "2018-02-26T16:55:02Z",
id: 18509493,
is_attention_required: false,
legacy_id: null,
priority_id: 30,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: "2018-02-28T20:41:56Z",
status_changed_on: "2018-02-28T20:41:56Z",
status_id: 50,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "Enable a computer with windows 10 and Internet Explorer 11 that developers can access for testing",
updated_on: "2018-02-28T20:41:56Z",
user_attention_id: 1,
user_id: 281423,
custom_field_category_sr: "Virtual Machine",
custom_field_impact_sr: "Areas/Teams/Departments",
custom_field_request: "Service Request",
custom_field_urgency_sr: "High",
custom_field_workplace_sr: "Ruta N"
}
},
{
ticket: {
assigned_on: "2018-02-26T15:41:28Z",
assigned_to_id: 944367,
cc: "",
company_id: 53593,
created_from: 0,
created_on: "2018-02-26T15:40:31Z",
description: "I need access to http://172.16.0.180",
due_on: null,
first_assigned_on: "2018-02-26T15:41:28Z",
id: 18508270,
is_attention_required: false,
legacy_id: null,
priority_id: 40,
rated_on: null,
rating: null,
scheduled_on: null,
solved_on: "2018-02-26T15:52:02Z",
status_changed_on: "2018-02-26T15:52:02Z",
status_id: 50,
ticket_form_id: 28770,
ticket_queue_id: 32907,
ticket_type_id: 97260,
title: "Access to VPN",
updated_on: "2018-02-27T16:01:07Z",
user_attention_id: 1,
user_id: 532428,
custom_field_category_sr: "Virtual Machine",
custom_field_impact_sr: "Individual",
custom_field_request: "Service Request",
custom_field_urgency_sr: "High",
custom_field_workplace_sr: "Site 1"
}
}
]
