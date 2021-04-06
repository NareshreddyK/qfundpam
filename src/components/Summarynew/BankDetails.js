import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class BankDetails extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {val: '', custNbr: '', bCardType: '', bCardNbr: '', bCardHolder: '', bExpMonth: '', bExpYear: '', bCvv: '', bAccountStatus: '', bRoutingNbr: '', bCRoutingNbr: '', bAcctNbr: '', bCAcctNbr: '', bBankCon: ''};
  }

  componentDidMount(){
	
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({val: false, custNbr: '', bCardType: '', bCardNbr: '', bCardHolder: '', bExpMonth: '', bExpYear: '', bCvv: '', bAccountStatus: '', bRoutingNbr: '', bCRoutingNbr: '', bAcctNbr: '', bCAcctNbr: '', bBankCon: ''});
	}else{
		this.setState({val: false, custNbr: '', bCardType: '', bCardNbr: '', bCardHolder: '', bExpMonth: '', bExpYear: '', bCvv: '', bAccountStatus: '', bRoutingNbr: '', bCRoutingNbr: '', bAcctNbr: '', bCAcctNbr: '', bBankCon: ''});
	}
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){
	const eqHght = {
		display: 'flex'
	};
	
	let bdLst = [];
	let cdLst = [];
	
	let id = [{CardType: '', CardNbr: '', CardHolder: '', ExpMonth: '', ExpYear: ''}];
	let cd = [{Active: '', BankName: '', ABARtngNbr: '', ChkgActNbr: '', BankCnect: '', Select: ''}];
	if(this.state.val === false){
		bdLst.push(<tr><td align="center" colspan="4">Card Details not available.</td></tr>);
		cdLst.push(<tr><td align="center" colspan="7">Bank Details not available.</td></tr>);
	}else{
		for(let b=0; b<=id.length-1; b++){
			bdLst.push(<tr><td align="center">{id[b].CardType}</td><td align="center">{id[b].CardNbr}</td><td>{id[b].ExpMonth} / {id[b].ExpYear}</td><td>{id[b].CardHolder}</td></tr>); 
        }
        for(let c=0; c<=cd.length-1; c++){
			cdLst.push(<tr><td align="center">{cd[c].Active}</td><td align="center">{cd[c].BankName}</td><td>{cd[c].ABARtngNbr}</td><td>{cd[c].ChkgActNbr}</td><td>{cd[c].BankCnect}</td><td><select name="Select" value={cd[c].Select} onChange={this.handleChange}><option value='E'>Edit</option><option value='D'>Delete</option></select></td><td align="center"><button type="button"> GO </button></td></tr>); 
		}
	}	
	
	return (
        <div>
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Card Details <span className="pull-right"><label for="markFraud">Customer Nbr:</label> &nbsp; {this.state.custNbr}&nbsp;&nbsp;&nbsp;</span></h2>
				<div className="col-sm-12 form-group">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap">
							<tbody>
								<tr>
									<td>Card Type 
										<select name="bCardType" value={this.state.bCardType} onChange={this.handleChange}>
											<option value="">Card Type</option>
											<option value="A">American Express</option>
											<option value="M">Master Card</option>
											<option value="V">Visa</option>
										</select>
									</td>
									<td>Card Nbr <br/>
									<input type="text" name="bCardNbr" placeholder="Card Nbr" value={this.state.bCardNbr} onChange={this.handleChange} /></td>
																				
									<td>Card Holder Name  <br/><input type="text" name="bCardHolder" placeholder="Card Holder Name " value={this.state.bCardHolder} onChange={this.handleChange} /></td>
									<td>CVV  <br/>
									<input type="text" name="bCvv" placeholder="CVV" value={this.state.bCvv} onChange={this.handleChange} /></td>
								</tr>
								<tr>
									<td>Expiry Date
                                        <table width="100%">
											<tbody>
												<tr>
													<td>
                                                        <select name="bExpMonth" value={this.state.bExpMonth} onChange={this.handleChange}>
                                                            <option value=""> Month </option>
                                                        </select>                                                        
                                                    </td>
													<td>
                                                        <select name="bExpYear" value={this.state.bExpYear} onChange={this.handleChange}>
                                                            <option value=""> Year </option>
                                                        </select>
                                                    </td>
												</tr>
											</tbody>
										</table>
									</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
								</tr>
							</tbody>
						</table>
						<p>&nbsp;</p>
                        <div class="col-sm-12 text-center">
                            <button type="button" > &nbsp; Swipe Card &nbsp;</button> &nbsp; 
							<button type="button" > &nbsp; Reset Card Details &nbsp; </button>
							<button type="button" > &nbsp; Add Card &nbsp; </button>
                        </div>
						<p>&nbsp;</p>
						<div className="contact-infoscroll">
						<table>
							<thead>
								<tr>
									<th>Card Type</th>
									<th>Card Nbr</th>
									<th>Expiry Date</th>
									<th>Card Holder Name</th>
								</tr>
							</thead>
							<tbody>
								{bdLst}
							</tbody>
						</table>
						</div>
					</div>

				</div>
			</div>
		</div>

        <div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Bank Details <span className="pull-right"><label for="markFraud">Does not have banking details:</label> &nbsp; <input type="checkbox" id="markFraud"/>&nbsp;&nbsp;&nbsp;</span></h2>
				<div className="col-sm-12 form-group">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap">
							<tbody>
								<tr>
									<td>Account Status 
										<select name="bAccountStatus" value={this.state.bAccountStatus} onChange={this.handleChange}>
											<option value="">Account Status</option>
											<option value="A">Active</option>
											<option value="I">In Active</option>
										</select>
									</td>
									<td>Account Verification Date <br/>
									<Datepicker id={'acVerDt'} name={'date'} ref='acVerDt' /></td>	
									<td>Bank Statement End Date  <br/>
									<Datepicker id={'bnkEndDt'} name={'date'} ref='bnkEndDt' /></td>
									<td>Bank Connected <br/>
									<input type="text" name="bBankCon" placeholder="Bank Connected" value={this.state.bBankCon} onChange={this.handleChange} /></td>
								</tr>
								<tr>												
									<td>ABA/ Routing Nbr <br/>
									<input type="text" name="bRoutingNbr" placeholder="ABA/ Routing Nbr " value={this.state.bRoutingNbr} onChange={this.handleChange} /></td>
									<td>Confirm ABA/ Routing Nbr <br/>
									<input type="text" name="bCRoutingNbr" placeholder="Confirm ABA/ Routing Nbr " value={this.state.bCRoutingNbr} onChange={this.handleChange} /></td>
																				
									<td>Chkg Acct Nbr  <br/>
									<input type="text" name="bAcctNbr" placeholder="Chkg Acct Nbr " value={this.state.bAcctNbr} onChange={this.handleChange} /></td>
									<td>Confirm Chkg Acct Nbr <br/>
									<input type="text" name="bCAcctNbr" placeholder="Confirm Chkg Acct Nbr " value={this.state.bCAcctNbr} onChange={this.handleChange} /></td>
								</tr>
							</tbody>
						</table>                        
						<p>&nbsp;</p>
                        <div class="col-sm-12 text-center">
                            <button type="button" > &nbsp; Update &nbsp; </button>
                        </div>
						<p>&nbsp;</p>
						<div className="contact-infoscroll">
						<table>
							<thead>
								<tr>
									<th>Active</th>
									<th>Bank Name</th>
									<th>ABA/Routing Nbr</th>
									<th>Chkg Acct Nbr</th>
									<th>Bank Connected</th>
									<th colspan="2">Select</th>
								</tr>
							</thead>
							<tbody>
								{cdLst}
							</tbody>
						</table>
						</div>
					</div>

				</div>
			</div>
		</div>
        </div>
	);
  } 
}