import React, { Component } from "react";
import Datepicker from './common/Datepicker';

export default class Ilploaninfo extends Component {

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
    this.props.ldCallback("ILP");
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Simple Interest Installment Loan <span onClick={()=>this.nlClose()} className="close close-window text-right"><i class="fa fa-angle-double-left"></i> Back</span></h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                                
                                <td align="left">Requested Loan Amt</td>
								 <td className="lblVal" align="left">$ 1000.00</td>
								 <td align="left">Frequency</td>
								 <td className="lblVal" align="left">Monthly</td>
                                
                                
                            </tr>
                            <tr>
							<td align="left">APR(%)</td>
								 <td className="lblVal" align="left">210.75</td>
                                <td align="left">No of Installments</td>
								 <td className="lblVal" align="left">3</td>
                                
                            </tr>
							<tr>
							<td align="left">Verification Fee</td>
								 <td className="lblVal" align="left">5.00</td>
                                <td align="left">Installment Amt</td>
								 <td className="lblVal" align="left">440.25</td>
                                
                            </tr>
                            <tr>
							<td align="left">Total Disb Amt</td>
								 <td className="lblVal" align="left">100.00</td>
                                <td align="left">Accural Date <br/> <Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>
								<td align="left">Next Pay Date <br/> <Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>
                                
                            </tr>
							<tr>
							<td align="left">First Installment Date <br /> <Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>							
							<td>Collateral type
                                    <select name="nColType">
                                        <option value=""></option>
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                                </td>
								<td align="left">Interest Rate(%) <br/><input type="text" name="nNxtPayDt" value="208.00"/></td>								
							</tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Loan Details</h2>
                    <table className="col-table-5">
                        <thead>
                            <tr>
                                <th>Loan Amt</th>
                                <th>Loan Fee</th>
                                <th>Verification Fee</th>									
                                <th>Total Amt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="right">100.00</td>
                                <td align="right">32.29</td>
                                <td align="right">5.00</td>
                                <td align="right">137.29</td>
                            </tr>
                        </tbody>
                    </table>
					<br />
					<table className="col-table-5">
                        <thead>
                            <tr>
                                <th>Pmt #</th>
                                <th>Pmt Date</th>
                                <th>Interest Days</th>									
                                <th>Pmt</th>
								<th>New Interest</th>
								<th>Matured Interest</th>
								<th>Unpaid Interest</th>
								<th>Verification Fee</th>
								<th>Principal</th>
								<th>Balance</th>
								<th>Expected Payment Method</th>
								<th>Effective Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="right">1</td>
                                <td align="right">12/262019</td>
                                <td align="right">23</td>
                                <td align="right">45.77</td>
								<td align="right">13.10</td>
                                <td align="right">0.00</td>
                                <td align="right">5.00</td>
                                <td align="right">27.67</td>
								<td align="right">72.33</td>
								<td align="right">ACH</td>
								<td align="right">12/262019</td>
								
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
	);
  } 
}