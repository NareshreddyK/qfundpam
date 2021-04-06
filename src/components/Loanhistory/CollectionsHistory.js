import React, { Component } from "react";

export default class CollectionsHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {chVal: ''};
  }

  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({chVal: this.props.cVal});
	}
  }
    
  render(){
	
	let colhLst = [];
	let colh = [];

	if(this.state.chVal !== "CH"){
		colh = [{date: '01/22/2019', createdBy: 'Kelso, Joseph', action: 'See Comments', response: 'Deceased', cmnts: '', autoCmnt: ''},{date: '01/19/2019', createdBy: 'Kelso, Joseph', action: 'See Comments', response: 'See Notes', cmnts: 'deceased', autoCmnt: ''},{date: '01/17/2019', createdBy: 'Templeton, Brittany', action: 'See Comments', response: 'See Notes', cmnts: 'DNC', autoCmnt: ''},{date: '01/16/2019', createdBy: 'Templeton, Brittany', action: 'See Comments', response: 'See Notes', cmnts: 'DNC', autoCmnt: ''},{date: '01/09/2019', createdBy: 'Templeton, Brittany', action: 'See Comments', response: 'See Notes', cmnts: 'AH is deceased-- DNC', autoCmnt: ''},{date: '01/07/2019', createdBy: 'Duncan, Teisha', action: 'Outgoing call Primary', response: 'Deceased', cmnts: '7006 Ah son stated that Ah passed away suddenly on 1/4. Did inform son that we will need Death Certificate when avail for acct. He stated he understood', autoCmnt: ''}];
		for(let p=0; p<=colh.length-1; p++){
			colhLst.push(<tr><td align="center">{colh[p].date}</td><td align="center">{colh[p].createdBy}</td><td align="center">{colh[p].action}</td><td align="center">{colh[p].response}</td><td align="left">{colh[p].cmnts}</td><td align="left">{colh[p].autoCmnt}</td></tr>); 
		}
	}else{
		colh = [{date: '', user: '', action: '', response: '', cmnts: '', autoCmnt: ''}];
		for(let p=0; p<=colh.length-1; p++){
			colhLst.push(<tr><td align="center">{colh[p].date}</td><td align="center">{colh[p].user}</td><td align="center">{colh[p].action}</td><td align="center">{colh[p].response}</td><td align="left">{colh[p].cmnts}</td><td align="left">{colh[p].autoCmnt}</td></tr>); 
		}
	}

		
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						{(this.state.chVal !== 'CH') ? <tr>
							<th colSpan="6" align="center"> {colh.length} record(s) found.</th>
						</tr> : null }
						<tr>
							<th>Date </th>
							{(this.state.chVal !== 'CH') ? <th>Created by </th> : null}
							{(this.state.chVal === 'CH') ? <th>User </th> : null}
							<th>Action</th>
							<th>Response</th>
							<th>Comments</th>
							<th>Auto Comment</th>
						</tr>
					</thead>		
					<tbody>
						{colhLst}
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}