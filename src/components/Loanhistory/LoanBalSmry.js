import React, { Component } from "react";

export default class LoanBalSmry extends Component {

  constructor (props) {
	super(props);
	this.state = {lbsPriBal: '', lbsEarndInt: '', lbsEarndFee: '', lbsReturnFee: '', lbsLateFee: '', lbsRepoFee: '', lbsCaloffFee: '', lbsPayoffAmt: '', lbsPastDueAmt: ''};
  }

  componentWillMount(){
    this.setState({lbsPriBal: '391.00', lbsEarndInt: '15.64', lbsEarndFee: '132.14', lbsReturnFee: '0.00', lbsLateFee: '0.00', lbsRepoFee: '0.00', lbsCaloffFee: '0.00', lbsPayoffAmt: '406.64', lbsPastDueAmt: '406.64'});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Principal Balance</td>
								<td>$ {this.state.lbsPriBal}</td>
								<td>Earned and unpaid interest</td>
								<td>$ {this.state.lbsEarndInt}</td>
								<td>Earned and unpaid Fee</td>
								<td>$ {this.state.lbsEarndFee}</td>
							</tr>
							<tr>
								<td>Return Fee Due</td>
								<td>$ {this.state.lbsReturnFee}</td>
								<td>Late Fee Due</td>
								<td>$ {this.state.lbsLateFee}</td>
								<td>Repo Fee Due</td>
								<td>$ {this.state.lbsRepoFee}</td>
							</tr>
							<tr>
								<td>CallOff Fee Due</td>
								<td>$ {this.state.lbsCaloffFee}</td>
								<td>Pay-off Amt</td>
								<td>$ {this.state.lbsPayoffAmt}</td>
								<td>Past Due Amt</td>
								<td>$ {this.state.lbsPastDueAmt}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}