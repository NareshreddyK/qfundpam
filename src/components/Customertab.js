import React, { Component } from "react";
import Loan from './Loaninfo';
import Ltab from './Loantab';
import Reports from './Reports';
import Pam from './Pam';
import Newloan from './Newloan';
import Collc from './Collections';
import Bankrupt from './Bankrupt';
import RiskManagement from './RiskManagement';
import AccountManagement from './AccountManagement';
import Summary from './Summary';
import Newcustomer from './Newcustomer';
import Borrower from './Borrower';
import Dailyprocessing from './Dailyprocessing';
import CollectionMain from './Collmain';
import TitleLoan from './TitleLoan';
import MiscReceipts from './MiscReceipts';
import MiscDisburssement from './MiscDisburssement';
import Dtab from './Dashboardtab';
import VehicleHistory from './Loanhistory/VehicleHistory';
import VoappsHistory from './Loanhistory/VoappsHistory';
import AdjustInterestHistory from './Loanhistory/AdjustInterestHistory';
import DCFailedPaymentsHistory from './Loanhistory/DCFailedPaymentsHistory';
import EmailHistory from './Loanhistory/EmailHistory';
import NotesHistory from './Loanhistory/NotesHistory';
import PTPHistory from './Loanhistory/PTPHistory';
import TextHistory from './Loanhistory/TextHistory';
import CollectionsHistory from './Loanhistory/CollectionsHistory';
import MailingHistory from './Loanhistory/MailingHistory';
import CheckHistory from './Loanhistory/CheckHistory';
import PaymentPlanSchedule from './Loanhistory/PaymentPlanSchedule';
import ACHHistory from './Loanhistory/ACHHistory';
import ThirdPartyCollectionInfo from './Loanhistory/ThirdPartyCollectionInfo';
import LoanAccountInf from './Loanhistory/LoanAccountInf';
import LoanPaidToDtSmry from './Loanhistory/LoanPaidToDtSmry';
import LoanBalSmry from './Loanhistory/LoanBalSmry';
import LoanAccountStat from './Loanhistory/LoanAccountStat';
import CourtesyCollectionInf from './Loanhistory/CourtesyCollectionInf';
import EmployerInf from './Loanhistory/EmployerInf';
import CoOwnerInf from './Loanhistory/CoOwnerInf';
import PromotionCouponInfo from './Loanhistory/PromotionCouponInfo';
import UnderwritingInfo from './Loanhistory/UnderwritingInfo';
import BankInfo from './Loanhistory/BankInfo';
import RenewalSchedule from './Loanhistory/RenewalSchedule';
import TransactionDetails from './Loanhistory/TransactionDetails';
import ApplicationSearch from './Netspend/ApplicationSearch';
import CashManagement from './CashMgmt/CashManagement';
import Corporatepayment from './Loantransaction/Corporatepayment';
import Voidcorporatepayment from './Loantransaction/Voidcorporatepayment';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {list: [],tab:[],custNbr: [], loanLst:[], history: '', custNm:'', custFLNm:'', custSsn:'', custEmail:'', custPh:'', custPhTyp: '', custAddress: '', custCity: '',  custState: '', custZip: '', prdct: '', sNbr: '', lnStat: '', balStat: '', custStat: '', prdctClass: '', hideReports: false, hideCollections: false, hideActiveMilitary: false, hidePam: false, hideRiskManagement: false, hideAccountManagement: false, hideBankrupt: false, hide: false, val: '', coll: ''};
    this.enableTab = this.enableTab.bind(this);                                   
  }
  
  enableTab=(str)=>{
	this.setState({loanNbr: str.nm, lnStat: str.status, balStat: str.bstatus, custStat: str.cstatus, custTyp: str.ctyp, sNbr: str.amt, prdct: str.prd, currntAmt1: str.currntAmt, schAmt1: str.schAmt, payoffAmt1: str.payoffAmt, val: str.id});
    this.refs.loanTab.loanData(str.id);        
  }     
  
  searchResult(str){                  
    let vl = str.split("_");    
    /*this.refs.loanTab.loanData(vl[0]);*/
    this.setState({custNm: vl[1], custFLNm: vl[1], custSsn: vl[2], custEmail: vl[3], custPh: vl[4], custPhTyp: vl[5], custAddress: vl[7], custState: vl[6], custZip: vl[8], custCity: vl[9], val: vl[0]});                      
  }
  
  addTabs=(str)=>{
	/*let valSplt = str.split('_');*/
	window.$("#"+this.state.custNbr+" ul.nav-tabs li").removeClass();
	window.$("#"+this.state.custNbr+" div.tabMain > div").removeClass('active in');
	/*window.$("#"+this.state.loanNbr+"a").removeClass();
	window.$("#"+this.state.loanNbr).removeClass('active in');*/
	  
	if(window.clsTab != ""){
		for(let l=0; l<window.clsTab.length; l++){
	  		this.state.loanLst.splice(this.state.loanLst.indexOf(window.clsTab[l]), 1);
	  	}
		window.clsTab = [];
	}
	
    this.setState(state =>{ if(this.state.loanLst.indexOf(str.nm)=='-1'){ this.state.loanLst.push(str.nm); const list = state.list.concat(str); const tab = state.tab.concat(str); return {list,tab, loanNbr: str.nm}} else { window.$("#"+str.nm+"a").addClass('active'); window.$("#"+str.nm).addClass('active in'); return {loanNbr: str.nm}}  });
      
    if(str.nm==='Collections'){
        this.setState({val: 'C'});
    }else{
        this.setState({val: ''});
    }
  }
  
  nxt=(str)=>{
    if(str.nm!=='Collections'){
      this.setState({val: ''});
    }else{
      this.setState({val: 'C'});
    }                                              
    this.setState({loanNbr: str.nm, lnStat: str.status, balStat: str.bstatus, custStat: str.cstatus, custTyp: str.ctyp, sNbr: str.amt, prdct: str.prd, currntAmt1: str.currntAmt, schAmt1: str.schAmt, payoffAmt1: str.payoffAmt});		
  }
  
  reportUpdate=()=>{
    this.refs.rep.appndId(this.state.val);
  }
  
  componentWillMount(){
    this.setState({custNm: this.props.data.name, custFLNm: this.props.data.custFLNm, custNbr: this.props.data.custNbr, custSsn: this.props.data.custSsn, custEmail: this.props.data.custEmail, custPh: this.props.data.custPh, custPhTyp: this.props.data.custPhTyp, custAddress: this.props.data.custAddress, custCity: this.props.data.custCity, custState: this.props.data.custState, custZip: this.props.data.custZip});
    /*window.$("#"+this.props.data.id+"a").addClass('active');    
    window.$("#"+this.props.data.id).addClass(' in active');*/
  }         
  
  componentDidUpdate(){      
    window.$("#"+this.state.loanNbr+"a").addClass('active');    
    window.$("#"+this.state.loanNbr).addClass('active in');
    window.$("#"+this.state.loanNbr+"d").accordion({
		heightStyle: "content"		
		});   
	/*window.$("#ui-id-2").addClass("ui-accordion-content-active");
	window.$("#ui-id-2").attr("aria-hidden", "false");
	window.$(".ui-accordion-content").show();
	window.$("#ui-id-4").show();*/
	window.$(".mainAcrd .ui-accordion-header").eq(1).addClass('active').next().slideDown('normal');
    if(this.state.val==='3' || this.state.val==='cashMgmt'){
      this.refs.rep.appndId(this.state.val);
    }        
       
    if(this.state.prdct==="TLP"){
      window.$("#"+this.state.loanNbr+"b").addClass('tlpHighlt');      
    }else if(this.state.prdct==="ILP"){
      window.$("#"+this.state.loanNbr+"b").addClass('ilpHighlt');      
    }else if(this.state.prdct==="PDL"){
      window.$("#"+this.state.loanNbr+"b").addClass('pdlHighlt');      
    }else if(this.state.prdct==="LOC"){
		window.$("#"+this.state.loanNbr+"b").addClass('locHighlt');      
	  }
  }            
  
  render(){
	const ls = {name: this.state.custNm, flName: this.state.custFLNm, nbr: this.state.custNbr, status: this.state.lnStat, bstatus: this.state.balStat, cstatus: this.state.custStat, ctyp: this.state.custTyp, ssn: this.state.custSsn, email: this.state.custEmail, phone: this.state.custPh, phoneTyp: this.state.custPhTyp, prodTyp: this.state.prdct, caddress: this.state.custAddress, ccity: this.state.custCity, cstate: this.state.custState, czip: this.state.custZip, snr: this.state.sNbr, currntAmt: this.state.currntAmt1, schAmt: this.state.schAmt1, payoffAmt: this.state.payoffAmt1, vl: this.state.val};
	
  	let smry = '';
  	let smrySplt = '';
	
	if(this.state.val.indexOf("_")!='-1'){
		smrySplt = this.state.val.split("_");

		if(smrySplt[0] === 'Summary'){
			smry = "Summary";  
		}else if(smrySplt[0] === 'PAM'){
			smry = "PAM";  
		}else if(smrySplt[0] === 'NL'){
			smry = "NL";  
		}else if(smrySplt[0] === 'Bankrupt'){
			smry = "Bankrupt";  
		}else if(smrySplt[0] === 'RiskManagement'){
			smry = "RiskManagement";  
		}

	}else{
		smry = this.state.val;
	}
  	/*if(this.state.val.indexOf("_")!='-1'){
    	smry = "Summary";
  	}*/
	
	if (smry==='2'){
      return(<div className="height100"><Collc info={ls} ref='collections' /></div>);      
    }else if (smry==='3'){
      return(<div className="height100"><Reports ref='rep' refresh={()=>this.reportUpdate(smry)} /></div>);      
    }else if (smry==='PAM'){
      return(<div className="height100"><Pam ref='pam' info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()}/></div>);      
    }else if (smry==='NL'){
		return(<div className="height100"><Newloan ref='nl' info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()}/></div>);      
	}else if (smry==='Bankrupt'){
      return(<div className="height100"><Bankrupt ref='bankrupt' info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
    }else if (smry==='RiskManagement'){
      return(<div className="height100"><RiskManagement ref='rmgmt' info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
    }else if (smry==='4'){
      return(<div className="height100"><AccountManagement /></div>);      
    }else if (smry==='Summary'){
      return(<div className="height100"><Summary info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
    }else if (smry==='Newcustomer'){
		/* return(<div className="height100"><Newcustomer info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
	}else if (smry==='Borrower'){ */
		return(<div className="height100"><Borrower info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
	}else if (smry==='Dailyprocessing'){
		return(<div className="height100"><Dailyprocessing info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
	}else if (smry==='5'){
      	return(<div className="height100"><TitleLoan /></div>);      
    }else if(smry === '6'){
    	return(<div className="height100"><ApplicationSearch /></div>);   
    }else if (smry==='MiscReceipts'){
		return(<div className="height100"><MiscReceipts /></div>);      
	}else if (smry==='MiscDisburssement'){
		return(<div className="height100"><MiscDisburssement /></div>);      
	}else if (smry==='AC' || smry==='OC' || smry==='Lead' || smry==='DC' || smry==='PTPC' || smry==='FUC'){
      return(<div className="height100"><Dtab info={ls} addTabs={this.addTabs} refresh={()=>this.nxt()} /></div>);      
    }else if(smry === "cashMgmt"){
		return(<div className="height100"><CashManagement ref='rep' /></div>);  
	}else if(smry === "Crpayment"){
		return(<div className="height100"><Corporatepayment  /></div>);  
	}else if(smry === "Vcrpayment"){
		return(<div className="height100"><Voidcorporatepayment  /></div>);  
	}else if(smry==='C'){
      return (
		<div className="height100">    	
			<div className="searchListHolder">
				<Loan ref='loanTab' addTabs={this.addTabs} nxt={this.nxt} />		
			
				<div className="ilppdltlp">
					<span className="ilp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> ILP</span> &nbsp; 
					<span className="tlp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> TLP</span> &nbsp; 
					<span className="pdl"><i className="fa fa-circle" aria-hidden="true"></i></span><span> PDL</span> &nbsp;
				 	<span className="loc"><i className="fa fa-circle" aria-hidden="true"></i></span><span> LOC</span>		
				</div>	
			</div>  
			<div className="contntHide">
				<span id="contLeft"><i className="fas fa-angle-left"></i></span>
				<span id="contRight"><i className="fas fa-angle-double-right"></i></span>
			</div>  
			<div className="contentBodyOvrHid">							
				<div className="wrapper">
					<ul className="nav nav-tabs">                    
						{this.state.list.map((item,index) => (            
							<li id={item.nm+'a'}><a id={item.nm+'b'} href={'#'+item.nm} onClick={()=>{this.nxt(item)}} data-toggle='tab'>{item.nm}<span className='close close-tab'><i class="fa fa-times"></i></span></a></li>
						))}  				
					</ul>
				</div>
				<div className="tab-content tabMain">      
					{this.state.tab.map((item,index) => (
						<div id={item.nm} className='tab-pane fade'>
							<CollectionMain key={index} info={ls} menuclose={this.menuclose} refresh={()=>this.nxt({item})} />
						</div>
					))}
				</div>
			</div>
      	</div>      
      );
    }else{
      return (      		
		<div className="height100">	
			<div className="searchListHolder">
				<Loan ref='loanTab' addTabs={this.addTabs} nxt={this.nxt} />		
				<div className="ilppdltlp">
				 <span className="ilp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> ILP</span> &nbsp; 
				 <span className="tlp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> TLP</span> &nbsp; 
				 <span className="pdl"><i className="fa fa-circle" aria-hidden="true"></i></span><span> PDL</span> &nbsp;
				 <span className="loc"><i className="fa fa-circle" aria-hidden="true"></i></span><span> LOC</span>		
				</div>	
			</div>  
			<div className="contntHide">
				<span id="contLeft"><i className="fas fa-angle-left"></i></span>
				<span id="contRight"><i className="fas fa-angle-double-right"></i></span>
			</div>
			<div className="contentBodyOvrHid">							
				<div className="wrapper">
					<ul className="nav nav-tabs">                    
						{this.state.list.map((item,index) => (            
							<li id={item.nm+'a'}><a id={item.nm+'b'} href={'#'+item.nm} onClick={()=>{this.nxt(item)}} data-toggle='tab'>{item.nm}<span className='close close-tab'><i class="fa fa-times"></i></span></a></li>
						))}  				
					</ul>
				</div>
				<div className="tab-content tabMain">      
					{this.state.tab.map((item,index) => (
						<div id={item.nm} className='tab-pane fade'>
							<Ltab key={index} ref='vls' menuclose={this.menuclose} info={ls} addTabs={this.addTabs} refresh={()=>this.nxt({item})} />
							
							<div className="col-sm-12 form-group">
								<div className="innerBlockContainer">	
									<h2>Loan History</h2>									
									<div id={item.nm+"d"} className="mainAcrd">
										<h3>Transaction Details</h3>
										<TransactionDetails />

										<h3>Renewal Schedule</h3>
										<RenewalSchedule />

										<h3>Bank Information</h3>
										<BankInfo />

										<h3>Underwriting Information</h3>
										<UnderwritingInfo />

										<h3>Promotion/Coupon Info</h3>
										<PromotionCouponInfo />

										<h3>Co-Owner Information</h3>
										<CoOwnerInf />

										<h3>Employer Information</h3>
										<EmployerInf />

										<h3>Courtesy/Collection Information</h3>
										<CourtesyCollectionInf />

										<h3>Loan Account Status</h3>
										<LoanAccountStat />

										<h3>Loan Balance Summary</h3>
										<LoanBalSmry />

										<h3>Loan Paid To-Date Summary</h3>
										<LoanPaidToDtSmry />

										<h3>Loan Account Information</h3>
										<LoanAccountInf />

										<h3>Third Party Collection Info</h3>
										<ThirdPartyCollectionInfo />

										<h3>ACH History</h3>
										<ACHHistory />

										<h3>PaymentPlan Schedule</h3>
										<PaymentPlanSchedule />

										<h3>Check History</h3>
										<CheckHistory />
										
										<h3>Mailing History</h3>
										<MailingHistory />

										<h3>Collections History</h3>
										<CollectionsHistory />
											
										<h3>PTP History</h3>
										<PTPHistory />
															
										<h3>Text History</h3>
										<TextHistory />

										<h3>Email History</h3>
										<EmailHistory />
															
										<h3>Debit Card Failed Payments History</h3>
										<DCFailedPaymentsHistory />
															
										<h3>Notes History</h3>
										<NotesHistory />
											
										<h3>Adjust Interest History</h3>
										<AdjustInterestHistory />
											
										<h3>VoApps History</h3>
										<VoappsHistory />
										
										<h3>Vehicle History</h3>
										<VehicleHistory />
									</div>
								</div>
							</div>         
						</div>
					))}                   				  
				</div>		
			</div>
		</div>
		);
    }
  } 
}