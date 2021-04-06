import React, { Component } from "react";

export default class LoanPaidToDtSmry extends Component {

  constructor (props) {
	super(props);
	this.state = {lpdPriPaidDt: '', lpdIntPaidDt: '', lpdFeePaidDt: '', lpdRtrnFeePaidDt: '', lpdLateFeePaidDt: '', lpdRepoFeePaidDt: '', lpdCallFeePaidDt: '', lpdTotPaidAmt: ''};
  }

  componentWillMount(){
    this.setState({lpdPriPaidDt: '0.00', lpdIntPaidDt: '0.00', lpdFeePaidDt: '0.00', lpdRtrnFeePaidDt: '0.00', lpdLateFeePaidDt: '0.00', lpdRepoFeePaidDt: '0.00', lpdCallFeePaidDt: '0.00', lpdTotPaidAmt: '0.00'});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Principal Paid to date</td>
								<td>$ {this.state.lpdPriPaidDt}</td>
								<td>Interest Paid to date</td>
								<td>$ {this.state.lpdIntPaidDt}</td>
								<td>Fee Paid to date</td>
								<td>$ {this.state.lpdFeePaidDt}</td>
							</tr>
							<tr>
								<td>Return Fee Paid to date</td>
								<td>$ {this.state.lpdRtrnFeePaidDt}</td>
								<td>Late Fee Paid to date</td>
								<td>$ {this.state.lpdLateFeePaidDt}</td>
								<td>Repo Fee Paid to date</td>
								<td>$ {this.state.lpdRepoFeePaidDt}</td>
							</tr>
							<tr>
								<td>Calloff Fee Paid to date</td>
								<td>$ {this.state.lpdCallFeePaidDt}</td>
								<td>Total Paid Amt</td>
								<td>$ {this.state.lpdTotPaidAmt}</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}