import React, { Component } from "react";

export default class CoOwnerInf extends Component {

  constructor (props) {
	super(props);
	this.state = {coName: '', coPhNbr: '', coSsn: '', coAddrs: ''};
  }

  componentWillMount(){
    this.setState({coName: '', coPhNbr: '', coSsn: '', coAddrs: ''});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="col-table-4">
						<thead>
							<tr>
								<th>Name</th>
								<th>Phone Nbr</th>
								<th>SSN / ITIN</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.state.coName}</td>
								<td>{this.state.coPhNbr}</td>
								<td>{this.state.coSsn}</td>
								<td>{this.state.coAddrs}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}