import React, { Component } from "react";
import Pop from './Reportpopup';

export default class Reports extends Component {

  constructor (props) {
    super(props);
    this.appndId = this.appndId.bind(this);
    this.state = {hideTbl: false};        
  }
  
  componentDidUpdate(){
    window.$('#menu'+this.state.id).metisMenu().show();	 
  }
  
  componentWillMount(){    
    window.$('#menu'+this.state.id).metisMenu().show();    
  }

  componentDidMount(){
	if ( window.$.fn.dataTable.isDataTable( '#dataTable2' ) ) {
		window.$('#dataTable2').DataTable();
	} else {
		window.$('#dataTable2').DataTable({
			"scrollX": true,
			"pageLength": 8,
  			"lengthMenu": [ 8, 16, 24, 32 ]
		});
	}
  }
  
  appndId=(str)=>{        
    this.setState({id: str});
    window.$('#menu'+str).metisMenu().show();    
  }
  
  menus(str){
    this.refs.rpop.disp(str);
  }

  rTbl=()=>{
	this.setState({hideTbl: true});
  }  
    
  render(){
	const srchBlock = {
		padding: '6px',
		height: 'auto',
		marginBottom: '6px'
	};
	const gap = {
		background: '#40557a'
	};
	
	let reportLst = [];
  
	let r = [{storeNbr: '866', custName: 'Doe, John', custNbr: '1708695', loanNbr: '84005', loanDate: '03/14/19', loanAmt: '1000.00', feeAmt: '0.00', amtDue: '408.74', loanStatus: 'OPN', dueDate: '06/03/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'},{storeNbr: '869', custName: 'Nixon, Tiger', custNbr: '1716692', loanNbr: '87357', loanDate: '03/15/19', loanAmt: '1000.00', feeAmt: '0.00', amtDue: '1100.00', loanStatus: 'OPN', dueDate: '06/01/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'},{storeNbr: '809', custName: 'Defoe, William', custNbr: '1694695', loanNbr: '86569', loanDate: '02/25/19', loanAmt: '860.00', feeAmt: '0.00', amtDue: '954.00', loanStatus: 'OPN', dueDate: '05/31/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'},{storeNbr: '837', custName: 'Aaron, Dustin', custNbr: '1713677', loanNbr: '86130', loanDate: '03/01/19', loanAmt: '600.00', feeAmt: '0.00', amtDue: '654.00', loanStatus: 'OPN', dueDate: '05/31/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'},{storeNbr: '809', custName: 'Tripp, Will', custNbr: '1716376', loanNbr: '87208', loanDate: '03/04/19', loanAmt: '200.00', feeAmt: '0.00', amtDue: '188.34', loanStatus: 'OPN', dueDate: '05/28/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'},{storeNbr: '1275', custName: 'Abrams, Jared', custNbr: '1702129', loanNbr: '79674', loanDate: '02/25/19', loanAmt: '1000.00', feeAmt: '0.00', amtDue: '1040.00', loanStatus: 'OPN', dueDate: '05/28/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'},{storeNbr: '867', custName: 'Absher, Stephen', custNbr: '1702157', loanNbr: '79686', loanDate: '03/09/19', loanAmt: '1000.00', feeAmt: '0.00', amtDue: '1100.00', loanStatus: 'OPN', dueDate: '05/27/2019', prodType: 'ILP', collType: 'NOC', fieldNm: 'DIV9', regionNm: 'REGION6', areaNm: 'DONOTUSE'}];    

	for(let i=0; i<=r.length-1; i++){
	  reportLst.push(<tr><td align="center">{r[i].storeNbr}</td><td align="left">{r[i].custName}</td><td align="center">{r[i].custNbr}</td><td align="center">{r[i].loanNbr}</td><td align="center">{r[i].loanDate}</td><td align="right">$ {r[i].loanAmt}</td><td align="right">$ {r[i].feeAmt}</td><td align="right">$ {r[i].amtDue}</td><td align="center">{r[i].loanStatus}</td><td align="center">{r[i].dueDate}</td><td align="center">{r[i].prodType}</td><td align="center">{r[i].collType}</td><td align="center">{r[i].fieldNm}</td><td align="center">{r[i].regionNm}</td><td align="center">{r[i].areaNm}</td></tr>); 
	}
	
	return (<div className="height100">
				<div className="searchListHolder2">
					<h2> Reports </h2>					
					<div className="report-menu" id="main2">
						<div className="scrollbar-inner">
							 <div className="report-menu-height">
								  <nav className="sidebar-nav">
									<ul className="metismenu" id={'menu'+this.state.id}>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Collection</a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('PDR')}>Past Due Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CA')}>Collection Activity</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Courtesy Call Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('PTP')}>Promise To Pay </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Store to Central Collections Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCR')}>Store Call Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('WRR')}>Write-off Recoveries Report </a></li>
											</ul>
										</li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Customer Reports</a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Bankruptcy Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Bankruptcy Payments</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Pending Bankruptcy Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Inactive Customer</a></li>
												<li><a href={'#'} onClick={()=>this.menus('AC')}>Active Customer</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Active Military</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Do Not Call Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CISR')}>Customer Information Summary Report(CIS)</a></li>
												<li><a href={'#'} onClick={()=>this.menus('BTLR')}>BSA Transaction Log Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SC')}>Status Change Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('DCR')}>Deceased Customer Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('MRCR')}>Most Recent Customer Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Instant Funding Rejection Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('RAAR')}>Review Approved Applications Report</a></li>
											</ul>
										</li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Daily Summary Reports </a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('DTJ')}>Daily Transaction Journal </a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCM')}>Store Cash Management</a></li>
												<li><a href={'#'} onClick={()=>this.menus('EODS')}>EOD Summary</a></li>
												<li><a href={'#'} onClick={()=>this.menus('DTJ')}>Voided Transactions</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Cash Over/Short</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCR')}>Cash Balance Transaction Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCMS')}>Store Cash Management Summary Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('PDR')}>Cash Balance Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCM')}>Daily Closeout Report </a></li>
											</ul>
										</li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Loan Reports</a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('OPR')}>Outstanding Presentment Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('RIR')}>Returned Items Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('AC')}>Held Check Summary</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Check Register Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Waive NSF Fee Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('PDR')}>PWO Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('WLR')}>Write Off Loans Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Sold Loan Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Coupon Tracking Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Refund Transaction Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>ACH Details Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('ALP')}>All Payments Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('NLR')}>New Loan Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCMS')}>Returned Items Inventory Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Default Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SPR')}>Scheduled Payment Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('ARA')}>ACH and RCC Activity Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('APR')}>Active Prenote Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('NPR')}>Non-Center Payment Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('ACR')}>ACH Credit Rejection Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('STTR')}>STDB Transaction Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>STDB Report for NSF/NSC Returns</a></li>
											</ul>
										</li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Other Reports</a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('MTL')}>Monetary Transfer Log</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Rescission Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Payment Plan Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Encryptionkey Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Misc Disbursements Log Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Misc Receipts Log</a></li>
												<li><a href={'#'} onClick={()=>this.menus('AUR')}>Active Users Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Loans Credit Balance Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Debit Card Payments Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCMS')}>NOAT Missing Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Loan Denial Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Large Scale Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('TSR')}>Time Sheet Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('WBA')}>Work Break Audit Report</a></li>
											</ul>
										</li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Accounting Reports </a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('ACR')}>GL Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('ACR')}>TREC Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Bank Return Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Store Cash Summary Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('HOR')}>Hold Over Report </a></li>
											</ul>
										</li>
										<li><a href={"#"}>Audit Reports</a></li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Title Reports </a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Blackbook Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Title New Loans Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('SCMS')}>Title Open Loan Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Title Repo Log Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('TTS')}>Title Tracking Status Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('TSL')}>Title Sequential Loan Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Title Out to Repo Report</a></li>
												<li><a href={'#'} onClick={()=>this.menus('PDR')}>Title Secured Past Due Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Title New Origination Report </a></li>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Title Check Register Report </a></li>
											</ul>
										</li>
										<li><a href={"#"} onClick={()=>this.menus('TKE')}>Time Keeping Extracts</a></li>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">PPC Reports</a>
											<ul>
												<li><a href={'#'} onClick={()=>this.menus('CCR')}>Card Sale and Load Report</a></li>
											</ul>
										</li> 
									</ul>
								  </nav>
							  </div>
							</div>
						</div>
						
				</div>
				<div className="contntHide" style={gap}>{/*<span id="contLeft"><i className="fas fa-angle-left"></i></span><span id="contRight"><i className="fas fa-angle-double-right"></i></span>*/}</div>
				
				<div className="collectionContainer">
					<div className="collectionSubContainer" hidden={!this.state.hideTbl}>
						<div className="col-sm-12">
							<div className="innerBlockContainer">
								<h2>Active Customer Report <span className="pull-right"><button type="button"><i className="glyphicon glyphicon-print"></i></button>&nbsp;&nbsp;<button type="button"><i className="glyphicon glyphicon-export"></i></button></span></h2>
								<p className="text-left"><strong>Product Type: ILP</strong></p>
								<div className="col-sm-12 reportHead innerBlockMargin">
									<h6><span className="pull-left"><strong>For Store: </strong>All</span> <span className="pull-right"><strong>Date: </strong> April 22,2019</span></h6>
								</div>	
					
								<div className="col-sm-12 table-responsive">
									<table id="dataTable2">
										<thead>
											<tr>
												<th align="center">Store Nbr</th>
												<th align="center">Customer Name</th>
												<th align="center">Customer Nbr</th>
												<th align="center">Loan Nbr</th>
												<th align="center">Loan Date</th>
												<th align="center">Loan Amt</th>
												<th align="center">Fee Amt</th>
												<th align="center">Amt Due</th>
												<th align="center">Loan Status</th>
												<th align="center">Due Date</th>
												<th align="center">Product Type</th>
												<th align="center">Collateral Type</th>
												<th align="center">Field Name</th>
												<th align="center">Region Name</th>
												<th align="center">Area Name</th>
											</tr>			 
										</thead>
										<tbody>
											{reportLst}
										</tbody>
									</table>				
								</div>
								<p>&nbsp;</p>
								<div className="col-sm-12 text-center reportHead">
									<h4>Signature: ______________</h4>
									<h5>(if used for Required Audit)</h5>
								</div>
							</div>						
						</div>
					</div>
					<Pop ref='rpop' rTbl={this.rTbl} />
				</div>		
		</div>
    );
  } 
}