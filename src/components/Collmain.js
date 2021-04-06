import React, { Component } from "react";
import Datepicker from './common/Datepicker';
import Borrower from './Borrower';
import EmailHistory from './Loanhistory/EmailHistory';
import VehicleHistory from './Loanhistory/VehicleHistory';
import PTPHistory from './Loanhistory/PTPHistory';
import TextHistory from './Loanhistory/TextHistory';
import NotesHistory from './Loanhistory/NotesHistory';
import CollectionsHistory from './Loanhistory/CollectionsHistory';
import Optinout from './Loanhistory/Optinout';
import RenewalSchedule from './Loanhistory/RenewalSchedule';
import LetterHistory from './Loanhistory/LetterHistory';
import Summaryview from './Loanhistory/Summaryview';
import TranHistory from './Loanhistory/TranHistory';
import Payments from './Loantransaction/Payments';

export default class Collmain extends Component {
  constructor(props){
	super(props);
	this.handleChange = this.handleChange.bind(this);
    this.state = {cNbr: '', ciName: '', ciAddrs: '', ciAddrs1: '', ciCityStZip: '', ciSsn: '', ciDob: '', ciCustStat: '', ciHomeCenter: '', ciCustSince: '', ciPriPh: '', ciPriPhTyp: '', ciPriPhDNC: '', ciPriPhAuth: '', ciSecPh: '', ciSecPhTyp: '', ciSecPhDNC: '', ciSecPhAuth: '', ciWorkPh: '', ciWorkPhTyp: '', ciWorkPhDNC: '', ciWorkPhAuth: '', ciEmail: '', ciEmailTyp: '', ciEmailDNC: '', ciEmailAuth: '', ldLoanNbr: '', ldLoanTyp: '', ldBal: '', ldAmtDue: '', ldPastDue: '', ldDaysPastDue: '', ldLastPymtDt: '', ldLastPtp: '', ldLastAmt: '', ldNxtPayDay: '', ldPwo: '', ldPwo1: '', ldLoanStat: '', ceActions: '', ceResult: '', maData: true};
  };

  componentWillMount(){
	this.setState({ciName: 'Parks, Andy', ciAddrs: '88 Shadow Lawn Dr', ciAddrs1: '', ciCityStZip: 'Jackson, TN, 38301', ciSsn: 'XXX-XX-3020', ciDob: '02/02/1976', ciCustStat: 'Write-off', ciHomeCenter: '0423', ciCustSince: '06/16/2017', ciPriPh: '(534) 654-5465', ciPriPhTyp: 'Cell', ciPriPhDNC: 'N', ciPriPhAuth: 'Y', ciSecPh: '', ciSecPhTyp: '', ciSecPhDNC: 'N/A', ciSecPhAuth: 'N/A', ciWorkPh: '(970) 254-5780', ciWorkPhTyp: 'N/A', ciWorkPhDNC: 'N', ciWorkPhAuth: 'N/A', ciEmail: 'andy.parks@gmail.com', ciEmailTyp: 'N/A', ciEmailDNC: 'N/A', ciEmailAuth: '', ldLoanNbr: '97234', ldLoanTyp: 'ILP', ldBal: '1000.00', ldAmtDue: '1016.00', ldPastDue: '0.00', ldDaysPastDue: '', ldLastPymtDt: '04/18/2019', ldLastPtp: 'N/A', ldLastAmt: '0.00', ldNxtPayDay: '05/03/2019', ldPwo: '', ldPwo1: '', ldLoanStat: 'Open', ceActions: '', ceResult: ''});
  }
  
  componentDidMount(){
    window.$(document).ready(function(){
	  window.$('[data-toggle="tooltip"]').tooltip();   
	});	 
  }
  
