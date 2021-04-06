import React, { Component } from "react";
import ReportLevel from './ReportLevel'; 
import ReportDates from './ReportDates';

export default class DailyTransactionJournal extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {dtranTyp: ''};
  }

  componentWillMount(){
    this.setState({dtranTyp: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.rDates.rdData(""+"_"+"");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Transaction Type</label></div>
				<div className="col-sm-6">
					<select name="dtranTyp" value={this.state.dtranTyp} onChange={this.handleChange}><option value=""></option><option value="ALL">ALL</option><option value="ADV">Advance</option><option value="ADJ">Interest Adjustment</option><option value="FIS">Funds In Store</option><option value="DACLR">Default ACH Clear</option><option value="ACHD">ACH Deposit</option><option value="ACHPP">ACH Pre-Payment</option><option value="ACHR">ACH Return</option><option value="ACHP">ACH Payment</option><option value="ACLR">ACH Clear</option><option value="DP">Deposit</option><option value="NPP">Returned Check Pre-Payment</option><option value="NSF">Returned Check Posting</option><option value="NSFF">Returned Check Fee Posting</option><option value="NP">Returned Check Payment</option><option value="CLR">Clear</option><option value="REF">Refund</option><option value="BP">Balance Payment</option><option value="WRDP">WO RCC Deposit</option><option value="BUY">Buyback</option><option value="DRDP">Def RCC Deposit</option><option value="WT">Waive Transaction</option><option value="WF">Waive Fee</option><option value="WO">Write-off</option><option value="WOB">Write-Off Bankrupt</option><option value="WOR">Write-Off Recovery</option><option value="SLD">Sold</option><option value="MSP">Miscellaneous Disbursement</option><option value="MSR">Miscellaneous Receipt</option><option value="AGN">Refinance</option><option value="SET">Settlement</option><option value="CAB">Cash Again Buyback</option><option value="DCDP">Debit Card Deposit</option><option value="DCNSF">DebitCard Returned Check Posting</option><option value="DEF">Default</option><option value="PAYIL">Payment</option><option value="DFP">Default Payment</option><option value="PPN">Payment Plan</option><option value="PPAY">Payment Plan Payment</option><option value="ADJN">AdjustmentNegative</option><option value="ADJP">AdjustmentPositive</option><option value="CCG">Check Cashing</option><option value="LON">LOC Disbursement</option><option value="OTHF">Other Fee</option><option value="PAY">Partial Payment</option><option value="PPF">Payment PLAN Processing</option><option value="RA">Agent Removed</option><option value="RCBUY">Pay-off</option><option value="RCPAY">Revolving Payments</option><option value="REPO">Repossession</option><option value="OFR">Out For Repo</option><option value="RPY">Repo Payment</option><option value="SETP">Settlement Payment</option><option value="SLDF">Sale Fee</option><option value="SLDP">Sale Fee Payment</option><option value="STMT">Statement for ULOC</option><option value="UCLO">LOC Closure </option><option value="WOW">Write Off Waived</option><option value="LAT">Late Fee</option><option value="LOCI">LOC Initiation</option><option value="RNSF">RCC Returned Check Posting</option><option value="RNSFF">RCC Returned Check Fee Posting</option><option value="RCLR">RCC Clear</option><option value="DACHD">Default ACH Deposit</option><option value="RCC">RCC Payment</option><option value="RDP">RCC Deposit</option></select>
				</div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}