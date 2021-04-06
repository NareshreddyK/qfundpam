import React, { Component } from "react";
import Stlist from '../common/States';

export default class ContactInformation extends Component {

  constructor (props) {
    super(props);
	this.loadData = this.loadData.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.state = {cEmail: '', cPhone: '', cPhTyp: '', cPhone1: '', cPhTyp1: '', verifyChk: false, dncChk: false, badphChk: false, dncChk1: false, badphChk1: false, emailChk: false, amRadio: '', mRadio: ''};
  }

  componentWillMount(){    
    this.setState({verifyChk: false, dncChk: false, badphChk: false, dncChk1: false, badphChk1: false, emailChk: false, amRadio: 'oi', mRadio: 'oi1'});
  }
  
  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		let phTypSht = '';
		if(valSplt[2] === "Cell"){
			phTypSht = "C";
		}else if(valSplt[2] === "Home"){
			phTypSht = "H";
		}
		
		this.setState({cEmail: valSplt[0], cPhone: valSplt[1], cPhTyp: phTypSht, cPhone1: '', cPhTyp1: ''});
	}else{
		this.setState({cEmail: '', cPhone: '', cPhTyp: '', cPhone1: '', cPhTyp1: ''});
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
	<div>
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Contact Information <button className="pull-right" type="button"> Save </button></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap col-table-4">
							<tbody>
								<tr>
									<td>Primary Phone <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
									<input type="text" placeholder="(XXX) XXX-XXXX" name="cPhone" value={this.state.cPhone} onChange={this.handleChange} /></td>
									<td>Phone Type <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<select name="cPhTyp" value={this.state.cPhTyp} onChange={this.handleChange}>
										<option value=" "> &nbsp;</option>
										<option value="C">Cell</option>
										<option value="H">Home</option>
									  </select></td>
									<td valign="bottom"> 
										<table width="50%">
											<tbody>
												<tr>
													<td><label for="verifyChk">Verify</label> &nbsp;<input type="checkbox" id="verifyChk" name="verifyChk" defaultChecked={this.state.verifyChk} onChange={this.handleChange} /></td>
													<td><label for="dncChk">DNC</label> &nbsp;<input type="checkbox" id="dncChk" name="dncChk" defaultChecked={this.state.dncChk} onChange={this.handleChange} /></td>
													<td><label for="badphChk">Bad Phone</label> &nbsp;<input type="checkbox" id="badphChk" name="badphChk" defaultChecked={this.state.badphChk} onChange={this.handleChange} /></td>
												</tr>
											</tbody>
										</table>
									</td>	
									<td>&nbsp;</td>
								</tr>
								<tr>
									<td>Secondary Phone
									<input type="text" placeholder="(XXX) XXX-XXXX" name="cPhone1" value={this.state.cPhone1} onChange={this.handleChange} /></td>
									<td>Phone Type
									<select name="cPhTyp1" value={this.state.cPhTyp1} onChange={this.handleChange}>
										<option value=" "> &nbsp;</option>
										<option value="C">Cell</option>
										<option value="H">Home</option>
									  </select></td>
									<td valign="bottom"> 
										<table width="50%">
											<tbody>
												<tr>
													<td><label for="dncChk1">DNC</label> &nbsp;<input type="checkbox" id="dncChk1" name="dncChk1" defaultChecked={this.state.dncChk1} onChange={this.handleChange} /></td>
													<td><label for="badphChk1">Bad Phone</label> &nbsp;<input type="checkbox" id="badphChk1" name="badphChk1" defaultChecked={this.state.badphChk1} onChange={this.handleChange} /></td>
													<td>&nbsp;</td>
												</tr>
											</tbody>
										</table>
									</td>								
									<td>&nbsp;</td>
								</tr>
								<tr>
									
									<td>E-Mail <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<input type="text" placeholder="E-Mail" name="cEmail" value={this.state.cEmail} onChange={this.handleChange} />
										</td>
									<td valign="bottom"><input type="checkbox" id="emailChk" name="emailChk" defaultChecked={this.state.emailChk} onChange={this.handleChange} />&nbsp; <label for="emailChk">Does not have E-Mail</label></td>									
									<td valign="bottom">
									<table>
									<tr>
									<td>Marketing</td>								
									<td><input type="radio" name="mRadio" id="inChk1" value="oi1" checked={this.state.mRadio === 'oi1'} onChange={this.handleChange} />&nbsp; <label for="inChk1">Opt-In</label></td>
									<td><input type="radio" name="mRadio" id="outChk1" value="oo1" checked={this.state.mRadio === 'oo1'} onChange={this.handleChange} />&nbsp; <label for="outChk1">Opt-Out</label></td>
								</tr>
								</table>
								</td>
									<td valign="bottom">
									<table>
									<tr>
									<td>Account Maintenance</td>								
									<td><input type="radio" name="amRadio" id="inChk" value="oi" checked={this.state.amRadio === 'oi'} onChange={this.handleChange} />&nbsp; <label for="inChk">Opt-In</label></td>
									<td><input type="radio" name="amRadio" id="outChk" value="oo" checked={this.state.amRadio === 'oo'} onChange={this.handleChange} />&nbsp; <label for="outChk">Opt-Out</label></td>
								</tr>
								</table>
								</td>
								</tr>											
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