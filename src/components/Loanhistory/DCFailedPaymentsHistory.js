import React, { Component } from "react";

export default class DCFailedPaymentsHistory extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let dcfLst = [];
  
	{/*let dcf = [{date: '', loanNbr: '', transAmt: '', desc: '', response: '', pymtType: ''}];*/}
	let dcf = [];
	for(let u=0; u<=dcf.length-1; u++){
		dcfLst.push(<tr><td align="center">{dcf[u].date}</td><td align="center">{dcf[u].loanNbr}</td><td align="right">{dcf[u].transAmt}</td><td align="center">{dcf[u].desc}</td><td align="center">{dcf[u].response}</td><td align="center">{dcf[u].pymtType}</td></tr>); 
	}	
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="6" align="center"> {dcf.length} record(s) found.</th>
						</tr>				
						<tr>
							<th>Date </th>
							<th>Loan Nbr </th>
							<th>Transaction Amt</th>
							<th>Description</th>
							<th>Response</th>
							<th>Payment Type</th>
						</tr>
					</thead>		
					<tbody>
						{dcfLst}
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}