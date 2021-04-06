import React, { Component } from "react";
import Popup from './Popup'
import Datepicker from './common/Datepicker';
import Stlist from './common/States';

export default class RiskManagement	 extends Component {

  constructor (props) {
    super(props);  
    this.appndId = this.appndId.bind(this);
	this.handleChange = this.handleChange.bind(this);
    this.state = {id: '', rSSN: '', rEmail: '', rEmailChk: false, rFName: '', rFNameChk: false, rLName: '', rLNameChk: false, rHomePh: '', rHomePhChk: false, rCellPh: '', rCellPhChk: false, rFaxPh: '', rFaxPhChk: false, rZip: '', rIpAddr: '', rIpAddrChk: false, rDl: '', rDlChk: false, rAddrs: '', rAddrsChk: false, rTimeZone: '', rEmpName: '', rEmpNameChk: false, rJobTitle: '', rJobTitleChk: false, rWorkPh: '', rWorkPhChk: false, rWorkExt: '', rShift: '', rGrossPay: '', rPayFreq: '', rRiskReas: '', rRoutingNbr: '', rBankName: '', rAcntNbr: '', rApplStat: '', rLoanStat: '', rCheckStat: '', rName: '', rBankName1: '', rApr: '', rCustNbr: '', rAcntNbr1: '', rConsTrans: '', rLoanNbr: '', rAdvAmt: '', rConsTrans1: '', rApplDt: '', rFinChrg: '', rLNScr: '', rEsignDt: '', rPriBor: '', rTeleScr: '', rLoanDt: '', rPONxtDueDt: '', rStat: '', rNxtPymtDt: '', rDenilRea: '', rABACode: '', rBankCity: '', rBankSt: '', rEppEligble: '', rNUScr: '', rConEligible: '', rAction: '', rNotes: '', rUrgentChk: false, rMethodDet: '', rFraudRing: '', rRoutingChk: false, rAcntChk: false, debtSale: false, debtTransfer: false, lnRadio: '', paRadio: ''};
  } 

  componentDidUpdate(){
    window.$('#RiskManagementMenu'+this.state.id).metisMenu().show();	 
  }
  
  componentWillMount(){    
    window.$('#RiskManagementMenu'+this.state.id).metisMenu().show();
	let rName = this.props.info.flName;
	let nameSplt = rName.split(' ');
	this.setState({rSSN: this.props.info.ssn, rEmail: this.props.info.email, rEmailChk: true, rFName: nameSplt[0], rFNameChk: true, rLName: nameSplt[1], rLNameChk: true, rHomePh: '', rHomePhChk: false, rCellPh: '(534) 485-6946', rCellPhChk: true, rFaxPh: '', rFaxPhChk: false, rZip: '37172', rIpAddr: '', rIpAddrChk: false, rDl: '3687467', rDlChk: true, rAddrs: '', rAddrsChk: false, rTimeZone: '', rEmpName: 'MARIOTT HOTELS', rEmpNameChk: true, rJobTitle: '', rJobTitleChk: false, rWorkPh: '', rWorkPhChk: false, rWorkExt: '', rShift: '', rGrossPay: '', rPayFreq: '', rRiskReas: '', rRoutingNbr: '', rBankName: '', rAcntNbr: '', rApplStat: '', rLoanStat: '', rCheckStat: '', rName: this.props.info.flName, rBankName1: 'JPMORGAN CHASE', rApr: '195.18 %', rCustNbr: this.props.info.nbr, rAcntNbr1: '228185655', rConsTrans: '0', rLoanNbr: '1000355349', rAdvAmt: '$ 425.00', rConsTrans1: '0', rApplDt: '12/29/2018', rFinChrg: '$ 75.00', rLNScr: '', rEsignDt: '', rPriBor: '$ 425.00', rTeleScr: '', rLoanDt: '01/03/2019', rPONxtDueDt: '', rStat: 'Open', rNxtPymtDt: '04/01/2019', rDenilRea: '', rABACode: 'ACHD', rBankCity: 'Y', rBankSt: '', rEppEligble: 'N', rNUScr: '', rConEligible: 'N', rAction: '', rNotes: '', rUrgentChk: false, rMethodDet: '', rFraudRing: '', rRoutingChk: true, rAcntChk: true, debtSale: false, debtTransfer: false, lnRadio: 'ln', paRadio: 'ln'});
  }

