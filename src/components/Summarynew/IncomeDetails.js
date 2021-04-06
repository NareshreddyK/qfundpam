import React, { Component } from "react";
import Datepicker from '../common/Datepicker';
import Stlist from '../common/States';

export default class IncomeDetails extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {iIncHolder: '', iIncTyp: '', iEmp: '', iIncStat: '', iWrkPh: '', iNetInc: '', iGrossInc: '', iPayFreq: '', iDirDep: '', dncChkBox: false, badphChkBox: false, val: ''};
  }

  componentDidMount(){
	this.refs.HireDt.loadData("");
	this.refs.nxtPayDt.loadData("");
	this.refs.payRevDt.loadData("");
	this.refs.paystubDt.loadData("");
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({iIncHolder: '', iIncTyp: '', iEmp: '', iIncStat: '', iWrkPh: '', iNetInc: '', iGrossInc: '', iPayFreq: '', iDirDep:'', dncChkBox: false, badphChkBox: false, val: true});
	}else{
		this.setState({iIncHolder: '', iIncTyp: '', iEmp: '', iIncStat: '', iWrkPh: '', iNetInc: '', iGrossInc: '', iPayFreq: '', iDirDep:'', dncChkBox: false, badphChkBox: false, val: false});
	}
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){
	const eqHght = {
		display: 'flex'
	};
	
	let idLst = [];
	let incType = "";
	let payFreqVal = "";
	let garnishVal = "";
	let incStatusVal = "";
	
	let id = [{incHolder: 'S', employer: 'MARIOTT HOTELS', netPay: '5000.00', grossPay: '5000.00', payFreq: 'MON', granish: 'N', incStatus: 'A', select: '1'}];
	if(this.state.val === false){
		idLst.push(<tr><td align="center" colspan="9">Income Details not available.</td></tr>);
	}else{
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
			
			idLst.push(<tr><td align="center">{incType}</td><td align="center">{id[b].employer}</td><td align="right">$ {id[b].netPay}</td><td align="right">$ {id[b].grossPay}</td><td align="center">{payFreqVal}</td><td align="center">{garnishVal}</td><td align="center">{incStatusVal}</td><td align="center"><select><option value="1" selected>Edit</option><option value="2">Delete</option></select></td><td align="center"><button type="button"> GO </button></td></tr>); 
		}
	}	
	
	return (
	
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Income Details <button className="pull-right" type="button"> Add Income Source </button><span className="pull-right"><label for="markFraud">Mark As Fraud:</label> &nbsp; <input type="checkbox" id="markFraud"/>&nbsp;&nbsp;&nbsp;</span></h2>
				<div className="col-sm-12 form-group">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap">
							<tbody>
								<tr>
									<td>Income Holder <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="iIncHolder" value={this.state.iIncHolder} onChange={this.handleChange}>
											<option value="">Income Holder</option>
											<option value="S">Self</option>
										</select>
									</td>
									<td>Income Type <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="iIncTyp" value={this.state.iIncTyp} onChange={this.handleChange}>
											<option value="">Income Type</option>
											<option value="EM">Employed</option>
											<option value="GP">Government Payment</option>
											<option value="O">Other</option>
											<option value="RT">Retirement</option>
											<option value="SE">Self Employed</option>
										</select>
									</td>
																				
									<td>Employer <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="iEmp" placeholder="Employer" value={this.state.iEmp} onChange={this.handleChange} /></td>
									<td>Income Status
										<select name="iIncStat" value={this.state.iIncStat} onChange={this.handleChange}>
											<option value="">Income Status</option>
											<option value="A">Active</option>
											<option value="I">Inactive</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>Address Line 1<br/>
									<input type="text" name="iAddrs1" placeholder="Address Line 1" value={this.state.iAddrs1} onChange={this.handleChange} /></td>
									<td>Address Line 2<br/>
									<input type="text" name="iAddrs2" placeholder="Address Line 2" value={this.state.iAddrs2} onChange={this.handleChange} /></td>
								
									<td>City<br/>
									<input type="text" name="iCity" placeholder="City" value={this.state.iCity} onChange={this.handleChange} /></td>
									<td>State
										<Stlist id={'iState'} name={'ste'} ref="stVal" /></td>
								</tr>
								<tr>
									<td>Zip Code<br/>
									<input type="text" name="iZipcode" placeholder="Zip Code" value={this.state.iZipcode} onChange={this.handleChange} /></td>
									<td>Employment Shift<br/>
									<input type="text" name="iEmpShift" placeholder="Employment Shift" value={this.state.iEmpShift} onChange={this.handleChange} /></td>
								
									<td>Work Phone <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="iWrkPh" placeholder="Work Phone" value={this.state.iWrkPh} onChange={this.handleChange} /></td>
									<td valign="bottom"><label for="dncChkBox">DNC</label> &nbsp;<input type="checkbox" id="dncChkBox" name="dncChkBox" defaultChecked={this.state.dncChkBox} onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;<label for="badphChkBox">Bad Phone</label> &nbsp; <input type="checkbox" id="badphChkBox" name="badphChkBox" defaultChecked={this.state.badphChkBox} onChange={this.handleChange} />&nbsp; </td>
									<td></td>
								</tr>
								<tr>
									<td>Garnishment Amt <br/>
									<input type="text" name="iGarnishment" placeholder="Garnishment Amt" value={this.state.iGarnishment} onChange={this.handleChange} /></td>
									<td>Net Income Amt <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="iNetInc" placeholder="Net Income Amt" value={this.state.iNetInc} onChange={this.handleChange} /></td>
								
									<td>Gross Income Amt <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="iGrossInc" placeholder="Gross Income Amt" value={this.state.iGrossInc} onChange={this.handleChange} /></td>
									<td>Next Pay Date <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<Datepicker id={'nxtPayDt'} name={'date'} ref='nxtPayDt' /></td>
								</tr>
								<tr>
									<td>Pay Frequency <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="iPayFreq" value={this.state.iPayFreq} onChange={this.handleChange}>
											<option value="">Pay Frequency</option>
											<option value="BIW">Bi-Weekly</option>
											<option value="MON">Monthly</option>
											<option value="BIM">Semi-Monthly</option>
											<option value="WKY">Weekly</option>
										</select>
									</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
								<tr className="hide" id="monthly">
									<td align="left" colspan="4">
										<div className="row payDates">
											<div className="col-sm-12 form-group">
												Which day are you paid each month?
											</div>
											<div className="clearfix"></div>
											<div className="col-sm-1"><input type="radio" name="mnthRadio" />&nbsp; The</div>
											<div className="col-sm-2">
												<select>
													<option value="0">&nbsp;</option>
													<option value="1">1st</option>
													<option value="2">2nd</option>
													<option value="3">3rd</option>
													<option value="4">4th</option>
													<option value="5">5th</option>
													<option value="6">6th</option>
													<option value="7">7th</option>
													<option value="8">8th</option>
													<option value="9">9th</option>
													<option value="10">10th</option>
													<option value="11">11th</option>
													<option value="12">12th</option>
													<option value="13">13th</option>
													<option value="14">14th</option>
													<option value="15">15th</option>
													<option value="16">16th</option>
													<option value="17">17th</option>
													<option value="18">18th</option>
													<option value="19">19th</option>
													<option value="20">20th</option>
													<option value="21">21st</option>
													<option value="22">22nd</option>
													<option value="23">23rd</option>
													<option value="24">24th</option>
													<option value="25">25th</option>
													<option value="26">26th</option>
													<option value="27">27th</option>
													<option value="28">28th</option>
													<option value="29">29th</option>
													<option value="30">30th</option>
													<option value="31">31st</option>
													<option value="99">Last Day</option>
												</select>
											</div>
											<div className="col-sm-3">of each Month</div>
											<div className="clearfix"></div>
											<div class="col-sm-1"><input type="radio" name="mnthRadio" />&nbsp; The</div>
											<div className="col-sm-2">
												<select>
													<option value="0">&nbsp;</option>
													<option value="1">First</option>
													<option value="2">Second</option>
													<option value="3">Third</option>
													<option value="4">Fourth</option>
													<option value="99">Last</option>
												</select>
											</div>
											<div className="col-sm-2">
												<select>
													<option value="-1"></option>
													<option value="0">Sunday</option>
													<option value="1">Monday</option>
													<option value="2">Tuesday</option>
													<option value="3">Wednesday</option>
													<option value="4">Thursday</option>
													<option value="5">Friday</option>
													<option value="6">Saturday</option>
												</select>
											</div>
											<div class="col-sm-3">of each Month</div>
										</div>
									</td>
								</tr>
								<tr className="hide" id="semiMonthly">
									<td align="left" colspan="4">
									<div className="row payDates">
											<div className="col-sm-12 form-group">
												Which day are you paid each month?
											</div>
											<div className="col-sm-12 form-group">
												<input type="radio" name="bimRadio" />&nbsp; The 1st and 16th day of each month
											</div>
											<div className="col-sm-12 form-group">
												<input type="radio" name="bimRadio" />&nbsp; The 15th and last day of each month
											</div>
											<div className="col-sm-12 form-group">
												<input type="radio" name="bimRadio" />&nbsp; Other
											</div>
											<div className="clearfix"></div>
											<div className="col-sm-1 col-sm-offset-1"><input type="radio" name="bimRadio1" />&nbsp; The</div>
											<div className="col-sm-2">
												<select>
													<option value="0">&nbsp;</option>
													<option value="1">1st</option>
													<option value="2">2nd</option>
													<option value="3">3rd</option>
													<option value="4">4th</option>
													<option value="5">5th</option>
													<option value="6">6th</option>
													<option value="7">7th</option>
													<option value="8">8th</option>
													<option value="9">9th</option>
													<option value="10">10th</option>
													<option value="11">11th</option>
													<option value="12">12th</option>
													<option value="13">13th</option>
													<option value="14">14th</option>
													<option value="15">15th</option>
												</select>
											</div>
											<div className="col-sm-1"> and </div>
											<div className="col-sm-2">
												<select>
													<option value="0">&nbsp;</option>
													<option value="16">16th</option>
													<option value="17">17th</option>
													<option value="18">18th</option>
													<option value="19">19th</option>
													<option value="20">20th</option>
													<option value="21">21st</option>
													<option value="22">22nd</option>
													<option value="23">23rd</option>
													<option value="24">24th</option>
													<option value="25">25th</option>
													<option value="26">26th</option>
													<option value="27">27th</option>
													<option value="28">28th</option>
													<option value="29">29th</option>
													<option value="30">30th</option>
													<option value="31">31st</option>
													<option value="99">Last Day</option>
												</select>
											</div>
											<div className="clearfix"></div>
											<div class="col-sm-1 col-sm-offset-1"><input type="radio" name="bimRadio1" />&nbsp; The</div>
											<div className="col-sm-2">
												<select>
													<option value="0">&nbsp;</option>
													<option value="1">First</option>
													<option value="2">Second</option>
												</select>
											</div>
											<div className="col-sm-2">
												<select>
													<option value="-1"></option>
													<option value="0">Sunday</option>
													<option value="1">Monday</option>
													<option value="2">Tuesday</option>
													<option value="3">Wednesday</option>
													<option value="4">Thursday</option>
													<option value="5">Friday</option>
													<option value="6">Saturday</option>
												</select>
											</div>
											<div className="col-sm-1"> and </div>
											<div className="col-sm-2">
												<select>
													<option value="0">&nbsp;</option>
													<option value="3">Third</option>
													<option value="4">Fourth</option>
													<option value="99">Last</option>
												</select>
											</div>
											<div className="col-sm-2">
												<select>
													<option value="-1"></option>
													<option value="0">Sunday</option>
													<option value="1">Monday</option>
													<option value="2">Tuesday</option>
													<option value="3">Wednesday</option>
													<option value="4">Thursday</option>
													<option value="5">Friday</option>
													<option value="6">Saturday</option>
												</select>
											</div>
										</div>
									</td>
								</tr>
								<tr className="hide" id="weekly">
									<td align="left" colspan="4">
										<div className="row payDates">
											<div className="col-sm-12 form-group">
												Which day of the week are you paid?
											</div>
											<div class="col-sm-12 form-group">
												<input type="radio" name="wRadio"/>&nbsp; Sunday <br/>
												<input type="radio" name="wRadio"/>&nbsp; Monday <br/>
												<input type="radio" name="wRadio"/>&nbsp; Tuesday <br/>
												<input type="radio" name="wRadio"/>&nbsp; Wednesday <br/>
												<input type="radio" name="wRadio"/>&nbsp; Thursday <br/>
												<input type="radio" name="wRadio"/>&nbsp; Friday <br/>
												<input type="radio" name="wRadio"/>&nbsp; Saturday <br/>
											</div>
										</div>
									</td>
								</tr>
								<tr className="hide" id="biWeekly">
									<td align="left" colspan="4">
										<div className="row payDates">
											<div className="col-sm-12 form-group">
												Which day of the week are you paid?
											</div>
											<div class="col-sm-12 form-group">
												<input type="radio" name="biwRadio"/>&nbsp; Sunday <br/>
												<input type="radio" name="biwRadio"/>&nbsp; Monday <br/>
												<input type="radio" name="biwRadio"/>&nbsp; Tuesday <br/>
												<input type="radio" name="biwRadio"/>&nbsp; Wednesday <br/>
												<input type="radio" name="biwRadio"/>&nbsp; Thursday <br/>
												<input type="radio" name="biwRadio"/>&nbsp; Friday <br/>
												<input type="radio" name="biwRadio"/>&nbsp; Saturday <br/>
											</div>
											<div class="clearfix"></div>
											<div class="col-sm-4" id="biWk_first0"></div>
											<div class="col-sm-4" id="biWk_second0"></div>
										</div>
									</td>
								</tr>
								<tr>
									<td>Job Title <br/>
									<input type="text" name="iJobTitle" placeholder="Job Title" value={this.state.iJobTitle} onChange={this.handleChange} /></td>
									<td>Supervisor <br/>
									<input type="text" name="iSupervisor" placeholder="Supervisor" value={this.state.iSupervisor} onChange={this.handleChange} /></td>
								
									<td>Hire Date <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<Datepicker id={'HireDt'} name={'date'} ref='HireDt' /></td>								
									<td>Direct Deposit
										<select name="iDirDep" value={this.state.iDirDep} onChange={this.handleChange}>
											<option value="">Direct Deposit</option>
											<option value="Y">Yes</option>
											<option value="N">No</option>
										</select>
									</td>
								</tr>
								<tr>
									<td>Pay Stub Reviewed Date <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<Datepicker id={'payRevDt'} name={'date'} ref='payRevDt' /></td>
									
									<td>Pay Stub Date <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<Datepicker id={'paystubDt'} name={'date'} ref='paystubDt' /></td>	
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<p>&nbsp;</p>
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
									<th>Select</th>
									<th>&nbsp; </th>
								</tr>
							</thead>
							<tbody>
								{idLst}
							</tbody>
						</table>
						</div>
					</div>

				</div>
			</div>
		</div>
	
	);
  } 
}