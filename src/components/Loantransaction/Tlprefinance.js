import React, { Component } from "react";

export default class Tlprefinance extends Component {

  constructor (props) {
    super(props);
    this.state = {RefinDIV:true, list: ['1'], delBtn: false, lnDet: true, rProd: '', rTran: '', rHead: '', refLoanAmt: '', refAmtDisb: '', refcsoFee: '', refPaidAmt: '', refcallCust: '', refPrincipalPaid: '', refInterestPaid: '', refCSOFeePaid: '', refDMVFeePaid: '', refNSFFeePaid: '', refLateFeePaid: '', refLoanAmtReq: '', refInterestRate: '', refCSOFee: '', refRefinanceLoan: '', refBalPrincipal: '', refTotalAmtOwed:'', refDMVFee: '', refMinRefAmt: '', refMaxRefAmt: '', refPmtAmt: '', refChange: '', refFrequency: '', InsNo:'', ColatType: '', ElecDoc: '', tndrTyp11: '', disbType: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillMount(){
    this.setState({rProd: this.props.refTProd, rTran: this.props.refTTran});
    
    if(this.props.refTTran === "REF"){
        this.setState({rHead: 'Refinance', lnDet: true, refLoanAmtReq: '1000.00', refInterestRate: '9.95', refCSOFee: '170.00', refRefinanceLoan: 'Step Same', refBalPrincipal: '1000.00', refTotalAmtOwed: '1215.82', refDMVFee: '0.00', refMinRefAmt: '200.00', refMaxRefAmt: '2600.00', refPmtAmt: '50.00', refChange: '', refFrequency: 'All', InsNo: '1', ColatType: 'ACH', ElecDoc: 'No'});
    }else if(this.props.refTTran === "VRR"){
        this.setState({rHead: 'Void Refinance', lnDet: false, refLoanAmt: '500.00', refAmtDisb: '0.00', refcsoFee: '100.00', refPaidAmt: '101.00', refcallCust: '0.00', refPrincipalPaid: '0.00', refInterestPaid: '1.30', refCSOFeePaid: '100.00', refDMVFeePaid: '0.00', refNSFFeePaid: '0.00', refLateFeePaid: '0.00'});
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
    
    let s = [{pmt: '1', pmtDate: '03/29/2021', days: '16', pmtAmt: '1175.10', newInt: '5.10', matInt: '5.10', unpaidInt: '0.00', dmvFee: '0.00', newCSOFee: '170.00', principal: '1000.00', balPrincipal: '0.00', balCSOFee: '0.00', expPymtMthd: 'CASH', effDate: '03/29/2021'}];
    let refLst=[];

    for(let i=0; i<=s.length-1; i++){
        refLst.push(<tr><td align="center">{s[i].pmt}</td><td align="center">{s[i].pmtDate}</td><td align="center">{s[i].days}</td><td align="center">{s[i].pmtAmt}</td><td align="center">{s[i].newInt}</td><td align="center">{s[i].matInt}</td><td align="center">{s[i].unpaidInt}</td><td align="center">{s[i].dmvFee}</td><td align="center">{s[i].newCSOFee}</td><td align="center">{s[i].principal}</td><td align="center">{s[i].balPrincipal}</td><td align="center">{s[i].balCSOFee}</td><td align="center">{s[i].expPymtMthd}</td><td align="center">{s[i].effDate}</td></tr>);
    }
	
	return (
        <div>
            {this.state.RefinDIV ?
		    <div className="col-sm-12">
                <div className="innerBlockContainer">
                <h2>{this.state.rHead} <span onClick={()=>{this.props.Refinanceclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>					
                
                <div className="dispFlx">
                <div className="col-sm-7 form-group">
                <div className="innerBlockContainer">
                    <h2>New Loan Details </h2>	
                {this.state.lnDet ? 
                							
                    <table className="noBorder noStripe col-table-2 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Loan Amt Requested <br/>
								<input type="text" name="refLoanAmtReq" value={this.state.refLoanAmtReq} onChange={this.handleChange} /> 
                                </td> 
								<td align="left">Interest Rate <br/>
								<input type="text" name="refInterestRate" value={this.state.refInterestRate} onChange={this.handleChange} /></td> 
                            </tr>
                            <tr>
                                <td align="left">Frequency <br/>
								<input type="text" name="refFrequency" value={this.state.refFrequency} onChange={this.handleChange} /></td>
								<td align="left">No of Installments 
                                    <select name="InsNo" value={this.state.InsNo} onChange={this.handleChange}>
                                        <option value="1">1</option>
                                    </select>
									
									</td>
                                
                            </tr>
                            <tr>
							    <td align="left">CSO Fee <br/>
								<input type="text" name="refCSOFee" value={this.state.refCSOFee} onChange={this.handleChange} /></td>
								<td align="left">Re-financed Loan <br/>
								<input type="text" name="refRefinanceLoan" value={this.state.refRefinanceLoan} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
                                <td align="left">Collateral Type 
                                    <select name="ColatType" value={this.state.ColatType} onChange={this.handleChange}>
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                                </td> 
                                <td align="left">Electronic Documents Only?
								    <select name="ElecDoc" value={this.state.ElecDoc} onChange={this.handleChange}>
                                        <option value="NO">No</option>
                                        <option value="YES">YES</option>
                                    </select></td>
                            </tr>														
                        </tbody>
                    </table>
               
                : 
                
                    <table className="noBorder noStripe col-table-2 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Loan Amt <br/>
                                <input type="text" name="refLoanAmt" value={this.state.refLoanAmt} onChange={this.handleChange} /> 
								</td> 
                                <td align="left">Amt Disbursed <br/>
								<input type="text" name="refAmtDisb" value={this.state.refAmtDisb} onChange={this.handleChange} /></td> 
                            </tr>
                            <tr>
                                <td align="left">CSO Fee <br/>
								<input type="text" name="refcsoFee" value={this.state.refcsoFee} onChange={this.handleChange} /></td>
                                <td align="left">Paid Amt <br/>
								<input type="text" name="refPaidAmt" value={this.state.refPaidAmt} onChange={this.handleChange} /></td> 
                                
                            </tr>
                            <tr>
                                <td align="left">Disb. Type
                                        <select name="disbType" value={this.state.disbType} onChange={this.handleChange}>
                                            <option value="ACH">CASH</option>
                                            <option value="CHK">Check</option>
                                            <option value="DC">Debit Card</option>
                                        </select></td> 
                                <td align="left">Call from Customer <br/>
								<input type="text" name="refcallCust" value={this.state.refcallCust} onChange={this.handleChange} /></td> 
                            </tr>														
                        </tbody>
                    </table>

                }
                </div>
            </div>	

			<div className="col-sm-5 form-group">
                <div className="innerBlockContainer">
                    <h2>Original Loan Details</h2>
                    {this.state.lnDet ?
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Balance Principal</td>
								<td className="lblVal" align="left">{this.state.refBalPrincipal}</td>
                            </tr>
                            <tr>
								<td align="left">Total Amt Owed</td>
								<td className="lblVal" align="left">{this.state.refTotalAmtOwed}</td>
                            </tr>
							<tr>
                                <td align="left">DMV Fee</td>
								<td className="lblVal" align="left">{this.state.refDMVFee}</td>
                            </tr>
                            <tr>
								<td align="left">Minimum Refinance Amt</td>
								<td className="lblVal" align="left">{this.state.refMinRefAmt}</td>
                            </tr>
                            <tr>
                                <td align="left">Maximum Refinance Amt</td>
								<td className="lblVal" align="left">{this.state.refMaxRefAmt}</td>
                            </tr>							
                        </tbody>
                    </table>
                
                :
                
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Principal Paid</td>
                                <td className="lblVal" align="left">{this.state.refPrincipalPaid}</td>
                            </tr>
                            <tr>
                                <td align="left">Interest Paid</td>
                                <td className="lblVal" align="left">{this.state.refInterestPaid}</td>
                            </tr>
                            <tr>
                                <td align="left">CSO Fee Paid</td>
                                <td className="lblVal" align="left">{this.state.refCSOFeePaid}</td>
                            </tr>
                            <tr>
                                <td align="left">DMV Fee Paid</td>
                                <td className="lblVal" align="left">{this.state.refDMVFeePaid}</td>
                            </tr>
                            <tr>
                                <td align="left">NSF Fee Paid</td>
                                <td className="lblVal" align="left">{this.state.refNSFFeePaid}</td>
                            </tr>
                            <tr>
                                <td align="left">Late Fee Paid</td>
                                <td className="lblVal" align="left">{this.state.refLateFeePaid}</td>
                            </tr>
                        </tbody>
                    </table>

                }
                </div>
            </div>
            </div>
            
            {this.state.lnDet ? 
            <div className="col-sm-12">
                    <div className="innerBlockContainer">
                        <h2>Payment Details </h2>								
                        
                        <div className="col-md-12 form-group">						
                            <div id="custom-search-input1">
                                <div className="col-sm-10">
                                    <div className="row">
                                        <div className="col-sm-2 form-group">
                                            <label>Payment Amt</label>
                                        </div>
                                        <div className="col-sm-3 form-group">
										<input type="text" name="refPmtAmt" value={this.state.refPmtAmt} onChange={this.handleChange} disabled/>                                            
                                        </div>
                                        <div className="col-sm-2 form-group">
                                            <label>Change</label>
                                        </div>
                                        <div className="col-sm-3 form-group">
										<input type="text" name="refChange" value={this.state.refChange} onChange={this.handleChange} disabled/>
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
                                                <input type="text" name="tndrAmt11" value={this.state.tndrAmt11} onChange={this.handleChange} />
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
                        
                    </div>
                </div>
                :
                null
                }

            {this.state.lnDet ?
            <div className="col-sm-12">
            
            <div className="innerBlockContainer">
            <h2>Pmt Details</h2>
            <div className="contact-infoscroll">
            <table className="">
                <thead>
                    <tr>
                        <th>Pmt #</th>
                        <th>Pmt Date</th>
                        <th>Interest Days</th>
                        <th>Pmt</th>
                        <th>New Interest</th>
                        <th>Matured Interest</th>
                        <th>Unpaid Interest</th>
                        <th>DMV Fee</th>
                        <th>New CSO Fee</th>
                        <th>Principal</th>
                        <th>Balance Principal</th>
                        <th>Balance CSO Fee</th>
                        <th>Expected Payment Method</th>
                        <th>Effective Date</th>
                    </tr>
                </thead>
                <tbody>
                    {refLst}
                </tbody>
            </table>
            </div>
            </div>
            
            </div>
             : null }

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
                            <p><strong>N Karan</strong> will receive a Title loan of <strong>$ 1000.00</strong>. The total of payments is <strong>$ 1175.10</strong> (Prinicipal and fees).</p>
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
                            <p>Transaction Voided Successfully</p>
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={()=>{this.props.Refinanceclose('false')}}>Ok</button>
                        </div>
                    </div>
                    }
                </div>	
            }
        </div>
	);
  } 
}