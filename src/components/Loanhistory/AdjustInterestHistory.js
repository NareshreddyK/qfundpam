import React, { Component } from "react";

export default class AdjustInterestHistory extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let aiLst = [];
  
	{/*let ai = [{adjDt: '', actIntDue: '', adjdInt: '', diff: '', agentNm: '', reason: ''}];*/}
	let ai = [];
	for(let w=0; w<=ai.length-1; w++){
		aiLst.push(<tr><td align="center">{ai[w].adjDt}</td><td align="center">{ai[w].actIntDue}</td><td align="center">{ai[w].adjdInt}</td><td align="center">{ai[w].diff}</td><td align="center">{ai[w].agentNm}</td><td align="center">{ai[w].reason}</td></tr>); 
	}	
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="6" align="center"> {ai.length} record(s) found.</th>
						</tr>				
						<tr>
							<th>Adjust Date</th>
							<th>Actual Interest Due</th>
							<th>Adjusted Interest</th>
							<th>Difference</th>
							<th>Agent Name</th>
							<th>Reasons</th>
						</tr>
					</thead>		
					<tbody>
						{aiLst}
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}