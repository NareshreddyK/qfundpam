import React, { Component } from "react";
import Datepicker from "./common/Datepicker";

export default class Bankrupt extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {bName: '', bCustNbr: '', bSsn: '', bAddrs: '', bCity: '', bState: '', bZip: '', bHomePh: '', bCellPh: '', bEmail: '', bEmpName: '', bEmpAddrs: '', bEmpPh: '', bStat: '', bCase: '', bBnkChap: '', bAttrNm: '', bAttrPh: '', bBnkDist: '', bTrstNm: '', bTrstPh: '', bComments: '', bReason: '', bAmtClaim: '', bIntRt: '', bMonPymt: '', bTerm: '', bOther: '', bReaffirm: ''};
  }
  
  componentWillMount(){
	let shrtSt = ''
	if(this.props.info.cstate === "Tennessee"){
		shrtSt = "TN";
	}
	  
    this.setState({bName: this.props.info.flName, bCustNbr: this.props.info.nbr, bSsn: this.props.info.ssn, bAddrs: this.props.info.caddress, bCity: this.props.info.ccity, bState: shrtSt, bZip: this.props.info.czip, bHomePh: '', bCellPh: this.props.info.phone, bEmail: this.props.info.email, bEmpName: 'VA Disability', bEmpAddrs: '', bEmpPh: '(865) 545-9514', bStat: 'Deceased', bCase: '', bBnkChap: '', bAttrNm: '', bAttrPh: '', bBnkDist: '', bTrstNm: '', bTrstPh: '', bComments: '', bReason: '', bAmtClaim: '', bIntRt: '', bMonPymt: '', bTerm: '', bOther: '', bReaffirm: ''});
  }

  componentDidMount(){
    this.refs.bnkFilngDt.loadData("");
    this.refs.disDt.loadData("");
    this.refs.pocDt.loadData("");
    this.refs.planConfDt.loadData("");
    this.refs.revwDt.loadData("");
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  render(){
	
	let ldLst = [];
  
	let ld = [{loanNbr: '44189', prodType: 'TLP', prodName: '', storeNbr: '0398', type: '', principalDue: '391.00', feeDue: '0.00', mhcFee: '0.00', origFee: '0.00', totDue: '391.00'}];

	if(ld.length === 0){
		ldLst.push(<tr><td align="left" colspan="6">Verification Action not available.</td></tr>);
	}else{
		for(let h=0; h<=ld.length-1; h++){
			ldLst.push(<tr><td align="center">{ld[h].loanNbr}</td><td align="center">{ld[h].prodType}</td><td align="center">{ld[h].prodName}</td><td align="center">{ld[h].storeNbr}</td><td align="center">{ld[h].type}</td><td align="right">$ {ld[h].principalDue}</td><td align="right">$ {ld[h].feeDue}</td><td align="right">$ {ld[h].mhcFee}</td><td align="right">$ {ld[h].origFee}</td><td align="right">$ {ld[h].totDue}</td></tr>); 
		}
	}
	
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
				<div className="col-md-4 form-group col-md-offset-8 text-right margin-top">
		  <b>Note:</b> All mandatory Fields are highlighted with <span class="text-danger"><i class="fa fa-asterisk"></i></span>
		  </div>
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Account Information</h2>
							<div className="contact-infoscroll">
							<table width="100%">
								<thead>
									<tr>
										<th>Name</th>
										<th>Customer Nbr</th>
										<th>SSN</th>
										<th>Address</th>
										<th>Home Phone</th>
										<th>Cell Phone</th>
										<th>Email Address</th>
										<th>Employer Name</th>
										<th>Emp Address</th>
										<th>Contact #</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">{this.state.bName}</td>
										<td align="center">{this.state.bCustNbr}</td>
										<td align="center">{this.state.bSsn}</td>
										<td align="center">{this.state.bAddrs}, {this.state.bCity}, {this.state.bState} {this.state.bZip}</td>
										<td align="center">{this.state.bHomePh}</td>
										<td align="center">{this.state.bCellPh}</td>
										<td align="center">{this.state.bEmail}</td>
										<td align="center">{this.state.bEmpName}</td>
										<td align="center">{this.state.bEmpAddrs}</td>
										<td align="center">{this.state.bEmpPh}</td>
									</tr>
								</tbody>
							</table>
							</div>
						</div>
					</div>
					
					<div className="col-sm-12">
						<div className="innerBlockContainer">
							<h2>Loan Details</h2>
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th>Loan Nbr</th>
										<th>Product Type</th>
										<th>Product Name</th>
										<th>Store#</th>
										<th>Type</th>
										<th>Principal Due</th>
										<th>Fee Due</th>
										<th>MHC Fee</th>
										<th>Origination Fee</th>
										<th>Total Due</th>
									</tr>
								</thead>
								<tbody>
									{ldLst}
								</tbody>
							</table>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
					
					<div className="dispFlx">
						<div className="col-sm-6 col-xs-12 form-group">
							<div className="innerBlockContainer">
								<h2>Process Bankruptcy/Deceased</h2>
								<table className="noBorder noStripe">
									<tbody>
										<tr>
											<td>Status</td>
											<td width="78%">
												<select name="bStat" value={this.state.bStat} onChange={this.handleChange}>
													<option value=""></option>
													<option value="Deceased">Deceased</option>
													<option value="Pending">Pending</option>
													<option value="Active">Bankrupt</option>												
												</select>
											</td>
										</tr>
										<tr>
											<td>BNK Filing Date</td>
											<td><Datepicker id={'bnkFilngDt'} name={'date'} ref='bnkFilngDt' /></td>
										</tr>
										<tr>
											<td>Case #</td>
											<td><input type="text" name="bCase" placeholder="" value={this.state.bCase} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>BNK Chapter</td>
											<td>
												<select name="bBnkChap" value={this.state.bBnkChap} onChange={this.handleChange}>
													<option value=""></option>
													<option value="chapter7">chapter7</option>
													<option value="chapter13">chapter13</option>
													<option value="chapter128">chapter128</option>
												</select>
											</td>
										</tr>
										<tr>
											<td>Attorney Name</td>
											<td><input type="text" name="bAttrNm" placeholder="" value={this.state.bAttrNm} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Attorney Phone</td>
											<td><input type="text" name="bAttrPh" placeholder="(XXX) XXX-XXXX" value={this.state.bAttrPh} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>BNK District</td>
											<td><select name="bBnkDist" value={this.state.bBnkDist} onChange={this.handleChange}><option value=""></option><option value="ALM">Alabama Middle</option><option value="ALN">Alabama Northern</option><option value="ALS">Alabama Southern</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="ARE">Arkansas Eastern</option><option value="ARW">Arkansas Western</option><option value="CAC">California Central</option><option value="CAE">California Eastern</option><option value="CAN">California Northern</option><option value="CAS">California Southern</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District of Columbia</option><option value="FLM">Florida Middle</option><option value="FLN">Florida Northern</option><option value="FLS">Florida Southern</option><option value="GAN">Georgia Northern</option><option value="GAM">Georgia Middle</option><option value="GAS">Georgia Southern</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="ILC">Illinois Central</option><option value="ILN">Illinois Northern</option><option value="ILS">Illinois Southern</option><option value="INN">Indiana Northern</option><option value="INS">Indiana Southern</option><option value="IAN">Iowa Northern</option><option value="IAS">Iowa Southern</option><option value="KS">Kansas</option><option value="KE">Kentucky Eastern</option><option value="KEW">Kentucky Western</option><option value="LAE">Louisiana Eastern</option><option value="LAW">Louisiana Western</option><option value="ME">Maine</option><option value="ML">Maryland</option><option value="MC">Massachusetts</option><option value="MIE">Michigan Eastern</option><option value="MIW">Michigan Western</option><option value="MN">Minnesota</option><option value="MSN">Mississippi Northern</option><option value="MSS">Mississippi Southern</option><option value="MSE">Missouri Eastern</option><option value="MOW">Missouri Western</option><option value="MI">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NYE">New York Eastern</option><option value="NYN">New York Northern</option><option value="NYS">New York Southern</option><option value="NYSM">New York Southern Mega</option><option value="NYW">New York Western</option><option value="NCE">North Carolina Eastern</option><option value="NCM">North Carolina Middle</option><option value="NCW">North Carolina Western</option><option value="ND">North Dakota</option><option value="OHN">Ohio Northern</option><option value="OHS">Ohio Southern</option><option value="OKE">Oklahoma Eastern</option><option value="OKN">Oklahoma Northern</option><option value="OKW">Oklahoma Western</option><option value="OR">Oregon</option><option value="PAE">Pennsylvania Eastern</option><option value="PAM">Pennsylvania Middle</option><option value="PAW">Pennsylvania Western</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TNE">Tennessee Eastern</option><option value="TNM">Tennessee Middle</option><option value="TNW">Tennessee Western</option><option value="TXE">Texas Eastern</option><option value="TXN">Texas Northern</option><option value="TXS">Texas Southern</option><option value="TXW">Texas Western</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VAE">Virginia Eastern</option><option value="VAW">Virginia Western</option><option value="WAE">Washington Eastern</option><option value="WAW">Washington Western</option><option value="WVN">West Virginia Northern</option><option value="WVS">West Virginia Southern</option><option value="WIE">Wisconsin Eastern</option><option value="WIW">Wisconsin Western</option><option value="WY">Wyoming</option></select></td>
										</tr>
										<tr>
											<td>Trustee Name</td>
											<td><input type="text" name="bTrstNm" placeholder="" value={this.state.bTrstNm} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Trustee Phone</td>
											<td><input type="text" name="bTrstPh" placeholder="(XXX) XXX-XXXX" value={this.state.bTrstPh} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Comments / Notes</td>
											<td><textarea name="bComments" rows="3" cols="45" className="form-control" onChange={this.handleChange}>{this.state.bComments}</textarea></td>
										</tr>
									</tbody>	
								</table>
							</div>
						</div>
						<div className="col-sm-6 col-xs-12 form-group">
							<div className="innerBlockContainer">
								<h2>Chapter 7 / Chapter 13</h2>
								<table className="noBorder noStripe">
									<tbody>
										<tr>
											<td className="text-space">Dismissed / Discharged / Deceased Date</td>
											<td width="63%"><Datepicker id={'disDt'} name={'date'} ref='disDt' /></td>
										</tr>
										<tr>
											<td>POC File Date</td>
											<td><Datepicker id={'pocDt'} name={'date'} ref='pocDt' /></td>
										</tr>
										<tr>
											<td>Reason for NO POC</td>
											<td>
												<select name="bReason" value={this.state.bReason} onChange={this.handleChange}><option value=""></option><option value="CI">COLLATERAL IMPAIRED</option><option value="DBC">DISALLOWED BY COURT</option><option value="IL">IN LITIGATION</option><option value="POTP">PAYING OUTSIDE THE PLAN</option><option value="RIS">RECEIVED INSURANCE SETTLEMENT</option><option value="VS">VEHICLE SOLD</option><option value="VVS">VEHICLE VOLUNTARILY SURRENDER</option></select>
											</td>
										</tr>
										<tr>
											<td>Amount Claimed</td>
											<td><input type="text" name="bAmtClaim" placeholder="" value={this.state.bAmtClaim} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Interest Rate</td>
											<td><input type="text" name="bIntRt" placeholder="" value={this.state.bIntRt} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Plan Confirmed Date</td>
											<td><Datepicker id={'planConfDt'} name={'date'} ref='planConfDt' /></td>
										</tr>
										<tr>
											<td>Review Date</td>
											<td><Datepicker id={'revwDt'} name={'date'} ref='revwDt' /></td>
										</tr>
										<tr>
											<td>Monthly Payment</td>
											<td><input type="text" name="bMonPymt" placeholder="" value={this.state.bMonPymt} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Term</td>
											<td><input type="text" name="bTerm" placeholder="" value={this.state.bTerm} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Other</td>
											<td><input type="text" name="bOther" placeholder="" value={this.state.bOther} onChange={this.handleChange} /></td>
										</tr>
										<tr>
											<td>Reaffirm</td>
											<td>
												<select name="bReaffirm" value={this.state.bReaffirm} onChange={this.handleChange}>
													<option value=""></option>
													<option value="Y">Yes</option>
													<option value="N">No</option> 
												</select>
											</td>
										</tr>
									</tbody>	
								</table>
							</div>
						</div>
					</div>					 
	
					<div className="text-center form-group">
						<button type="button"> Save </button>
						<button className="btn-danger" type="button"> Cancel </button>
					</div>
				</div>
			</div>
		</div>
	);
  } 
}