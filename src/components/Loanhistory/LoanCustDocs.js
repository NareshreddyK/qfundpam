import React, { Component } from "react";

export default class LoanCustDocs extends Component {

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
					<p className="text-center"><input name="loanscan" type="radio" value="SN" id="SN"/> &nbsp; Scan &nbsp; &nbsp; 
					<input name="loanscan" type="radio" value="UP" id="UP" /> &nbsp; Upload</p>	
				
				<div className="hide" id="custDoc">
						<div className="innerBlockContainer">
					<h2>Customer Documents</h2>
					<div className="pull-right"><button type="button">Add more</button></div>
                    <table className="noBorder noStripe cellGap">
                        <tbody>							
                            <tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Covered Borrower Identification Statement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Name Change</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bankruptcy Notice</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bankruptcy Proof of Claim</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Dismissal/Discharge Bankruptcy</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Other Bankruptcy Documents</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">OTHER</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Other Documents</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Income</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bank Account Statement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Government ID</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">SSN/ITIN Verification Document</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bank Account Verification Document</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Deceased</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
                        </tbody>
                    </table>
						</div>
					
						<div className="innerBlockContainer">
					<h2>Loan Documents</h2>
					<div className="pull-right"><button type="button">Add more</button></div>
                    <table className="noBorder noStripe cellGap">
                        <tbody>							
                            <tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">OTHER</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Settlement Agreement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">3rd Party Payment Receipt</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Released Title</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Liened Title</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Original Title</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Power of Attorney</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Vehicle Research Report (ELT) NC</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Promissory Note (Buyout)</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Noting of Lien Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Co-Owners Consent Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Vehicle Appraisal Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Sales invoice from auction</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Invoice from repo vendor</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Certificate of Sale under Special Conditions</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Repo Letter</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Past Due Notice</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Auto Renewal Letter</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Co-Owner Copy of photo ID</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Vehicle Registration</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Insurance</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Auction Assignment Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">VIN Validation Sheet</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Sales Deficiency / Surplus Letter</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
                        </tbody>
                    </table>
					</div>
					</div>
					
					<div className="hide" id="custUploadDoc">
						<div className="innerBlockContainer">
					<h2>Customer Documents</h2>
					<div className="pull-right"><button type="button">Add more</button></div>
                    <table className="noBorder noStripe cellGap">
                        <tbody>							
                            <tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Covered Borrower Identification Statement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Name Change</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bankruptcy Notice</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bankruptcy Proof of Claim</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Dismissal/Discharge Bankruptcy</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Other Bankruptcy Documents</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Other Documents</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Income</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bank Account Statement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Government ID</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Covered Borrower Identification Statement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">SSN/ITIN Verification Document</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Bank Account Verification Document</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Deceased</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
                        </tbody>
                    </table>
						</div>
					
						<div className="innerBlockContainer">
					<h2>Loan Documents</h2>
					<div className="pull-right"><button type="button">Add more</button></div>
                    <table className="noBorder noStripe cellGap">
                        <tbody>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Settlement Agreement</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">3rd Party Payment Receipt</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Released Title</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Liened Title</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Original Title</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Power of Attorney</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Vehicle Research Report (ELT) NC</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Promissory Note (Buyout)</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Noting of Lien Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Co-Owners Consent Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Vehicle Appraisal Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Sales invoice from auction</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Invoice from repo vendor</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Certificate of Sale under Special Conditions</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Repo Letter</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Past Due Notice</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Auto Renewal Letter</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Co-Owner Copy of photo ID</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Vehicle Registration</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Proof of Insurance</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Auction Assignment Form</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">VIN Validation Sheet</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
							<tr>
                               <td align="left" width="15%"><input type="checkbox"/></td>
                           
                              <td align="left" width="40%">Sales Deficiency / Surplus Letter</td>								 
                              <td><input type="file" id="img" name="img" accept="image/*" /></td>    
							  <td> </td>
                            </tr>
                        </tbody>
                    </table>
					</div>
					</div>
					
					<div className="text-center">
					<button type="button">Submit</button>
					
					</div>					
				</div>
			</div>
		</div>
	
	);
  } 
}