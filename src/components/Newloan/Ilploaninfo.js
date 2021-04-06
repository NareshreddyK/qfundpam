import React, { Component } from "react";
import Datepicker from '../common/Datepicker';
import SelectLoanTerm from './SelectLoanTerm';
import SelectLoanPmt from './SelectLoanPmt';

export default class Ilploaninfo extends Component {

  constructor (props) {
    super(props);
    this.state = {selectPmtDiv: true, sltTerm: ''};
    this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
	this.selectLoanTerm = this.selectLoanTerm.bind(this);
	this.selectCallFunc = this.selectCallFunc.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  nlClose(){
    this.props.ldCallback("ILP");
  }
  
  selectLoanTerm = () =>{
    this.setState({ilpDiv:true, loanDiv:true, selectPmtDiv: true, sltTerm: 'ILP'});
  }
  
  selectCallFunc(){
    this.setState({ilpDiv:false, loanDiv:false, selectPmtDiv : false, sltTerm: ''})
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12" hidden={this.state.ilpDiv}>
                <div className="innerBlockContainer">
                    <h2>Simple Interest Installment Loan <span onClick={()=>this.nlClose()} className="close close-window text-right"><i class="fa fa-angle-double-left"></i> Back</span></h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Total Disb Amt</td>
								 <td className="lblVal" align="left">$ 2500.00</td>
                                <td align="left">Requested Loan Amt</td>
								 <td className="lblVal" align="left">$ 2500.00</td>
                               
                                
                            </tr>
                            <tr>
							<td align="left">Frequency</td>
								 <td className="lblVal" align="left">Monthly</td>
                                <td align="left">No of Installments</td>
								 <td className="lblVal" align="left">5</td>
                                
                            </tr>
							<tr>
							<td align="left">APR(%)</td>
								 <td className="lblVal" align="left">234.66</td>
                                <td align="left">Installment Amt</td>
								 <td className="lblVal" align="left">758.16</td>
                                
                            </tr>
                            <tr>
							<td align="left">Verification Fee</td>
								 <td className="lblVal" align="left"> 0.00</td> 
                                 <td align="left">Origination Fee</td>
                                 <td className="lblVal" align="left"> 0.00</td>							 
                            </tr>
								<tr>
                                 <td align="left">CSO Fee Percent(%) </td>
                                 <td className="lblVal" align="left"> 0.36 </td> 
                                 <td align="left">CSO Fee</td>
                                 <td className="lblVal" align="left"> 1215.00 </td>                              
                            </tr>
							<tr>
							<td>Collateral type
                                    <select name="nColType">
                                        <option value="RCC">RCC</option>
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                                </td>							
							<td align="left">Interest Rate(%) <br/><input type="text" name="nNxtPayDt" value="9.95"/></td>  
							 <td align="left">Accural Date <br/> <Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>
							<td align="left">Next Pay Date <br/> <Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>
							</tr>
							<tr>							
							<td align="left">First Installment Date <br /> <Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>
							<td align="left">Expected Payment Method  
                                    <select name="exPaymentMethod">
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                            </td>
                            <td align="left">Disp Type  
                                    <select name="dispType">
                                        <option value="Cash">Cash</option>
                                    </select>
                                </td>
                                <td align="left">Disp Amt <input type="text" name="dispAmt" value="2500"/></td>
                            </tr>
							<tr>
                                <td align="left">Disp Type  
                                    <select name="dispType1">
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td align="left">Disp Amt <input type="text" name="dispAmt1" value=""/></td>
                                <td align="left">Electronic Documents Only?  
                                    <select name="eleDcumnt">
                                        <option value="No"> No</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                              <td colspan="2">&nbsp;</td>
                            </tr>
                            <tr>
                                <td colspan="6" className="text-center">
                                    <button type="button" onClick={() =>{this.selectLoanTerm()}}> Select Loan Terms </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
			
            {this.state.sltTerm ? <SelectLoanTerm ltVal={this.state.sltTerm} selectCallback ={this.selectCallFunc}/> : null}
            
            <div hidden={this.state.selectPmtDiv}>
                <SelectLoanPmt />
            </div>
        </div>
	);
  } 
}