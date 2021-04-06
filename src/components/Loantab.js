import React, { Component } from "react";
import Pay from './Mpay';
import Refinance from './Refinance';
import LoanVoid from './LoanVoid';
import PmtVoid from './PmtVoid';
import Primaryph from './Primaryphone';
import Primaryemail from './Primaryemail';
import LoanAccountInf from './Loanhistory/LoanAccountInf';
import LoanCustDocs from './Loanhistory/LoanCustDocs';
import LoanViewDocs from './Loanhistory/LoanViewDocs';
import CollectionMain from './Collmain';
import Payments from './Loantransaction/Payments';
import VoidPayments from './Loantransaction/VoidPayments';

import Locclosure from './Loantransaction/Locclosure';
import Draw from './Loantransaction/Draw';
import Manualclear from './Loantransaction/Manualclear';

import ACHauthrev from './Loantransaction/ACHauthrev';
//import Futuredcpayment from './Loantransaction/Futuredcpayment';
import Cancelach from './Loantransaction/Cancelach';

import Corporatepayment from './Loantransaction/Corporatepayment';
import Rpp from './Loantransaction/Rpp';
import VoidRpp from './Loantransaction/VoidRpp';
import Voidcorporatepayment from './Loantransaction/Voidcorporatepayment';
import Custrefund from './Loantransaction/Custrefund';

//import Rccrevokeauthorization from './Loantransaction/Rccrevokeauthorization';
//import Rccauthorization from './Loantransaction/Rccauthorization';
import Waivefee from './Loantransaction/Waivefee';
import Initiateepp from './Loantransaction/Initiateepp';

import Deferredpayment from './Loantransaction/Deferredpayment';
import Wpn from './Loantransaction/Wpn';
import Titletrack from './Loantransaction/Titletrack';
import VhcImageUpload from './Loantransaction/Vehicleimageupload';

export default class Loantab extends Component {

  constructor(props){
    super(props);    
	this.state = {cNbr: [], hideReports: false, laiDiv: false, docDiv: false, viewdocDiv:false, hideCol: false, lStoreNbr: '', lLoanStat: '', lBalStat: '', lCurntAmt: '', lSchAmt: '', lPayoffAmt: '', ltProdTyp: '', cName: '', cCustNbr: '', cMigCustNbr: '', cSsn: '', cPhTyp: '', cState: '', cCustTyp: '', cMigSrc: '', lStatus: '', cStatus: '', cmpDisp: '', pymtVal: '', paymData: [], vpaymData: [], authData: [], revData: [], tOpen: 'Close', vhcimguploadDiv:false, authSel:'', revSel:'', paymSel:'', vpaymSel:'', csSel: ''};
	this.handleChange = this.handleChange.bind(this);
  }


