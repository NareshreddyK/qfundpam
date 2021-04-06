import React, { Component } from "react";

export default class CheckHistory extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let chLst = [];
	
	let ch = [];
	{/*let ch = [{chkStatus: '', chkNbr: '', chkAmt: '', lnTranCode: ''}];*/}
	for(let m=0; m<=ch.length-1; m++){
		chLst.push(<tr><td align="center">{[m+1]}</td><td align="center">{ch[m].chkStatus}</td><td align="center">{ch[m].chkNbr}</td><td align="center">{ch[m].chkAmt}</td><td align="center">{ch[m].lnTranCode}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th>Payment Num # </th>
							<th>Check Status</th>
							<th>Check Num</th>
							<th>Check Amt</th>
							<th>Loan Tran Code</th>
						</tr>
					</thead>
					<tbody>
						{chLst}
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}