import React, { Component } from "react";

export default class Summaryview extends Component {

  constructor (props) {
    super(props);
	this.state = {svVal: ''};
  }
  
  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({svVal: this.props.cVal});
	}
  }
    
  render(){
    
    let allLst = [];
	let all = [{prodType: 'ILP', loanNbr: '7721915', totalDue: '320.00', totalPaid: '0.00', nextDueDate: '01/25/2021', pymtAmtDue: '108.42', ccNbr: ''}];
    for(let v=0; v<=all.length-1; v++){
        allLst.push(<tr><td align="center">{all[v].prodType}</td><td align="center">{all[v].loanNbr}</td><td align="center">{all[v].totalDue}</td><td align="center">{all[v].totalPaid}</td><td align="center">{all[v].nextDueDate}</td><td align="center">{all[v].pymtAmtDue}</td><td align="center">{all[v].ccNbr}</td></tr>); 
    }

    let alltLst = [];
	let allt = [{prodType: 'ILP', loanNbr: '7721829', refNbr: '39703742', tran: 'Late Fee', void: 'N', dateTime: '2021/02/26 23:59', receipt: '', tranAmt: '0.00', principal: '0.00', feeAmt: '0.00', othAmt: '9.81', ccPymt: 'N'},{prodType: 'ILP', loanNbr: '7721829', refNbr: '39703755', tran: 'Buyback', void: 'N', dateTime: '2021/02/26 03:18', receipt: 'CCK', tranAmt: '-424.65', principal: '-300.00', feeAmt: '-109.84', othAmt: '-14.81', ccPymt: 'N'},{prodType: 'ILP', loanNbr: '7721829', refNbr: '39703725', tran: 'Returned Check Posting', void: 'N', dateTime: '2021/02/26 02:30', receipt: '', tranAmt: '0.00', principal: '0.00', feeAmt: '0.00', othAmt: '0.00', ccPymt: 'N'},{prodType: 'ILP', loanNbr: '7721829', refNbr: '39703590', tran: 'Returned Check Posting', void: 'N', dateTime: '2021/01/28 12:10', receipt: '', tranAmt: '0.00', principal: '0.00', feeAmt: '0.00', othAmt: '0.00', ccPymt: 'N'},{prodType: 'ILP', loanNbr: '7721829', refNbr: '39703430', tran: 'Advance', void: 'N', dateTime: '2021/01/05 05:57', receipt: 'CK', tranAmt: '300.00', principal: '0.00', feeAmt: '0.00', othAmt: '5.00', ccPymt: 'N'},{prodType: 'ILP', loanNbr: '7721829', refNbr: '39703774', tran: 'Advance', void: 'N', dateTime: '2021/01/05 05:41', receipt: 'ACH', tranAmt: '320.00', principal: '0.00', feeAmt: '0.00', othAmt: '5.00', ccPymt: 'N'}];
    for(let x=0; x<=allt.length-1; x++){
        alltLst.push(<tr><td align="center">{allt[x].prodType}</td><td align="center">{allt[x].loanNbr}</td><td align="center">{allt[x].refNbr}</td><td align="center">{allt[x].tran}</td><td align="center">{allt[x].void}</td><td align="center">{allt[x].dateTime}</td><td align="center">{allt[x].receipt}</td><td align="center">{allt[x].tranAmt}</td><td align="center">{allt[x].principal}</td><td align="center">{allt[x].feeAmt}</td><td align="center">{allt[x].othAmt}</td><td align="center">{allt[x].ccPymt}</td></tr>); 
    }

    let pdlLst = [];
    let pdltLst = [];
    let locLst = [];
    let loctLst = [];
    let tlpLst = [];
    let tlptLst = [];
    let ccLst = [];
    let cctLst = [];
    let cctdLst = [];
	
		
	return (
	
		<div>
            <div className="col-sm-12 form-group">
                <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Customer Information </h2>
                    <table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
                        <tbody>
                            <tr>
                                <td>SSN/ITIN</td>
                                <td>XXX-XX-1721</td>
                                <td>DOB</td>
                                <td>04/03/1989</td>
                                <td>Photo ID</td>
                                <td>KIM1</td>
                            </tr>
                            <tr>
                                <td>Phone/Mobile</td>
                                <td>(535) 533-2354 (H)</td>
                                <td>Email</td>
                                <td>tibekim@advanceamerica.net</td>
                                <td>Address</td>
                                <td>Hill Top, Boston, MS 38966</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="row">
			<div className="wrapper subWrapper">
                <ul className="nav nav-tabs subTabs">                    
                    <li class="active"><a data-toggle="tab" href="#all">All</a></li>
                    <li><a data-toggle="tab" href="#pdl">PDL</a></li>
                    <li><a data-toggle="tab" href="#ilp">ILP</a></li>
                    <li><a data-toggle="tab" href="#loc">LOC</a></li>
                    <li><a data-toggle="tab" href="#tlp">TLP</a></li>
                    <li><a data-toggle="tab" href="#cc">CC</a></li>                
                </ul>
            </div>
            <div className="tab-content subContent">      
                <div id="all" class="tab-pane fade in active">
                    <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> List of All Active Loans </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th>Next Due Date</th>
                                    <th>Payment Amt Due</th>
                                    <th>Check Nbr/Card Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allLst}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Transactions </h2>
                        <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Ref Nbr</th>
                                    <th>Transaction</th>
                                    <th>Voided ?</th>
                                    <th>Date/Time</th>
                                    <th>Receipt Id</th>
                                    <th>Tran Amt</th>
                                    <th>Principal</th>
                                    <th>Fee Amt</th>
                                    <th>Other Amt</th>
                                    <th>Check Cashing Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alltLst}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="pdl" class="tab-pane fade">
                <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> List of Active PDL Loans </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th>Next Due Date</th>
                                    <th>Payment Amt Due</th>
                                    <th>Check Nbr/Card Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pdlLst}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Transactions </h2>
                        <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Ref Nbr</th>
                                    <th>Transaction</th>
                                    <th>Voided ?</th>
                                    <th>Date/Time</th>
                                    <th>Receipt Id</th>
                                    <th>Tran Amt</th>
                                    <th>Principal</th>
                                    <th>Fee Amt</th>
                                    <th>Other Amt</th>
                                    <th>Check Cashing Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pdltLst}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="ilp" class="tab-pane fade">
                <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> List of Active ILP Loans </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th>Next Due Date</th>
                                    <th>Payment Amt Due</th>
                                    <th>Check Nbr/Card Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allLst}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Transactions </h2>
                        <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Ref Nbr</th>
                                    <th>Transaction</th>
                                    <th>Voided ?</th>
                                    <th>Date/Time</th>
                                    <th>Receipt Id</th>
                                    <th>Tran Amt</th>
                                    <th>Principal</th>
                                    <th>Fee Amt</th>
                                    <th>Other Amt</th>
                                    <th>Check Cashing Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alltLst}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="loc" class="tab-pane fade">
                <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> List of Active LOC Loans </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th>Next Due Date</th>
                                    <th>Payment Amt Due</th>
                                    <th>Check Nbr/Card Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locLst}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Transactions </h2>
                        <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Ref Nbr</th>
                                    <th>Transaction</th>
                                    <th>Voided ?</th>
                                    <th>Date/Time</th>
                                    <th>Receipt Id</th>
                                    <th>Tran Amt</th>
                                    <th>Principal</th>
                                    <th>Fee Amt</th>
                                    <th>Other Amt</th>
                                    <th>Check Cashing Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loctLst}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="tlp" class="tab-pane fade">
                <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> List of Active TLP Loans </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th>Next Due Date</th>
                                    <th>Payment Amt Due</th>
                                    <th>Check Nbr/Card Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tlpLst}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Transactions </h2>
                        <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Ref Nbr</th>
                                    <th>Transaction</th>
                                    <th>Voided ?</th>
                                    <th>Date/Time</th>
                                    <th>Receipt Id</th>
                                    <th>Tran Amt</th>
                                    <th>Principal</th>
                                    <th>Fee Amt</th>
                                    <th>Other Amt</th>
                                    <th>Check Cashing Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tlptLst}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="cc" class="tab-pane fade">
                <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> List of Active Check Cashing </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Total Due</th>
                                    <th>Total Paid</th>
                                    <th>Next Due Date</th>
                                    <th>Payment Amt Due</th>
                                    <th>Check Nbr/Card Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ccLst}
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Transactions </h2>
                        <div className="table-responsive">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Product Type</th>
                                    <th>Loan Nbr</th>
                                    <th>Ref Nbr</th>
                                    <th>Transaction</th>
                                    <th>Voided ?</th>
                                    <th>Date/Time</th>
                                    <th>Receipt Id</th>
                                    <th>Tran Amt</th>
                                    <th>Principal</th>
                                    <th>Fee Amt</th>
                                    <th>Other Amt</th>
                                    <th>Check Cashing Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cctLst}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-12 form-group">
                    <div className="innerBlockContainer">
                    <h2 className="pamHeads"> Turn Down History </h2>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Turn Down Reasons</th>
                                    <th>Comments</th>
                                    <th>Date Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cctdLst}
                            </tbody>
                        </table>
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