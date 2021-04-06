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
				<h2>Identification</h2>
				<table className="noBorder noStripe">
					<tbody>
						<tr>
							<td>SSN <span class="text-danger"><i class="fa fa-asterisk"></i></span></td>
							<td><input type="text" name="iSSN" placeholder="SSN" className="bgHighlt" value={this.state.iSSN} onChange={this.handleChange} /></td>
						</tr>
						<tr>
							<td>Language</td>
							<td><select name="iLang" value={this.state.iLang} onChange={this.handleChange}>                        
									<option value=""> Select Language </option>
									<option value="EN">English</option>
									</select></td>
						</tr>
						<tr>
							<td>Store Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span></td>
							<td><input type="text" name="iStrNbr" placeholder="Store Nbr" value={this.state.iStrNbr} onChange={this.handleChange} /></td>
						</tr>
						<tr><td colspan="2"><p style={{height: "24px"}}>&nbsp;</p></td></tr>
					</tbody>	
				</table>
			</div>
		</div>
	
	);
  } 
}