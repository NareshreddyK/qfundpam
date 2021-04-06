import React, { Component } from "react";
import Stlist from '../common/States';

export default class MailingAddress extends Component {

  constructor (props) {
    super(props);
	this.loadData = this.loadData.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.state = {mFName: '', mLName: '', mMName: '', mAddress: '', mAddress1: '', mCity: '', mState: '', mZip: '', mAddrsMon: '', mRes: '', mRentAmt: '', mSuffix: '', badAddrs: false};
  }

  componentWillMount(){    
    this.setState({badAddrs: false});
  }
  
  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		let nameSplt = valSplt[0].split(' ');
		this.setState({mFName: nameSplt[0], mLName: nameSplt[1], mMName: '', mAddress: valSplt[1], mAddress1: '', mCity: valSplt[2], mState: valSplt[3], mZip: valSplt[4], mAddrsMon: '66', mRes: 'N', mRentAmt: '', mSuffix: ''});
		this.refs.stVal.loadData(valSplt[3]);
	}else{
		this.setState({mFName: '', mLName: '', mMName: '', mAddress: '', mAddress1: '', mCity: '', mState: '', mZip: '', mAddrsMon: '', mRes: '', mRentAmt: '', mSuffix: ''});
		this.refs.stVal.loadData('');
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
				<h2> Name And Mailing Address <button className="pull-right" type="button"> Save </button><span className="pull-right"><label for="badAddrs">Bad Address</label> &nbsp; <input type="checkbox" id="badAddrs" name="badAddrs" defaultChecked={this.state.badAddrs} onChange={this.handleChange} />&nbsp;&nbsp;</span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder cellGap col-table-4">
							<tbody>
								<tr>
									<td className="bgHighlt">
									Last Name <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="mFName" placeholder="Last Name" value={this.state.mFName} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									First Name <span className="text-danger"><i className="fa fa-asterisk"></i></span><input type="text" name="mLName" placeholder="First Name" value={this.state.mLName} onChange={this.handleChange} /></td>
									<td>
									Middle Name
									<input type="text" name="mMName" placeholder="Middle Name" value={this.state.mMName} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									Address Line 1 <span className="text-danger"><i className="fa fa-asterisk"></i></span><input type="text" name="mAddress" placeholder="Address Line 1" onChange={this.handleChange} value={this.state.mAddress} /></td>
								</tr>
								<tr>
									<td>
									Address Line 2 <input type="text" name="mAddress1" placeholder="Address Line 2" onChange={this.handleChange} value={this.state.mAddress1} /></td>
									<td className="bgHighlt">
									City <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="mCity" placeholder="City" value={this.state.mCity} onChange={this.handleChange} /><div className="lastin"></div></td>
									<td className="bgHighlt">
									State <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
									<Stlist id={'maddr'} name={'ste'} ref="stVal" /></td>
									<td className="bgHighlt">
									Zip Code <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="mZip" placeholder="Zip Code" value={this.state.mZip} onChange={this.handleChange} /></td>
								</tr>
								<tr>
									<td className="bgHighlt">
									Months at Address <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="mAddrsMon" placeholder="Months at Address" value={this.state.mAddrsMon} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									Own Residence? <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="mRes" value={this.state.mRes} onChange={this.handleChange}>
											<option value="">Own Residence?</option>
											<option value="N">No</option>
											<option value="Y">Yes</option>
										</select>
									</td>
									<td>
									Mort/Rent Amt
									<input type="text" name="mRentAmt" placeholder="Mort/Rent Amt" value={this.state.mRentAmt} onChange={this.handleChange} /></td>
									<td>
									Suffix
										<select name="mSuffix" value={this.state.mSuffix} onChange={this.handleChange} >
											<option value="">Suffix</option>
											<option value="1">Jr.</option>
											<option value="2">Sr.</option>
											<option value="3">III</option>
											<option value="4">IV</option>
											<option value="5">V</option>
										</select>
									</td>
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