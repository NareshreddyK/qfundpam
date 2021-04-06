import React, { Component } from "react";

export default class LoanAccountInf extends Component {

  constructor (props) {
	super(props);
	this.state = {laiProdNm: '', laiProdTyp: '', laiLoanNbr: '', laiMigLoanNbr: '', laiLoanAmt: '', laiDMVFee: '', laiWaiveDMVFee: '', laiAPR: '', laiIntRate: '', laiLoanDt: '', laiPymtAmt: '', laiPymtNbr: '', laiColtTyp: '', laiLoanFreq: '', laiOrigStr: '', laiAvailCred: '', laiRenwFlag: '', laiRenwDt: '', laiTitleCycNbr: '', laiOutRepo: ''};
  }

  componentWillMount(){
    this.setState({laiProdNm: 'Title Loan', laiProdTyp: 'TN Title Rules1', laiLoanNbr: '44189', laiMigLoanNbr: 'N/A', laiLoanAmt: '391.00', laiDMVFee: '0.00', laiWaiveDMVFee: '0.00', laiAPR: '229.92', laiIntRate: '2.00', laiLoanDt: '12/19/2018', laiPymtAmt: '464.89', laiPymtNbr: '1', laiColtTyp: 'NOC', laiLoanFreq: '30Days', laiOrigStr: '0398', laiAvailCred: '', laiRenwFlag: 'Y', laiRenwDt: '01/18/2019', laiTitleCycNbr: 'TN-5314-288356', laiOutRepo: 'No', locRep: '2500.00', curBal: '500.00', interestFee: '302.46', totalDue: '802.46', princDue: '1000.00', feeDue: '466.00', curAmt: '129.00', lateFeeDue: '0.00', csoFee: '0.00', nsfFee: '0.00', otherFee: '0.00', pmtMade: '129.00', amtOwed: '1466.00', waiveFee: '0.00', interestAmt: '0.00', custFeeAmt: '0.00', lpmtMade: '802.46', cureAmt: '0.00', amt: '0.00', fee: '0.00'});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Product Name</td>
								<td>{this.state.laiProdNm}</td>
								<td>Product Type</td>
								<td>{this.state.laiProdTyp}</td>
								<td>Loan Nbr</td>
								<td>{this.state.laiLoanNbr}</td>
							</tr>
							<tr>
								<td>Migration Loan Nbr</td>
								<td>{this.state.laiMigLoanNbr}</td>
								<td>Loan Amt</td>
								<td>$ {this.state.laiLoanAmt}</td>
								<td>DMV Fee</td>
								<td>$ {this.state.laiDMVFee}</td>
							</tr>
							<tr>
								<td>Waive DMV Fee</td>
								<td>$ {this.state.laiWaiveDMVFee}</td>
								<td>APR</td>
								<td>{this.state.laiAPR} %</td>
								<td>Interest Rate/Fee</td>
								<td>{this.state.laiIntRate} %</td>
							</tr>
							<tr>
								<td>Loan Date</td>
								<td>{this.state.laiLoanDt}</td>
								<td>Payment Amount</td>
								<td>$ {this.state.laiPymtAmt}</td>
								<td>Number of Payments</td>
								<td>{this.state.laiPymtNbr}</td>
							</tr>
							<tr>
								<td>Collateral Type</td>
								<td>{this.state.laiColtTyp}</td>
								<td>Loan Frequency</td>
								<td>{this.state.laiLoanFreq}</td>
								<td>Origination Store</td>
								<td>{this.state.laiOrigStr}</td>
							</tr>
							<tr>
								<td>Available Credit</td>
								<td>{this.state.laiAvailCred}</td>
								<td>Renewal Flag</td>
								<td>{this.state.laiRenwFlag}</td>
								<td>Renewal Date</td>
								<td>{this.state.laiRenwDt}</td>
							</tr>
							<tr>
								<td>Title Cycle Nbr</td>
								<td>{this.state.laiTitleCycNbr}</td>
								<td>Out for Repo</td>
								<td>{this.state.laiOutRepo}</td>
								<td>LOC Limit</td>
								<td>{this.state.locRep}</td>
							</tr>
							<tr>
								<td>Current Balance</td>
								<td>{this.state.curBal}</td>
								<td>Interest&Fee</td>
								<td>{this.state.interestFee}</td>
								<td>Total Due</td>
								<td>{this.state.totalDue}</td>
							</tr>
							
							<tr>
								<td>Principal Due</td>
								<td>{this.state.princDue}</td>
								<td>Fees Due</td>
								<td>{this.state.feeDue}</td>
								<td>Cure Amt</td>
								<td>{this.state.curAmt}</td>
							</tr>
							<tr>
								<td>Late Fee Due</td>
								<td>{this.state.lateFeeDue}</td>
								<td>CSO Fee</td>
								<td>{this.state.csoFee}</td>
								<td>NSF Fee Due</td>
								<td>{this.state.nsfFee}</td>
							</tr>
							<tr>
								<td>Other Fee Due</td>
								<td>{this.state.otherFee}</td>
								<td>Payments Made</td>
								<td>{this.state.lpmtMade}</td>
								<td>Amount Owed</td>
								<td>{this.state.amtOwed}</td>
							</tr>
							
							<tr>
								<td>Waive Fee</td> 
								<td>{this.state.waiveFee}</td>
								<td>Interest Amt</td> 
								<td>{this.state.interestAmt}</td>
								<td>Customary Fee Amt</td> 
								<td>{this.state.custFeeAmt}</td>
							</tr>
							<tr>
								<td>Payment Made</td> 
								<td>{this.state.pmtMade}</td>
								<td>Cure Amt</td> 
								<td>{this.state.cureAmt}</td>
								<td>Amt</td> 
								<td>{this.state.amt}</td>
							</tr>
							<tr>
								<td>Fee</td> 
								<td>{this.state.fee}</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}