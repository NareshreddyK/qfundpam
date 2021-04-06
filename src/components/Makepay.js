import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

export default class Makepay extends Component {
  constructor(props){
    super(props);
    this.state = {hidediv: false, hideInner: false, mLoanNbr: '', mProdTyp: '', mPymtAmt: '', mTndrTyp1: '', mTndrAmt1: '', mTndrTyp2: '', mTndrAmt2: '', lName: '', lLoanNbr: '', lLoanAmt: '', lFee: '', lPymtMade: '', lPrmotn: '', lRbte: '', lAmtOwed: ''}; 
	this.close = this.close.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.payValid = new SimpleReactValidator();
  }

  componentWillMount(){
    this.setState({mLoanNbr: '', mProdTyp: '', mPymtAmt: '', mTndrTyp1: '', mTndrAmt1: '', mTndrTyp2: '', mTndrAmt2: '',  lName: 'Nexon', lLoanNbr: '1524789', lLoanAmt: '425.00', lFee: '75.00', lPymtMade: '0.00', lPrmotn: '0.00', lRbte: '0.00', lAmtOwed: '500.00'});
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }
  
  mkPay(){    
    this.setState({hidediv: true});
  }
  
  mkeInner(){    
    if (this.payValid.allValid()) {
		this.setState({hideInner: true, hideMain: true});
	} else {
		this.payValid.showMessages();
		this.forceUpdate();
	}
  }
  
  close(){
    this.setState({hidediv: false, hideInner: false, hideMain: false});
  } 
  maxmize=()=>{
    let wHeight = window.$(document).height();
    window.$("#popover-content-myAccnt").css('height', (wHeight-125)+"px");
    window.$("#custom-pop-input1").css('height', (wHeight-195)+"px");
  }
  
  minimize=()=>{
    let wHeight = window.$(document).height();                 
    window.$("#popover-content-myAccnt").css('height', "auto");
    window.$("#custom-pop-input1").css('height', "auto");
  }
  
  render(){
    return (      
		<div id="popover-content-myAccnt" className="footer-btn" hidden={!this.state.hidediv}>
		<div className="col-sm-12">
		<div className="row">
			<div className="mkePymt">
				<h2>
					<i className="fa fa-credit-card"></i> Make Payment
					<span id="close" onClick={this.close} className="footer-close"><i className="fas fa-times"></i></span>&nbsp;
					<span id="minmz" onClick={()=>this.minimize()} className="footer-min"><i className="fas fa-window-maximize"></i></span>&nbsp;
					<span id="maxmz" onClick={()=>this.maxmize()} className="footer-max"><i className="far fa-window-maximize"></i></span>
				</h2>
			</div>
				
			<div id="custom-pop-input" hidden={this.state.hideMain}>					
				
					<div className="col-sm-5 form-group text-left">
						<label>Loan Nbr</label>
					</div>
					<div className="col-sm-7 form-group">
						<input type="text" name="mLoanNbr" placeholder="Loan Nbr" value={this.state.mLoanNbr} onChange={this.handleChange} />
						<div className="text-left error">{this.payValid.message('Loan Nbr', this.state.mLoanNbr, 'required|integer')}</div>
					</div>
					<div className="clearfix"></div>
					<div className="col-sm-5 form-group text-left">
						<label>Product Type</label>
					</div>
					<div className="col-sm-7 form-group">
						<select id="mkePymt1" name="mProdTyp" value={this.state.mProdTyp} onChange={this.handleChange}>
						  <option value="">-- Select Product Type --</option>
						  <option value="ILP">ILP</option>
						  <option value="PDL">PDL</option>
						  <option value="TLP">TLP</option>
					  </select>
					  <div className="text-left error">{this.payValid.message('Product Type', this.state.mProdTyp, 'required')}</div>
					</div>
				
				<div className="col-sm-12 form-group"><button type="button" id="editincsearch" onClick={()=>this.mkeInner()}> Search </button></div>
			</div>
				
				
				<div id="custom-pop-input1" className="col-sm-12 text-left" hidden={!this.state.hideInner}>
					<div className="row form-group">
						<div className="col-sm-12">							
							<table width="100%" className="col-table-2 nth-evenColor">
							<thead>
								<tr>
									<th colSpan="2">Loan Details</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Customer Name</td>
									<td>{this.state.lName}</td>
								</tr>
								<tr>
									<td>Loan Nbr</td>
									<td>{this.state.lLoanNbr}</td>
								</tr>
								<tr>
									<td>Loan Amt</td>
									<td>$ {this.state.lLoanAmt}</td>
								</tr>
								<tr>
									<td>Fee</td>
									<td>$ {this.state.lFee}</td>
								</tr>
								<tr>
									<td>Payments Made</td>
									<td>$ {this.state.lPymtMade}</td>
								</tr>
								<tr>
									<td>Promotions</td>
									<td>$ {this.state.lPrmotn}</td>
								</tr>
								<tr>
									<td>Rebate</td>
									<td>$ {this.state.lRbte}</td>
								</tr>
								<tr>
									<td>Amt Owed</td>
									<td>$ {this.state.lAmtOwed}</td>
								</tr>
							</tbody>
						</table>
						</div>
					</div>
					<div className="clearfix"></div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Payment Amt</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="mPymtAmt" placeholder="Payment Amt" value={this.state.mPymtAmt} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Tender Type1</label>
						</div>
						<div className="col-sm-7">
							<select id="mTndrTyp1" name="mTndrTyp1" value={this.state.mTndrTyp1} onChange={this.handleChange}>
								<option>-- Option --</option>
								<option value="CA">Cash</option>
								<option value="CC">Cashier Check</option>
								<option value="MO">Money Order</option>
								<option value="ACH">ACH</option>
								<option value="DC">DC</option>
							</select>
						</div>
					</div>
					<div className="row form-group">	
						<div className="col-sm-5">
							<label>Tender Amt1</label>
						</div>	
						<div className="col-sm-7">
							<input type="text" name="mTndrAmt1" placeholder="Tender Amt1" value={this.state.mTndrAmt1} onChange={this.handleChange} />				
						</div>
					</div>
					<div className="row form-group">	
						<div className="col-sm-5">
							<label>Tender Type2</label>
						</div>	
						<div className="col-sm-7">
							<select id="mTndrTyp2" name="mTndrTyp2" value={this.state.mTndrTyp2} onChange={this.handleChange}>
								<option>-- Option --</option>
								<option value="CA">Cash</option>
								<option value="CC">Cashier Check</option>
								<option value="MO">Money Order</option>
								<option value="ACH">ACH</option>
								<option value="DC">DC</option>
							</select>				
						</div>
					</div>
					<div className="row form-group form-group">	
						<div className="col-sm-5">
							<label>Tender Amt2</label>
						</div>	
						<div className="col-sm-7">
							<input type="text" name="mTndrAmt2" placeholder="Tender Amt2" value={this.state.mTndrAmt2} onChange={this.handleChange} />				
						</div>	
					</div>			
							
					<div className="row form-group">						
						<div className="col-sm-12 text-center">
					  		<button type="button"> Submit </button> 
						</div>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
    
    </div>
    );
  }
}