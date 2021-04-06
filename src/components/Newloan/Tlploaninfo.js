import React, { Component } from "react";
import SelectLoanTerm from './SelectLoanTerm';

export default class Tlploaninfo extends Component {

  constructor (props) {
    super(props);
    this.state = {tlpMain: false, tlpLoan: true, sltTerm: ''};
    this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
    this.selectLoanTerm = this.selectLoanTerm.bind(this);
	this.selectCallFunc = this.selectCallFunc.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  tlpLn(){
    this.setState({tlpMain: true, tlpLoan: false});
    this.props.ldCallback("process");
  }

  selectLoanTerm = (str) =>{
    if(str == "TLP"){
        this.setState({tlpMain: true, tlpLoan: true, sltTerm: 'TLP'});   
    } else if(str == "AMOR"){
        this.setState({tlpMain: true, tlpLoan: true, sltTerm: 'AMOR'});   
    }
  }

  selectCallFunc = () =>{
    this.setState({tlpMain: true, tlpLoan: false, sltTerm: ''})
  }

  nlClose(){
    this.props.ldCallback("TLP");
  }

  render(){
	
	return (
        <div>
            <div hidden={this.state.tlpMain}>
                <div className="col-sm-12">
                    <div className="innerBlockContainer">
                        <h2>Title Loan Borrower Overview <span onClick={()=>this.nlClose()} className="close close-window text-right"><i class="fa fa-angle-double-left"></i> Back</span></h2>								
                        <table className="noBorder noStripe col-table-4">
                            <tbody>
                                <tr>
                                    <td align="left">Title Number <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <input type="text" name="nLoanAmt" value="8523"/></td>
                                    <td align="left">Title Status <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
                                    <select name="nEleDoc">
                                            <option value="CT">Clear Title</option>
                                        </select></td>
                                    <td align="left">Vehicle Mileage <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/><input type="text" name="nLoanAmt" value="15"/></td>
                                    <td align="left">Vehicle Registration State <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/>
                                    <select name="nEleDoc">
                                            <option value="TN">Tennessee</option>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td align="left">Black Book Value <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="720.00"/></td>
                                    <td align="left">VIN <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select name="nEleDoc">
                                            <option value="">3A8FY48B68T125964</option>
                                        </select></td>
                                    <td align="left">Vehicle Type <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select name="nEleDoc">
                                            <option value="">Auto</option>
                                        </select></td>
                                    <td align="left">Appraisal Value <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="nChkgNbr" value="100"/></td>
                                </tr>
                                <tr>
                                    <td colspan="4" align="center">
                                    <button type="button"> Update </button>
                                    </td>    
                                </tr>                           
                            </tbody>
                        </table>
                    </div>
				
				
				    <div className="innerBlockContainer">
                        <h2>Vehicle Information </h2>								
                        <table className="noBorder noStripe col-table-4">
                            <tbody>
                            <tr>
                                 <td align="left">Make <span className="text-danger"><i className="fa fa-asterisk"></i></span>  
								 <input type="text" name="nLoanAmt" value="Audi"/></td>
                                <td align="left">Drivetrain 
								<select name="nEleDoc">
                                        <option value=""></option>
                                    </select></td>
                                <td align="left">Model <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/><input type="text" name="nLoanAmt" value="S6"/></td>
                                <td align="left">Transmission <br/>
								<select name="nEleDoc">
                                        <option value=""></option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td align="left">Year <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Exterior Color <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select name="nEleDoc">
                                        <option value="">Black</option>
                                    </select></td>
                                <td align="left">License Plate Number <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="1246"/></td>
                                <td align="left">Premium Wheels  &nbsp; 
								<input type="checkbox" name="nNxtPayDt" value=""/></td>
                            </tr> 
							<tr>
                                <td align="left">License Plate Expiration <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="03/30"/></td>
                                <td align="left">Body Style <br/> <select name="nEleDoc">
                                        <option value="">Base 4D SUV</option>
                                    </select>
								</td>
                                <td align="left">Passengers
								<select name="nEleDoc">
                                        <option value=""></option>
                                    </select></td>
									<td align="left">County of Registration
								<input type="text" name="nNxtPayDt" value=""/></td>
                            </tr> 
							<tr>
                                <td align="left">Engine Cylinders <br/> <select name="nEleDoc">
                                        <option value=""></option>
                                    </select>
								</td>
                               
                            </tr> 							
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="innerBlockContainer">
                    <h2>Vehicle Evaluation </h2>								
                    <table className="noBorder noStripe col-table-3">
                        <tbody>
                            <tr>
                                 <td align="left">Vehicle Grade <br/> <select><option value="">Clean</option></select></td>
                                <td></td>
								<td></td>
                            </tr> 
							<tr>
                                <td align="left">Paint Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select><option value="">Average</option></select></td>
                                <td align="left">UNMATCHED  &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr>
							<tr>
                                <td align="left">Body Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select><option value="">Average</option></select></td>
                                <td align="left">UNREPAIRED COLLISION DAMAGE  &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr>
							<tr>
                                <td align="left">Glass Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select><option value="">Average</option></select></td>
                                <td align="left">WINDOW / WINSHIELD MISSING  &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr>
							<tr>
                                <td align="left">Tires Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select><option value="">Average</option></select></td>
                                <td align="left">SPACE SAVER / DONUT TIRE IN USE ON CAR  &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr> 							
                        </tbody>
                    </table>
                </div>
			
			    <div className="innerBlockContainer">
                    <h2>Vehicle Insurance Information </h2>								
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                <td align="left">Insurance Coverage  <span className="text-danger"><i className="fa fa-asterisk"></i></span>
								 <select><option value="">No Insurance</option></select></td>
                                <td></td>
								<td></td>
								<td></td>
                            </tr>
                            <tr>
                                <td align="left">Phone Number <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="XXX-XXX-XXXX"/></td>
                                <td align="left">Insurance Company <span className="text-danger"><i className="fa fa-asterisk"></i></span>  &nbsp; <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Insurance Expiry Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Policy Number <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr> 							
                        </tbody>
                    </table>
                </div>


                <div className="innerBlockContainer">
                    <h2><input type="checkbox" />&nbsp; Co-Owner Information</h2>							
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                <td>Shared Ownership <span className="text-danger"><i className="fa fa-asterisk"></i></span></td>
                                <td align="left">And  &nbsp; <input type="checkbox" name="nNxtPayDt" value=""/></td>
                                <td align="left">Or  &nbsp; <input type="checkbox" name="nNxtPayDt" value=""/></td>
								<td align="left">And/ Or  &nbsp; <input type="checkbox" name="nNxtPayDt" value=""/></td>
                            </tr>
                            <tr>
                                <td align="left">SSN/ ITIN <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="XXX-XX-XXXX"/></td>
                                <td align="left">Prefix <span className="text-danger"><i className="fa fa-asterisk"></i></span>  &nbsp; <select><option>Mr</option></select></td>
                                <td align="left">First Name <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Last Name <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr>
                            <tr>
                                <td align="left">Address <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">City <span className="text-danger"><i className="fa fa-asterisk"></i></span>  &nbsp; <select><option>Mr</option></select></td>
                                <td align="left">State <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                 <td align="left">Zip Code <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr>
                            <tr>
                                <td align="left">Phone Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Phone Type <span className="text-danger"><i className="fa fa-asterisk"></i></span>  &nbsp; <select><option>Cell Phone</option></select></td>
                                <td align="left">Photo ID Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Photo ID Type <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <select><option>Driving License</option></select></td>
                            </tr>
                            <tr>
                                <td align="left">Photo ID Issuing State <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">ID Expiration Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>  &nbsp; <input type="text" name="nNxtPayDt" value=""/></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="4" align="center">
                                    <button type="button"> Update </button>
                                </td>    
                            </tr>						
                        </tbody>
                    </table>
                </div>

                <div className="innerBlockContainer">
                    <h2> Vehicle Images</h2>							
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                <td><input type="file" /></td>
                                <td><button type="button" class="addTndr"> <i class="fas fa-plus"></i> </button></td>
                                <td></td>
								<td></td>
                            </tr>
                            <tr>
                                <td colspan="4" align="center">
                                    <button type="button"> Upload Images </button>
                                </td>    
                            </tr>						
                        </tbody>
                    </table>
                </div>

                <div className="col-sm-12 form-group text-center">
                    <button type="button"> Cancel </button>
                    <button type="button" onClick={()=>this.tlpLn()} > Process Loan </button>
                    <button type="button" className="btn-danger"> Deny </button>
                </div>
            </div>
				
			<div hidden={this.state.tlpLoan}>
                <div className="dispFlx">
                    <div className="col-sm-6 form-group">
                        <div className="innerBlockContainer">
                            <h2>Vehicle Details</h2>
                            
                            <table className="noStripe col-table-2 nth-evenColor">
                                <tbody>
                                    <tr>
                                        <td>Make</td>
                                        <td>Audi</td>
                                    </tr>
                                    <tr>
                                        <td>Model</td>
                                        <td>S6</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>2009</td>
                                    </tr>
                                    <tr>
                                        <td>VIN</td>
                                        <td>3A8FY48B68T125964</td>
                                    </tr>
                                </tbody>
                            </table>					
                        </div>
                    </div>

                    <div className="col-sm-6 form-group">
                        <div className="innerBlockContainer">
                            <h2>DMV Fee Check</h2>
                            
                            <table className="noStripe col-table-2 nth-evenColor">
                                <tbody>
                                    <tr>
                                        <td>S.No</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Payee Name</td>
                                        <td>Department of Motor Vehicles</td>
                                    </tr>
                                    <tr>
                                        <td>Check Amt</td>
                                        <td>$ 0.00</td>
                                    </tr>
                                </tbody>
                            </table>					
                        </div>
                    </div>
                </div>

                <div className="innerBlockContainer">
                    <h2>Details</h2>
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Maximum Guaranteed Loan Amount</td>
								 <td className="lblVal" align="left">$ 300.00</td>
                                <td align="left">Frequency</td>
								 <td className="lblVal" align="left">30Days</td>
                               
                                
                            </tr>
                            <tr>
							<td align="left">APR%</td>
								 <td className="lblVal" align="left">229.95</td>
                                <td align="left">Installment Amt</td>
								 <td className="lblVal" align="left">356.70</td>
                                
                            </tr>
							<tr>
							<td align="left">Cash to Customer</td>
								 <td className="lblVal" align="left">300.00</td>
                                <td align="left">Total Disb Amount</td>
								 <td className="lblVal" align="left">300.00</td>
                                
                            </tr>
                            <tr>
							<td align="left">Collateral Type</td>
								 <td className="lblVal" align="left">Vehicle</td> 
								<td></td>
                                 <td></td>								 
                            </tr>
							<tr>							
							 <td align="left">Interest Rate(%) <br/><input type="text" name="nNxtPayDt" value="2.00"/></td>  
							 <td align="left">Fee Rate <br/><input type="text" name="nNxtPayDt" value="16.90"/></td>  
							 <td align="left">No of Installments <br/><input type="text" name="nNxtPayDt" value="1"/></td>  
                             <td align="left">DMV Fee <br/><input type="text" name="nNxtPayDt" value="0.00"/></td>  
							</tr>
							<tr>							
							<td align="left">Payment Colleteral Type  
                                    <select name="exPaymentMethod">
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                        <option value="C">Cash</option>
                                    </select> </td>
                            <td align="left">Disp Type  
                                    <select name="dispType">
                                        <option value="Cash">Cash</option>
                                    </select>
                                </td>
                                <td align="left">Disp Amt <input type="text" name="dispAmt" value=""/></td>
                                <td align="left">Electronic Documents Only?  
                                    <select name="eleDcumnt">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                              <td colspan="4" align="center">
                                  <button type="button" onClick={() =>{this.selectLoanTerm("TLP")}}> Negotiate Loan Amt </button> &nbsp;
                                  <button type="button" onClick={() =>{this.selectLoanTerm("AMOR")}}> Amortization </button> &nbsp;
                                  <button type="button" > Promotions </button> 
                              </td>
                            </tr>
                        </tbody>
                    </table>
                </div>               


                <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Pmt Details</h2>
                    <div className="contact-infoscroll">
					<table className="col-table-5">
                        <thead>
                            <tr>
                                <th>Pmt #</th>
                                <th>Pmt Date</th>
                                <th>Days</th>									
                                <th>Pmt</th>
								<th>New Interest</th>
								<th>Matured Interest</th>
								<th>Fee Amount</th>
								<th>Matured DMV Fee</th>
								<th>Unpaid DMV Fee</th>
								<th>Principal</th>
								<th>Balance</th>
								<th>Coll Type</th>
								<th>Effective Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="right">1</td>
                                <td align="right">02/03/2021</td>
                                <td align="right">30</td>
                                <td align="right">356.70</td>
								<td align="right">6.00</td>
                                <td align="right">6.00</td>
                                <td align="right">50.70</td>
                                <td align="right">0.00</td>
								<td align="right">0.00</td>
								<td align="right">300.00</td>
								<td align="right">0.00</td>
								<td align="right">Cash</td>
								<td align="right">02/03/2021</td>								
                            </tr>
                        </tbody>
                    </table>
					</div>
                </div>
            </div>                
        </div>

        {this.state.sltTerm ? <SelectLoanTerm ltVal={this.state.sltTerm} selectCallback ={this.selectCallFunc}/> : null}
            
        </div>
	);
  } 
}