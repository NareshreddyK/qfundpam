import React, { Component } from "react";

export default class LetterHistory extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let lhLst = [];
  
	let lh = [{date: '', letterType: '', printedBy: '', printedDate: ''}];
	for(let q=0; q<=lh.length-1; q++){
		lhLst.push(<tr><td align="center">{lh[q].date}</td><td align="right">{lh[q].letterType}</td><td align="center">{lh[q].printedBy}</td><td align="center">{lh[q].printedDate}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th>Date</th>
							<th>Letter Type</th>
							<th>Printed By</th>
							<th>Printed Date</th>
						</tr>
					</thead>		
					<tbody>
						{lhLst}					
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}