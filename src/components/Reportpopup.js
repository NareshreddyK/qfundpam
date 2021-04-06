import React, { Component } from "react";
import Modal from 'react-modal';
import PromiseToPay from './Searchreport/PromiseToPay';
import PastDueReport from './Searchreport/PastDueReport';
import CollectionActivity from './Searchreport/CollectionActivity';
import CourtesyCallReport from './Searchreport/CourtesyCallReport';
import StoreCallReport from './Searchreport/StoreCallReport';
import WriteoffRecoveriesReport from './Searchreport/WriteoffRecoveriesReport';
import ActiveCustomer from './Searchreport/ActiveCustomer';
import CISReport from './Searchreport/CISReport';
import BSATLogReport from './Searchreport/BSATLogReport';
import StatusChangeReport from './Searchreport/StatusChangeReport';
import DeceasedCustomerReport from './Searchreport/DeceasedCustomerReport';
import MostRecentCustomerReport from './Searchreport/MostRecentCustomerReport';
import RAAReport from './Searchreport/ReviewApprovedApplicationsReport';
import DailyTransactionJournal from './Searchreport/DailyTransactionJournal';
import StoreCashManagement from './Searchreport/StoreCashManagement';
import EODSummary from './Searchreport/EODSummary';
import SCMSReport from './Searchreport/SCMSReport';
import OPReport from './Searchreport/OPReport';
import RIReport from './Searchreport/RIReport';
import WLReport from './Searchreport/WLReport';
import AllPaymentsReport from './Searchreport/AllPaymentsReport';
import NewLoanReport from './Searchreport/NewLoanReport';
import ScheduledPaymentReport from './Searchreport/ScheduledPaymentReport';
import ARActivityReport from './Searchreport/ARActivityReport';
import ActivePrenoteReport from './Searchreport/ActivePrenoteReport';
import NonCenterPaymentReport from './Searchreport/NonCenterPaymentReport';
import ACRReport from './Searchreport/ACRReport';
import STDBTransactionReport from './Searchreport/STDBTransactionReport';
import MonetaryTransferLog from './Searchreport/MonetaryTransferLog';
import ActiveUsersReport from './Searchreport/ActiveUsersReport';
import TimeSheetReport from './Searchreport/TimeSheetReport';
import WBAReport from './Searchreport/WBAReport';
import HoldOverReport from './Searchreport/HoldOverReport';
import TTSReport from './Searchreport/TTSReport';
import TSLReport from './Searchreport/TSLReport';
import TKExtracts from './Searchreport/TKExtracts';
 

const customStyles = {
	overlay : {
		background: 'rgba(255, 255, 255, 0.8)',
		zIndex: '9999'
	},
	content : {
    	top                   : '50%',
    	left                  : '50%',
    	right                 : 'auto',
    	bottom                : 'auto',        
    	transform             : 'translate(-50%, -50%)',
    	padding				  : '0px 0px 20px 0px',
		overflow			  : 'none',
		boxShadow			  : '0px 0px 20px 0px #999'
  }
};


export default class Reportpopup extends Component {
  constructor(props){
    super(props);    
    this.state = {modalIsOpen: false, menu: '', rFName: '', rLName: '', rSsn: '', rLoanNbr: ''};
	this.disp = this.disp.bind(this);
	this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({rFName: '', rLName: '', rSsn: '', rLoanNbr: ''});
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }
  
  disp=(str)=>{                    
    this.setState({modalIsOpen: true, menu: str});    
  }
  
  closePopup(){
    this.setState({modalIsOpen: false});
  }
  reportpopFun(){
	
	this.setState({modalIsOpen: false});	
	this.props.rTbl();
  }
  closeModal=()=>{
    this.setState({modalIsOpen: false});    
  }        
  
