import React, { Component } from "react";
import Datepicker from "./common/Datepicker";
import SimpleReactValidator from 'simple-react-validator';

export default class Income extends Component {
  constructor(props){
    super(props);    
    this.state = {hidediv: false, hideInner: false, iSsn: '', iFName: '', iLName: '', iIncHolder: '', iIncTyp: '', iEmp: '', iIncStat: '', iWrkPh: '', iWrkPhExt: '', iNetInc: '', iGrossInc: '', iPayFreq: '', iDirectDep: ''}; 
    this.close = this.close.bind(this); 
	this.handleChange = this.handleChange.bind(this);
	this.ssnValid = new SimpleReactValidator();
  }

  componentWillMount(){
    this.setState({iFName: 'Tiger', iLName: 'Nixon', iIncHolder: '', iIncTyp: '', iEmp: '', iIncStat: '', iWrkPh: '', iWrkPhExt: '', iNetInc: '', iGrossInc: '', iPayFreq: '', iDirectDep: ''});
  }

  componentDidMount(){
    this.refs.iNxtPayDt.loadData("");
    this.refs.iPayStubRev.loadData("");
    this.refs.iPayStubDt.loadData("");
    this.refs.iHireDt.loadData("");
  }
  
  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }
  
  income(){    
    this.setState({hidediv: true});
  }
  
  incInner(){    
    if (this.ssnValid.allValid()) {
		this.setState({hideInner: true, hideMain: true});
	} else {
		this.ssnValid.showMessages();
		this.forceUpdate();
	}
  }
  
  close(){
    this.setState({hidediv: false});
	this.setState({hideInner: false});
	this.setState({hideMain: false});	  
  }
  
 maxmize=()=>{
    let wHeight = window.$(document).height();
	window.$("#edit-inc-pop").css('height', (wHeight-125)+"px");
    window.$("#editinc1").css('height', (wHeight-195)+"px");
  }
  
  minimize=()=>{
    let wHeight = window.$(document).height();
	window.$("#edit-inc-pop").css('height', "auto");
    window.$("#editinc1").css('height', "208px");
  }
  
  disp=(str)=>{
    this.setState({hidediv: true});
  } 
  
  render(){
    return (      
		<div id="edit-inc-pop" className="footer-btn" hidden={!this.state.hidediv}>
		<div className="col-sm-12">
		<div className="row">
			<div className="mkePymt">
				<h2>
					<i className="fa fa-edit"></i> Edit Income
					<span id="close" onClick={this.close} className="footer-close"><i className="fas fa-times"></i></span>&nbsp;
					<span id="minmiz" onClick={()=>this.minimize()} className="footer-min"><i className="fas fa-window-maximize"></i></span>&nbsp;
					<span id="maxmiz" onClick={()=>this.maxmize()} className="footer-max"><i className="far fa-window-maximize"></i></span>
				</h2>
			</div>
				
			<div id="editinc" hidden={this.state.hideMain}>					
				<div className="col-sm-5 form-group text-left"><label>SSN Nbr</label></div>
				<div className="col-sm-7 form-group">
					<input type="text" name="iSsn" className="ssnFormat" placeholder="XXX-XX-XXXX" maxlength="11" value={this.state.iSsn} onChange={this.handleChange} />
					<div className="text-left error">{this.ssnValid.message('ssn', this.state.iSsn, 'required|min:11|max:11')}</div>
				</div>
				<div className="col-sm-12 form-group"><button type="button" id="editincsearch" onClick={()=>this.incInner()}> Search </button></div>
			</div>
				
				
				<div id="editinc1" className="col-sm-12 text-left" hidden={!this.state.hideInner}>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>SSN Nbr</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="iSsn" placeholder="XXX-XX-XXXX" value={this.state.iSsn}/>
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>First Name</label>
						</div>
						<div className="col-sm-7">
							:&nbsp; {this.state.iFName}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Last Name</label>
						</div>
						<div className="col-sm-7">
							:&nbsp; {this.state.iLName}
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Income Holder</label>
						</div>
						<div className="col-sm-7">
							<select name="iIncHolder" value={this.state.iIncHolder} onChange={this.handleChange}>
								<option value="self">Self</option>
							</select>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Income Type</label>
						</div>
						<div className="col-sm-7">
							<select name="iIncTyp" value={this.state.iIncTyp} onChange={this.handleChange}>
								<option value=" ">&nbsp;</option>
								<option value="empl">Employed</option>
								<option value="govtemp">Government Payment</option>
								<option value="ot">Other</option>
								<option value="ret">Retirement</option>
								<option value="selfemp">Self Employed</option>
							</select>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Employer</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="iEmp" placeholder="Employer" value={this.state.iEmp} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Income Status</label>
						</div>
						<div className="col-sm-7">
							<select name="iIncStat" value={this.state.iIncStat} onChange={this.handleChange}>
								<option value=" ">&nbsp;</option>
								<option value="act"> Active </option>
								<option value="inact"> Inactive </option>
							</select>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Work Phone</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="iWrkPh" placeholder="Work Phone" value={this.state.iWrkPh} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Ext</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="iWrkPhExt" placeholder="Ext" value={this.state.iWrkPhExt} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-6">
							<input type="checkbox" />
							<label>DNC</label>
						</div>
						<div className="col-sm-6">
							<input type="checkbox" />
							<label>Bad Phone</label>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Net Income Amt</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="iNetInc" placeholder="Net Income Amt" value={this.state.iNetInc} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Gross Income Amt</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="iGrossInc" placeholder="Gross Income Amt" value={this.state.iGrossInc} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Pay Frequency</label>
						</div>
						<div className="col-sm-7">
							<select name="iPayFreq" value={this.state.iPayFreq} onChange={this.handleChange}>
								<option value=" ">&nbsp;</option>
								<option value="MON">Monthly</option>
								<option value="BIM">Semi-Monthly</option>
								<option value="WKY">Weekly</option>
								<option value="BIW">Bi-Weekly</option>
							</select>
						</div>
					</div>
					<div className="row hide" id="monthly">
						<div className="form-group col-sm-12">
						<h6><strong>Pay Dates</strong></h6>
              <p>What day of the month are you paid? [Use one of the
                options below]</p>
              <div className="col-sm-1 col-xs-1">
                <input id="empl10" name="incomeRadio10" required="" tabindex="6" type="radio" value="1"/>
              </div>             
              
              <div className="col-sm-6 col-xs-4">
                <select aria-invalid="false" className="valid select-bg" id="income1st0" name="income1st0" tabindex="7">
                  <option selected="selected" value="0">&nbsp;</option>
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
              <div className="col-sm-4 col-xs-5">of each month</div>
            </div>
			<div class="form-group col-sm-12">
<div class="col-sm-1">
<input id="incomeRadio10" ng-model="incomeRadio10" tabindex="8" type="radio" value="2" />
</div>
<div class="col-sm-4">
<select id="income1st20" ng-model="income1st20" class="select-bg" name="income1st20" ng-change="monthlyPayFreq('0')" tabindex="9">
<option value="0">&nbsp;</option><option value="1">First</option><option value="2">Second</option><option value="3">Third</option><option value="4">Fourth</option><option value="99">Last</option></select></div><div class="col-sm-4"><select id="income1st30" class="select-bg" ng-model="income1st30" name="income1st30" ng-change="monthlyPayFreq('0')" tabindex="10"><option value="-1"></option><option value="0">Sunday</option><option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option>
</select>
</div>
<div class="col-sm-3">of each month</div>
</div>
					</div>
					<div className="row hide" id="semiMonthly">
						<div class="form-group col-sm-12">Semi-Monthly</div>
					</div>
					<div className="row hide" id="weekly">
						<div class="form-group col-sm-12"> 
						<h6><strong>Pay Dates</strong></h6>
			  <p>What day of the week are you paid?</p>
              <input id="sundayChecked1" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" name="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="20" type="radio" value="0" />
              &nbsp;Sunday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="21" type="radio" value="1" />
              &nbsp;Monday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="22" type="radio" value="2" />
              &nbsp;Tuesday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="23" type="radio" value="3" />
              &nbsp;Wednesday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="24" type="radio" value="4" />
              &nbsp;Thursday &nbsp; &nbsp; 
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="25" type="radio" value="5" />
              &nbsp;Friday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="26" type="radio" value="6" />
              &nbsp;Saturday &nbsp;
               </div>
					</div>
					<div className="row hide" id="biWeekly">
						<div class="form-group col-sm-12"> 
						<h6><strong>Pay Dates</strong></h6>
			  <p>What day of the week are you paid?</p>
              <input id="sundayChecked1" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" name="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="20" type="radio" value="0" />
              &nbsp;Sunday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="21" type="radio" value="1" />
              &nbsp;Monday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="22" type="radio" value="2" />
              &nbsp;Tuesday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="23" type="radio" value="3" />
              &nbsp;Wednesday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="24" type="radio" value="4" />
              &nbsp;Thursday &nbsp; &nbsp; 
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="25" type="radio" value="5" />
              &nbsp;Friday &nbsp;
              <input name="incomeWeeklyDay0" ng-change="disableSpan('weeklyRbtn')" ng-model="incomeWeeklyDay0" ng-click="weekly('0')" tabindex="26" type="radio" value="6" />
              &nbsp;Saturday &nbsp;
               </div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Next Pay Date</label>
						</div>
						<div className="col-sm-7">
							<Datepicker id={'iNxtPayDt'} name={'date'} ref='iNxtPayDt' />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Pay Stub Reviewed Date</label>
						</div>
						<div className="col-sm-7">
							<Datepicker id={'iPayStubRev'} name={'date'} ref='iPayStubRev' />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Pay Stub Date</label>
						</div>
						<div className="col-sm-7">
							<Datepicker id={'iPayStubDt'} name={'date'} ref='iPayStubDt' />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Hire Date</label>
						</div>
						<div className="col-sm-7">
							<Datepicker id={'iHireDt'} name={'date'} ref='iHireDt' />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Direct Deposit</label>
						</div>
						<div className="col-sm-7">
							<select name="iDirectDep" value={this.state.iDirectDep} onChange={this.handleChange}>
								<option value=" ">&nbsp;</option>
								<option value="yes"> Yes </option>
								<option value="no"> No </option>
							</select>
						</div>
					</div>		
					<div className="row form-group">						
					<div className="col-sm-12 text-center">
					  <button type="button"> Submit </button> 
					</div>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
    
    </div>
    );
  }
}