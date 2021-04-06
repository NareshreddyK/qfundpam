import React, { Component } from "react";

export default class BankInfo extends Component {

  constructor (props) {
	super(props);
	this.state = {biAcntTyp: '', biRoutingNbr: '', biAcntNbr: '', biAcntStat: '', biBankName: ''};
  }
  
  componentWillMount(){
    this.setState({biAcntTyp: 'Checking Account', biRoutingNbr: '065503681', biAcntNbr: '012757214', biAcntStat: 'Active', biBankName: 'HANCOCK WHITNEY BANK'});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="col-table-5">
						<thead>
							<tr>
								<th>Type of Account</th>
								<th>ABA/Routing Nbr</th>
								<th>Account Nbr</th>
								<th>Account Status</th>
								<th>Bank Name</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td align="center">{this.state.biAcntTyp}</td>
								<td align="center">{this.state.biRoutingNbr}</td>
								<td align="center">{this.state.biAcntNbr}</td>
								<td align="center">{this.state.biAcntStat}</td>
								<td align="center">{this.state.biBankName}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}