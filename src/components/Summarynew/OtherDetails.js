import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class BankDetails extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {custNbr: '', oCustNbr: '', oBnkrpt: '', oComnt: ''};
  }

  componentDidMount(){
	
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({custNbr: '', oCustNbr: '', oBnkrpt: '', oComnt: ''});
	}else{
		this.setState({custNbr: '', oCustNbr: '', oBnkrpt: '', oComnt: ''});
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
				<h2> Other Information <span className="pull-right"><label for="markFraud">Customer Nbr:</label> &nbsp; {this.state.custNbr}&nbsp;&nbsp;&nbsp;</span></h2>
				<div className="col-sm-12 form-group">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap">
							<tbody>
								<tr>
									<td valign="top">Cust Nbr <br/>
									<input type="text" name="oCustNbr" placeholder="Cust Nbr" value={this.state.oCustNbr} onChange={this.handleChange} /></td>
									
									<td valign="top">Bankruptcy <br/>
									<input type="text" name="oBnkrpt" placeholder="Bankruptcy" value={this.state.oBnkrpt} onChange={this.handleChange} /></td>
												
									<td colspan="2" valign="top">Comments <br/>
									<textarea class="form-control" name="oComnt" value={this.state.oComnt} onChange={this.handleChange}></textarea></td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			</div>
		</div>

        <div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Referral </h2>
				<div className="col-sm-12 form-group">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap">
							<tbody>
								<tr>
									<td width="30%">What encouraged you to choose Advance America?</td>
									<td width="20%">
										<select name="oRef" value={this.state.oRef} onChange={this.handleChange}>
											<option value=""></option>
										</select>
									</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
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