  render(){
	const bodyHgt = {
		height: '250px',
		overflow: 'auto'
	};
	
    let mlist;
    let emlist;    
                
    if(this.state.menu==='PDR'){
		emlist = <div className="col-sm-12"><PastDueReport /></div> 
    }else if(this.state.menu==='CA'){
		emlist = <div className="col-sm-12"><CollectionActivity /></div>
	}else if(this.state.menu==='CCR'){
		emlist = <div className="col-sm-12"><CourtesyCallReport /></div>
	}else if(this.state.menu==='PTP'){
		emlist = <div className="col-sm-12"><PromiseToPay /></div>
	}else if(this.state.menu==='SCR'){
		emlist = <div className="col-sm-12"><StoreCallReport /></div>
	}else if(this.state.menu==='WRR'){
		emlist = <div className="col-sm-12"><WriteoffRecoveriesReport /></div>
	}else if(this.state.menu==='AC'){
		emlist = <div className="col-sm-12"><ActiveCustomer /></div>
	}else if(this.state.menu==='CISR'){
		emlist = <div className="col-sm-12"><CISReport /></div>
	}else if(this.state.menu==='BTLR'){
		emlist = <div className="col-sm-12"><BSATLogReport /></div>
	}else if(this.state.menu==='SC'){
		emlist = <div className="col-sm-12"><StatusChangeReport /></div>
	}else if(this.state.menu==='DCR'){
		emlist = <div className="col-sm-12"><DeceasedCustomerReport /></div>
	}else if(this.state.menu==='MRCR'){
		emlist = <div className="col-sm-12"><MostRecentCustomerReport /></div>
	}else if(this.state.menu==='RAAR'){
		emlist = <div className="col-sm-12"><RAAReport /></div>
	}else if(this.state.menu==='DTJ'){
		emlist = <div className="col-sm-12"><DailyTransactionJournal /></div>
	}else if(this.state.menu==='SCM'){
		emlist = <div className="col-sm-12"><StoreCashManagement /></div>
	}else if(this.state.menu==='EODS'){
		emlist = <div className="col-sm-12"><EODSummary /></div>
	}else if(this.state.menu==='SCMS'){
		emlist = <div className="col-sm-12"><SCMSReport /></div>
	}else if(this.state.menu==='OPR'){
		emlist = <div className="col-sm-12"><OPReport /></div>
	}else if(this.state.menu==='RIR'){
		emlist = <div className="col-sm-12"><RIReport /></div>
	}else if(this.state.menu==='WLR'){
		emlist = <div className="col-sm-12"><WLReport /></div>
	}else if(this.state.menu==='ALP'){
		emlist = <div className="col-sm-12"><AllPaymentsReport /></div>
	}else if(this.state.menu==='NLR'){
		emlist = <div className="col-sm-12"><NewLoanReport /></div>
	}else if(this.state.menu==='SPR'){
		emlist = <div className="col-sm-12"><ScheduledPaymentReport /></div>
	}else if(this.state.menu==='ARA'){
		emlist = <div className="col-sm-12"><ARActivityReport /></div>
	}else if(this.state.menu==='APR'){
		emlist = <div className="col-sm-12"><ActivePrenoteReport /></div>
	}else if(this.state.menu==='NPR'){
		emlist = <div className="col-sm-12"><NonCenterPaymentReport /></div>
	}else if(this.state.menu==='ACR'){
		emlist = <div className="col-sm-12"><ACRReport /></div>
	}else if(this.state.menu==='STTR'){
		emlist = <div className="col-sm-12"><STDBTransactionReport /></div>
	}else if(this.state.menu==='MTL'){
		emlist = <div className="col-sm-12"><MonetaryTransferLog /></div>
	}else if(this.state.menu==='AUR'){
		emlist = <div className="col-sm-12"><ActiveUsersReport /></div>
	}else if(this.state.menu==='TSR'){
		emlist = <div className="col-sm-12"><TimeSheetReport /></div>
	}else if(this.state.menu==='WBA'){
		emlist = <div className="col-sm-12"><WBAReport /></div>
	}else if(this.state.menu==='HOR'){
		emlist = <div className="col-sm-12"><HoldOverReport /></div>
	}else if(this.state.menu==='TTS'){
		emlist = <div className="col-sm-12"><TTSReport /></div>
	}else if(this.state.menu==='TSL'){
		emlist = <div className="col-sm-12"><TSLReport /></div>
	}else if(this.state.menu==='TKE'){
		emlist = <div className="col-sm-12"><TKExtracts /></div>
	}
	

	
    return (
      <div>
		<Modal id="ncDivNew" isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
			<div className="col-sm-12 form-group">
				<h2 className="reportHeads" ref={subtitle => this.subtitle = subtitle}>Search <span className="pull-right"><button className="close closeBtn" onClick={this.closeModal}><i class="fa fa-times"></i></button></span></h2>
			</div>	
			<div className="col-sm-12 form-group" style={bodyHgt}>
				<div className="col-sm-10 col-sm-offset-1 form-group">
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>First Name</label></div><div className="col-sm-6 form-group"><input type="text" name="rFName" placeholder="First Name" value={this.state.rFName} onChange={this.handleChange} /></div>
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>Last Name</label></div><div className="col-sm-6 form-group"><input type="text" name="rLName" placeholder="Last Name" value={this.state.rLName} onChange={this.handleChange} /></div>	
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>SSN</label></div><div className="col-sm-6 form-group"><input type="text" name="rSsn" placeholder="SSN" value={this.state.rSsn} onChange={this.handleChange} /></div>	
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>Loan Nbr</label></div><div className="col-sm-6 form-group"><input type="text" name="rLoanNbr" placeholder="Loan Nbr" value={this.state.rLoanNbr} onChange={this.handleChange} /></div>					
					{emlist}
				</div>
            </div>
			<div className="col-sm-12 text-center"><button type="button" onClick={()=>this.reportpopFun()}>Preview</button>&nbsp;<button type="button" className="btn-danger">Reset</button></div>
        </Modal>        
  </div>
    );
  }
}