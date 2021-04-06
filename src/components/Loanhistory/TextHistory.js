import React, { Component } from "react";

export default class TextHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {thVal: ''};
  }

  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({thVal: this.props.cVal});
	}
  }
    
  render(){
	
	let thLst = [];
	let th = [];

	if(this.state.thVal !== 'SH'){
		th = [{date: '2018-12-19 15:49:58.0', loanNbr: '44189', mobileNbr: '(534)485-6946', tempId: 'SODD01', desc: 'Loan Origination DocDelivery', status: 'Message Sent', response: 'FAILURE'}];
		for(let r=0; r<=th.length-1; r++){
			thLst.push(<tr><td align="center">{th[r].date}</td><td align="center">{th[r].loanNbr}</td><td align="center">{th[r].mobileNbr}</td><td align="center">{th[r].tempId}</td><td align="center">{th[r].desc}</td><td align="center">{th[r].status}</td><td align="center">{th[r].response}</td></tr>); 
		}
	}else{
		th = [{date: '2018-12-19 15:49:58.0', loanNbr: '44189', mobileNbr: '(534)485-6946', tempId: 'SODD01', desc: 'Loan Origination DocDelivery'}];
		for(let r=0; r<=th.length-1; r++){
			thLst.push(<tr><td align="center">{th[r].date}</td><td align="center">{th[r].loanNbr}</td><td align="center">{th[r].mobileNbr}</td><td align="center">{th[r].tempId}</td><td align="center">{th[r].desc}</td></tr>); 
		}
	}
	
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						{(this.state.thVal !== 'SH') ? <tr>
							<th colSpan="7" align="center"> {th.length} record(s) found.</th>
						</tr> : null }				
						<tr>
							<th>Date </th>
							<th>Loan Nbr </th>
							<th>Mobile Nbr</th>
							<th>Template Id</th>
							<th>Description</th>
							{(this.state.thVal !== 'SH') ? <th>Status</th> : null}
							{(this.state.thVal !== 'SH') ? <th>Response</th> : null}
						</tr>
					</thead>		
					<tbody>
						{thLst}					
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}