  componentDidUpdate(){
    window.$(document).ready(function(){
	  window.$('[data-toggle="tooltip"]').tooltip();   
	});
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  disp(str){
	if(str != undefined){
		this.setState({ciName: str.name, ciAddrs: str.custAddress, ciCityStZip: str.custCity+', '+str.custState+', '+str.custZip, ciSsn: str.custSsn, ciCustStat: str.custStatus, ciPriPh: str.custPh, ciPriPhTyp: str.custPhTyp, ciEmail: str.custEmail});
	}
  }

  clDisp(str){
	this.setState({cData: str, maData: false});
  }

  cCLose=()=>{
    this.setState({cData: '', maData: true});
  }
    
  render(){
	const eqHght = {
		display: 'flex',
		marginBottom: '8px'
	};
    
	let olLst = [];
	let chLst = [];
	let nhLst = [];
  
	{/*let ol = [{loanType: '', loanNbr: '', loanDate: '', dueDate: '', loanEndDate: '', loanStatus: '', balance: ''}];*/}
	let ol = [];	
	if(ol.length === 0){
		olLst.push(<tr><td align="left" colSpan="8">No Other Outstanding Loans available.</td></tr>);
	}else{
		for(let d=0; d<=ol.length-1; d++){
			olLst.push(<tr><td align="center">{ol[d].loanType}</td><td align="center">{ol[d].loanNbr}</td><td align="center">{ol[d].loanDate}</td><td align="center">{ol[d].dueDate}</td><td align="center">{ol[d].loanEndDate}</td><td align="center">{ol[d].loanStatus}</td><td align="center">{ol[d].balance}</td><td align="center"><button type="button"> Go </button></td></tr>); 
		}
	}
	
	{/*let ch = [{date: '', user: '', action: '', response: '', comments: '', autoComments: ''}];*/}
	let ch = [];
	if(ch.length === 0){
		chLst.push(<tr><td align="left" colSpan="6">Collection History not available.</td></tr>);
	}else{
		for(let e=0; e<=ch.length-1; e++){
			chLst.push(<tr><td align="center">{ch[e].date}</td><td align="center">{ch[e].user}</td><td align="center">{ch[e].action}</td><td align="center">{ch[e].response}</td><td align="center">{ch[e].comments}</td><td align="center">{ch[e].autoComments}</td></tr>); 
		}
	}
	
	let nh = [{urgent: 'N', date: '04/17/2019', loanNbr: '97234', module: 'Cust Comments', comments: 'Update 04/17/2020', enteredBy: '172832'}];
	{/*let nh = [];*/}
	if(nh.length === 0){
		chLst.push(<tr><td align="left" colSpan="6">Notes History not available.</td></tr>);
	}else{
		for(let f=0; f<=nh.length-1; f++){
			nhLst.push(<tr><td align="center">{nh[f].urgent}</td><td align="center">{nh[f].date}</td><td align="center">{nh[f].loanNbr}</td><td align="center">{nh[f].module}</td><td align="center">{nh[f].comments}</td><td align="center">{nh[f].enteredBy}</td></tr>); 
		}
	}
	
    return (
		
		<div className="height100">      
			<div className="collectionContainer">
				<div className="collectionSubContainer">
					<div className="col-sm-12 multipleTabHolder">
						<div className="innerBlockContainer">
							<h2 className="text-center">Multiple Acts</h2>
							<div className="col-sm-12 icon-text">
							<h4 className="subHead">Customer</h4>
								<button type="button" className="btn-block btn-fontsize" title="Customer Status" onClick={()=>this.clDisp('CS')}>Customer Status </button>
								<button type="button" className="btn-block btn-fontsize" title="Summary View" onClick={()=>this.clDisp('SV')}>Summary View</button>
								<br/>

							<h4 className="subHead">Payment</h4>
								<button type="button" className="btn-block btn-fontsize" title="Make Payment" onClick={()=>this.clDisp('MP')}> Make Payment </button>
								<button type="button" className="btn-block btn-fontsize" title="Payment Schedule" onClick={()=>this.clDisp('PS')}> Payment Schedule </button>
								<button type="button" className="btn-block btn-fontsize" title="Calc Early Pay Off"> Calc Early Pay Off </button>
								<br/>
								
							<h4 className="subHead">History</h4>	
								<button type="button" className="btn-block btn-fontsize"  title="Transaction History" onClick={()=>this.clDisp('TH')}> Transaction History </button>
								<button type="button" className="btn-block btn-fontsize" title="Letter History" onClick={()=>this.clDisp('LH')}> Letter History </button>
								<button type="button" className="btn-block btn-fontsize" title="PTP History" onClick={()=>this.clDisp('PH')}> PTP History </button>
								<button type="button" className="btn-block btn-fontsize" title="SMS History" onClick={()=>this.clDisp('SH')}> SMS History </button>
								<button type="button" className="btn-block btn-fontsize" title="Vehicle History" onClick={()=>this.clDisp('VH')}> Vehicle History </button>
								<button type="button" className="btn-block btn-fontsize" title="Email History" onClick={()=>this.clDisp('EH')}> Email History </button>
								<button type="button" className="btn-block btn-fontsize" title="Collections History" onClick={()=>this.clDisp('CH')}> Collections History </button>
								<button type="button" className="btn-block btn-fontsize" title="Note History" onClick={()=>this.clDisp('NH')}> Note History</button>
								<br/>
								
							<h4 className="subHead">Others</h4>
								<button type="button" className="btn-block btn-fontsize" title="Opt in / Out" onClick={()=>this.clDisp('IO')}> Opt in / Out </button>

							</div>
						</div>
					</div>
					{this.state.maData ? 
					<div className="tabCollectionHolder">
						<div className="dispFlx">
							<div className="col-sm-4 form-group">
							<div className="innerBlockContainer">
							<h2>Customer Info</h2>
							<div className="innerScrollContainer">
								<table width="100%" className="nth-evenColor">
									<tbody>
										<tr>
											<td>Name</td>
											<td>{this.state.ciName}</td>
										</tr>
										<tr>
											<td>Address line 1</td>
											<td>{this.state.ciAddrs}</td>
										</tr>
										<tr>
											<td>Address line 2</td>
											<td>{this.state.ciAddrs1}</td>
										</tr>
										<tr>
											<td>City, State, Zip</td>
											<td>{this.state.ciCityStZip}</td>
										</tr>
										<tr>
											<td>Last 4 SSN#</td>
											<td>{this.state.ciSsn}</td>
										</tr>
										<tr>
											<td>DOB</td>
											<td>{this.state.ciDob}</td>
										</tr>
										<tr>
											<td>Customer Status</td>
											<td>{this.state.ciCustStat}</td>
										</tr>
										<tr>
											<td>Home Center</td>
											<td>{this.state.ciHomeCenter}</td>
										</tr>
										<tr>
											<td>Customer Since</td>
											<td>{this.state.ciCustSince}</td>
										</tr>
										</tbody>
									</table>
									</div>
									</div>
								</div>
							<div className="col-sm-4 form-group">							
								<div className="innerBlockContainer">
								<h2>Contact Info</h2>
									<div className="contact-infoscroll">
									<table width="100%" className="td-pdng nth-evenColor">
										<tbody>
										<tr>
											<th colSpan="2">&nbsp;</th>
											<th>Type</th>
											<th>DNC</th>
											<th>Auth</th>
										</tr>
										<tr>
											<td>Primary Phone Nbr</td>
											<td>{this.state.ciPriPh}</td>
											<td width="40px" align="center">{this.state.ciPriPhTyp}</td>
											<td width="40px" align="center" className="text-imp">{this.state.ciPriPhDNC}</td>
											<td width="40px" align="center" className="text-imp">{this.state.ciPriPhAuth}</td>
										</tr>
										<tr>
											<td>Secondary Phone Nbr</td>
											<td>{this.state.ciSecPh}</td>
											<td align="center">{this.state.ciSecPhTyp}</td>
											<td align="center" className="text-imp">{this.state.ciSecPhDNC}</td>
											<td align="center" className="text-imp">{this.state.ciSecPhAuth}</td>
										</tr>
										<tr>
											<td>Work</td>
											<td>{this.state.ciWorkPh}</td>
											<td align="center">{this.state.ciWorkPhTyp}</td>
											<td align="center" className="text-imp">{this.state.ciWorkPhDNC}</td>
											<td align="center" className="text-imp">{this.state.ciWorkPhAuth}</td>
										</tr>
										<tr>
											<td>Email Address</td>
											<td><span className="breakWord">{this.state.ciEmail}</span></td>
											<td align="center">{this.state.ciEmailTyp}</td>
											<td align="center" className="text-imp">{this.state.ciEmailDNC}</td>
											<td align="center" className="text-imp">{this.state.ciEmailAuth}</td>
										</tr>
										</tbody>
									</table>
									<div> &nbsp; </div>
								</div>
							</div>
							</div>
							<div className="col-sm-4 form-group">
								<div className="innerBlockContainer">
									<h2>Loan Details</h2>
									<div className="innerScrollContainer">
									<table className="nth-evenColor" width="100%">
										<tbody>
										<tr>
											<td width="60%">Loan #</td>
											<td>{this.state.ldLoanNbr}</td>
										</tr>
										<tr>
											<td>Loan Type</td>
											<td>{this.state.ldLoanTyp}</td>
										</tr>
										<tr>
											<td>Balance</td>
											<td>$ {this.state.ldBal}</td>
										</tr>
										<tr>
											<td>Amount Due</td>
											<td>$ {this.state.ldAmtDue}</td>
										</tr>
										<tr>
											<td>Past Due</td>
											<td>$ {this.state.ldPastDue}</td>
										</tr>
										<tr>
											<td>Days Past Due</td>
											<td>{this.state.ldDaysPastDue}</td>
										</tr>
										<tr>
											<td>Last payment date</td>
											<td>{this.state.ldLastPymtDt}</td>
										</tr>
										<tr>
											<td>Last Broken PTP and Amount</td>
											<td>{this.state.ldLastPtp} <b>/</b> $ {this.state.ldLastAmt}</td>
										</tr>
										<tr>
											<td>Next Pay Day</td>
											<td>{this.state.ldNxtPayDay}</td>
										</tr>
										<tr>
											<td>PWO</td>
											<td>{this.state.ldPwo} <b>/</b> {this.state.ldPwo1}</td>
										</tr>
										<tr>
											<td>Loan Status</td>
											<td>{this.state.ldLoanStat}</td>
										</tr>
										</tbody>
									</table>
									</div>
								</div>
							</div>
						</div>
														
						<div className="col-sm-12">
							<div className="innerBlockContainer">
							<h2>Collections Effort</h2>
							<div className="contact-infoscroll">
							<table width="100%" className="noStripe">
								<tbody>
								<tr>
									<td className="vTop">
										<select id="ceActions" name="ceActions" value={this.state.ceActions} onChange={this.handleChange}>
										<option value="">Action</option><option value="AI">Account Inquiry</option><option value="CB">Called Bank</option><option value="CCCS">Called CCCS</option><option value="CCL">Complaint-CCL</option><option value="CV">Customer Visited</option><option value="ICA">Incoming Call Attorney</option><option value="ICC">Incoming call Customer</option><option value="ICO">Incoming call Other</option><option value="LAP">Lead - Application</option><option value="LA">Legal Action</option><option value="LR">Letter received</option><option value="LS">Letter sent</option><option value="MR">Mail Received</option><option value="OCBK">Outgoing Call Bankruptcy Hotline</option><option value="OCC">Outgoing Courtesy Call</option><option value="OCA">Outgoing call Attorney</option><option value="OCO">Outgoing call Other</option><option value="OCOC">Outgoing call Other Cell</option><option value="OCP">Outgoing call Primary</option><option value="OCCS">Outgoing call Secondary</option><option value="OCW">Outgoing call Work</option><option value="PTPI">PTP Inquiry</option><option value="PI">Payment Inquiry</option><option value="PCRL">Printed Check / Refund Letter</option><option value="PL">Printed Collection Letter</option><option value="RPOG">RP Offer Letter Generated</option><option value="RV">Reviewed</option><option value="SC">See Comments</option></select>&nbsp;<br/>
										Follow up date &nbsp; <br /><Datepicker />
									</td>
									<td className="vTop">
										<select id="ceResult" name="ceResult" value={this.state.ceResult} onChange={this.handleChange}>
										<option value="">Response</option><option value="ACHX">ACH opt out</option><option value="AR">Atty representation</option><option value="BNKC">Bankruptcy notice confirmed</option><option value="BZ">Busy</option><option value="CNO">Case Number Obtained</option><option value="CAD">Cease and Desist</option><option value="CA">Confirmed appointment</option><option value="CCNA">Contact customer no arrangement</option><option value="CRP">Customer Requests Presentment</option><option value="CST">Customer Surrendered Title</option><option value="CMP">Customer mailed Payment</option><option value="CDC">Customer number disconnected</option><option value="CNP">Customer refused to pay</option><option value="CRD">Customer request deposit</option><option value="DSD">Deceased</option><option value="DNC">Do not call number</option><option value="FB">Filing Bankruptcy</option><option value="FAA">Funds Are Available</option><option value="IH">In Hospital</option><option value="LMRCO">Left Message Return Call Other</option><option value="MM">Left message</option><option value="LMVM">Left message voice mail</option><option value="LNM">Left no message</option><option value="MR">Mail returned</option><option value="NNR">New Number Received</option><option value="NI">New customer information, updated account</option><option value="NCN">No Case Number</option><option value="NLE">No Longer Employed</option><option value="NLR">No Longer Represent Customer</option><option value="NA">No answer</option><option value="NAVL">Not Available</option><option value="NH">Not Home</option><option value="DISC">Number Disconnected</option><option value="PTP">Promise to pay</option><option value="REP">Repossession</option><option value="RETA">Retained Attorney</option><option value="RF">Retrieved Funds</option><option value="RM">Returned Mail</option><option value="RPC">Right party contact</option><option value="SN">See Notes</option><option value="SCA">Stop Collections Activity</option><option value="SEM">Stop Email Messages</option><option value="STM">Stop Text Messages</option><option value="UCI">Updated Customer Information</option><option value="VA">Verified Account</option><option value="VF">Verified Funds</option><option value="WBI">Will Be In</option><option value="WN">Wrong number</option></select>&nbsp;<br/>						
										<textarea rows="3" id="comments" placeholder="Notes" className="form-control"></textarea>
									</td>
									<td>
										<button type="button" className="btn-block">Save &nbsp;</button>
										<div className="clearfix">&nbsp;</div>
										<button type="button" className="btn-block">Next &nbsp; <i className="fa fa-angle-double-right"></i></button>
									</td>
								</tr>				
								<tr className="dispNone" id="payblock">
									<td colSpan="4">
										Payment Date &nbsp; <Datepicker /> &nbsp; &nbsp;
										Payment Amt &nbsp; <input type="text" id="payAmt"/> &nbsp; &nbsp;
										Payment Type &nbsp; 
										<select id="payType">
											<option value=""></option>
											<option value="SP">Store Payment</option>
											
										</select>&nbsp;&nbsp;
										<span className="dispNone" id="payNoteSpan">Payment Note &nbsp;  <input type="text" id="payNote"/></span>
										<span className="dispNone" id="chkNbrSpan">Check Nbr &nbsp;  <input type="text" id="chkNbr"/></span>
										<button type="button">Add Payment</button>
									</td>
								</tr>
								</tbody>
							</table>
							</div>
							</div>
						</div>
						
						<div className="col-sm-12">
							<div className="innerBlockContainer">
							<h2>Other Outstanding Loans</h2>
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr className="tableheadrow">
										<th align="center">Loan Type</th>
										<th align="center">Loan Nbr</th>
										<th align="center">Loan Date</th>
										<th align="center">Due Date</th>
										<th align="center">Loan End Date</th>
										<th align="center">Loan Status</th>
										<th align="center">Balance</th>
										<th>Select</th>
									</tr>
								</thead>
								<tbody>
									{olLst}
								</tbody>
							</table>
							</div>
							</div>
						</div>
						
						<div className="col-sm-12 dispNone">
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th>Payment Date</th>
										<th>Payment Amt</th>
										<th>Payment Type</th>
										<th>Note</th>
										<th>&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colSpan="5">&nbsp;</td>
									</tr>
								</tbody>
							</table>
							</div>
						</div>
						
						<div className="col-sm-12">
							<div className="innerBlockContainer">
							<h2>Collections History</h2>
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th align="center">Date</th>
										<th align="center">User</th>
										<th align="center">Action</th>
										<th align="center">Response</th>
										<th align="center">Comments</th>
										<th align="center">Auto Comments</th>
									</tr>
								</thead>
								<tbody>
									{chLst}													
								</tbody>	
							</table>
							</div>
							</div>
						</div>
						
						<div className="col-sm-12">
							<div className="innerBlockContainer">
							<h2>Notes History</h2>
							<div className="contact-infoscroll">
							<table>
								<thead>
									<tr>
										<th align="center">Urgent</th>
										<th align="center">Date</th>
										<th align="center">Loan Nbr</th>
										<th align="center">Module</th>
										<th align="center">Comments</th>
										<th align="center">Entered By</th>
									</tr>
								</thead>
								<tbody>
									{nhLst}
								</tbody>
							</table>
							</div>
							</div>
						</div>
						
					</div>
					: 
					
					<div>
						{(this.state.cData === 'CS') ? 
							<div className="innerBlockContainer">
								<h2>Customer Record <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<Borrower cVal={this.state.cData} />
							</div>
						: null }
						{(this.state.cData === 'TH') ? 
							<div className="innerBlockContainer">
								<h2>Transaction History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<TranHistory cVal={this.state.cData} />
							</div>
						: null }
						{(this.state.cData === 'SV') ? 
							<div className="innerBlockContainer">
								<h2>Summary View <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<Summaryview cVal={this.state.cData} />
							</div>
						: null }
						{(this.state.cData === 'MP') ? 
							<div className="innerBlockContainer">
								<h2>Payment <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><Payments cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'PS') ? 
							<div className="innerBlockContainer">
								<h2>Payment Schedule <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><RenewalSchedule cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'LH') ? 
							<div className="innerBlockContainer">
								<h2>Letter History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><LetterHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'PH') ? 
							<div className="innerBlockContainer">
								<h2>PTP History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><PTPHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'SH') ? 
							<div className="innerBlockContainer">
								<h2>SMS History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><TextHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'VH') ? 
							<div className="innerBlockContainer">
								<h2>Vehicle History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><VehicleHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'EH') ? 
							<div className="innerBlockContainer">
								<h2>Email History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><EmailHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'CH') ? 
							<div className="innerBlockContainer">
								<h2>Collections History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><CollectionsHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'NH') ? 
							<div className="innerBlockContainer">
								<h2>Notes History <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><NotesHistory cVal={this.state.cData} /></div>
							</div>
						: null }
						{(this.state.cData === 'IO') ? 
							<div className="innerBlockContainer">
								<h2>Optin OptOut <span onClick={()=>this.cCLose()} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div class="col-sm-12"><Optinout cVal={this.state.cData} /></div>
							</div>
						: null }
					</div>

					}
				</div>
			</div>
		</div>      
    );
  }
}