import React, { Component } from "react";
import Datepicker from './common/Datepicker';

export default class Tlploaninfo extends Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  nlClose(){
    this.props.ldCallback("TLP");
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Title Loan Borrower Overview <span onClick={()=>this.nlClose()} className="close close-window text-right"><i class="fa fa-angle-double-left"></i> Back</span></h2>								
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                 <td align="left">Title Number <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <input type="text" name="nLoanAmt" value="8523"/></td>
                                <td align="left">Title Status <span className="text-danger"><i className="fa fa-asterisk"></i></span> 
								<select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                                <td align="left">Vehicle Mileage <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/><input type="text" name="nLoanAmt" value="80000"/></td>
                                <td align="left">Vehicle Registration State <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/>
								<select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td align="left">Black Book Value <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="2500.00"/></td>
                                <td align="left">VIN <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                                <td align="left">Vehicle Type <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                                <td align="left">Appraisal Value <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="nChkgNbr" value="52"/></td>
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
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                                <td align="left">Model <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/><input type="text" name="nLoanAmt" value="S6"/></td>
                                <td align="left">Transmission <br/>
								<select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td align="left">Year <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Exterior Color <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                                <td align="left">License Plate Number <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Premium Wheels  &nbsp; 
								<input type="checkbox" name="nNxtPayDt" value=""/></td>
                            </tr> 
							<tr>
                                <td align="left">License Plate Expiration <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td align="left">Body Style <br/> <select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select>
								</td>
                                <td align="left">Passengers
								<select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
									<td align="left">County of Registration
								<input type="text" name="nNxtPayDt" value=""/></td>
                            </tr> 
							<tr>
                                <td align="left">Engine Cylinders <br/> <select name="nEleDoc">
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
			
			<div className="innerBlockContainer">
                    <h2>Vehicle Insurance Information </h2>								
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                 <td align="left">Insurance Coverage  <span className="text-danger"><i className="fa fa-asterisk"></i></span>
								 <input type="text" name="nLoanAmt" value="Audi"/></td>
                                <td></td>
								<td></td>
								<td></td>
                            </tr>
                            <tr>
                                <td align="left">Phone Number <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="XXX-XXX-XXXX"/></td>
                                <td align="left">Insurance Company <span className="text-danger"><i className="fa fa-asterisk"></i></span>  &nbsp; <input type="checkbox" name="nNxtPayDt" value=""/></td>
                                <td align="left">Insurance Expiry Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                 <td align="left">Policy Number <span className="text-danger"><i className="fa fa-asterisk"></i></span>  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                            </tr> 
							<tr>
                                <td align="left">Body Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">UNREPAIRED COLLISION DAMAGE &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td></td>
                            </tr> 
							<tr>
                                <td align="left">Glass Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">WINDOW/WINSHIELD MISSING  &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td></td>
                            </tr>
							<tr>
                                <td align="left">Tires Condition <span className="text-danger"><i className="fa fa-asterisk"></i></span> <br/> <input type="text" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">SPACE SAVER/DONUT TIRE IN USE ON CAR &nbsp; <input type="checkbox" name="nNxtPayDt" value="2009"/></td>
                                <td align="left">Cmments  <br/> <input type="text" name="nNxtPayDt" value=""/></td>
                                <td></td>
                            </tr> 							
                        </tbody>
                    </table>
                </div>
				
				
				
			

            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Loan Details</h2>
                    <table className="col-table-5">
                        <thead>
                            <tr>
                                <th>Loan Amt</th>
                                <th>Loan Fee</th>
                                <th>DMV Fee</th>									
                                <th>Total Amt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="right">2500.00</td>
                                <td align="right">247.50</td>
                                <td align="right">0.00</td>
                                <td align="right">2747.00</td>
                            </tr>
                        </tbody>
                    </table>
					<br />
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
                                <td align="right">01/16/2020</td>
                                <td align="right">30</td>
                                <td align="right">2747.50</td>
								<td align="right">50.00</td>
                                <td align="right">50.00</td>
                                <td align="right">197.00</td>
                                <td align="right">0.00</td>
								<td align="right">0.00</td>
								<td align="right">2500.00</td>
								<td align="right">0.00</td>
								<td align="right">Cash</td>
								<td align="right">01/16/2020</td>
								
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
	);
  } 
}