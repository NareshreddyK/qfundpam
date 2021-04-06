import React, { Component } from "react";

export default class Pam extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {pAppStat: '', pCustNbr: '', pApplNbr: '', pSsn: '', paddrs: '', pEmail: '', pFName: '', pLName: '', pMName: '', pCity: '', pDOB: '', pState: '', pIsOnboard: '', pZip: '', pUploadDoc: '', pBankName: '', pRoutingNbr: '', pAcntNbr: '', pCardTyp: '', pCardNbr: '', pExpDt: '', pUploadDoc1: '', pPriPh: '', pPriPhTyp: '', pPriPhDNC: false, pPriPhBad: false, pAltPh: '', pAltPhTyp: '', pWrkPh: '', pWrkPhTyp: '', pWrkPhDNC: false, pWrkPhBad: false, pApprAmt: '', pApplStatus: '', pComments: '', pUploadOthDoc: false, pUploadCom: '', rCBIS: false, vCBIS: false, rPNC: false, vPNC: false, rBN: false, vBN: false, rBPC: false, vBPC: false, rDDB: false, vDDB: false, rOBD: false, vOBD: false, rOth: false, vOth: false, rOD: false, vOD: false, rPI: false, vPI: false, rGI: false, vGI: false, rSSN: false, vSSN: false, rBAVD: false, vBAVD: false, rPD: false, vPD: false, rBAS: false, vBAS: false, vPP: false, vAP: false, vWP: false};
  }
  
  componentWillMount(){
	let pname = this.props.info.flName;
	let nameSplt = pname.split(' ');
    this.setState({pAppStat: 'ORIGINATED', pCustNbr: this.props.info.nbr, pApplNbr: '298259', pSsn: this.props.info.ssn, pAddrs: this.props.info.caddress, pEmail: this.props.info.email, pFName: nameSplt[0], pLName: nameSplt[1], pMName: '', pCity: this.props.info.ccity, pDOB: '', pState: this.props.info.cstate, pIsOnboard: '', pZip: this.props.info.czip, pUploadDoc: '', pBankName: 'REGIONS BANK', pRoutingNbr: '064000017', pAcntNbr: '0250812270', pCardTyp: '', pCardNbr: '', pExpDt: '', pUploadDoc1: 'Bank Account Statement', pPriPh: this.props.info.phone, pPriPhTyp: this.props.info.phoneTyp, pPriPhDNC: false, pPriPhBad: false, pAltPh: '', pAltPhTyp: '', pWrkPh: '(731) 424-3682', pWrkPhTyp: 'Work', pWrkPhDNC: false, pWrkPhBad: false, pApprAmt: '$ 350.00', pApplStatus: '', pComments: '', pUploadOthDoc: false, pUploadCom: '', rCBIS: false, vCBIS: false, rPNC: false, vPNC: false, rBN: false, vBN: false, rBPC: false, vBPC: false, rDDB: false, vDDB: false, rOBD: false, vOBD: false, rOth: false, vOth: false, rOD: false, vOD: false, rPI: true, vPI: false, rGI: true, vGI: false, rSSN: true, vSSN: true, rBAVD: true, vBAVD: false, rPD: false, vPD: false, rBAS: true, vBAS: false, vPP: true, vAP: false, vWP: false});
  }  
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){
	const eqHght = {
		display: 'flex'
	};
	
	let vaLst = [];
	let idLst = [];
	let doLst = [];
	let incType = "";
	let payFreqVal = "";
	let garnishVal = "";
	let incStatusVal = "";

	let id = [{incHolder: 'S', employer: 'West TN ENT Clinic', netPay: '1181.00', grossPay: '1181.00', payFreq: 'BIM', granish: 'N', incStatus: '', nxtPayDt: '03/30/2019'}];
	for(let b=0; b<=id.length-1; b++){
		
		if(id[b].incHolder === "S"){
			incType = "Salaried"
		}
		
		if(id[b].payFreq === "MON"){
			payFreqVal = "Monthly";
		}else if(id[b].payFreq === "BIW"){
			payFreqVal = "Bi - Weekly";
		}else if(id[b].payFreq === "WKY" || id[b].payFreq === "WK"){
			payFreqVal = "Weekly";
		}else if(id[b].payFreq === "BIM"){
			payFreqVal = "Semi - Monthly";
		}
		
		if(id[b].granish === "N"){
			garnishVal = "No";
		}else{
			garnishVal = "Yes";
		}
		
		if(id[b].incStatus === "A"){
			incStatusVal = "Active"
		}
		
		idLst.push(<tr><td align="center">{incType}</td><td align="center">{id[b].employer}</td><td align="right">$ {id[b].netPay}</td><td align="right">$ {id[b].grossPay}</td><td align="center">{payFreqVal}</td><td align="center">{garnishVal}</td><td align="center">{incStatusVal}</td><td align="center">{id[b].nxtPayDt}</td></tr>); 
	}

	/*let doi = [{docReview: '', faxId: '', dateTime: '', attachments: '', reassign: '', comments:''}];*/
	let doi = [];
	if(doi.length === 0){
		doLst.push(<tr><td align="left" colspan="6">Docmentation/Other Information not available.</td></tr>);
	}else{
		for(let bb=0; bb<=doi.length-1; bb++){
			doLst.push(<tr><td align="center">{doi[bb].docReview}</td><td align="center">{doi[bb].faxId}</td><td align="right">{doi[bb].dateTime}</td><td align="right">{doi[bb].attachments}</td><td align="center">{doi[bb].reassign}</td><td align="center">{doi[bb].comments}</td></tr>); 
		}
	}	
	
	let va = [{empName: 'Elizabeth Ramirez', assignedTo: 'Shannon Howard', dateTime: '2018-12-31 13:35:20', reqLoanAmt: '350.00', esignDt: '12/31/2018 12:12:43', appStatus: 'ORIGINATED'}];

	if(va.length === 0){
		vaLst.push(<tr><td align="left" colspan="6">Verification Action not available.</td></tr>);
	}else{
		for(let g=0; g<=va.length-1; g++){
			vaLst.push(<tr><td align="center">{va[g].empName}</td><td align="center">{va[g].assignedTo}</td><td align="center">{va[g].dateTime}</td><td align="right">$ {va[g].reqLoanAmt}</td><td align="center">{va[g].esignDt}</td><td align="center">{va[g].appStatus}</td></tr>); 
		}
	}
	
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
				<div className="col-md-4 form-group col-md-offset-8 text-right margin-top">
		  <b>Note:</b> All mandatory Fields are highlighted with <span class="text-danger"><i class="fa fa-asterisk"></i></span>
		  </div>
					<div className="col-sm-9 form-group">
						<div className="innerBlockContainer">
							<h2 className="pamHeads">Verification Action</h2>							
							<div className="contact-infoscroll">
							<table className="col-table-6 noBorder noStripe nth-evenColor">
								<tbody>
									<tr>
										<td>Application Status</td>
										<td>{this.state.pAppStat}</td>
										<td>Customer Nbr</td>
										<td>{this.state.pCustNbr}</td>
										<td>Application Nbr</td>
										<td>{this.state.pApplNbr}</td>
									</tr>
								</tbody>	
							</table>
							</div>	
						</div>
			
						<div className="innerBlockContainer">
							<h2>Personal Details</h2>
							<div className="col-sm-12">
								<div className="row">
									<table className="noBorder noStripe col-table-6 nth-evenColor">
										<tbody>
											<tr>
												<td>SSN</td>
												<td>{this.state.pSsn}</td>
												<td>Address</td>
												<td>{this.state.pAddrs}</td>
												<td>Email Address</td>
												<td>{this.state.pEmail}</td>
											</tr>
											<tr>
												<td>First Name</td>
												<td>{this.state.pFName}</td>
												<td>City</td>
												<td>{this.state.pCity}</td>
												<td>DOB</td>
												<td>{this.state.pDOB}</td>
											</tr>
											<tr>
												<td>Last Name</td>
												<td>{this.state.pLName}</td>
												<td>State</td>
												<td>{this.state.pState}</td>
												<td>IsOnboarded</td>
												<td>{this.state.pIsOnboard}</td>
											</tr>
											<tr>
												<td>Middle Name</td>
												<td>{this.state.pMName}</td>
												<td>Zip</td>
												<td>{this.state.pZip}</td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>Uploaded Document</td>
												<td>{this.state.pUploadDoc}</td>
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
					</div>
					
					<div className="col-sm-3 form-group">
						<div className="innerBlockContainer">
							<h2>Banking Details</h2>
							<table className="noBorder noStripe col-table-2 nth-evenColor">
								<tbody>
									<tr>
										<td>Bank Name</td>
										<td>{this.state.pBankName}</td>
									</tr>
									<tr>
										<td>Routing Nbr</td>
										<td>{this.state.pRoutingNbr}</td>
									</tr>
									<tr>
										<td>Account Nbr</td>
										<td>{this.state.pAcntNbr}</td>
									</tr>
									<tr>
										<td>Card Type</td>
										<td>{this.state.pCardTyp}</td>
									</tr>
									<tr>
										<td>Card Nbr</td>
										<td>{this.state.pCardNbr}</td>
									</tr>
									<tr>
										<td>Expiration Date</td>
										<td>{this.state.pExpDt}</td>
									</tr>
									<tr>
										<td>Uploaded Document</td>
										<td>{this.state.pUploadDoc1}</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td></td>
									</tr>
								</tbody>	
							</table>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Contact Information</h2>								
							<table className="col-table-5">
								<thead>
									<tr>
										<th>Phone Id </th>
										<th>Phone Nbr </th>
										<th>Phone Type</th>
										<th>DNC</th>
										<th>BAD</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">Primary Phone</td>
										<td align="center">{this.state.pPriPh}</td>
										<td align="center">{this.state.pPriPhTyp}</td>
										<td align="center"><input type="checkbox" name="pPriPhDNC" defaultChecked={this.state.pPriPhDNC} onChange={this.handleChange} /></td>
										<td align="center"><input type="checkbox" name="pPriPhBad" defaultChecked={this.state.pPriPhBad} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td align="center">Alternate Phone</td>
										<td align="center">{this.state.pAltPh}</td>
										<td align="center">{this.state.pAltPhTyp}</td>
										<td align="center">&nbsp;</td>
										<td align="center">&nbsp;</td>
									</tr>
									<tr>
										<td align="center">Work Phone</td>
										<td align="center">{this.state.pWrkPh}</td>
										<td align="center">{this.state.pWrkPhTyp}</td>
										<td align="center"><input type="checkbox" name="pWrkPhDNC" defaultChecked={this.state.pWrkPhDNC} onChange={this.handleChange} /></td>
										<td align="center"><input type="checkbox" name="pWrkPhBad" defaultChecked={this.state.pWrkPhBad} onChange={this.handleChange} /></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Income Details</h2>
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th>Income Holder</th>
										<th>Employer</th>
										<th>Net Pay</th>
										<th>Gross Pay</th>
										<th>Pay Frequency</th>
										<th>Garnishment</th>
										<th>Income Status</th>
										<th>Next Pay Date</th>
									</tr>
								</thead>
								<tbody>
									{idLst}
								</tbody>
							</table>
							</div>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Uploaded Document:</h2>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Documents/Other Information</h2>
							<div className="contact-infoscroll">
							<table className="col-table-6">
								<thead>
									<tr>
										<th>Documents Reviewed</th>
										<th>Fax ID</th>
										<th>Date / Time</th>									
										<th>Attachments:</th>
										<th>Re Assign</th>
										<th>Comments</th>
									</tr>
								</thead>
								<tbody>
									{doLst}
								</tbody>
							</table>
							</div>
							<br/>
							<div className="row">
								<div className="col-sm-3"><strong>Upload Other Documents:</strong>&nbsp;<input type="checkbox" name="pUploadOthDoc" defaultChecked={this.state.pUploadOthDoc} onChange={this.handleChange} /></div>
								<div className="col-sm-3"><strong>Comments:</strong> &nbsp; <textarea className="form-control" cols="30" rows="2" name="pUploadCom" value={this.state.pUploadCom} onChange={this.handleChange}></textarea></div>
								<div className="col-sm-3"><button type="button">Upload Docs</button><br /><br /><span> 1. Other Documents</span></div>
							</div>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Underwriting</h2>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Underwriting Hit</h2>
							<table className="col-table-4">
								<thead>
									<tr>
										<th><b>CRA</b></th>
										<th><b>Response</b></th>
										<th><b>Score</b></th>
										<th><b>Error Message</b></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
								</tbody>
							</table>
							<p>&nbsp;</p>
							<table>
								<thead>
									<tr>
										<th><strong>Verification Checklist</strong></th>
										<th><strong>Received</strong> </th>
										<th><strong>Verified</strong></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Covered Borrower Identification Statement</td>
										<td align="center"><input name="rCBIS" type="checkbox" defaultChecked={this.state.rCBIS} onChange={this.handleChange} /></td>
										<td align="center"><input name="vCBIS" type="checkbox" defaultChecked={this.state.vCBIS} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Proof of Name Change</td>
										<td align="center"><input name="rPNC" type="checkbox" defaultChecked={this.state.rPNC} onChange={this.handleChange} /></td>
										<td align="center"><input name="vPNC" type="checkbox" defaultChecked={this.state.vPNC} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Bankruptcy Notice</td>
										<td align="center"><input name="rBN" type="checkbox" defaultChecked={this.state.rBN} onChange={this.handleChange} /></td>
										<td align="center"><input name="vBN" type="checkbox" defaultChecked={this.state.vBN} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Bankruptcy Proof of Claim</td>
										<td align="center"><input name="rBPC" type="checkbox" defaultChecked={this.state.rBPC} onChange={this.handleChange} /></td>
										<td align="center"><input name="vBPC" type="checkbox" defaultChecked={this.state.vBPC} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Dismissal/Discharge Bankruptcy</td>
										<td align="center"><input name="rDDB" type="checkbox" defaultChecked={this.state.rDDB} onChange={this.handleChange} /></td>
										<td align="center"><input name="vDDB" type="checkbox" defaultChecked={this.state.vDDB} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Other Bankruptcy Documents</td>
										<td align="center"><input name="rOBD" type="checkbox" defaultChecked={this.state.rOBD} onChange={this.handleChange} /></td>
										<td align="center"><input name="vOBD" type="checkbox" defaultChecked={this.state.vOBD} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>OTHER</td>
										<td align="center"><input name="rOth" type="checkbox" defaultChecked={this.state.rOth} onChange={this.handleChange} /></td>
										<td align="center"><input name="vOth" type="checkbox" defaultChecked={this.state.vOth} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Other Documents</td>
										<td align="center"><input name="rOD" type="checkbox" defaultChecked={this.state.rOD} onChange={this.handleChange} /></td>
										<td align="center"><input name="vOD" type="checkbox" defaultChecked={this.state.vOD} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Proof of Income</td>
										<td align="center"><input name="rPI" type="checkbox" defaultChecked={this.state.rPI} onChange={this.handleChange} /></td>
										<td align="center"><input name="vPI" type="checkbox" defaultChecked={this.state.vPI} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Government ID</td>
										<td align="center"><input name="rGI" type="checkbox" defaultChecked={this.state.rGI} onChange={this.handleChange} /></td>
										<td align="center"><input name="vGI" type="checkbox" defaultChecked={this.state.vGI} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>SSN/ITIN Verification Document</td>
										<td align="center"><input name="rSSN" type="checkbox" defaultChecked={this.state.rSSN} onChange={this.handleChange} /></td>
										<td align="center"><input name="vSSN" type="checkbox" defaultChecked={this.state.vSSN} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Bank Account Verification Document</td>
										<td align="center"><input name="rBAVD" type="checkbox" defaultChecked={this.state.rBAVD} onChange={this.handleChange} /></td>
										<td align="center"><input name="vBAVD" type="checkbox" defaultChecked={this.state.vBAVD} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Proof of Deceased</td>
										<td align="center"><input name="rPD" type="checkbox" defaultChecked={this.state.rPD} onChange={this.handleChange} /></td>
										<td align="center"><input name="vPD" type="checkbox" defaultChecked={this.state.vPD} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Bank Account Statement</td>
										<td align="center"><input name="rBAS" type="checkbox" defaultChecked={this.state.rBAS} onChange={this.handleChange} /></td>
										<td align="center"><input name="vBAS" type="checkbox" defaultChecked={this.state.vBAS} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Primary Phone</td>
										<td>&nbsp;</td>
										<td align="center"><input name="vPP" type="checkbox" defaultChecked={this.state.vPP} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Alternate Phone</td>
										<td>&nbsp;</td>
										<td align="center"><input name="vAP" type="checkbox" defaultChecked={this.state.vAP} onChange={this.handleChange} /></td>
									</tr>
									<tr>
										<td>Work Phone</td>
										<td>&nbsp;</td>
										<td align="center"><input name="vWP" type="checkbox" defaultChecked={this.state.vWP} onChange={this.handleChange} /></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Verification Action</h2>
							<div className="contact-infoscroll">
							<table className="col-table-6">
								<thead>
									<tr>
										<th>Employee Name</th>
										<th>Agent Assigned To</th>
										<th>Date / Time</th>									
										<th>Req Loan Amnt:</th>
										<th>E-sign Date</th>
										<th>Application Status</th>
									</tr>
								</thead>
								<tbody>
									{vaLst}
								</tbody>
							</table>
							</div>
							<br/>
							<div className="col-sm-3"><strong>Approved Amount: </strong><span><input type="text" name="pApprAmt" placeholder="$ 350.00" value={this.state.pApprAmt} onChange={this.handleChange}/></span></div>
							<div className="col-sm-3"><strong>Application Status:</strong>
								<select name="pApplStatus" value={this.state.pApplStatus} onChange={this.handleChange}>
									<option value="self"> &nbsp; </option>
									<option value="2">Approve Loan Request</option>
									<option value="4">Denied</option>
									<option value="5">Need Info/Docs</option>
									<option value="10">Hold</option>
								</select>
							</div>
							<div className="col-sm-3"><strong>Comments:</strong><br /> <textarea className="form-control" cols="30" rows="2" name="pComments" value={this.state.pComments} onChange={this.handleChange}></textarea></div>
						</div>
					</div>  

					<div className="col-sm-12 text-center form-group">						
						<button type="button"> Send Mail </button>
						<button type="button"> Notes </button>
						<button type="button"> Follow-Up Date </button>
						<button type="button"> E-Sign History </button>						
						<button type="button"> Submit </button>
						<button type="button" className="btn-danger"> Cancel </button>
					</div>  
				</div>
			</div>
		</div>
	);
  } 
}