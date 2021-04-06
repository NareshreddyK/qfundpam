import React, { Component } from "react";
import Datepicker from '../common/Datepicker';
import Stlist from '../common/States';

export default class IncomeDetails extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {iIncHolder: '', iIncTyp: '', iEmp: '', iIncStat: '', iWrkPh: '', iNetInc: '', iGrossInc: '', iPayFreq: '', iDirDep: '', dncChkBox: false, badphChkBox: false, val: ''};
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
	return (
	
		<div className="col-sm-6 col-xs-12">
							<div className="innerBlockContainer">
								<h2>Name</h2>
								<table className="noBorder noStripe">
									<tbody>
										<tr>
											<td>Last Name <span class="text-danger"><i class="fa fa-asterisk"></i></span></td>
											<td><input type="text" name="mFName" placeholder="Last Name" value={this.state.mFName} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>First Name <span class="text-danger"><i class="fa fa-asterisk"></i></span></td>
											<td><input type="text" name="mLName" placeholder="First Name" value={this.state.mLName} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Middle Name</td>
											<td><input type="text" name="mMName" placeholder="Middle Name" value={this.state.mMName} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Suffix</td>
											<td><select name="mSuffix" value={this.state.mSuffix} onChange={this.handleChange} >
											<option value="">Suffix</option>
											<option value="1">Jr.</option>
											<option value="2">Sr.</option>
											<option value="3">III</option>
											<option value="4">IV</option>
											<option value="5">V</option>
										</select></td>
										</tr>
									</tbody>	
								</table>
							</div>
						</div>
	
	);
  } 
}