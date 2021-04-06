import React, { Component } from "react";

export default class Pdlrefinance extends Component {

  constructor (props) {
    super(props);
    this.state = {RefinDIV:true, list: ['1'], delBtn: false, lnDet: true, rProd: '', rTran: '', rHead: '', pdlLoanAmt: '', pdlAccrualDate: '', pdlRoutingNbr: '', pdlAccNbr: '', pdlNxtPayDate: '', pdlEligibleAmt: '', pdlLoanAmont: '', pdlLoanFee: '', pdlDueDate: '', pdlPromotion: '', pdlTotalDue: '', pdlCollateralAmt: '', pdlPmtAmt: '', pdlChange: '', pdlTenderAmt: '', pdlTenderAmount: '', pdlPrevLoanAmt: '', pdlPrevLoanFee: '', pdlRebateAmt: '', pdlPPrincipalPayAmt: '', pdlOrgFee: '', pdlPrevCSOFee: '', pdlAmtOwed: '', pdlAdvAmt: '', pdlAdvDueDate: '', pdlDueTime: '', pdlChkgAccNbr: '', pdlCheckNbr: '', pdlDisbAmt: '', pdlDisbType: '', pdlAdvanceAmt: '', pdlAdvanceFee: '', pdlCSOAmt: '', pdlCoupon: '', pdlTotlaDue: '', pdlAppliedAdvFee: '', pdlAppliedAdvanceFee: '', pdlRebateAmount: '', pdlAmountOwed: '', pdlOwedCust: '', pdlPayAmt: '', pdlCollatType: '', pdlElectDocument: '', pdldisbType1: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillMount(){
    this.setState({rProd: this.props.refPProd, rTran: this.props.refPTran});

    if(this.props.refPTran === "REF"){
        this.setState({rHead: 'Refinance', lnDet: true, pdlLoanAmt: '500.00', pdlAccrualDate: '01/02/2021', pdlRoutingNbr: '111111118', pdlAccNbr: '3456', pdlNxtPayDate: '12/31/2020', pdlEligibleAmt: '500.00', pdlLoanAmont: '200.00', pdlLoanFee: '50.00', pdlDueDate: '0.00', pdlPromotion: '', pdlTotalDue: '550.00', pdlCollateralAmt: '500.00', pdlPmtAmt: '50.00', pdlChange: '0.00', pdlTenderAmt: '', pdlTenderAmount: '', pdlPrevLoanAmt: '500.00', pdlPrevLoanFee: '50.00', pdlRebateAmt: '0.00', pdlPPrincipalPayAmt: '0.00', pdlOrgFee: '0.00', pdlPrevCSOFee: '50.00', pdlAmtOwed: '50.00'});
    }else if(this.props.refPTran === "VRR"){
        this.setState({rHead: 'Void Refinance', lnDet: false, pdlAdvAmt: '200.00', pdlAdvDueDate: '01/02/2021', pdlDueTime: '19:00', pdlChkgAccNbr: '123456', pdlCheckNbr: 'ACH', pdlDisbAmt: '0.00', pdlDisbType: '', pdlAdvanceAmt: '200.00', pdlAdvanceFee: '1.22', pdlCSOAmt: '50.00', pdlCoupon: '0.00', pdlTotlaDue: '251.22', pdlAppliedAdvFee: '0.34', pdlAppliedAdvanceFee: '50.00', pdlRebateAmount: '0.00', pdlAmountOwed: '50.34', pdlOwedCust: '50.34', pdlPayAmt: '50.34'});
    }

  }
  
  RefinLn =()=>{
	this.setState({RefinDIV:false});
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  incr(str){
    let k = str+1;    
    this.setState(state =>{ const list = state.list.concat(k); return {list} }); 
    this.setState({delBtn: true});
    window.$("#minusBtn0").remove();     
  }
  
  decr(str){    
    window.$("#mke"+str).remove();        
  }


  render(){
	
	return (
        <div>
            {this.state.RefinDIV ?
		    <div className="col-sm-12">
                <div className="innerBlockContainer">
                <h2>{this.state.rHead} <span onClick={()=>{this.props.Refinanceclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>					
                <div className="dispFlx">
                <div className="col-sm-7 form-group">
                {this.state.lnDet ? 
                <div className="innerBlockContainer">
                    <h2>Loan Details </h2>								
                    <table className="noBorder noStripe col-table-2 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Collateral Type 
                               <select name="pdlCollatType" value={this.state.pdlCollatType} onChange={this.handleChange}>
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                               </td> 
								<td align="left">Loan Amt <br/>
								<input type="text" name="pdlLoanAmt" value={this.state.pdlLoanAmt} onChange={this.handleChange} /></td> 
                            </tr>
                            <tr>
                                <td align="left">Accrual Date <br/>
								<input type="text" name="pdlAccrualDate" value={this.state.pdlAccrualDate} onChange={this.handleChange} /></td>
								<td align="left">ABA/Routing Nbr <br/>
								<input type="text" name="pdlRoutingNbr" value={this.state.pdlRoutingNbr} onChange={this.handleChange} /></td>                           
                                
                            </tr>
                            <tr>
							    <td align="left">Chkg Acct Nbr(Last 4 Digits Only) <br/>
								<input type="text" name="pdlAccNbr" value={this.state.pdlAccNbr} onChange={this.handleChange} /></td>
								<td align="left">Electronic Documents Only?
								    <select name="pdlElectDocument" value={this.state.pdlElectDocument} onChange={this.handleChange}>
                                        <option value="NO">No</option>
                                        <option value="YES">YES</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td align="left" valign="top">Next Pay Date
								<input type="text" name="pdlNxtPayDate" value={this.state.pdlNxtPayDate} onChange={this.handleChange} disabled/></td>
                                <td></td>                                 
                            </tr>														
                        </tbody>
                    </table>
                </div>
                :
                <div className="innerBlockContainer">
                    <h2>Advance Details </h2>								
                    <table className="noBorder noStripe col-table-2 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Advance Amt</td>
								<td className="lblVal" align="left">{this.state.pdlAdvAmt}</td>
                            </tr>
                            <tr>
                                <td align="left">Due Date</td>
								<td className="lblVal" align="left">{this.state.pdlAdvDueDate}</td>								
                            </tr>
                            <tr>
                                <td align="left">Due Time</td>
								<td className="lblVal" align="left">{this.state.pdlDueTime}</td>								
                            </tr>
                            <tr>
                                <td align="left">Chkg Acct Nbr</td>
								<td className="lblVal" align="left">{this.state.pdlChkgAccNbr}</td>								
                            </tr>
                            <tr>
                                <td align="left">Check Nbr</td>
								<td className="lblVal" align="left">{this.state.pdlCheckNbr}</td>								
                            </tr>
                            <tr>
                                <td align="left">Disb Amt</td>
								<td className="lblVal" align="left">{this.state.pdlDisbAmt}</td>								
                            </tr>
                            <tr>
                                <td align="left">Disb Type</td>
								<td className="lblVal" align="left">{this.state.pdlDisbType}</td>								
                            </tr>														
                        </tbody>
                    </table>
                </div>
                }
            </div>	

			<div className="col-sm-5 form-group">
                {this.state.lnDet ? 
                <div className="innerBlockContainer">
                    <h2>New Loan Details</h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Eligible Amt</td>
								 <td className="lblVal" align="left">{this.state.pdlEligibleAmt}</td>
                                 </tr>
                            <tr>
								<td align="left">Loan Amt</td>
								 <td className="lblVal" align="left">{this.state.pdlLoanAmont}</td>
                            </tr>
							<tr>
                               <td align="left">Loan Fee</td>
								 <td className="lblVal" align="left">{this.state.pdlLoanFee}</td>
                                 </tr>
                            <tr>
								<td align="left">Due Date</td>
								 <td className="lblVal" align="left">{this.state.pdlDueDate}</td>
                            </tr>
                            <tr>
                               <td align="left">Promotions/Coupons</td>
								 <td className="lblVal" align="left">{this.state.pdlPromotion}</td>
                                 </tr>
                            <tr>
								<td align="left">Total Due</td>
								 <td className="lblVal" align="left">{this.state.pdlTotalDue}</td>
                            </tr>
							<tr>
                               <td align="left">Collateral Amount</td>
								 <td className="lblVal" align="left">{this.state.pdlCollateralAmt}</td>
                                 </tr>
                            <tr>
								<td align="left"></td>
								 <td className="lblVal" align="left"></td>
                            </tr>							
                        </tbody>
                    </table>
                </div>
                :
                <div className="innerBlockContainer">
                    <h2>New Loan Amt</h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Advance Amt</td>
								<td className="lblVal" align="left">{this.state.pdlAdvanceAmt}</td>
                            </tr>
                            <tr>
								<td align="left">Advance Fee</td>
								<td className="lblVal" align="left">{this.state.pdlAdvanceFee}</td>
                            </tr>
							<tr>
                                <td align="left">CSO Fee</td>
								<td className="lblVal" align="left">{this.state.pdlCSOAmt}</td>
                            </tr>
                            <tr>
                                <td align="left">Promotions/Coupons</td>
								<td className="lblVal" align="left">{this.state.pdlCoupon}</td>
                            </tr>
                            <tr>
								<td align="left">Total Due</td>
								<td className="lblVal" align="left">{this.state.pdlTotlaDue}</td>	                                
                            </tr>							
                        </tbody>
                    </table>
                </div>
                }
            </div>
            </div>

            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Payment Details </h2>								
                    {this.state.lnDet ? 
                    <div className="col-md-12 form-group">						
                        <div id="custom-search-input1">
                            <div className="col-sm-10">
                                <div className="row">
                                    <div className="col-sm-2 form-group">
                                        <label>Payment Amt</label>
                                    </div>
                                    <div className="col-sm-3 form-group">
									<input type="text" name="pdlPmtAmt" value={this.state.pdlPmtAmt} onChange={this.handleChange} disabled/>
                                    </div>
                                    <div className="col-sm-2 form-group">
                                        <label>Change</label>
                                    </div>
                                    <div className="col-sm-3 form-group">
									<input type="text" name="pdlChange" value={this.state.pdlChange} onChange={this.handleChange} disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10">
                                {this.state.list.map((item,index) => (
                                    <div id={"mke"+index} className="row">
                                        <div className="col-sm-2 form-group">
                                            <label>Tender Type</label>
                                        </div>
                                        <div className="col-sm-3 form-group">
                                            <select name="tndrTyp11" value={this.state.tndrTyp11} onChange={this.handleChange}>
                                                <option value="">-- Option --</option>
                                                <option value="CA">Cash</option>
                                                <option value="CC">Cashier Check</option>
                                                <option value="MO">Money Order</option>
                                                <option value="ACH">ACH</option>
                                                <option value="DC">DC</option>
                                            </select>
                                        </div>
                                    
                                        <div className="col-sm-2 form-group">
                                            <label>Tender Amt</label>
                                        </div>	
                                        <div className="col-sm-3 form-group">
										<input type="text" name="pdlTenderAmount" value={this.state.pdlTenderAmount} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col-sm-2 form-group text-center" id="Tndr1">
                                            <button type="button" className="addTndr" onClick={()=>{this.incr('1')}}> <i className="fas fa-plus"></i> </button>
                                            <button type="button" className="addTndr btn-danger" hidden={!this.state.delBtn} id={"minusBtn"+index} onClick={()=>{this.decr(index)}}> <i className="fas fa-minus"></i> </button>                    
                                    </div>                  
                                    </div>                                
                                ))}                        
                                
                            </div>
                            
                            <div id="mulTndr1" className="mulTndr"></div>
                        </div>
                    </div>
                    :
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                <td align="left">Payment Amt 
								<input type="text" name="pdlPayAmt" value={this.state.pdlPayAmt} onChange={this.handleChange} disabled/></td>
								<td align="left">Disb Type
                                    <select name="pdldisbType1" value={this.state.pdldisbType1} onChange={this.handleChange}>
                                        <option value="cash">Cash</option>                                        
                                    </select>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>							
                        </tbody>
                    </table>
                    }
                </div>
            </div>

            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Amt Owed</h2>
                    {this.state.lnDet ? 
                    <table className="noBorder noStripe col-table-6">
                        <tbody>
                            <tr>
                               <td align="left">Previous Loan Amt</td>
								 <td className="lblVal" align="left">{this.state.pdlPrevLoanAmt}</td>
								<td align="left">Previous Loan Fee</td>
								 <td className="lblVal" align="left">{this.state.pdlPrevLoanFee}</td>								 
                                 <td align="left">Rebate Amt</td>
								 <td className="lblVal" align="left">{this.state.pdlRebateAmt}</td>
                            </tr>
							<tr>
                               
								<td align="left">Prinicipal Paydown Amt</td>
								 <td className="lblVal" align="left">{this.state.pdlPPrincipalPayAmt}</td>								 
                                
                            
                               <td align="left">Origination/Documentation Fee</td>
								 <td className="lblVal" align="left">{this.state.pdlOrgFee}</td>
								<td align="left">Previous CSO Fee</td>
								 <td className="lblVal" align="left">{this.state.pdlPrevCSOFee}</td>								 
                                
                            </tr>
							<tr>
                               <td align="left">Amt Owed</td>
								 <td className="lblVal" align="left">{this.state.pdlAmtOwed}</td>
								<td align="left"></td>
								 <td className="lblVal" align="left"></td>
                                 <td align="left"></td>
								 <td className="lblVal" align="left"></td>
                            </tr>							
                        </tbody>
                    </table>
                    :
                    <table className="noBorder noStripe col-table-6">
                        <tbody>
                            <tr>
                               <td align="left">Applied to Advance Fee</td>
								 <td className="lblVal" align="left">{this.state.pdlAppliedAdvFee}</td>
								<td align="left">Applied to Advance Fee</td>
								 <td className="lblVal" align="left">{this.state.pdlAppliedAdvanceFee}</td>								 
                                 <td align="left">Rebate Amt</td>
								 <td className="lblVal" align="left">{this.state.pdlRebateAmount}</td>
                            </tr>
							<tr>
                               <td align="left">Amt Owed</td>
								 <td className="lblVal" align="left">{this.state.pdlAmountOwed}</td>
								<td align="left">Owed to Customer</td>
								 <td className="lblVal" align="left">{this.state.pdlOwedCust}</td>
                                 <td align="left"></td>
								 <td className="lblVal" align="left"></td>
                            </tr>							
                        </tbody>
                    </table>
                    }
                </div>
            </div>

			<div className="col-sm-12 text-center">
                <button type="button"> Cancel </button>
                {this.state.lnDet ? 
                    <button type="button" onClick={() =>{this.RefinLn()}}> Apply Refinance </button>
                :
                    <button type="button" onClick={() =>{this.RefinLn()}}> Void Refinance </button>
                }
               						
            </div>				
				
			</div>			
			</div>

            :
            
                <div className="col-sm-12">
                    {this.state.lnDet ?
                    <div class="innerBlockContainer">
                        <h2>Confirmation</h2>
                        <div class="text-center">
                            <p>For Jesus C, refinance is being initiated for the amount of $200.00</p>
                            <p>Please collect of $50.34 in the form of cash from the customer.</p>
                            <p>A payment in the amount of $200.00(Prinicipal) will be due on 01/02/2021.</p>
                            <p>Is this correct?</p>
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={()=>{this.props.Refinanceclose('false')}}>Yes</button>
                            <button type="button" onClick={()=>{this.props.Refinanceclose('false')}}>No</button>
                        </div>
                    </div>
                    :
                    <div class="innerBlockContainer">
                        <h2>Confirmation</h2>
                        <div class="text-center">
                            <p>Void CSO Refinance completed succesfully</p>
                            <p>Would you like to complete another transaction for this customer? </p>
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={()=>{this.props.Refinanceclose('false')}}>Yes</button>
                            <button type="button" onClick={()=>{this.props.Refinanceclose('false')}}>No</button>
                        </div>
                    </div>
                    }
                </div>	
            }
        </div>
	);
  } 
}