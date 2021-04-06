import React, { Component } from "react";

export default class EmailHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {ehVal: ''};
  }
  
  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({ehVal: this.props.cVal});
	}
  }
    
  render(){
	
	let ehLst = [];
	let eh = [];
	
	if(this.state.ehVal !== "EH"){
		eh = [{date: '2018-12-19 15:49:57.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Loan Origination', status: 'Email Sent', response: 'SUCCESS'},{date: '2019-01-11 09:43:00.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Payment prior due date Reminder', status: 'Email Sent', response: 'SUCCESS'},{date: '2019-01-15 08:01:15.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Payment prior due date Reminder', status: 'Email Sent', response: 'SUCCESS'},{date: '2019-01-19 08:00:53.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Missed Payment(Next Day Reminder Email)', status: 'Email Sent', response: 'SUCCESS'}];
		for(let s=0; s<=eh.length-1; s++){
			ehLst.push(<tr><td align="center">{eh[s].date}</td><td align="center">{eh[s].loanNbr}</td><td align="center">{eh[s].emailId}</td><td align="center">{eh[s].desc}</td><td align="center">{eh[s].status}</td><td align="center">{eh[s].response}</td></tr>); 
		}
	}else{
		eh = [{date: '2018-12-19 15:49:57.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Loan Origination', response: 'SUCCESS'},{date: '2019-01-11 09:43:00.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Payment prior due date Reminder', response: 'SUCCESS'},{date: '2019-01-15 08:01:15.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Payment prior due date Reminder', response: 'SUCCESS'},{date: '2019-01-19 08:00:53.0', loanNbr: '44189', emailId: 'lfruchey83@gmail.com', desc: 'Missed Payment(Next Day Reminder Email)', response: 'SUCCESS'}];
		for(let s=0; s<=eh.length-1; s++){
			ehLst.push(<tr><td align="center">{eh[s].date}</td><td align="center">{eh[s].loanNbr}</td><td align="center">{eh[s].emailId}</td><td align="center">{eh[s].desc}</td><td align="center">{eh[s].response}</td></tr>); 
		}
	}	
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						{(this.state.ehVal !== 'EH') ? <tr>
							<th colSpan="6" align="center"> {eh.length} record(s) found.</th>
						</tr> : null }				
						<tr>
							<th align="center">Date </th>
							<th align="center">Loan Nbr </th>
							<th align="center">Email ID</th>
							<th align="center">Description</th>
							{(this.state.ehVal !== 'EH') ? <th align="center">Status</th> : null }
							<th align="center">Response</th>
						</tr>
					</thead>		
					<tbody>
						{ehLst}
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}