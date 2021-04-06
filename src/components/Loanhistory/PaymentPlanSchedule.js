import React, { Component } from "react";

export default class PaymentPlanSchedule extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let ppLst = [];
	
	let pp = [];
	{/*let pp = [{pymtAmt: '', pymtDueDt: '', paidFlag: '', pymtDt: ''}];*/}
	for(let l=0; l<=pp.length-1; l++){
		ppLst.push(<tr><td align="center">{[l+1]}</td><td align="center">{pp[l].pymtAmt}</td><td align="center">{pp[l].pymtDueDt}</td><td align="center">{pp[l].paidFlag}</td><td align="center">{pp[l].pymtDt}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th>Payment No # </th>
							<th>Payment Amount</th>
							<th>Payment Due Date</th>
							<th>Paid Flag</th>
							<th>Payment Date</th>
						</tr>
					</thead>
					<tbody>
						{ppLst}
					</tbody>
				</table>
			</div>					
		</div>
	
	);
  } 
}