  componentDidMount(){
	this.refs.stVal.loadData('Tennessee');
	this.refs.rHireDt.loadData('');
  };
  
  appndId=(str)=>{        
    this.setState({id: str});
    window.$('#RiskManagementMenu'+str).metisMenu().show();    
  } 

  menus(str){
    this.refs.Popup.dispBlk(str);
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
    
  render(){	
	
	let ldLst = [];
	let padLst = [];
	let aiLst = [];
  
	let ld = [{transDt: '01/03/2019 0:04', trans: 'Advance', tranType: '', totAmt: '500.00', principalBal: '425.00', bankFee: '75.00', csoFee: '0.00', payType: 'ACH', nsfAmt: '0.00', nsfFee: '0.00', waivedFee: '0.00', rebateAmt: '0.00', bkRef: '0.00', cpnAmt: '0.00', empNbr: '1', adjTran: 'ACH'},{transDt: '01/08/2019 14:17', trans: 'Payment Plan', tranType: '', totAmt: '500.00', principalBal: '425.00', bankFee: '75.00', csoFee: '0.00', payType: 'ACH', nsfAmt: '0.00', nsfFee: '0.00', waivedFee: '0.00', rebateAmt: '0.00', bkRef: '0.00', cpnAmt: '0.00', empNbr: '1', adjTran: 'ACH'},{transDt: '02/22/2019 4:49', trans: 'Payment Plan Payment', tranType: '', totAmt: '-125.00', principalBal: '-50.00', bankFee: '-75.00', csoFee: '0.00', payType: 'ACH', nsfAmt: '0.00', nsfFee: '0.00', waivedFee: '0.00', rebateAmt: '0.00', bkRef: '0.00', cpnAmt: '0.00', empNbr: '1', adjTran: 'ACH'},{transDt: '02/22/2019 4:49', trans: 'Payment Plan Payment', tranType: '', totAmt: '-125.00', principalBal: '-50.00', bankFee: '0.00', csoFee: '0.00', payType: 'ACH', nsfAmt: '0.00', nsfFee: '0.00', waivedFee: '0.00', rebateAmt: '0.00', bkRef: '0.00', cpnAmt: '0.00', empNbr: '1', adjTran: 'ACH'},{transDt: '08/25/2018 4:52', trans: 'Payment Plan Payment', tranType: '', totAmt: '-125.00', principalBal: '-50.00', bankFee: '0.00', csoFee: '0.00', payType: 'ACH', nsfAmt: '0.00', nsfFee: '0.00', waivedFee: '0.00', rebateAmt: '0.00', bkRef: '0.00', cpnAmt: '0.00', empNbr: '1', adjTran: 'ACH'},{transDt: '08/25/2018 4:52', trans: 'ACH Deposit', tranType: '', totAmt: '-125.00', principalBal: '-50.00', bankFee: '0.00', csoFee: '0.00', payType: 'ACH', nsfAmt: '0.00', nsfFee: '0.00', waivedFee: '0.00', rebateAmt: '0.00', bkRef: '0.00', cpnAmt: '0.00', empNbr: '1', adjTran: 'ACH'}];
	if(ld.length === 0){
		ldLst.push(<tr><td align="left" colspan="6">Loan Details not available.</td></tr>);
	}else{
		for(let ii=0; ii<=ld.length-1; ii++){
			ldLst.push(<tr><td align="center">{ld[ii].transDt}</td><td align="left">{ld[ii].trans}</td><td align="center">{ld[ii].tranType}</td><td align="right">$ {ld[ii].totAmt}</td><td align="right">$ {ld[ii].principalBal}</td><td align="right">$ {ld[ii].bankFee}</td><td align="right">$ {ld[ii].csoFee}</td><td align="center">{ld[ii].payType}</td><td align="right">$ {ld[ii].nsfAmt}</td><td align="right">$ {ld[ii].nsfFee}</td><td align="right">$ {ld[ii].waivedFee}</td><td align="right">$ {ld[ii].rebateAmt}</td><td align="right">$ {ld[ii].bkRef}</td><td align="right">$ {ld[ii].cpnAmt}</td><td align="center">{ld[ii].empNbr}</td><td align="center">{ld[ii].adjTran}</td></tr>); 
		}
	}
	
	let pad = [{achType: 'DEBIT', achStatus: 'Pending', tranType: 'Payment Plan Payment', dueDate: '03/01/2019', amt: '125.00'},{achType: 'DEBIT', achStatus: 'Pending', tranType: 'Payment Plan Payment', dueDate: '04/01/2019', amt: '125.00'}];
	if(pad.length === 0){
		padLst.push(<tr><td align="left" colspan="6">Pending ACH Debits not available.</td></tr>);
	}else{
		for(let jj=0; jj<=pad.length-1; jj++){
			padLst.push(<tr><td align="center">{pad[jj].achType}</td><td align="center">{pad[jj].achStatus}</td><td align="center">{pad[jj].tranType}</td><td align="center">{pad[jj].dueDate}</td><td align="right">$ {pad[jj].amt}</td></tr>); 
		}
	}
	
	{/*let ai = [{docReview: '', faxId: '', dateTime: '', attachment: '', reassign: '', comments: ''}]*/};
	let ai = [];
	if(ai.length === 0){
		aiLst.push(<tr><td align="left" colspan="6">Account Information not available.</td></tr>);
	}else{
		for(let kk=0; kk<=ai.length-1; kk++){
			aiLst.push(<tr><td align="center">{ai[kk].docReview}</td><td align="center">{ai[kk].faxId}</td><td align="center">{ai[kk].dateTime}</td><td align="center">{ai[kk].attachment}</td><td align="center">{ai[kk].reassign}</td><td align="center">{ai[kk].comments}</td></tr>); 
		}
	}
	
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
				<div className="col-md-4 form-group col-md-offset-8 text-right margin-top">
		  <b>Note:</b> All mandatory Fields are highlighted with <span class="text-danger"><i class="fa fa-asterisk"></i></span>		
		  </div>
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Account Information</h2>						  
						</div>
					</div>					
					<div className="clearfix"></div>
					
					<div className="dispFlx">
						<div className="col-sm-6 col-xs-12 form-group">
							<div className="innerBlockContainer">
								<h2>Personal Details</h2>
								<table className="noBorder noStripe">
									<tbody>
										<tr className="bgHighlt">
											<td>SSN  <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td width="75%"><input type="text" name="rSSN" placeholder="XXX-XX-6385" value={this.state.rSSN} onChange={this.handleChange} /></td>
											<td> &nbsp; </td>
										</tr>
										<tr className="bgHighlt">
											<td>First Name <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rFName" placeholder="Lindsay" value={this.state.rFName} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rFNameChk" defaultChecked={this.state.rFNameChk} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>Last Name <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rLName" placeholder="Fruchey" value={this.state.rLName} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rLNameChk" defaultChecked={this.state.rLNameChk} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Home Phone Nbr</td>
											<td><input type="text" name="rHomePh" placeholder="" value={this.state.rHomePh} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rHomePhChk" defaultChecked={this.state.rHomePhChk} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Cell Phone Nbr</td>
											<td><input type="text" name="rCellPh" placeholder="(534) 485-6946" value={this.state.rCellPh} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rCellPhChk" defaultChecked={this.state.rCellPhChk} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Fax Phone Nbr</td>
											<td><input type="text" name="rFaxPh" placeholder="" value={this.state.rFaxPh} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rFaxPhChk" defaultChecked={this.state.rFaxPhChk} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>State of Residence <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><Stlist id={'raddr'} name={'ste'} ref="stVal" /></td>
											<td></td>
										</tr>
										<tr className="bgHighlt">
											<td>Zip <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rZip" placeholder="37172" value={this.state.rZip} onChange={this.handleChange} /></td>
											<td></td>
										</tr>
										<tr className="bgHighlt">
											<td>E-mail Address <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rEmail" placeholder="lfruchey83@gmail.com" value={this.state.rEmail} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rEmailChk" defaultChecked={this.state.rEmailChk} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>IP Address <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rIpAddr" placeholder="" value={this.state.rIpAddr} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rIpAddrChk" defaultChecked={this.state.rIpAddrChk} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>Driver-License-Number <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rDl" placeholder="3687467" value={this.state.rDl} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rDlChk" defaultChecked={this.state.rDlChk} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>Address <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rAddrs" placeholder="1332 Sun Crest Ln, Springfield" value={this.state.rAddrs} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rAddrsChk" defaultChecked={this.state.rAddrsChk} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>Time Zone <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rTimeZone" placeholder="" value={this.state.rTimeZone} onChange={this.handleChange} /></td>
											<td></td>
										</tr>
									</tbody>	
								</table>
							</div>
						</div>
						<div className="col-sm-6 col-xs-12 form-group">
							<div className="innerBlockContainer">
								<h2>Employment Details</h2>
								<table className="noBorder noStripe">
									<tbody>
										<tr className="bgHighlt">
											<td>Employer Name <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td width="68%"><input type="text" name="rEmpName" placeholder="MARIOTT HOTELS" value={this.state.rEmpName} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rEmpNameChk" defaultChecked={this.state.rEmpNameChk} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Job Title</td>
											<td><input type="text" name="rJobTitle" placeholder="" value={this.state.rJobTitle} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rJobTitleChk" defaultChecked={this.state.rJobTitleChk} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Work Phone Nbr</td>
											<td><input type="text" name="rWorkPh" placeholder="" value={this.state.rWorkPh} onChange={this.handleChange} /></td>
											<td><input type="checkbox" name="rWorkPhChk" defaultChecked={this.state.rWorkPhChk} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Work Extn (optional)</td>
											<td><input type="text" name="rWorkExt" placeholder="" value={this.state.rWorkExt} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Shift</td>
											<td><select name="rShift" value={this.state.rShift} onChange={this.handleChange}><option value=""></option><option value="CI">COLLATERAL IMPAIRED</option><option value="DBC">DISALLOWED BY COURT</option><option value="IL">IN LITIGATION</option><option value="POTP">PAYING OUTSIDE THE PLAN</option><option value="RIS">RECEIVED INSURANCE SETTLEMENT</option><option value="VS">VEHICLE SOLD</option><option value="VVS">VEHICLE VOLUNTARILY SURRENDER</option></select></td>
										</tr>
										<tr>
											<td>Hire Date / Benefit Start Date</td>
											<td><Datepicker id={'rHireDt'} name={'date'} ref='rHireDt' /></td>
										</tr>
										<tr className="bgHighlt">
											<td>Gross Payroll <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rGrossPay" placeholder="$ 5000.00" value={this.state.rGrossPay} onChange={this.handleChange} /></td>
										</tr>
										<tr className="bgHighlt">
											<td>Pay Frequency <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><select name="rPayFreq" value={this.state.rPayFreq} onChange={this.handleChange}><option value=""></option><option value="BI">Bi-Weekly</option><option value="MON">Monthly</option><option value="BIM">Semi-Monthly</option><option value="WK">Weekly</option></select></td>
										</tr>
										<tr className="bgHighlt">
											<td>Risk Reasons <span className="text-danger"><i className="fa fa-asterisk"></i></span> </td>
											<td><input type="text" name="rRiskReas" placeholder="CP,BI" value={this.state.rRiskReas} onChange={this.handleChange}/></td>
										</tr>									
									</tbody>	
								</table>
							</div>
						</div>
					</div>				
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2> Banking Details </h2>
							<div className="col-sm-12">
								<div className="row">
									<div className="contact-infoscroll">
									<table width="100%" border="0" className="col-table-4 cellGap noBorder noStripe">
										<tbody>
											<tr>
												<td className="bgHighlt">
												<label for="rRoutingChk">ABA or Bank Routing Nbr</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
													&nbsp;&nbsp; <input type="checkbox" id="rRoutingChk" name="rRoutingChk" defaultChecked={this.state.rRoutingChk} onChange={this.handleChange} />
													<input type="text" name="rRoutingNbr" placeholder="267084131" value={this.state.rRoutingNbr} onChange={this.handleChange} />
												</td>
												<td className="bgHighlt">
												Bank Name  <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
												<input type="text" name="rBankName" placeholder="JPMORGAN CHASE" value={this.state.rBankName} onChange={this.handleChange} /></td>
												<td className="bgHighlt">
												<label for="rAcntChk">Bank Account Nbr</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
													&nbsp;&nbsp; <input type="checkbox" id="rAcntChk" name="rAcntChk" defaultChecked={this.state.rAcntChk} onChange={this.handleChange} />
													<input type="text" name="rAcntNbr" placeholder="228185655" value={this.state.rAcntNbr} onChange={this.handleChange} />
												</td>
												<td>&nbsp;</td>
											</tr>											
										</tbody>
									</table>
									</div>
								</div>
							</div>
						</div>
					</div>
	  
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2> Application/Loan Status </h2>
							<div className="col-sm-12">
								<div className="row">
								<div className="contact-infoscroll">
									<table width="100%" border="0" className="col-table-4 cellGap noBorder noStripe">
										<tbody>
											<tr>
												<td>Application Status:
													<select name="rApplStat" value={this.state.rApplStat} onChange={this.handleChange}>
														<option value="">Originated</option>
													</select>
												</td>
												<td className="bgHighlt">
												Loan Status:  <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
													<select name="rLoanStat" value={this.state.rLoanStat} onChange={this.handleChange}>
														<option value="">Open</option>
													</select>
												</td>
												<td>Check Status:
													<select name="rCheckStat" value={this.state.rCheckStat} onChange={this.handleChange}>
														<option value="">ACH Deposit</option>
													</select>
												</td>
												<td>Risk Status:</td>
											</tr>
										</tbody>
									</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-sm-6 form-group">
						<div className="innerBlockContainer">
							<h2> Document History</h2>							
						</div>
					</div>
					
					<div className="col-sm-6 form-group">
						<div className="innerBlockContainer">
							<h2>Verification Checklist</h2>							
						</div>
					</div>
					
					<div className="col-sm-6">
						<div className="innerBlockContainer">
							<h2></h2>
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th>Document Received</th>
										<th>Date Received </th>
										<th>Document Verified </th>
										<th>Verified by</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>&nbsp;</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
							</div>
						</div>
					</div>	
					
					<div className="col-sm-6">
						<div className="innerBlockContainer">
							<h2></h2>
							<table>
								<thead>
									<tr>
										<th>Document </th>
										<th>Received </th>
										<th>Verified</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>&nbsp;</td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>	
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Account Information</h2>
							<table>
								<thead>
									<tr>
										<th>Documents Reviewed</th>
										<th>Fax ID</th>
										<th>Date & Time</th>
										<th>Attachments</th>
										<th>Re Assign</th>
										<th>Comments</th>
									</tr>
								</thead>
								<tbody>
									{aiLst}
								</tbody>
							</table>
						</div>
					</div>	
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">	
							<h2> Pending ACH Debits</h2>		
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th>ACH Type</th>
										<th>ACH Status</th>
										<th>Transaction Type</th>
										<th>Due Date</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									{padLst}
								</tbody>
							</table>
							</div>
						</div>
					</div>
					
					<div className="col-sm-12">
						
							<div className="innerBlockContainer">
								<h2>Transaction History</h2>
								<div className="col-sm-12">
									<div className="row">
										<div className="contact-infoscroll">
										<table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
											<tbody>
											<tr>
												<td>Customer</td>
												<td>{this.state.rName}</td>
												<td>Bank</td>
												<td>{this.state.rBankName1}</td>
												<td>APR</td>
												<td>{this.state.rApr}</td>
											</tr>
											<tr>
												<td>Cust Nbr</td>
												<td>{this.state.rCustNbr}</td>
												<td>Account Nbr</td>
												<td>{this.state.rAcntNbr1}</td>
												<td>Cons Trans</td>
												<td>{this.state.rConsTrans}</td>
											</tr>
											<tr>
												<td>Loan Nbr</td>
												<td>{this.state.rLoanNbr}</td>
												<td>Adv Amt</td>
												<td>{this.state.rAdvAmt}</td>
												<td>Consecutive Transaction</td>
												<td>{this.state.rConsTrans1}</td>
											</tr>
											<tr>
												<td>Application Date</td>
												<td>{this.state.rApplDt}</td>
												<td>Finance Charge</td>
												<td>{this.state.rFinChrg}</td>
												<td>Lexis Nexis Score</td>
												<td>{this.state.rLNScr}</td>
											</tr>
											<tr>
												<td>Esign Date</td>
												<td>{this.state.rEsignDt}</td>
												<td>Principal Borrowed</td>
												<td>{this.state.rPriBor}</td>
												<td>Teletrack Score</td>
												<td>{this.state.rTeleScr}</td>
											</tr>
											<tr>
												<td>Loan Date</td>
												<td>{this.state.rLoanDt}</td>
												<td>PO Next Due Date</td>
												<td>{this.state.rPONxtDueDt}</td>
												<td>Status</td>
												<td>{this.state.rStat}</td>
											</tr>
											<tr>
												<td>Next Payment Date</td>
												<td>{this.state.rNxtPymtDt}</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>Denial Reason</td>
												<td>{this.state.rDenilRea}</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
											<tr>
												<td>ABA Code</td>
												<td>{this.state.rABACode}</td>
												<td>Bank City</td>
												<td>{this.state.rBankCity}</td>
												<td>Bank State</td>
												<td>{this.state.rBankSt}</td>
											</tr>
											<tr>
												<td>Epp Eligible</td>
												<td>{this.state.rEppEligble}</td>
												<td>NUSScore</td>
												<td>{this.state.rNUScr}</td>
												<td>Consolidation Eligible</td>
												<td>{this.state.rConEligible}</td>
											</tr>
										</tbody>	
										</table>
										</div>
									</div>
								</div>
							</div>
						
					</div>			
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Loan Details</h2>
							<div className="contact-infoscroll">
							<table width="100%">
								<thead className="formHeading">
									<tr>
										<th>Trans Date</th>
										<th>Transaction</th>
										<th>Tran Type</th>
										<th>Total Amount</th>
										<th>Principal Interest</th>
										<th>Bank Fee</th>
										<th>CSO Fees</th>
										<th>Pay Type</th>
										<th>NSF Amt</th>
										<th>NSF Fees</th>
										<th>Waived Fees</th>
										<th>Rebate Amt</th>
										<th>BK Refund</th>
										<th>Cpn Amt</th>
										<th>Emp Nbr</th>
										<th>Adjustment Transaction</th>
									</tr>
								</thead>
								<tbody>
									{ldLst}
								</tbody>
							</table>
							</div>
						</div>
					</div> 
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Document History</h2>
							<div className="col-sm-6">
								<div className="row">
									<table width="100%" border="0" className="noBorder noStripe">
										<tbody>
										<tr>
											<td align="right"><button type="button"> E-Signature </button></td>
										</tr>										
										</tbody>
									</table>
								</div>
							</div>							
							<div className="col-sm-6">
								<div className="row">
									<table width="100%" border="0" className="noBorder noStripe">
									<tbody>
										<tr>
											<td align="left"><button type="button"> Notes </button></td>
										</tr>										
									</tbody>	
									</table>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Notes</h2>
							<div className="col-sm-12">
								<div className="row">
									<div className="contact-infoscroll">
									<table width="100%" border="0" className="cellGap noBorder noStripe">
										<tbody>
											<tr>
												<td valign="top">Action	
													<select name="rAction" value={this.state.rAction} onChange={this.handleChange}>
														<option value=""></option><option value="AI">Account Inquiry</option><option value="CB">Called Bank</option><option value="CCCS">Called CCCS</option><option value="CCL">Complaint-CCL</option><option value="CV">Customer Visited</option><option value="ICA">Incoming Call Attorney</option><option value="ICC">Incoming call Customer</option><option value="ICO">Incoming call Other</option><option value="LAP">Lead - Application</option><option value="LA">Legal Action</option><option value="LR">Letter received</option><option value="LS">Letter sent</option><option value="MR">Mail Received</option><option value="OCBK">Outgoing Call Bankruptcy Hotline</option><option value="OCC">Outgoing Courtesy Call</option><option value="OCA">Outgoing call Attorney</option><option value="OCO">Outgoing call Other</option><option value="OCOC">Outgoing call Other Cell</option><option value="OCP">Outgoing call Primary</option><option value="OCCS">Outgoing call Secondary</option><option value="OCW">Outgoing call Work</option><option value="PTPI">PTP Inquiry</option><option value="PI">Payment Inquiry</option><option value="PCRL">Printed Check / Refund Letter</option><option value="PL">Printed Collection Letter</option><option value="RPOG">RP Offer Letter Generated</option><option value="RV">Reviewed</option><option value="SC">See Comments</option>
													</select>
												</td>												
												<td valign="top">Notes
												<textarea className="form-control" cols="30" rows="2" name="rNotes" onChange={this.handleChange}>{this.state.rNotes}</textarea></td>
												<td valign="top">
												<label for="rUrgentChk">Urgent</label>&nbsp;<input type="checkbox" id="rUrgentChk" name="rUrgentChk" defaultChecked={this.state.rUrgentChk} onChange={this.handleChange} /></td>
												<td valign="top"><input type="radio" name="lnRadio" id="loanNotes" value="ln" checked={this.state.lnRadio === 'ln'} onChange={this.handleChange} /> &nbsp; <label for="loanNotes">Loan Notes</label></td>
												<td valign="top"><input type="radio" name="lnRadio" id="allNotes" value="an" checked={this.state.lnRadio === 'an'} onChange={this.handleChange} /> &nbsp; <label for="allNotes">All Notes</label></td>												
												<td valign="top"><button type="button"> Add Note </button></td>
											</tr>											
																				
										</tbody>
									</table>
									</div>
								</div>
							</div>	
					
							<div className="col-sm-12">
								<div className="row">							
									<table>
										<thead>
											<tr>
												<th>Urgent</th>
												<th>Date</th>
												<th>Loan Nbr</th>
												<th>Module</th>
												<th>Action</th>
												<th>Notes</th>
												<th>Entered by</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>&nbsp;</td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
										</tbody>
									</table>
									<p>&nbsp;</p>
									<table width="100%" border="0" className="cellGap noBorder noStripe">
									<tr>
												<td width="10%">Fraud Assignment</td>
												<td>
													<button type="button"> Confirm </button> 
													<button type="button"> Clear </button> <button type="button"> Link Customers </button></td>
											</tr>
											</table>
									<table width="100%" border="0" className="col-table-4 cellGap noBorder noStripe">
										<tbody>
											<tr>
												<td>Method of Detection
													<select name="rMethodDet" value={this.state.rMethodDet} onChange={this.handleChange}>
														<option value=""></option><option value="IP">IP Link</option><option value="ML">Multiple Links</option><option value="MA">Multiple Accounts</option><option value="AD">Altered Documents</option><option value="EBR">EBR</option><option value="COL">Collections</option><option value="IDT">ID Theft</option><option value="BN">Bank Notification</option><option value="OTH">Other</option><option value="HP">HP Link</option><option value="CP">CP Link</option><option value="WP">WP Link</option><option value="FAX">FAX Link</option><option value="BA">BA Link</option><option value="ABA">ABA Link</option><option value="POE">POE Link</option><option value="JT">JT Link</option><option value="NAME">Name Link</option><option value="ADDRESS">Address Link</option><option value="DL">DL Link</option><option value="EA">EA Link</option><option value="EP">EP Link</option>
													</select>
												</td>
												<td>Fraud Ring
													<select name="rFraudRing" value={this.state.rFraudRing} onChange={this.handleChange}>
														<option value=""></option><option value="0">New</option>
													</select>
												</td>
												<td>Primary Applicant?<br />
												<input type="radio" name="paRadio" id="loanNotes1" value="ln" checked={this.state.paRadio === 'ln'} onChange={this.handleChange} /> &nbsp; <label for="loanNotes1">Loan Notes</label> &nbsp; &nbsp; <input type="radio" name="paRadio" id="allNotes1" value="an" checked={this.state.paRadio === 'an'} onChange={this.handleChange} /> &nbsp; <label for="allNotes1">All Notes</label></td>
												<td>&nbsp;</td>
											</tr>										
										</tbody>	
									</table>
								</div>
							</div>
						</div>
					</div>	
								
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Transaction Selection</h2>
						</div>
					</div>
					
					<div className="col-sm-6 form-group">
						<div className="innerBlockContainer">
							<h2><input type="checkbox" id="debtTransfer" name="debtTransfer" defaultChecked={this.state.debtTransfer} onChange={this.handleChange} /> &nbsp; <label for="debtTransfer">Debt Marked for Transfer</label></h2>
						</div>
					</div>
					
					<div className="col-sm-6 form-group">
						<div className="innerBlockContainer">
							<h2><input type="checkbox" id="debtSale" name="debtSale" defaultChecked={this.state.debtSale} onChange={this.handleChange} /> &nbsp; <label for="debtSale">Debt Marked for Sale</label></h2>
						</div>
					</div>
					
					<div className="col-sm-12 text-center form-group" id={'RiskManagementMenu'+this.state.id}>
						<button type="button" onClick={()=>this.menus('WDL')}> Withdraw Loan </button>
						<button type="button" onClick={()=>this.menus('Void')}> Void </button>
						<button type="button"> Rescind </button>
						<button type="button"> Transfer to Collections </button>					
						<button type="button"> Early Payoff </button>
						<button type="button"> Payment </button>
						<button type="button"> Deny Loan </button>
					</div>
					
					<div className="col-sm-12 text-center form-group">
						<button type="button"> Save </button> 
						<button className="btn-danger" type="button"> Cancel </button>
						{/*<button className="btn-warning" type="button"> Back </button>*/}					
					</div> 
				</div>
				<Popup ref='Popup' />
			</div>
		</div>
	);
  } 
}