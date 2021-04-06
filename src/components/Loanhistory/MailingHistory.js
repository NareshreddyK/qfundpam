import React, { Component } from "react";

export default class MailingHistory extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let mhLst = [];
  
	{/*let mh = [{dtSent: '', ltrType: '', printedBy: '', printedDate: ''}];*/}
	let mh = [];
	for(let n=0; n<=mh.length-1; n++){
		mhLst.push(<tr><td align="center">{mh[n].dtSent}</td><td align="center">{mh[n].ltrType}</td><td align="center">{mh[n].printedBy}</td><td align="center">{mh[n].printedDate}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="4">{mh.length} record(s) found.</th>
						</tr>
						<tr>
							<th>Date Sent</th>
							<th>Letter Type</th>
							<th>Printed By</th>
							<th>Printed Date</th>
						</tr>
					</thead>
					<tbody>
						{mhLst}
					</tbody>
				</table>
			</div>	
		</div>
	
	);
  } 
}