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
				<h2> Miscellaneous Information <button className="pull-right" type="button"> Save </button></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="cellGap noBorder noStripe">
							<tbody>
								<tr>
								<td className="bgHighlt">
									Photo ID Type <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="mPhotoIdTyp" value={this.state.mPhotoIdTyp} onChange={this.handleChange}>
											<option value="">Photo ID Type</option>
											<option value="DL">Drivers license</option>
											<option value="INI">INS ID</option>
											<option value="IRI">IRS ID</option>
											<option value="MAI">Matricula ID</option>
											<option value="MI">Military ID</option>
											<option value="SSI">Secret Service ID</option>
											<option value="SII">State issued ID</option>
											<option value="TMI">Tribe Membership ID</option>
											<option value="USP">U.S.Passport</option>
										</select>
									</td>
									<td className="bgHighlt">
									Photo ID Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="mPhotoIdNbr" placeholder="Photo ID Nbr" value={this.state.mPhotoIdNbr} onChange={this.handleChange} /></td>
								
									<td className="bgHighlt">
									ID State <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Stlist id={'miaddr'} name={'ste'} ref="stVal"/></td>
									<td>
									ID Expiration Date<br/>
									<Datepicker id={'idExpDt'} name={'date'} ref='idExpDt' /></td>										
									
								</tr>
								<tr>
									<td>
									Application Date<br/>
									<Datepicker id={'appDt'} name={'date'} ref='appDt' /></td>
									<td className="bgHighlt">
									DOB <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<Datepicker id={'dob'} name={'date'} ref='dob' /></td>	
									
									<td className="bgHighlt">
									ID Zip Code <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="mZip" placeholder="ID Zip Code" value={this.state.mZip} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									Eye Color <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="mPhotoIdTyp" value={this.state.mPhotoIdTyp} onChange={this.handleChange}>
											<option value="">Black</option>
										</select>
									</td>	
								</tr>
								<tr>
									<td className="bgHighlt">
									Height <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
									<input type="text" name="mZip" placeholder="Height" value={this.state.mZip} onChange={this.handleChange} /></td>									
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