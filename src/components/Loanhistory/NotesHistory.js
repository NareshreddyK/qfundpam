import React, { Component } from "react";

export default class NotesHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {nhVal: ''}
  }

  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({nhVal: this.props.cVal});
	}
  }
    
  render(){
	
	let nhLst = [];
	let nh = [];

	if(this.state.nhVal !== 'NH'){
		nh = [{urgent: 'N', date: '12/19/2018', action: 'VCR', notes: '', response: '152685'}];
		for(let v=0; v<=nh.length-1; v++){
			nhLst.push(<tr><td align="center">{nh[v].urgent}</td><td align="center">{nh[v].date}</td><td align="center">{nh[v].action}</td><td align="center">{nh[v].notes}</td><td align="center">{nh[v].response}</td></tr>); 
		}
	} else {
		nh = [{urgent: '', date: '', loanNbr: '', module: '', comments: '', enteredBy: ''}];
		for(let v=0; v<=nh.length-1; v++){
			nhLst.push(<tr><td align="center">{nh[v].urgent}</td><td align="center">{nh[v].date}</td><td align="center">{nh[v].loanNbr}</td><td align="center">{nh[v].module}</td><td align="center">{nh[v].comments}</td><td align="center">{nh[v].enteredBy}</td></tr>); 
		}
	}
  
		
	
	return (
	
		<div>
			{(this.state.nhVal !== 'NH') ? <div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="6" align="center"> {nh.length} record(s) found.</th>
						</tr>				
						<tr>
							<th>Urgent </th>
							<th>Date </th>
							<th>Action</th>
							<th>Notes</th>
							<th>Response</th>
						</tr>
					</thead>		
					<tbody>
						{nhLst}
					</tbody>
				</table>
			</div> : null }
			
			{(this.state.nhVal === 'NH') ? <div class="row">
				<table width="100%" border="0" className="noBorder noStripe cellGap col-table-2">
					<tbody>
						<tr>
							<td valign="top">Notes <br/>
								<textarea className="form-control"></textarea></td>
							<td valign="top">Urgent &nbsp; <input type="checkbox" /> </td>
						</tr>
						<tr>
							<td colspan="2" align="center">
								<button type="button">Submit</button>
								<button type="button">Clear</button>
							</td>
						</tr>
						<td>
							<td colspan="2">
								<input type="radio" /> &nbsp; Loan Notes &nbsp;&nbsp;&nbsp;
								<input type="radio" /> &nbsp; All Notes
							</td>
						</td>
					</tbody>
				</table>
				<p>&nbsp;</p>
				<table width="100%">
					<thead>
						<tr>
							<th>Urgent </th>
							<th>Date </th>
							<th>Loan Nbr</th>
							<th>Module</th>
							<th>Comments</th>
							<th>Entered by</th>
						</tr>
					</thead>		
					<tbody>
						{nhLst}
					</tbody>
				</table>
			</div> : null }
		</div>
	
	);
  } 
}