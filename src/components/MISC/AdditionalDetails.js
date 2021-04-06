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
				<h2> Additional Details </h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
								<td className="bgHighlt" width="12%">Price <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
									<input type="text" name="mZip" placeholder="Price" value={this.state.mZip} onChange={this.handleChange} /></td>
									
									<td className="bgHighlt" width="12%">Other Fee<br/>
									<input type="text" name="mPhotoIdNbr" placeholder="Other Fee" value={this.state.mPhotoIdNbr} onChange={this.handleChange} /></td>
									<td></td>
									<td></td>
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