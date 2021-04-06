import React, { Component } from "react";

export default class Ilprefinance extends Component {

  constructor (props) {
    super(props);
    this.state = {RefinDIV:true, lnDet: true, rProd: '', rTran: '', rHead: '', ilpRefLoanAmtReq: '', ilpInterestRate: '', ilpAccrualDate: '', ilpInsPmtDate: '', ilpOrgFee: '', ilpTotalDisbAmt: '', ilpDisbAmt: '', ilpDisbAmount: '', ilpFreq: '', ilpRefinanceLoan: '', ilprefBalPrincipal: '', ilpTotalAmtOwed: '', ilpOrgFeeDue: '', ilpNSFFeeDue: '', ilpLateFeeDue: '', ilpMinRefAmt: '', ilpMaxRefAmt: '', ilpOrgLoanAmt: '', ilpInterestDue: '', ilpDefIntDue: '', ilpLoanAmt: '', ilpAmtDisb: '', ilpCSOFee: '', ilpDisbType: '', ilpTenderAmt: '', ilpChange: '', ilpPaidAmt: '', ilpPrincipalPaid: '', ilpIntPaid: '', ilpNSFFee: '', ilpLateFee: '', instalNo: '', ExpPayMethod: '', ilpDisbType1: '', ilpDisbType2: '', ilpElectDoc: '', ilpTenderType: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({rProd: this.props.refIProd, rTran: this.props.refITran});

    if(this.props.refITran === "REF"){
        this.setState({rHead: 'Refinance', lnDet: true, ilpRefLoanAmtReq: '2500.00', ilpInterestRate: '260.00', ilpAccrualDate: '02/11/2021', ilpInsPmtDate: '03/11/2021', ilpOrgFee: '25.00', ilpTotalDisbAmt: '2305.79', ilpDisbAmt: '2305.79', ilpDisbAmount: '', ilpFreq: 'Monthly', ilpRefinanceLoan: 'Stepped Up by Amount 2305.79', ilprefBalPrincipal: '194.21', ilpTotalAmtOwed:'194.21', ilpOrgFeeDue: '0.00', ilpNSFFeeDue: '0.00', ilpLateFeeDue: '0.00', ilpMinRefAmt: '200.00', ilpMaxRefAmt: '2500.00', ilpOrgLoanAmt: '300.00', ilpInterestDue: '0.00', ilpDefIntDue: '0.00'});
    }else if(this.props.refITran === "VRR"){
        this.setState({rHead: 'Void Refinance', lnDet: false, ilpLoanAmt: '2500.00', ilpAmtDisb: '2305.79', ilpCSOFee: '0.00', ilpDisbType: 'Cash', ilpTenderAmt: '2305.79', ilpChange: '0.00', ilpPaidAmt: '0.00', ilpPrincipalPaid: '0.00', ilpIntPaid: '0.00', ilpNSFFee: '0.00', ilpLateFee: '0.00'});
    }

  }
  
  RefinLn =()=>{
	this.setState({RefinDIV:false, finalMsg: true});
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){

    let s = [{pmt: '1', pmtDate: '03/11/2021', days: '28', pmtAmt: '594.44', newInt: '498.63', matInt: '498.63', unpaidInt: '0.00', verFee: '0.00', origFee: '25.00', principal: '70.81', balPrincipal: '2429.19', collType: 'NOC', effDate: '03/11/2021'},{pmt: '2', pmtDate: '04/09/2021', days: '29', pmtAmt: '594.44', newInt: '501.81', matInt: '501.81', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '92.63', balPrincipal: '2336.56', collType: 'NOC', effDate: '04/09/2021'},{pmt: '3', pmtDate: '05/11/2021', days: '32', pmtAmt: '594.44', newInt: '532.60', matInt: '532.60', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '61.84', balPrincipal: '2274.72', collType: 'NOC', effDate: '05/11/2021'},{pmt: '4', pmtDate: '06/11/2021', days: '31', pmtAmt: '594.44', newInt: '502.30', matInt: '502.30', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '92.14', balPrincipal: '2182.58', collType: 'NOC', effDate: '06/11/2021'},{pmt: '5', pmtDate: '07/09/2021', days: '28', pmtAmt: '594.44', newInt: '435.32', matInt: '435.32', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '159.12', balPrincipal: '2023.46', collType: 'NOC', effDate: '07/09/2021'},{pmt: '6', pmtDate: '08/11/2021', days: '28', pmtAmt: '594.44', newInt: '475.65', matInt: '475.65', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '118.79', balPrincipal: '1904.67', collType: 'NOC', effDate: '08/11/2021'},{pmt: '7', pmtDate: '09/10/2021', days: '30', pmtAmt: '594.44', newInt: '407.02', matInt: '407.02', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '187.42', balPrincipal: '1717.25', collType: 'NOC', effDate: '09/10/2021'},{pmt: '8', pmtDate: '10/08/2021', days: '28', pmtAmt: '594.44', newInt: '342.50', matInt: '342.50', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '251.94', balPrincipal: '1465.31', collType: 'NOC', effDate: '10/08/2021'},{pmt: '9', pmtDate: '11/10/2021', days: '33', pmtAmt: '594.44', newInt: '344.44', matInt: '344.44', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '250.00', balPrincipal: '1215.31', collType: 'NOC', effDate: '11/10/2021'},{pmt: '10', pmtDate: '12/10/2021', days: '30', pmtAmt: '594.44', newInt: '259.71', matInt: '259.71', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '334.73', balPrincipal: '880.58', collType: 'NOC', effDate: '12/10/2021'},{pmt: '11', pmtDate: '01/11/2022', days: '32', pmtAmt: '594.44', newInt: '200.72', matInt: '200.72', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '393.72', balPrincipal: '486.86', collType: 'NOC', effDate: '01/11/2022'},{pmt: '12', pmtDate: '02/11/2022', days: '31', pmtAmt: '594.44', newInt: '107.50', matInt: '107.50', unpaidInt: '0.00', verFee: '0.00', origFee: '0.00', principal: '486.86', balPrincipal: '0.00', collType: 'NOC', effDate: '02/11/2022'}];
    let refLst=[];

    for(let i=0; i<=s.length-1; i++){
        refLst.push(<tr><td align="center">{s[i].pmt}</td><td align="center">{s[i].pmtDate}</td><td align="center">{s[i].days}</td><td align="center">{s[i].pmtAmt}</td><td align="center">{s[i].newInt}</td><td align="center">{s[i].matInt}</td><td align="center">{s[i].unpaidInt}</td><td align="center">{s[i].verFee}</td><td align="center">{s[i].origFee}</td><td align="center">{s[i].principal}</td><td align="center">{s[i].balPrincipal}</td><td align="center">{s[i].collType}</td><td align="center">{s[i].effDate}</td></tr>);
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
									<input type="text" name="ilpRefLoanAmtReq" value={this.state.ilpRefLoanAmtReq} onChange={this.handleChange} /></td> 
                                    <td align="left">Interest Rate <br/>
									<input type="text" name="ilpInterestRate" value={this.state.ilpInterestRate} onChange={this.handleChange} /></td> 
                                </tr>
                                <tr>
                                    <td align="left">No of Installments 
                                        <select name="instalNo" value={this.state.instalNo} onChange={this.handleChange}>
                                            <option value="12">12</option>
                                        </select></td>
                                    <td align="left">Accrual Date <br/>
									<input type="text" name="ilpAccrualDate" value={this.state.ilpAccrualDate} onChange={this.handleChange} /></td>
                                </tr>
                                <tr>
                                    <td align="left">First Installment Payment Date <br/>
									<input type="text" name="ilpInsPmtDate" value={this.state.ilpInsPmtDate} onChange={this.handleChange} /></td>
                                    <td align="left">Origination Fee <br/>
									<input type="text" name="ilpOrgFee" value={this.state.ilpOrgFee} onChange={this.handleChange} /></td> 
                                </tr>
                                <tr>
                                    <td align="left">Total Disb Amount <br/>
									<input type="text" name="ilpTotalDisbAmt" value={this.state.ilpTotalDisbAmt} onChange={this.handleChange} /></td> 
                                    <td align="left">Expected Payment Method
                                        <select name="ExpPayMethod" value={this.state.ExpPayMethod} onChange={this.handleChange}>
                                            <option value="ACH">CASH</option>
                                            <option value="CHK">Check</option>
                                            <option value="DC">Debit Card</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">Disb. Type
                                        <select name="ilpDisbType1" value={this.state.ilpDisbType1} onChange={this.handleChange}>
                                            <option value="ACH">CASH</option>
                                            <option value="CHK">Check</option>
                                            <option value="DC">Debit Card</option>
                                        </select></td> 
                                    <td align="left">Disb. Amount <br/>
									<input type="text" name="ilpDisbAmt" value={this.state.ilpDisbAmt} onChange={this.handleChange} /></td> 	
                                </tr>
                                <tr>
                                    <td align="left">Disb. Type
                                        <select name="ilpDisbType2" value={this.state.ilpDisbType2} onChange={this.handleChange}>
                                            <option value=""></option>
                                            <option value="CHK">Check</option>
                                            <option value="DC">Debit Card</option>
                                        </select></td> 
                                    <td align="left">Disb. Amount <br/>
									<input type="text" name="ilpDisbAmount" value={this.state.ilpDisbAmount} onChange={this.handleChange} /></td>
                                </tr>                                
                                <tr>
                                    <td align="left">Electronic Documents Only?
                                        <select name="ilpElectDoc" value={this.state.ilpElectDoc} onChange={this.handleChange}>
                                            <option value="NO">No</option>
                                            <option value="YES">YES</option>
                                        </select>
                                    </td>
                                    <td align="left" valign="top">Frequency 
									<input type="text" name="ilpFreq" value={this.state.ilpFreq} onChange={this.handleChange} disabled/></td>
                                </tr>
                                <tr>
                                    <td align="left" valign="top">Re-financed Loan 
									<input type="text" name="ilpRefinanceLoan" value={this.state.ilpRefinanceLoan} onChange={this.handleChange} disabled/></td>														
                                    <td></td>														
                                </tr>						
                            </tbody>
                        </table> 
                        : 
                        <table className="noBorder noStripe col-table-2 cellGap">
                            <tbody>
                                <tr>
                                    <td align="left">Loan Amt 
									<input type="text" name="ilpLoanAmt" value={this.state.ilpLoanAmt} onChange={this.handleChange} disabled/></td> 
                                    <td align="left">Amount Disbursed 
									<input type="text" name="ilpAmtDisb" value={this.state.ilpAmtDisb} onChange={this.handleChange} disabled/></td> 
                                </tr>
                                <tr>
                                    <td align="left">CSO Fee 
									<input type="text" name="ilpCSOFee" value={this.state.ilpCSOFee} onChange={this.handleChange} disabled/></td>
                                    <td align="left">Disbursed Type 
									<input type="text" name="ilpDisbType" value={this.state.ilpDisbType} onChange={this.handleChange} disabled/></td>
                                </tr>
                                <tr>
                                    <td align="left">Tender type 
                                        <select name="ilpTenderType" value={this.state.ilpTenderType} onChange={this.handleChange}>
                                            <option value="cash">Cash</option>
                                        </select>
                                    </td>
                                    <td align="left">Tender Amount 
									<input type="text" name="ilpTenderAmt" value={this.state.ilpTenderAmt} onChange={this.handleChange}/></td> 
                                </tr>
                                <tr>
                                    <td align="left">Change 
									<input type="text" name="ilpChange" value={this.state.ilpChange} onChange={this.handleChange} disabled/></td>
                                    <td align="left">Paid Amt 
									<input type="text" name="ilpPaidAmt" value={this.state.ilpPaidAmt} onChange={this.handleChange} disabled/></td>                                    
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
                        <table className="noBorder noStripe col-table-2 cellGap">
                            <tbody>
                                <tr>
                                <td align="left">Balance Principal</td>
                                    <td className="lblVal" align="left">{this.state.ilprefBalPrincipal}</td>
                                </tr>
                                <tr>
                                    <td align="left">Total Amt Owed</td>
                                    <td className="lblVal" align="left">{this.state.ilpTotalAmtOwed}</td>
                                </tr>
                                <tr>
                                <td align="left">Origination Fee Due</td>
                                    <td className="lblVal" align="left">{this.state.ilpOrgFeeDue}</td>
                                    </tr>
                                <tr>
                                    <td align="left">NSF Fee Due</td>
                                    <td className="lblVal" align="left">{this.state.ilpNSFFeeDue}</td>
                                </tr>
                                <tr>
                                <td align="left">Late Fee Due</td>
                                    <td className="lblVal" align="left">{this.state.ilpLateFeeDue}</td>
                                    </tr>
                                <tr>
                                    <td align="left">Minimum Refinance Amt</td>
                                    <td className="lblVal" align="left">{this.state.ilpMinRefAmt}</td>								 
                                    
                                </tr>
                                <tr>
                                <td align="left">Maximum Refinance Amt</td>
                                    <td className="lblVal" align="left">{this.state.ilpMaxRefAmt}</td>
                                    </tr>
                                <tr>
                                    <td align="left">Original Loan Amt</td>
                                    <td className="lblVal" align="left">{this.state.ilpOrgLoanAmt}</td>
                                </tr> 
                                <tr>
                                <td align="left">Interest Due</td>
                                    <td className="lblVal" align="left">{this.state.ilpInterestDue}</td>
                                    </tr>
                                <tr>
                                    <td align="left">Deferred Interest Due</td>
                                    <td className="lblVal" align="left">{this.state.ilpDefIntDue}</td>
                                </tr> 							
                            </tbody>
                        </table>
                        :
                        <table className="noBorder noStripe col-table-2 cellGap">
                            <tbody>
                                <tr>
                                    <td align="left">Principal Paid</td>
                                    <td className="lblVal" align="left">{this.state.ilpPrincipalPaid}</td>
                                </tr>
                                <tr>
                                    <td align="left">Interest Paid</td>
                                    <td className="lblVal" align="left">{this.state.ilpIntPaid}</td>
                                </tr>
                                <tr>
                                    <td align="left">NSF Fee Paid</td>
                                    <td className="lblVal" align="left">{this.state.ilpNSFFee}</td>                       
                                </tr>
                                <tr>
                                    <td align="left">Late Fee Paid</td>
                                    <td className="lblVal" align="left">{this.state.ilpLateFee}</td>
                                </tr>							
                            </tbody>
                        </table>
                    }
                </div>
            </div>
            </div>
            
            {/* already showing in Loan details section */}
            {/* <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Loan Details</h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Loan Amt</td>
								<td className="lblVal" align="left">2500.00</td>
								<td align="left">Loan Fee</td>
								<td className="lblVal" align="left">4608.20</td>                                
                            </tr>
							<tr>
                                <td align="left">Origination Fee</td>
								<td className="lblVal" align="left">25.00</td>
								<td align="left">Total Amt</td>
								<td className="lblVal" align="left">7133.20</td>                                
                            </tr>							
                        </tbody>
                    </table>
                </div>
            </div> */}

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
                        <th>Days</th>
                        <th>Pmt</th>
                        <th>New Interest</th>
                        <th>Matured Interest</th>
                        <th>Unpaid Interest</th>
                        <th>Verification Fee</th>
                        <th>Orig Fee</th>
                        <th>Principal</th>
                        <th>Balance Principal</th>
                        <th>Coll type</th>
                        <th>Effective Date</th>
                    </tr>
                </thead>
                <tbody>
                    {refLst}
                </tbody>
            </table>
            </div>
            </div>
            </div> : null }

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
                                <p>A New loan for Test Test in the amount of $2500.00 is being initiated.</p>
                                <p>The Customer will receive a payout of $2305.79 in cash.</p>
                                <p>A payment in the amount of $594.44 will be due on 03/11/2021</p>
                                <p>Is this correct?</p>
                            </div>
                            <div class="text-center">
                                <button type="button">Yes</button>
                                <button type="button" onClick={()=>{this.props.Refinanceclose('false')}}>No</button>
                            </div>
                        </div>
                    :
                        <div class="innerBlockContainer">
                            <h2>Confirmation</h2>
                            <div class="text-center">
                                <p>Transaction Voided Succesfully</p>
                                <p>Would you like to complete another transaction for this customer? </p>
                            </div>
                            <div class="text-center">
                                <button type="button">Yes</button>
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