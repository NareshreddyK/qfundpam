import React, { Component } from "react";

export default class LoanViewDocs extends Component {

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
					<div className="col-sm-12">
						<div className="innerBlockContainer">
					<h2 className="h2-title">Customer Document List</h2>
                    <table>
					<thead>
					<tr>
					<th>Document Description</th>
					<th>Name</th>
					<th>Created By</th>
					<th>Date Created</th>
					<th>Is Active</th>
					</tr>
					</thead>
					<tbody>
					<tr>
					<td>PDL CAB COST DISCLOSURE ENG</td>
					<td>15681715 pdlcabcostdisclosureeng</td>
					<td>shion,sh</td>
					<td>2020-05-30 08:54:00.0</td>
					<td>Y</td>
					</tr>
					</tbody>
					</table>
					
					</div>
					</div>

					<div className="col-sm-12">
						<div className="innerBlockContainer">
					<h2 className="h2-title">Loan Document List</h2>
                    <table>
					<thead>
					<tr>
					<th>Document Description</th>
					<th>Name</th>
					<th>Created By</th>
					<th>Date Created</th>
					<th>Is Active</th>
					</tr>
					</thead>
					<tbody>
					<tr>
					<td colspan="6"></td>
					</tr>
					</tbody>
					</table>
					
					</div>
					</div>					
				
					<div className="text-center">
					<button type="button">Close</button>
					
					</div>					
				</div>
			</div>
		</div>
	
	);
  } 
}