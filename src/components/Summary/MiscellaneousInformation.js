import React, { Component } from "react";
import Stlist from '../common/States';
import Datepicker from '../common/Datepicker';

export default class MiscellaneousInformation extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {mPhotoIdNbr: '', mPhotoIdTyp: '', mZip: ''};
  }

  componentDidMount(){
	this.refs.stVal.loadData('Tennessee');
	this.refs.idExpDt.loadData("");
	this.refs.dob.loadData("");
	this.refs.appDt.loadData("");
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({mPhotoIdNbr: valSplt[0], mPhotoIdTyp: '', mZip: valSplt[1]});
	}else{
		this.setState({mPhotoIdNbr: '', mPhotoIdTyp: '', mZip: ''});
	}
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){
	const eqHght = {
		display: 'flex'
	};
	return (
	
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Miscellaneous Information <button className="pull-right" type="button"> Save </button></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="cellGap noBorder noStripe col-table-4">
							<tbody>
								<tr>
									<td className="bgHighlt">
									Photo ID Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="mPhotoIdNbr" placeholder="Photo ID Nbr" value={this.state.mPhotoIdNbr} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									ID State <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Stlist id={'miaddr'} name={'ste'} ref="stVal"/></td>
									<td>
									ID Expiration Date
									<Datepicker id={'idExpDt'} name={'date'} ref='idExpDt' /></td>											
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
								</tr>
								<tr>
									<td className="bgHighlt">
									ID Zip Code <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="mZip" placeholder="ID Zip Code" value={this.state.mZip} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									DOB <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Datepicker id={'dob'} name={'date'} ref='dob' /></td>											
									<td>
									Application Date
									<Datepicker id={'appDt'} name={'date'} ref='appDt' /></td>									
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