  componentWillMount(){
	this.setState({lStoreNbr: this.props.info.snr, lLoanStat: this.props.info.status, lBalStat: this.props.info.bstatus, lCurntAmt: this.props.info.currntAmt, lSchAmt: this.props.info.schAmt, lPayoffAmt: this.props.info.payoffAmt, cName: this.props.info.name, cCustNbr: this.props.info.nbr, cMigCustNbr: 'N/A', cSsn: this.props.info.ssn, cPhTyp: this.props.info.phoneTyp, cState: this.props.info.cstate, cCustTyp: this.props.info.ctyp, cMigSrc: 'N/A', lStatus: this.props.info.status, cStatus: this.props.info.cstatus, ltProdTyp: this.props.info.prodTyp});

	if(this.props.info.prodTyp === "ILP"){
		this.setState({
			paymData:[        
				{"name":"Deferred Payment", "value":"deferred"},
				{"name":"Penalty Fee Payment", "value":"penalty"},
				{"name":"Default Payment", "value":"default"},
				{"name":"Payment Plan Payment", "value":"default"},
				{"name":"Write Off Recovery", "value":"writeoff"},
				{"name":"Corporate Payment", "value":"corporate"},
				{"name":"Future DC Payment", "value":"future"}
			],
			vpaymData:[],
			authData:[
				{"name":"ACH Authorization", "value":"AA"},
				{"name":"RCC Authorization", "value":"RA"}
			],
			revData:[
				{"name":"ACH Revoke", "value":"AR"},
				{"name":"RCC Revoke", "value":"RR"},
				{"name":"DC Revoke", "value":"DCR"}
			],
			csData:[
				{"name":"ACH", "value":"CSA"},
				{"name":"DC", "value":"CSDC"}
			]
		});
	} else if(this.props.info.prodTyp === "TLP"){
		this.setState({
			paymData:[        
				{"name":"Default Payment", "value":"TLPDefault"},
				{"name":"Future DC Payment", "value":"future"},
				{"name":"Repo Payment", "value":"repo"},
				{"name":"Write Off Recovery", "value":"writeoff"}
			],
			vpaymData:[],
			authData:[
				{"name":"ACH Authorization", "value":"AA"}
			],
			revData:[
				{"name":"ACH Revoke", "value":"AR"}
			]
		});
	} else if(this.props.info.prodTyp === "PDL"){
		this.setState({
			paymData:[        
				{"name":"Partial Payment", "value":"partial"},
				{"name":"Buy Back", "value":"buyback"},
				{"name":"Payment Plan Payment", "value":"plan"},
				{"name":"ACH Pre Payment", "value":"achpre"},
				{"name":"ACH Payment", "value":"ach"},
				{"name":"Write Off Recovery", "value":"writeoff"},
				{"name":"Corporate Payment", "value":"corporate"},
				{"name":"Future DC Payment", "value":"future"}
			],
			vpaymData:[        
				{"name":"Partial Payment", "value":"partial"},
				{"name":"Buy Back", "value":"buyback"},
				{"name":"Payment Plan Payment", "value":"plan"},
				{"name":"ACH Pre Payment", "value":"achpre"},
				{"name":"ACH Payment", "value":"ach"},
				{"name":"Write Off Recovery", "value":"writeoff"},
				{"name":"Corporate Payment", "value":"corporate"}
			],
			authData:[
				{"name":"ACH Authorization", "value":"AA"}
			],
			revData:[
				{"name":"ACH Revoke", "value":"AR"}
			],
			csData:[
				{"name":"ACH", "value":"CAC"}
			]
		});
	} else if(this.props.info.prodTyp === "LOC"){
		this.setState({
			paymData:[        
				{"name":"Default Payment", "value":"default"},
				{"name":"Payment Plan Payment", "value":"plan"},
				{"name":"Write Off Recovery", "value":"writeoff"},
				{"name":"Corporate Payment", "value":"corporate"},
				{"name":"Future DC Payment", "value":"future"}
			],
			vpaymData:[],
			authData:[
				{"name":"RCC Authorization", "value":"RA"}
			],
			revData:[
				{"name":"RCC Revoke", "value":"RR"}
			]
		});
	}

  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
	//alert(e.target.value);
	this.setState({pymtVal: e.target.value});
  }
  
  mdisp(){
    this.setState({hideReports: true});    
  }

  ltDisp(str){
	if(this.state.tOpen === "Close"){
		this.setState({cmpDisp: str, tOpen: 'Open'});
		/* if(str !== undefined){
			this.setState({cmpDisp: str, pymtVal: '', tOpen: 'Open'});
		} else {
			
			if(this.state.ltProdTyp === "PDL"){
				this.setState({cmpDisp: 'MPY', pymtVal: 'Partial', tOpen: 'Open'});
			} else if(this.state.ltProdTyp === "TLP"){
				this.setState({cmpDisp: 'MPY', pymtVal: 'TLPDefault', tOpen: 'Open'});
			} else if(this.state.ltProdTyp === "ILP" || this.state.ltProdTyp === "LOC"){
				this.setState({cmpDisp: 'MPY', pymtVal: 'Default', tOpen: 'Open'});
			}

		} */
	}	
  }
  
  laidisp(){
    this.setState({laiDiv: true});    
  }
  
  loanDocs(){
    this.setState({docDiv: true});    
  }
  
  ViewloanDocs(){
    this.setState({viewdocDiv: true});    
  }
  
  componentDidMount(){
    this.refs.pmryPh.loadData(this.props.info.phone);
    this.refs.pmryEm.loadData(this.props.info.email);       
  }
  
  mclose=()=>{
    this.setState({hideReports: false});    
  }
  
  ltClose=()=>{
    this.setState({cmpDisp: '', pymtVal: '', authSel:'', revSel:'', paymSel:'', vpaymSel:'', csSel: '',tOpen: 'Close'});    
  }
  
