import React, { Component } from "react";

export default class LoanVoid extends Component {

  constructor (props) {
    super(props);
    this.state = {PlsConfirmDiv: true, RescindDIV:true, lVoid: '', TlpDiv:false, LvrLoanAmt: '', LvrOrgFee: '', LvrCsoFee: '', LvrDmvFee: '', LvrDisbCust: '', LvrDisbType: '', LvrDisbDue: '', LvrApplicationFee: '', LvrTotalDue: '', LvrChgAmt: '', LvrTenderType: ''};
   this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
  }

  
  componentWillMount(){
	this.setState({lVoid : this.props.lVoidVal, LvrLoanAmt: '300.00', LvrOrgFee: '56.70', LvrCsoFee: '0.00', LvrDmvFee: '0.00', LvrDisbCust: '300.00', LvrDisbType: 'Cash', LvrDisbDue: '300.00', LvrApplicationFee: '0.00', LvrTotalDue: '300.00', LvrChgAmt: '0.00'});
  }

  FinResind =()=>{
	this.setState({RescindDIV:false, TlpDiv: true});
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value, PlsConfirmDiv: true});
  }
  locFinishBtn(){
        this.setState({PlsConfirmDiv: false});
	  }
  nlClose(){
    this.props.ldCallback("LOC");
  }

  render(){
	if(this.state.lVoid === "TLP")
	{
		return (
			<div>
				<div className="col-sm-12" hidden={this.state.TlpDiv}>
					<div className="innerBlockContainer">
						<h2>Void Title Loan Transaction <span onClick={()=>{this.props.LoanVclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
						<table className="noBorder noStripe col-table-6">
						<tbody>
									<tr>
                               <td align="left">Loan Amt</td>
								 <td className="lblVal" align="left">{this.state.LvrLoanAmt}</td>
								<td align="left">Origination/Application Fee</td>
								 <td className="lblVal" align="left">{this.state.LvrOrgFee}</td>	
                            
                               <td align="left">CSO Fee</td>
								 <td className="lblVal" align="left">{this.state.LvrCsoFee}</td>
								 </tr>
							<tr>
								<td align="left">DMV Fee</td>
								 <td className="lblVal" align="left">{this.state.LvrDmvFee}</td>	
                            
                               <td align="left">Amount Disbursed to Customer</td>
								 <td className="lblVal" align="left">{this.state.LvrDisbCust}</td>
								<td align="left">Disbursement Type</td>
								 <td className="lblVal" align="left">{this.state.LvrDisbType}</td>	
                            </tr>
							<tr>
                               <td align="left">Amount Disbursed Due</td>
								 <td className="lblVal" align="left">{this.state.LvrDisbDue}</td>
								<td align="left">Origination/Application Fee Due</td>
								 <td className="lblVal" align="left">{this.state.LvrApplicationFee}</td>	
                            
                               <td align="left">Total Due</td>
								 <td className="lblVal" align="left">{this.state.LvrTotalDue}</td>
								 </tr>
							<tr>
								 <td align="left" valign="top">Change Amt</td>
								 <td className="lblVal" align="left" valign="top">{this.state.LvrChgAmt}</td>
								<td align="left">Tender Type<br/>
								<select name="LvrTenderType" value={this.state.LvrTenderType} onChange={this.handleChange} className="form-group">
											<option value="ACH"></option>
											<option value="CHK">Check</option>
											<option value="DC">Debit Card</option>
										</select><button type="button" onClick={() =>{this.FinResind()}}> Void Loan </button></td>	
										
								
                            </tr>
								
									</tbody>									
								</table>
								</div>
								<div className="col-sm-12 hide">
							<div className="innerBlockContainer">
								<h2>Rescind</h2>
								<div className="table-responsive">
								<table width="100%">
									<thead>
										<tr>
											<th>Loan Amt</th>
											<th>Origination/Application Fee</th>
											<th>CSO Fee</th>
											<th>DMV Fee</th>
											<th>Amount Disbursed to Customer</th>
											<th>Disbursement Type</th>
											<th>Amount Disbursed Due</th>
											<th>Origination/Application Fee Due</th>
											<th>Total Due</th>
											<th>Tender Type</th>
											<th>Change Amt</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td align="center">300.00</td>
											<td align="center">56.70</td>
											<td align="center">0.00</td>
											<td align="center">0.00</td>
											<td align="center">300.00</td>
											<td align="center">Cash</td>
											<td align="center">300.00</td>
											<td align="center">0.00</td>
											<td align="center">300.00</td>
											<td align="center"><select name="nColType">
											<option value="ACH"></option>
											<option value="CHK">Check</option>
											<option value="DC">Debit Card</option>
										</select></td>
											<td align="center">0.00</td>
										</tr>
									</tbody>
								</table>
								</div>
								</div>
								</div>
								
	
							
					</div>
				</div>	
	
					<div hidden={this.state.RescindDIV}>
						<div className="col-sm-12">
							<div class="innerBlockContainer">
							<h2>Confirmation</h2>   
							<div className="text-center">
							<p>Transaction Voided Successfully.</p>
							<button type="button" onClick={()=>{this.props.LoanVclose('false')}}>OK</button>
							</div>
							</div>
						</div>	
					</div>	
				
				
			</div>
		);
	}else{

	return (
        <div>
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Void Installment Loan Details <span onClick={()=>{this.props.LoanVclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						{/*<div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Loan Details</h2>					
                    <table width="100%">
								<thead>
									<tr>
										<th>Loan Amt</th>
										<th>Origination/Acquisition Fee</th>
										<th>Amt Disbursed to customer</th>
										<th>Disb Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">500.00</td>
										<td align="center">5.00</td>
										<td align="center">500.00</td>
										<td align="center">Cash</td>
									</tr>
								</tbody>
							</table>
							</div>
						</div>*/}
							<div className="col-sm-12 form-group">
							<table width="100%" className="col-table-4">
								<thead>
									<tr>
										<th>Principal Due</th>
										<th>Origination/Acquisition Fee Due</th>
										<th>Total Due</th>
										<th>Tender Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">500.00</td>
										<td align="center">0.00</td>
										<td align="center">500.00</td>
										<td align="center"><select name="nColType">
                                        <option value="ACH">CASH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select></td>
									</tr>
								</tbody>
							</table>
							</div>
							<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.LoanVclose('false')}}> Void Loan </button>							
						</div>
                </div>
            </div>
			
        </div>
	);
  } 
}
}