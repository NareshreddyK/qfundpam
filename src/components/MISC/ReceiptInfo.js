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
	
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Receipt Information </h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
								<td className="bgHighlt" width="13%">Control Number<br/>
									<input type="text" name="mZip" placeholder="Control Number" value={this.state.mZip} onChange={this.handleChange} /></td>									
									<td width="15%">&nbsp;</td>
									<td className="bgHighlt">&nbsp; </td>
									<td className="bgHighlt">&nbsp; </td>
									<td>&nbsp;</td>
									<td width="15%">&nbsp;</td>
									<td className="bgHighlt">&nbsp; </td>
									<td>&nbsp;</td>
									<td className="bgHighlt">&nbsp; </td>
									<td width="15%">&nbsp;</td>
								</tr>
																
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	
	);
  } 
}