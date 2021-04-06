import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

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
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap col-table-4">
							<tbody>
								<tr>
									<td className="bgHighlt">
									Income Holder <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="iIncHolder" value={this.state.iIncHolder} onChange={this.handleChange}>
											<option value="">Income Holder</option>
											<option value="S">Self</option>
										</select></td>
									<td className="bgHighlt">
									Income Type <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="iIncTyp" value={this.state.iIncTyp} onChange={this.handleChange}>
											<option value="">Income Type</option>
											<option value="EM">Employed</option>
											<option value="GP">Government Payment</option>
											<option value="O">Other</option>
											<option value="RT">Retirement</option>
											<option value="SE">Self Employed</option>
										</select></td>												
									<td className="bgHighlt">
									Employer <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="iEmp" placeholder="Employer" value={this.state.iEmp} onChange={this.handleChange} /></td>
									<td>
									Income Status 
										<select name="iIncStat" value={this.state.iIncStat} onChange={this.handleChange}>
											<option value="">Income Status</option>
											<option value="A">Active</option>
											<option value="I">Inactive</option>
										</select></td>									
								</tr>
								<tr>
								<td className="bgHighlt">
									Hire Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Datepicker id={'HireDt'} name={'date'} ref='HireDt' /></td>
									<td className="bgHighlt">
									Work Phone <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="iWrkPh" placeholder="Work Phone" value={this.state.iWrkPh} onChange={this.handleChange} /></td>
									<td valign="bottom"><label for="dncChkBox">DNC</label> &nbsp;<input type="checkbox" id="dncChkBox" name="dncChkBox" defaultChecked={this.state.dncChkBox} onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;<label for="badphChkBox">Bad Phone</label> &nbsp; <input type="checkbox" id="badphChkBox" name="badphChkBox" defaultChecked={this.state.badphChkBox} onChange={this.handleChange} />&nbsp; </td>
									<td className="bgHighlt">
									Net Income Amt <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="iNetInc" placeholder="Net Income Amt" value={this.state.iNetInc} onChange={this.handleChange} /></td>																			
									
								</tr>
								<tr>
								<td className="bgHighlt">
									Gross Income Amt <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="iGrossInc" placeholder="Gross Income Amt" value={this.state.iGrossInc} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									Pay Frequency <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="iPayFreq" value={this.state.iPayFreq} onChange={this.handleChange}>
											<option value="">Pay Frequency</option>
											<option value="BI">Bi-Weekly</option>
											<option value="MON">Monthly</option>
											<option value="BIM">Semi-Monthly</option>
											<option value="WK">Weekly</option>
										</select>
									</td>		
									<td className="bgHighlt">
									Next Pay Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Datepicker id={'nxtPayDt'} name={'date'} ref='nxtPayDt' /></td>
									<td className="bgHighlt">
									Pay Stub Reviewed Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Datepicker id={'payRevDt'} name={'date'} ref='payRevDt' /></td>
									
								</tr>
								<tr>
								<td className="bgHighlt">
									Pay Stub Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Datepicker id={'paystubDt'} name={'date'} ref='paystubDt' /></td>
									<td>
									Direct Deposit <select name="iDirDep" value={this.state.iDirDep} onChange={this.handleChange}>
										<option value="">Direct Deposit</option>
											<option value="Y">Yes</option>
											<option value="N">No</option>
										</select>
									</td>
									<td></td>
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