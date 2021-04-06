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
				<h2> Physical Address <button className="pull-right" type="button"> Save </button><span className="pull-right"><label for="mailingAddrs">Same As Mailing Address</label> &nbsp; <input type="checkbox" id="mailingAddrs" name="mailingAddrs" defaultChecked={this.state.mailingAddrs} onChange={this.handleChange} />&nbsp;&nbsp;</span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap">
							<tbody>											
								<tr>
									<td className="bgHighlt">
									Address Line 1 <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="pAddress" placeholder="Address Line 1" value={this.state.pAddress} onChange={this.handleChange} /></td>
									<td>
									Address Line 2<br/>
									<input type="text" name="pAddress1" placeholder="Address Line 2" value={this.state.pAddress1} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									City <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="pCity" placeholder="City" value={this.state.pCity} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									State <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Stlist id={'pAddr'} name={'ste'} ref="stVal" />
									</td>	
								</tr>
								<tr>
								<td className="bgHighlt">
									Zip Code <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="pZip" placeholder="Zip Code" value={this.state.pZip} onChange={this.handleChange} /></td>
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