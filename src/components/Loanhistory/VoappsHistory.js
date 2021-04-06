import React, { Component } from "react";

export default class VoappsHistory extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let vaLst = [];
  
	{/*let va = [{nbr: '', name: '', addedBy: '', result: '', code: '', timestamp: ''}];*/}
	let va = [];
	for(let x=0; x<=va.length-1; x++){
		vaLst.push(<tr><td align="center">{va[x].nbr}</td><td align="center">{va[x].name}</td><td align="center">{va[x].addedBy}</td><td align="center">{va[x].result}</td><td align="center">{va[x].code}</td><td align="center">{va[x].timestamp}</td></tr>); 
	}	
	
	return (
				
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="6" align="center"> {va.length} record(s) found.</th>
						</tr>
						<tr>
							<th>Number</th>
							<th>Name</th>
							<th>Added By</th>
							<th>Result</th>
							<th>Code</th>
							<th>TimeStamp</th>
						</tr>
					</thead>		
					<tbody>
						{vaLst}
					</tbody>
				</table>
			</div>
		</div>
		
	);
  } 
}