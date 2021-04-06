import React, { Component } from "react";

export default class LoanAccountStat extends Component {

  constructor (props) {
	super(props);
	this.state = {laLoanStat: '', laBalStat: '', laNxtDueDt: '', laTotPymtNbr: '', laLatPymtDt: '', laDefDt: '', laWrtOffDt: '', laPenBnkrpt: '', laBnkrptFilngDt: '', laDisDt: ''};
  }    
  
  componentWillMount(){
    this.setState({laLoanStat: 'Open', laBalStat: 'Open', laNxtDueDt: '01/18/2019', laTotPymtNbr: '23', laLatPymtDt: '12/19/2018', laDefDt: '', laWrtOffDt: '', laPenBnkrpt: 'No', laBnkrptFilngDt: '', laDisDt: ''});
  }

  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0"  className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Loan Status</td>
								<td>{this.state.laLoanStat}</td>
								<td>Balance Status</td>
								<td>{this.state.laBalStat}</td>
								<td>Next Due Date</td>
								<td>{this.state.laNxtDueDt}</td>
							</tr>
							<tr>
								<td>Total Number of Payments</td>
								<td>{this.state.laTotPymtNbr}</td>
								<td>Latest Payment Date</td>
								<td>{this.state.laLatPymtDt}</td>
								<td>Default Date</td>
								<td>{this.state.laDefDt}</td>
							</tr>
							<tr>
								<td>Write Off Date</td>
								<td>{this.state.laWrtOffDt}</td>
								<td>Pending Bankruptcy</td>
								<td>{this.state.laPenBnkrpt}</td>
								<td>Bankruptcy Filling Date</td>
								<td>{this.state.laBnkrptFilngDt}</td>
							</tr>
							<tr>
								<td>Bankruptcy Status</td>
								<td>{this.state.laBnkrptStat}</td>
								<td>Dismissed/Discharge Date</td>
								<td>{this.state.laDisDt}</td>
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