  laiClose(){
	this.setState({laiDiv: false});
  }
  
  docsClose(){
	this.setState({docDiv: false});
  }
  
  viewdocsClose(){
	this.setState({viewdocDiv: false});
  }

  colShow(){
	let winWdth = window.$(window).width();
	let bodyPos = window.$("body").css("overflow-x");
	let finWdth = "";
	if(bodyPos == "hidden"){
		if(winWdth < 1250){
			finWdth = winWdth - 285;
		}else{
			finWdth = winWdth - 465;
		}
	}else{
		finWdth = winWdth - 235;
	}
	window.$('.colDiv').css("width", finWdth);
	window.$(".tabMain .tab-pane").css('overflow','hidden');
	this.setState({hideCol: true});
  }

  colClose(){
	window.$(".tabMain .tab-pane").removeAttr('style');
	window.$('.colDiv').removeAttr('style');
	this.setState({hideCol: false});
  }
  
  vhcImgUpload(){
	this.setState({vhcimguploadDiv: true});    
  }
  viuClose = () => {
	this.setState({vhcimguploadDiv: false});
  }
  render(){                	  
    return (      		
		<div>						
			<div className="col-sm-6">					
				<div className="innerBlockContainer pdngBtmNone">
					<h2>Loan Details <span class="txtRht">Loan Status: <span className="green-bg">{this.state.lStatus}</span></span></h2>
  					<div className="row">						
    					<div className="col-sm-8">
							<table className="noStripe col-table-2 nth-evenColor">
								<tbody>	
									<tr>
										<td>Store Nbr</td>
										<td>{this.state.lStoreNbr}</td>
									</tr>
									<tr>
										<td>Loan status</td>
										<td>{this.state.lLoanStat}</td>
									</tr>
									<tr>
										<td>Balance Status</td>
										<td>{this.state.lBalStat}</td>
									</tr>
									<tr className="bgHighlt1">
										<td>Amt to get Current</td>
										<td>$ {this.state.lCurntAmt}</td>
									</tr>
									<tr>
										<td>Amt get on Schedule</td>
										<td>$ {this.state.lSchAmt}</td>
									</tr>
									<tr className="bgHighlt1">
										<td>Payoff Amt</td>
										<td>$ {this.state.lPayoffAmt}</td>
									</tr>
								</tbody>                        
        					</table>                    																							
    					</div>
    								
						<div className="col-sm-4">
						<div className="row innerScrollContainer1">
							{/*<button type="button" className="btn-block" onClick={()=>this.TLPPymtdisp('TLPDefault')}> Make Payment </button>*/}
							<button type="button" className="btn-block" onClick={()=>this.ltDisp('MPY')}> Make Payment </button>
							{/* <button type="button" className="btn-block" onClick={()=>this.colShow()}> Collections </button> */}
							<button type="button" className="btn-block" onClick={()=>this.ltDisp('VPY')}> Void Payment </button>
							{/* <button type="button" className="btn-block" onClick={()=>this.ltDisp('FDC')}> Future DC Payment </button> */}
							<button type="button" className="btn-block" onClick={()=>this.ltDisp('AUTH')}> Authorization </button>
							<button type="button" className="btn-block" onClick={()=>this.ltDisp('REV')}> Revoke </button>

							{(this.state.ltProdTyp !== "LOC") ? 
								<span>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('VRL')}> Void/Rescind Loan </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('REF')}> Refinance </button> 
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('VRR')}> Void/Rescind Refinance </button>
									{/* <button type="button" className="btn-block" onClick={()=>this.ltDisp('AA')}> ACH Authorization </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('AR')}> ACH Revoke </button> */}
								</span>	
							: null }
							
							{(this.state.ltProdTyp === "LOC") ? 
								<span>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('RLC')}> Void/Rescind LOC </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('DRW')}> Draw </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('VDR')}> Void Draw </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('LCS')}> LOC Closure </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('IEP')}> Initiate EPP </button>
								</span>	
							: null }

							{(this.state.ltProdTyp === "PDL" || this.state.ltProdTyp === "ILP") ? 
								<span>
									{/* <button type="button" className="btn-block" onClick={()=>this.ltDisp('CRP')}> Corporate Payment </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('VCRP')}> Void Corporate Payment </button> */}
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('RPP')}> RPP/EPP </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('VRPP')}> Void RPP/EPP </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('CR')}> Customer Refund </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('CS')}> Cancel Schedule </button>
								</span>	
							: null }

							{(this.state.ltProdTyp === "ILP" || this.state.ltProdTyp === "LOC") ? 
								<span>
									{/* <button type="button" className="btn-block" onClick={()=>this.ltDisp('RA')}> RCC Authorization </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('RR')}> RCC Revoke </button> */}
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('WFE')}> Waive Fee </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('MNC')}> Manual Clear </button>
								</span>	
							: null }

							{/* {(this.state.ltProdTyp === "ILP") ? 
								<span>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('DP')}> Deferred Payment </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('DP')}> Cancel Deferred Payment </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('PFP')}> Penalty Fee Payment </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('CSA')}> Cancel Schedule ACH </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('CSDC')}> Cancel Schedule DC </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('DCR')}> DC Revoke </button>
								</span>	
							: null } */}

							{(this.state.ltProdTyp === "TLP") ? 
								<span>
									{/* <button type="button" className="btn-block"> ACH Clear </button> */}
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('RF')}> Refund </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('VS')}> Voluntary Surrender </button>
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('TT')}> Title Tracking </button>
									{/* <button type="button" className="btn-block"> Void Out To Repo </button> */}
								</span>	
							: null }

							{(this.state.ltProdTyp === "PDL") ? 
								<span>
									{/* <button type="button" className="btn-block" onClick={()=>this.ltDisp('CAC')}> Cancel ACH </button> */}
									<button type="button" className="btn-block" onClick={()=>this.ltDisp('WPN')}> WPN </button>
								</span> 
							: null }
						</div>
						</div>
  					</div>
					<div className="text-right">
						<a href={'#'} className="moreBtn1" onClick={()=>this.laidisp()}>More Info</a>
					</div> 
				</div>
			</div>	
							
			<div className="col-sm-6">		
				<div className="innerBlockContainer pdngBtmNone">									
					<h2>Customer Information <span class="txtRht">Cust Status: <span className="red-bg">{this.state.cStatus}</span></span></h2>
					<div className="innerScrollContainer">
						<table className="noStripe nth-evenColor">
							<tbody>                         
								<tr>
									<td>Customer</td>
									<td>{this.state.cName}</td>
								</tr>
								<tr>
									<td>Customer Nbr</td>
									<td>{this.state.cCustNbr}</td>
								</tr>
								<tr>
									<td>Migration CustNbr</td>
									<td>{this.state.cMigCustNbr}</td>
								</tr>
								<tr className="bgHighlt1">
									<td>SSN / ITIN</td>
									<td>{this.state.cSsn}</td>
								</tr>
								<tr className="bgHighlt1">
									<td>Primary Phone Nbr</td>      											
									<Primaryph ref='pmryPh' />
								</tr>
								<tr>
									<td>Phone Type</td>
									<td>{this.state.cPhTyp}</td>
								</tr>
								<tr>
									<td>State</td>
									<td>{this.state.cState}</td>
								</tr>
								<tr className="bgHighlt1">
									<td>Email</td>
									<Primaryemail ref='pmryEm' />
								</tr>
								<tr>
									<td>Customer Type</td>
									<td>{this.state.cCustTyp}</td>
								</tr>
								<tr>
									<td>Migration Source</td>
									<td>{this.state.cMigSrc}</td>
								</tr> 
							</tbody>                          
						</table>
					</div>
					<div className="text-right">
					<a href={'#'} className="moreBtn1" onClick={()=>this.vhcImgUpload()}>Vehicle Img Upload</a>  | <a href={'#'} className="moreBtn1" onClick={()=>this.loanDocs()}>Upload Cust Docs</a> | <a href={'#'} className="moreBtn1 pdngRhtNone" onClick={()=>this.ViewloanDocs()}>View Cust Docs</a>
					</div>					
				</div>
			</div>
            
			<div hidden={!this.state.hideReports}><Pay mclose={this.mclose} /></div>
			{(this.state.cmpDisp === "REF" || this.state.cmpDisp === "VRR") ? <Refinance rVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} refClose={this.ltClose} /> : null }
			{/* {(this.state.cmpDisp === "AA" || this.state.cmpDisp === "AR" || this.state.cmpDisp === "RA" || this.state.cmpDisp === "RR" || this.state.cmpDisp === "DCR") ? <ACHauthrev achVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} achClose={this.ltClose} /> : null } */}
			{(this.state.cmpDisp === "AUTH" ) ? 
				<div class="col-sm-12">
					<div class="innerBlockContainer">
						<h2>Authorization <span onClick={()=>{this.ltClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						
							<div class="col-sm-3 form-group">
								Authorization Type
								<select name="authSel" value={this.state.authSel} onChange={this.handleChange}>
									<option value=""> Select Option</option>
									{this.state.authData.map((option, i) => 
										<option value={option.value}>{option.name}</option>
									)}
								</select>
							</div>
						
						<ACHauthrev achVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} achClose={this.ltClose} /> 
					</div>
				</div>				
			: null }
			{(this.state.cmpDisp === "REV" ) ? 
				<div class="col-sm-12">
					<div class="innerBlockContainer">
						<h2>Revoke <span onClick={()=>{this.ltClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						
							<div class="col-sm-3 form-group">
								Revoke Type
								<select name="revSel" value={this.state.revSel} onChange={this.handleChange}>
									<option value=""> Select Option</option>
									{this.state.revData.map((option, i) => 
										<option value={option.value}>{option.name}</option>
									)}
								</select>
							</div>
						
						<ACHauthrev achVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} achClose={this.ltClose} /> 
					</div>
				</div>				
			: null }
			{(this.state.cmpDisp === "VRL") ? <LoanVoid lVoidVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} LoanVclose={this.ltClose} /> : null }
			{/* {(this.state.cmpDisp === "FDC") ? <Futuredcpayment fdcVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} fdcClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "CAC" || this.state.cmpDisp === "CSA" || this.state.cmpDisp === "CSDC") ? <Cancelach cacVal={this.state.lnVoid} tranVal={this.state.cmpDisp} cacClose={this.ltClose} /> : null } */}
			{(this.state.cmpDisp === "CS" ) ? 
				<div class="col-sm-12">
					<div class="innerBlockContainer">
						<h2>Cancel Schedule <span onClick={()=>{this.ltClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						
							<div class="col-sm-3 form-group">
								Cancel Schedule Type
								<select name="csSel" value={this.state.csSel} onChange={this.handleChange}>
									<option value=""> Select Option</option>
									{this.state.csData.map((option, i) => 
										<option value={option.value}>{option.name}</option>
									)}
								</select>
							</div>
						
						<Cancelach cacVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} cacClose={this.ltClose} />
					</div>
				</div>				
			: null }

			{(this.state.cmpDisp === "RLC" || this.state.cmpDisp === "VDR") ? <VoidPayments vpyVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} vpyClose={this.ltClose} /> : null }			
			{(this.state.cmpDisp === "LCS") ? <Locclosure clVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} lcsClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "DRW") ? <Draw drVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} drwClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "MNC") ? <Manualclear mcVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} mncClose={this.ltClose} /> : null }			
			{/*{(this.state.cmpDisp === "RCA") ? <Rccauthorization raVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} rcaClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "RCR") ? <Rccrevoke rcVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} rcrClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "RCR" || this.state.cmpDisp === "RCA") ? <Rccrevokeauthorization rcVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} rcrClose={this.ltClose} /> : null }*/}
			{(this.state.cmpDisp === "WFE") ? <Waivefee waVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} wfaClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "IEP") ? <Initiateepp ieVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} iepClose={this.ltClose} /> : null }
					

			{(this.state.cmpDisp === "CRP") ? <Corporatepayment crpVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} CRPClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "RPP" || this.state.cmpDisp === "PFP") ? <Rpp rppVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} RppClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "VRPP") ? <VoidRpp vrppVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} VRppClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "CR") ? <Custrefund crVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} CRefundClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "VCRP") ? <Voidcorporatepayment vcrpVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} VCRPClose={this.ltClose} /> : null }	
			
			{(this.state.cmpDisp === "DP") ? <Deferredpayment vcrpVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} dpClose={this.ltClose} /> : null }			
			
			{(this.state.cmpDisp === "VP") ? <PmtVoid vpVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} vpClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "VS" || this.state.cmpDisp === "RF") ? <Payments pmtVal={this.state.ltProdTyp} tranVal={this.state.cmpDisp} pymtClose={this.ltClose} /> : null }
			{/* {(this.state.cmpDisp === "MPY") ? <Payments pmtVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} pymtClose={this.ltClose} /> : null } */}
			{(this.state.cmpDisp === "MPY") ? 
				<div class="col-sm-12">
					<div class="innerBlockContainer">
						<h2>Make Payment <span onClick={()=>{this.ltClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						
							<div class="col-sm-3 form-group">
								Payment Type
								<select name="paymSel" value={this.state.paymSel} onChange={this.handleChange}>
									<option value=""> Select Option</option>
									{this.state.paymData.map((option, i) => 
										<option value={option.value}>{option.name}</option>
									)}
								</select>
							</div>
						
						<Payments pmtVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} pymtClose={this.ltClose} />
					</div>
				</div>
			: null }
			{/* {(this.state.cmpDisp === "VPY") ? <VoidPayments vpyVal={this.state.ltProdTyp} tranVal={this.state.vpymtVal} vpyClose={this.ltClose} /> : null } */}
			{(this.state.cmpDisp === "VPY") ? 
				<div class="col-sm-12">
					<div class="innerBlockContainer">
						<h2>Void Payment <span onClick={()=>{this.ltClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						
							<div class="col-sm-3 form-group">
								Payment Type
								<select name="vpaymSel" value={this.state.vpaymSel} onChange={this.handleChange}>
									<option value=""> Select Option</option>
									{this.state.vpaymData.map((option, i) => 
										<option value={option.value}>{option.name}</option>
									)}
								</select>
							</div>
						
						<VoidPayments vpyVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} vpyClose={this.ltClose} />
						{/*<VoidPayments pmtVal={this.state.ltProdTyp} tranVal={this.state.pymtVal} pymtClose={this.ltClose} />*/}
					</div>
				</div>
			: null }
			{(this.state.cmpDisp === "WPN") ? <Wpn vpyVal={this.state.ltProdTyp} tranVal={this.state.vpymtVal} WpnClose={this.ltClose} /> : null }
			{(this.state.cmpDisp === "TT") ? <Titletrack vpyVal={this.state.ltProdTyp} tranVal={this.state.vpymtVal} TTClose={this.ltClose} /> : null }

			<div className="col-sm-12 form-group" hidden={!this.state.laiDiv}>
				<div className="innerBlockContainer">
					<h2 className="pamHeads">Loan Account Information <span onClick={()=>this.laiClose()} className="close close-window text-right"><i className="fa fa-times"></i></span></h2>
					<LoanAccountInf />					
				</div>
			</div>
			
			<div className="col-sm-12 form-group" hidden={!this.state.docDiv}>
				<div className="innerBlockContainer">
					<h2 className="pamHeads">Upload Customer Documents <span onClick={()=>this.docsClose()} className="close close-window text-right"><i className="fa fa-times"></i></span></h2>
					<LoanCustDocs />					
				</div>
			</div>
			
			<div className="col-sm-12 form-group" hidden={!this.state.viewdocDiv}>
				<div className="innerBlockContainer">
					<h2 className="pamHeads">View Customer Documents <span onClick={()=>this.viewdocsClose()} className="close close-window text-right"><i className="fa fa-times"></i></span></h2>
					<LoanViewDocs />					
				</div>
			</div>

			<div className="colDiv" hidden={!this.state.hideCol}>
				<h2 className="pamHeads">Collections <span onClick={()=>this.colClose()} className="close close-window text-right"><span className="colorgray">Click here to close</span>  <i className="fa fa-times"></i></span></h2>
				<CollectionMain />
			</div>
			
			<div className="col-sm-12 form-group" hidden={!this.state.vhcimguploadDiv}>
				<div className="innerBlockContainer">
					<h2 className="pamHeads">Title Customer History <span onClick={()=>this.viuClose()} className="close close-window text-right"><i className="fa fa-times"></i></span></h2>
					<VhcImageUpload viuClose={this.viuClose}/>					
				</div>
			</div>
        </div>          			
    );
  }
}