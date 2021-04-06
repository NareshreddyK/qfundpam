import React, { Component } from "react";
import Datepicker from "./common/Datepicker";

export default class AccountManagement extends Component {

  constructor (props) {
    super(props);
    this.handleStChange = this.handleChange.bind(this);
    this.state = {schdNm: '', strCode: ''};        
  }
  
  componentWillMount(){
    this.setState({schdNm: '', strCode: ''});
  }

  componentDidMount(){
    this.refs.date.loadData("");
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });      
  }

  render(){
	const eqHght = {
		display: 'flex'
	}
	const noBG = {
	  background: 'transparent'
  }
    
	return (
<div className="height100">
  <div className="collectionContainer" style={ noBG }>
    <div className="collectionSubContainer">
      <div className="col-sm-6 col-sm-offset-3 form-group">
          <div className="innerBlockContainer margin-top">
		  
		  <h2> &nbsp; Manual Schedule Initiator</h2>
            <div className="col-sm-6 col-sm-offset-3 form-group">
              <div className="row">
                <table width="100%" border="0" className="noBorder noStripe col-table-2">
                  <tbody>
                    <tr>
                      <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>Schedule Name</td>
                      <td><select name="schdNm" value={this.state.schdNm} onChange={this.handleChange}>
                          <option value="">Select</option>
                          <option value="1230">Cancel Esign</option>
                          <option value="1240">ILP Delinquent/Cure</option>
                          <option value="157">LOC Delinquent/Cure</option>
                          <option value="714">Debit360Deposit Representment CST</option>
                          <option value="721">Debit360Deposit Reperesentment Batch Process</option>
                          <option value="720">Debit360Deposit Representment MST</option>
                          <option value="719">Debit360Deposit Reperesentment Batch Process</option>
                          <option value="718">Debit360Deposit Representment PST</option>
                          <option value="717">Debit360Deposit Reperesentment Batch Process</option>
                          <option value="715">Debit360Deposit Reperesentment Batch Process</option>
                          <option value="716">Debit360Deposit Representment EST</option>
                          <option value="309">Process ILP Pre RCC Deposits</option>
                          <option value="311">Process LOC Pre ACH Deposits</option>
                          <option value="304">Process ILP Pre ACH Deposits</option>
                          <option value="312">LOC Pre ACH Deposits Inserts</option>
                          <option value="308">ILP Pre RCC Deposits Inserts</option>
                          <option value="303">ILP Pre ACH Deposits Inserts</option>
                          <option value="313">Pdl WriteOffProcess</option>
                          <option value="316">Process LOC Pre RCC Deposits</option>
                          <option value="315">LOC Pre RCC Inserts Before DEF</option>
                          <option value="318">Void PDL Un Pick Up Cash Customers</option>
                          <option value="350">Process PDL RPP Reversal</option>
                          <option value="319">LOC Pre RCC Inserts After DEF</option>
                          <option value="158">Cancel Application</option>
                          <option value="650">ILP Pre ACH EPP Deposits Inserts</option>
                          <option value="651">Process ILP Pre ACH EPP Deposits</option>
                          <option value="652">ILP Pre After DEF RCC Deposits Inserts</option>
                          <option value="653">Process ILP Pre After DEF RCC Deposits</option>
                          <option value="333">LOC Statement Zip Back Up Days</option>
                          <option value="1239">ILP Default</option>
                          <option value="1238">Cancel Epp Initiated</option>
                          <option value="307">PDL Pre ACH Deposit Insert</option>
                          <option value="1237">LOC Statement Upload To FTP</option>
                          <option value="1241">ILP WriteOff</option>
                          <option value="300">Online Store Auto Process date change</option>
                          <option value="1227">Auto Withdrawal</option>
                          <option value="155">LOC WriteOff</option>
                          <option value="154">LOC Default</option>
                          <option value="730">Hit Veritec For FL Transactions</option>
                          <option value="302">PDL Pre ACH Deposit Posting</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>Store Code</td>
                      <td><input type="text" name="strCode" placeholder="" value={this.state.strCode} onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                     <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>To Date</td>
                      <td><Datepicker id={'amDate'} name={'date'} ref='date' /></td>
                    </tr>                    
                  </tbody>
                </table>
				<br />
				<p align="center"><button type="button"> Run Scheduler </button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  } 
}