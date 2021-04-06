import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class Newloaninfo extends Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
  }

  componentDidMount(){
	this.refs.nDueDt.loadData('01/16/2021');
  };
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  nlClose(){
    this.props.ldCallback("PDL");
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>New Loan <span hidden={this.props.value} onClick={()=>this.nlClose()} className="close close-window text-right"><i class="fa fa-angle-double-left"></i> Back</span></h2>								
                    <table className="noBorder noStripe col-table-4">
                        <tbody>
                            <tr>
                                <td>Collateral type
                                    <select name="nColType">
                                       <option value="ACH">ACH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                                </td>
                                <td align="left">Loan Amt <input type="text" name="nLoanAmt" value="500.00"/></td>
                                <td align="left">Due Date <br/><Datepicker id={'nDueDt'} name={'date'} ref='nDueDt' /></td>
                                <td align="left">Electronic Documents Only?
                                    <select name="nEleDoc">
                                        <option value=""></option>
                                        <option value="Y">Yes</option>
                                        <option value="N">No</option>
                                    </select></td>
                            </tr>
                            <tr>
                                <td align="left">Next Pay Date <br/> <input type="text" name="nNxtPayDt" value="01/04/2021"/></td>
                                <td align="left">Accural Date <br/> <input type="text" name="nAccrDt" value="12/29/2020"/></td>
                                <td align="left">ABA/ Routing Nbr <input type="text" name="nRoutingNbr" value="111111118"/></td>
                                <td align="left">Chkg Acct Nbr(Last 4 Digits Only) <input type="text" name="nChkgNbr" value="2529"/></td>
                            </tr>
                            <tr>
                                <td align="left">Disb type
                                    <select name="nDisbType">
                                        <option value="cash">Cash</option>
                                        <option value="check">Check</option>
                                        <option value="dc">Debit Card</option>
                                        <option value="ns">NetSpend</option>
                                    </select></td>
                                <td align="left">Disb Amount <input type="text" name="nDisbAmt" value=""/></td>
                                <td align="left">Disb type
                                    <select name="nDisbType1">
                                        <option value=""></option>
                                        <option value="cash">Cash</option>
                                        <option value="check">Check</option>
                                        <option value="dc">Debit Card</option>
                                        <option value="ns">NetSpend</option>
                                    </select></td>
                                <td align="left">Disb Amount<input type="text" name="nDisbAmt1" value=""/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
	);
  } 
}