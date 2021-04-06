import React, { Component } from "react";
import TransactionDetails from '../Loanhistory/TransactionDetails';
import ACHHistory from '../Loanhistory/ACHHistory';
import PaymentPlanSchedule from '../Loanhistory/PaymentPlanSchedule';
import CheckHistory from '../Loanhistory/CheckHistory';
import MailingHistory from '../Loanhistory/MailingHistory';
import CollectionsHistory from '../Loanhistory/CollectionsHistory';
import PTPHistory from '../Loanhistory/PTPHistory';
import TextHistory from '../Loanhistory/TextHistory';
import EmailHistory from '../Loanhistory/EmailHistory';
import DCFailedPaymentsHistory from '../Loanhistory/DCFailedPaymentsHistory';
import NotesHistory from '../Loanhistory/NotesHistory';
import AdjustInterestHistory from '../Loanhistory/AdjustInterestHistory';

export default class TranHistory extends Component {

  constructor (props) {
    super(props);
    this.state = {thVal: ''};
  }

  componentWillMount(){
    this.setState({thVal: this.props.cVal});
  }

  componentDidMount(){
    window.$("#tranAccordion").accordion({
		heightStyle: "content"		
	});  
  }
    
  render(){
		
	return (
	
		<div id="tranAccordion">
			<h3>Installment Transaction History</h3>
            <div>
                <table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
                    <tbody>
                        <tr>
                            <td>Customer</td>
                            <td>Kim, Tibe</td>
                            <td>Loan Status</td>
                            <td>Open</td>
                            <td>Pay Frequency</td>
                            <td>Monthly</td>
                        </tr>
                        <tr>
                            <td>Customer Nbr</td>
                            <td>3152708</td>
                            <td>Loan Date</td>
                            <td>01/05/2021</td>
                            <td>Number of Installments</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Loan Nbr</td>
                            <td>7721915</td>
                            <td>Effective Date</td>
                            <td>01/06/2021</td>
                            <td>Remaining Installments</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>SSN/ITIN</td>
                            <td>XXX-XX-1721</td>
                            <td>Loan Amount</td>
                            <td>320.00</td>
                            <td>Next Due Date</td>
                            <td>01/25/2021</td>
                        </tr>
                        <tr>
                            <td>DOB</td>
                            <td>04/03/1989</td>
                            <td>Interest</td>
                            <td>217.05</td>
                            <td>Next Next Payment Amount</td>
                            <td>108.42</td>
                        </tr>
                        <tr>
                            <td>Primary Phone Nbr</td>
                            <td>(533) 533-2354</td>
                            <td>Origination Fee</td>
                            <td>5.00</td>
                            <td>Remaining Payment Amount</td>
                            <td>108.42</td>
                        </tr>
                        <tr>
                            <td>Primary Phone Type</td>
                            <td>Home</td>
                            <td>Monthly Handling Fee</td>
                            <td>0.00</td>
                            <td>Past Due Amount</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>tibekim@advanceamerica.net</td>
                            <td>CSO Fee</td>
                            <td>0.00</td>
                            <td>Payment Status</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Pending Bankruptcy</td>
                            <td>N</td>
                            <td>APR</td>
                            <td>290.20</td>
                            <td>Delinquent Date</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Bankrupt</td>
                            <td>N</td>
                            <td>Collateral</td>
                            <td>RCC</td>
                            <td>Loan in Cure Period</td>
                            <td>N</td>
                        </tr>
                        <tr>
                            <td>Loan in RCC</td>
                            <td>N</td>
                            <td>Expected Payment Method</td>
                            <td>NOC</td>
                            <td>Cure Period End Date</td>
                            <td>N</td>
                        </tr>
                        <tr>
                            <td>Loan in EPP</td>
                            <td>N</td>
                            <td>ACH/RCC Revoke Flag</td>
                            <td>N</td>
                            <td>Cure Amount</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Migration Instance ID</td>
                            <td></td>
                            <td>RCC Status</td>
                            <td></td>
                            <td>Return Fee Due</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Migration Loan Code</td>
                            <td></td>
                            <td>RCC Ineligible Reason</td>
                            <td></td>
                            <td>Late Fee Due</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>STDB Tran Nbr</td>
                            <td></td>
                            <td>Current Principal Balance</td>
                            <td>320.00</td>
                            <td>PWO Minimum Payment</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Previous Loan Number(Refi)</td>
                            <td>N/A</td>
                            <td>Total Owed</td>
                            <td>325.00</td>
                            <td>PWO Date</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Disbursement Amount(Refi)</td>
                            <td>N/A</td>
                            <td>Pay-off Amount</td>
                            <td>325.00</td>
                            <td>Verification Fee</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Account Sold</td>
                            <td>No</td>
                            <td>Sold to</td>
                            <td></td>
                            <td>Verification Fee Paid</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Marked for Sale</td>
                            <td>N</td>
                            <td>Sold Date</td>
                            <td></td>
                            <td>Contact Phone Number</td>
                            <td>0.00</td>
                        </tr>
                        <tr>
                            <td>Fraudulent Loan</td>
                            <td>No</td>
                            <td>Customer Fraud Type</td>
                            <td></td>
                            <td>Collection Store</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Transaction Details</h3>
			<TransactionDetails thcVal={this.state.thVal} />

            <h3>Customer Documents</h3>
            <div></div>

            <h3>Contract Schedule</h3>
            <div>
                <div class="row">
                    <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Pmt #</th>
                                    <th>Pmt Date</th>
                                    <th>Days</th>
                                    <th>Pmt</th>
                                    <th>New Interest</th>
                                    <th>Matured Interest</th>
                                    <th>Unpaid Interest</th>
                                    <th>Origination Fee</th>
                                    <th>Verification Fee</th>
                                    <th>Inst Amt Paid</th>
                                    <th>Excess Paid Amt</th>
                                    <th>Inst Amt Due</th>
                                    <th>Payment Date</th>
                                    <th>Paid Flag</th>
                                    <th>NSF Fee</th>
                                    <th>Late Fee</th>
                                    <th>Principal</th>
                                    <th>Balance</th>
                                    <th>ACH Dep Count</th>
                                    <th>Is Deferred</th>
                                    <th>ORIG INST NUM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>01/25/2021</td>
                                    <td>19</td>
                                    <td>108.42</td>
                                    <td>47.47</td>
                                    <td>47.47</td>
                                    <td>0.00</td>
                                    <td>5.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>108.42</td>
                                    <td></td>
                                    <td>N</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>55.95</td>
                                    <td>264.05</td>
                                    <td>0</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>02/25/2021</td>
                                    <td>31</td>
                                    <td>108.42</td>
                                    <td>63.91</td>
                                    <td>63.91</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>108.42</td>
                                    <td></td>
                                    <td>N</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>44.51</td>
                                    <td>219.54</td>
                                    <td>0</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>03/25/2021</td>
                                    <td>28</td>
                                    <td>108.42</td>
                                    <td>47.99</td>
                                    <td>47.99</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>108.42</td>
                                    <td></td>
                                    <td>N</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>60.43</td>
                                    <td>159.11</td>
                                    <td>0</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>04/23/2021</td>
                                    <td>29</td>
                                    <td>108.42</td>
                                    <td>36.02</td>
                                    <td>36.02</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>108.42</td>
                                    <td></td>
                                    <td>N</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>72.40</td>
                                    <td>86.71</td>
                                    <td>0</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>05/25/2021</td>
                                    <td>32</td>
                                    <td>108.37</td>
                                    <td>21.66</td>
                                    <td>36.02</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>108.37</td>
                                    <td></td>
                                    <td>N</td>
                                    <td>0.00</td>
                                    <td>0.00</td>
                                    <td>86.71</td>
                                    <td>0.00</td>
                                    <td>0</td>
                                    <td>N</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h3>Deferral Request History</h3>
            <div>
                <div class="row">
                    <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Installment number #</th>
                                    <th>Original Due Date</th>
                                    <th>New Due Date</th>
                                    <th>Deferred Amount</th>
                                    <th>Status</th>
                                    <th>Is Deferred Payment Posted</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="6">No Record(s) Found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h3>Deferred Schedule</h3>
            <div>
                <div class="row">
                    <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Pmt #</th>
                                    <th>Pmt Date</th>
                                    <th>Days</th>
                                    <th>Pmt</th>
                                    <th>New Interest</th>
                                    <th>Matured Interest</th>
                                    <th>Unpaid Interest</th>
                                    <th>Origination Fee</th>
                                    <th>Verification Fee</th>
                                    <th>Inst Amt Paid</th>
                                    <th>Excess Paid Amt</th>
                                    <th>Inst Amt Due</th>
                                    <th>Payment Date</th>
                                    <th>Paid Flag</th>
                                    <th>NSF Fee</th>
                                    <th>Late Fee</th>
                                    <th>Principal</th>
                                    <th>Balance</th>
                                    <th>ACH Dep Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="20">No Record(s) Found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h3>ACH History</h3>
            <ACHHistory thcVal={this.state.thVal} />

            <h3>DC History</h3>
            <div>
                <div class="row">
                    <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>DC Seq Code</th>
                                    <th>Installment Nbr</th>
                                    <th>DC Type</th>
                                    <th>Transaction</th>
                                    <th>DC Effective Date</th>
                                    <th>DC Status</th>
                                    <th>Amount</th>
                                    <th>ABA Code</th>
                                    <th>Check Account No</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

            <h3>Payment Plan Schedule History</h3>
            <PaymentPlanSchedule thcVal={this.state.thVal} />

            <h3>Check History</h3>
            <CheckHistory thcVal={this.state.thVal} />

            <h3>Mailing History</h3>
            <MailingHistory thcVal={this.state.thVal} />

            <h3>Collections History</h3>
            <CollectionsHistory thcVal={this.state.thVal} />

            <h3>PTP History</h3>
            <PTPHistory thcVal={this.state.thVal} />

            <h3>Text History</h3>
            <TextHistory thcVal={this.state.thVal} />

            <h3>Email History</h3>
            <EmailHistory thcVal={this.state.thVal} />

            <h3>Debit Card Failed Payments History</h3>
            <DCFailedPaymentsHistory thcVal={this.state.thVal} />

            <h3>Notes History</h3>
            <NotesHistory thcVal={this.state.thVal} />

            <h3>Adjust Interest History</h3>
            <AdjustInterestHistory thcVal={this.state.thVal} />

            <h3>Scheduled DC Payment History</h3>
            <div>
                <div class="row">
                    <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Date of Future DC Payment</th>
                                    <th>Amount of Future DC Payment</th>
                                    <th>Last 4 digits of the DC</th>
                                    <th>Future DC Payment Presented Date</th>
                                    <th>Status of Future DC Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="5"> No Record(s) Found </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h3>Refinance History</h3>
            <div>
                <div class="row">
                    <div class="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Loan Nbr</th>
                                    <th>Previous Loan Nbr</th>
                                    <th>Processing Status</th>
                                    <th>Refinance Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="4"> No Record(s) Found </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

		</div>
	
	);
  } 
}