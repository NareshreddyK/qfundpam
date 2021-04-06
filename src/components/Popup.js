import React, { Component } from "react";
import Modal from 'react-modal';
import ActiveMilitary from './ActiveMilitary'; 
import Datepicker from './common/Datepicker'; 

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
    padding				  : '0px 0px 0px 0px'
  }
};


export default class Popup extends Component {
  constructor(props){
    super(props);    
    this.state = {modalIsOpen: false, hideActiveMilitary: false, hideSearch: false, hideSearchHead: false, hideHeader: false, hideHeaderHead: false, cName: '', cNbr: '', cSsn: '', email: '', cPhone: '', pType: '', cAddress: '', cCity: '', cState: '', cZip: '', newcst: '', pstat: '', status: '', wlFName: '', wlLName: '', wlSsn: '', wlLoanNbr: '', vFName: '', vLName: '', vSsn: '', vLoanNbr: '', oldPwd: '', newPwd: '', newConPwd: '', clkOutTime: ''}
    this.actMilitary = this.actMilitary.bind(this);    
    this.handleChange = this.handleChange.bind(this);    
  }

  componentWillMount(){
    this.setState({hideActiveMilitary: false, wlFName: '', wlLName: '', wlSsn: '', wlLoanNbr: '', vFName: '', vLName: '', vSsn: '', vLoanNbr: '', oldPwd: '', newPwd: '', newConPwd: '', clkOutTime: '05:35:00'});
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }
  
  disp(str){
	this.setState({modalIsOpen: true, cName: str.name, cNbr: str.id, cSsn: str.custSsn, email: str.custEmail, cPhone: str.custPh, pType: str.custPhTyp, cAddress: str.custAddress, cCity: str.custCity, cState: str.custState, cZip: str.custZip, newcst: '2', pstat: '2', status: str.status});
	this.setState({hideSearch: true});
	this.setState({hideSearchHead: true});
  }
  
  dispBlk=(str)=>{                    
    this.setState({modalIsOpen: true, menu: str});  
	this.setState({hideHeader: true});
	this.setState({hideHeaderHead: true});
  }
  
  closePopup(){
    this.setState({modalIsOpen: false});
  }
  
  clsPop(str){
	  if(str !=="OK")
	  {
		this.props.Eoddep();		  
	  }
	  this.setState({modalIsOpen: false});
  }
  
  closeModal=()=>{
    this.setState({modalIsOpen: false, hideActiveMilitary: false});
    //this.props.dispSearch();
  }
  
  afterOpenModal=()=>{
	  //console.log(this.state.menu+"....menu");
	  if(this.state.menu === "MSG"){
		  window.$(".ReactModal__Content").css("width","60%");
	  }else if(this.state.menu === "NA" || this.state.menu === "CA" || this.state.menu === "CSA" || this.state.menu === "CSD" ){
		  window.$(".ReactModal__Content").css({"width": "80%"});
	  }
  }
  
  actMilitary(){
    this.setState({hideActiveMilitary: true});
  }  

    
	
  render(){
  const bodyHgt = {
		height: '250px',
		overflow: 'auto'}; 
  const bodyHgt1 = {
		height: '450px',
		overflow: 'auto'}; 
    let iconslist;
    let niconslist;
    let biconslist;
    let liconslist;
    let aiconslist;
	let riconslist;
    
    let stSplt = this.state.status.split(",");
    
    for(let b=0; b<=stSplt.length-1; b++){
      if(stSplt[b]==='PAM'){
        iconslist = <div className="col-sm-2">
					<button className="rightIcon" onClick={()=>this.props.addTabs({name: 'PAM', custFLNm: this.state.cName, custNbr: this.state.cNbr, custSsn: this.state.cSsn, custEmail: this.state.email, custPh: this.state.cPhone, custPhTyp: this.state.pType, custAddress: this.state.cAddress, custCity: this.state.cCity, custState: this.state.cState, custZip: this.state.cZip, newCust: this.state.newcst, pstatus: this.state.pstat, label: 'PAM ', id: 'PAM_'+this.state.cNbr})} role="button"><i className="fa fa-chart-pie"></i></button><br/><br/><strong>PAM</strong>
				</div> 
      }else if(stSplt[b]==='NL'){
        niconslist = <div className="col-sm-2">
					<button className="rightIcon" onClick={()=>this.props.addTabs({name: 'New Loan', custFLNm: this.state.cName, custNbr: this.state.cNbr, custSsn: this.state.cSsn, custEmail: this.state.email, custPh: this.state.cPhone, custPhTyp: this.state.pType, custAddress: this.state.cAddress, custCity: this.state.cCity, custState: this.state.cState, custZip: this.state.cZip, newCust: this.state.newcst, pstatus: this.state.pstat, label: 'New Loan ', id: 'NL_'+this.state.cNbr})} role="button"><i className="fa fa-chart-pie"></i></button><br/><br/><strong>New Loan</strong>
				</div> 
      }else if(stSplt[b]==='Bankrupt'){
        biconslist = <div className="col-sm-2">
					<button className="rightIcon" onClick={()=>this.props.addTabs({name: 'Bankrupt', custFLNm: this.state.cName, custNbr: this.state.cNbr, custSsn: this.state.cSsn, custEmail: this.state.email, custPh: this.state.cPhone, custPhTyp: this.state.pType, custAddress: this.state.cAddress, custCity: this.state.cCity, custState: this.state.cState, custZip: this.state.cZip, newCust: this.state.newcst, pstatus: this.state.pstat, label: 'Bankrupt ', id: 'Bankrupt_'+this.state.cNbr})} role="button"><i className="fas fa-chart-area"></i></button><br/><br/><strong>Bankrupt</strong>
				</div> 
      }else if(stSplt[b]==='RiskManagement'){
        riconslist = <div className="col-sm-2">
					<button className="rightIcon" onClick={()=>this.props.addTabs({name: 'Risk Management', custFLNm: this.state.cName, custNbr: this.state.cNbr, custSsn: this.state.cSsn, custEmail: this.state.email, custPh: this.state.cPhone, custPhTyp: this.state.pType, custAddress: this.state.cAddress, custCity: this.state.cCity, custState: this.state.cState, newCust: this.state.newcst, pstatus: this.state.pstat, label: 'Risk Management ', id: 'RiskManagement_'+this.state.cNbr})} role="button"><i className="fas fa-chart-area"></i></button><br/><br/><strong>Risk Management</strong>
				</div> 
      }else if(stSplt[b]==='LD'){
        liconslist = <div className="col-sm-2">	
					<button className="rightIcon" onClick={()=>this.props.addTabs({name: this.state.cName, custFLNm: this.state.cName, custNbr: this.state.cNbr, custSsn: this.state.cSsn, custEmail: this.state.email, custPh: this.state.cPhone, custPhTyp: this.state.pType, custAddress: this.state.cAddress, custCity: this.state.cCity, custState: this.state.cState, custZip: this.state.cZip, newCust: this.state.newcst, pstatus: this.state.pstat, label: 'Loans of ', id: this.state.cNbr})} role="button"><i className="fa fa-wallet"></i></button><br/><br/><strong>Loan Details</strong>
				</div>         
      }else if(stSplt[b]==='ACTIVEM'){
        aiconslist = <div className="col-sm-2">
					<button className="rightIcon" onClick={this.actMilitary} role="button"><i className="fa fa-user-shield"></i></button><br/><br/><strong>Active Military</strong>
				</div>         
      }else if(stSplt[b]==='ACTIVET'){
        aiconslist = <div className="col-sm-2">
					<button className="rightIcon" role="button"><i className="fa fa-user-shield"></i></button><br/><br/><strong>Terminate Active Military</strong>
				</div>         
      }             
    }


	let mlist;
    let emlist;
	let emlistBtn;
	let ClockOut;
	let swipeBTN;
	let OKBTN;
	let TimeSheet;
	
	let searchLst = [];
	let stShrt = "";
	let s = [{name: 'Lindsay Fruchey', id: '30623', custSsn: 'XXX-XX-6385', custEmail: 'lfruchey83@gmail.com', custPh: '(534) 485-6946', custPhTyp: 'Cell', custAddress: '1332 Sun Crest Ln', custCity: 'Springfield', custState: 'Tennessee', custZip: '37172', newCust: '1', pstatus: '', status: 'PAM,Bankrupt,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '097212180'},{name: 'Ronald Paul', id: '30648', custSsn: 'XXX-XX-1577', custEmail: 'ronald.paul@gmail.com', custPh: '(534) 654-5465', custPhTyp: 'Home', custAddress: '2095 Eagle Trail', custCity: 'Morristown', custState: 'Tennessee', custZip: '37813', newCust: '1', pstatus: '', status: 'NL,Bankrupt,LD,ACTIVEM,RiskManagement', custStatus: 'Write-off', photoId: '097969141'}];
	for(let i=0; i<=s.length-1; i++){	  
		if(s[i].custState === "Tennessee"){
			stShrt = "TN";
		}
	  
		searchLst.push(<tr><td align="center">{s[i].id}</td><td>{s[i].name}</td><td align="center">{s[i].custSsn}</td><td align="center">{s[i].custStatus}</td><td align="center">{s[i].photoId}</td><td>{s[i].custAddress}, {s[i].custCity}, {stShrt} {s[i].custZip}</td></tr>);
	}
                
    if(this.state.menu==='WDL'){
		mlist = "Withdraw Loan"
		emlist = <div className="col-sm-12 form-group">        
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>First Name</label></div><div className="col-sm-6 form-group"><input type="text" name="wlFName" placeholder="First Name" value={this.state.wlFName} onChange={this.handleChange} /></div>
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>Last Name</label></div><div className="col-sm-6 form-group"><input type="text" name="wlLName" placeholder="Last Name" value={this.state.wlLName} onChange={this.handleChange} /></div>	
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>SSN</label></div><div className="col-sm-6 form-group"><input type="text" name="wlSsn" placeholder="SSN" value={this.state.wlSsn} onChange={this.handleChange} /></div>	
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>Loan Nbr</label></div><div className="col-sm-6 form-group"><input type="text" name="wlLoanNbr" placeholder="Loan Nbr" value={this.state.wlLoanNbr} onChange={this.handleChange} /></div> 
					<div className="col-sm-12 text-center"><button type="button">Preview</button>&nbsp;<button type="button" className="btn-danger">Reset</button></div>
				</div>
    }else if(this.state.menu==='Void'){
		mlist = "Void"
		emlist = <div className="col-sm-12 form-group">        
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>First Name</label></div><div className="col-sm-6 form-group"><input type="text" name="vFName" placeholder="First Name" value={this.state.vFName} onChange={this.handleChange}  /></div>
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>Last Name</label></div><div className="col-sm-6 form-group"><input type="text" name="vLName" placeholder="Last Name" value={this.state.vLName} onChange={this.handleChange}  /></div>	
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>SSN</label></div><div className="col-sm-6 form-group"><input type="text" name="vSsn" placeholder="SSN" value={this.state.vSsn} onChange={this.handleChange} /></div>	
					<div className="col-sm-5 col-sm-offset-1 form-group"><label>Loan Nbr</label></div><div className="col-sm-6 form-group"><input type="text" name="vLoanNbr" placeholder="Loan Nbr" value={this.state.vLoanNbr} onChange={this.handleChange} /></div> 
					<div className="col-sm-12 text-center"><button type="button">Preview</button>&nbsp;<button type="button" className="btn-danger">Reset</button></div>
				</div>
	}else if(this.state.menu==='PWD'){
		mlist = "Change Password"
		emlist = <div className="col-sm-12 form-group" >        
			<div className="col-sm-12 form-group"><label>Old Password</label>
				<input type="text" name="oldPwd" placeholder="Old Password" value={this.state.oldPwd} onChange={this.handleChange} />
			</div>
			<div className="col-sm-12 form-group"><label>New Password</label>
				<input type="text" name="newPwd" placeholder="New Password" value={this.state.newPwd} onChange={this.handleChange} />
			</div>	
			<div className="col-sm-12 form-group"><label>Confirm New Password</label>
				<input type="text" name="newConPwd" placeholder="Confirm New Password" value={this.state.newConPwd} onChange={this.handleChange} />
			</div>
		</div>	
		emlistBtn = <div className="col-sm-12 text-center">
			<button type="button">Submit</button>&nbsp;<button type="button" className="btn-danger">Close</button>
		</div>
	}else if(this.state.menu==='HELP'){
		mlist = "About QFund"
		emlist = <div className="col-sm-12 form-group" > <p className="p-text">QFund is an online Payday loan application that helps Payday Loan companies to web enable their existing business processes. The solution has been built based on the expertise of some of the leading industry professionals with extensive domain and operational experience. QFund covers a wide array of functionality primarily required to automate and migrate the entire business processes onto the web. </p></div>
	}else if(this.state.menu==='PRISCA'){
		mlist = "Printers & Scanners"
		emlist = <div className="col-sm-12" >
			<div className="col-sm-12 form-group" >
				<div className="innerBlockContainer">
					<h2>Printer(s) <span className="txtRht">2Nos</span></h2>
					<div className="row">						
						<div className="col-sm-12">
							<table className="col-table-3">
								<thead>	
									<tr>
										<th>Brand</th>
										<th>Name</th>
										<th>Printing Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">HP LaserJet</td>
										<td align="center">Printer-1</td>
										<td align="center">Agreement</td>
									</tr>
									<tr>
										<td align="center">Panasonic</td>
										<td align="center">Printer-2</td>
										<td align="center">Check</td>
									</tr>
								</tbody>                        
							</table>                    																							
						</div>
					</div>
				</div>
			</div>
			
			<div className="col-sm-12 form-group" >
				<div className="innerBlockContainer">
					<h2>Scanner(s) <span className="txtRht">2Nos</span></h2>
					<div className="row">						
						<div className="col-sm-12">
							<table className="col-table-3">
								<thead>	
									<tr>
										<th>Brand</th>
										<th>Name</th>
										<th>Printing Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">Canon p210</td>
										<td align="center">Scanner-1</td>
										<td align="center">Check</td>
									</tr>
									<tr>
										<td align="center">Ultra Check</td>
										<td align="center">Scanner-2</td>
										<td align="center">Document</td>
									</tr>
								</tbody>                        
							</table>                    																							
						</div>
					</div>
				</div>
			</div>
		</div>
	}else if(this.state.menu==='NA'){
		mlist = "Drawer De-Assignment"
		emlist = <div className="col-sm-12 form-group" style={bodyHgt1}> 
			<div className="eqHgt">
			<div className="col-sm-6">			
			<div className="innerBlockContainer">
			<h2>Basic Info</h2>
			<table className="col-table-2 nth-evenColor form-group">			
			<tbody>
			
			<tr><td>Employee Name</td><td>ILPFL</td></tr>
			<tr><td>Opening Balance</td><td align="right">$50000.00</td></tr>
			<tr><td>Count by Denomination</td><td align="center"> &nbsp; </td></tr></tbody>
			</table>
			</div>
			</div>
			<div className="col-sm-6">
			<div className="innerBlockContainer">
			<h2>Credentials</h2>
			<div className="col-sm-12 form-group">
			<label>Banker ID</label>
			<input type="text" name="oldPwd" placeholder="Banker ID" />
			</div>
			<div className="col-sm-12">
			<label>Banker PIN#</label>
			<input type="text" name="newPwd" placeholder="Banker PIN" />
			</div>
			</div>
			</div>
			</div>
			<div className="colsm-12">
			<table width="100%" border="0" className="col-table-4 nth-evenColor"><tbody>
			<tr>
			<td>
			<tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of Pennies</td><td><input type="text" name="text" placeholder="" /></td><td><input type="text" name="" placeholder=""  /></td></tr><tr><td>Count of Nickels</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder=""/></td></tr><tr><td>Count of Dimes</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Quarters</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Half Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td>
			<td><tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of $1</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $5</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $10</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $20</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $50</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $100</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td></tr>
			</tbody>
			</table>
			
			<table width="100%" border="0" className="noBorder col-table-4"><tbody>
			<tr>
			<td>Current Cash Balance</td>
			<td align="left"> 
			<input type="text" name="" placeholder="" />
			</td>
			<td></td>
			<td></td>
			</tr>
			</tbody>
			</table>
			<div className="col-sm-12 form-group">
			<div className="innerBlockContainer"><h2>Current Check Balance</h2>
			<div className="row">
			<div className="col-sm-12">
			<table className="col-table-2 defaultGrid">
			<thead>
			<tr>
			<th>Check Nbr</th>
			<th>Amt</th></tr>
			</thead>
			<tbody>
			<tr>
			<td align="center">Total Check Amt</td>
			<td align="right">$0.00</td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
			</div>
			</div>
			<div className="col-sm-12 form-group">
			<div className="innerBlockContainer"><h2>Current CC/MO Balance</h2>
			<div className="row">
			<div className="col-sm-12">
			<table className="col-table-2 defaultGrid">
				<thead>
					<tr>
						<th>CC/MO Nbr</th>
						<th>Amt</th>
					</tr>
				</thead>
				<tbody>
			<tr>
			<td align="center">5004</td>
			<td align="right">$50.00</td>
			</tr>
			<tr>
			<td align="center">1452</td>
			<td align="right">$125.00</td>
			</tr>
			<tr>
			<td align="center">54546</td>
			<td align="right">$1000.00</td>
			</tr>
			<tr>
			<td align="center">1452</td>
			<td align="right">$100.00</td>
			</tr>
			<tr>
			<td align="center">80145</td>
			<td align="right">$80.00</td>
			</tr>
			<tr>
			<td align="center">1101</td>
			<td align="right">$30.00</td>
			</tr>
			<tr>
			<td align="center"><strong>Total CC/MO Amt</strong></td>
			<td align="right"><strong>$1,385.00</strong></td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
			</div>
			</div>
			
</div>

			<div className="col-sm-12 text-center"><button type="button">Finish De Assign</button></div></div>
	}else if(this.state.menu==='DP'){
		mlist = "Safe Balance Calculation"
		emlist = <div className="col-sm-12 form-group">
			<div className="colsm-12">
			<p>Count by Denomination</p>
			<table width="100%" border="0" className="col-table-4 nth-evenColor"><tbody>
			<tr>
			<td>
			<tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of Pennies</td><td><input type="text" name="text" placeholder="" /></td><td><input type="text" name="" placeholder=""  /></td></tr><tr><td>Count of Nickels</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder=""/></td></tr><tr><td>Count of Dimes</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Quarters</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Half Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td>
			<td><tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of $1</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $5</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $10</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $20</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $50</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $100</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td></tr>
			</tbody>
			</table>
			
			<table width="100%" align="center" border="0" className="noBorder col-table-4"><tbody>
			<tr>
			<td>Cash</td>
			<td align="left"> 
			<input type="text" name="" placeholder="" />
			</td>
			<td></td>
			<td></td>
			</tr>
			</tbody>
			</table>		
</div>
<br />
			<div className="col-sm-12 text-center"><button type="button">Cancel</button> &nbsp; <button type="button" onClick={()=>{this.clsPop()}}>Finish Cal</button></div></div>
	}else if(this.state.menu==='CA'){
		mlist = "Drawer Assignment"
		emlist = <div className="col-sm-12 form-group" style={bodyHgt1}> 
			<div className="eqHgt">
			<div className="col-sm-6">
			<div className="innerBlockContainer">
			<br />
			<table className="col-table-2 nth-evenColor form-group">			
			<tbody>
			<tr><td align="center">Drawer Nbr</td><td align="center">23551</td></tr>
			<tr><td align="center">Employee Name</td><td align="center">
			<select name="fontChg">
							<option value="arial">Wilson Phillips</option>
						</select></td></tr>
			<tr><td align="center">Count by Denomination</td><td align="center"> &nbsp; </td></tr></tbody>
			</table>
			</div>
			</div>
			<div className="col-sm-6">
			<div className="innerBlockContainer">
			<br />
			<div className="col-sm-12 form-group">
			<label>Banker ID</label>
			<input type="text" name="oldPwd" placeholder="Banker ID" />
			</div>
			<div className="col-sm-12">
			<label>Banker PIN#</label>
			<input type="text" name="newPwd" placeholder="Banker PIN" />
			</div>
			</div>
			</div>
			</div>
			<div className="colsm-12">
			<table width="100%" border="0" className="col-table-4 nth-evenColor"><tbody>
			<tr>
			<td>
			<tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of Pennies</td><td><input type="text" name="text" placeholder="" /></td><td><input type="text" name="" placeholder=""  /></td></tr><tr><td>Count of Nickels</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder=""/></td></tr><tr><td>Count of Dimes</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Quarters</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Half Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td>
			<td><tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of $1</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $5</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $10</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $20</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $50</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $100</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td></tr>
			</tbody>
			</table>
			
			<table width="100%" border="0" className="noBorder col-table-4"><tbody>
			<tr>
			<td>Current Cash Balance</td>
			<td align="left"> 
			<input type="text" name="" placeholder="" />
			</td>
			<td></td>
			<td></td>
			</tr>
			</tbody>
			</table>
			<br />	
</div>

			<div className="col-sm-12 text-center"><button type="button">Finish Assign</button></div></div>
	}else if(this.state.menu==='CSA'){
		mlist = "Safe Assignment"
		emlist = <div className="col-sm-12 form-group" style={bodyHgt1}> 
			<div className="eqHgt">
			<div className="col-sm-6">
			<div className="innerBlockContainer">
			<h2>Cust Info</h2>
			<table className="col-table-2 nth-evenColor">			
			<tbody>
			<tr><td>Employee Name</td><td align="center">
			<select name="fontChg">
							<option value="arial">Wilson Phillips</option>
						</select></td></tr>
			<tr><td>Employee PIN#</td><td>23551</td></tr>			
			<tr><td>Count by Denomination</td><td align="center"> &nbsp; </td></tr></tbody>
			</table>
			</div>
			</div>
			<div className="col-sm-6">
			<div className="innerBlockContainer">
			<h2>Cash Details</h2>
			<table className="col-table-2 nth-evenColor form-group">			
			<tbody>
			<tr><td>Cash Balance</td>
			<td align="right">$ 5000.00</td></tr>
			<tr><td>Check Balance</td><td align="right">$ 4000.00</td></tr>			
			<tr><td>CC/MO Balance</td><td align="right">$ 0.00 </td></tr></tbody>
			</table>
			</div>
			</div>
			</div>
			<div className="colsm-12">
			<table width="100%" border="0" className="col-table-4 nth-evenColor"><tbody>
			<tr>
			<td>
			<tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of Pennies</td><td><input type="text" name="text" placeholder="" /></td><td><input type="text" name="" placeholder=""  /></td></tr><tr><td>Count of Nickels</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder=""/></td></tr><tr><td>Count of Dimes</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Quarters</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Half Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td>
			<td><tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of $1</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $5</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $10</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $20</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $50</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $100</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td></tr>
			</tbody>
			</table>
			<br />	
</div>

			<div className="col-sm-12 text-center"><button type="button">Finish Assign</button></div></div>
	}else if(this.state.menu==='CSD'){
		mlist = "Safe De-Assignment"
		emlist = <div className="col-sm-12 form-group" style={bodyHgt1}> 
			<div className="eqHgt">
			<div className="col-sm-12">
			<div className="innerBlockContainer">
			<br />
			<div className="col-sm-4 form-group">
			<label>Banker ID</label>
			<input type="text" name="oldPwd" placeholder="Banker ID" />
			</div>
			<div className="col-sm-4">
			<label>Banker PIN#</label>
			<input type="text" name="newPwd" placeholder="Banker PIN" />
			</div>
			</div>
			</div>
			</div>
			<div className="colsm-12">
			<table width="100%" border="0" className="col-table-4 nth-evenColor"><tbody>
			<tr>
			<td>
			<tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of Pennies</td><td><input type="text" name="text" placeholder="" /></td><td><input type="text" name="" placeholder=""  /></td></tr><tr><td>Count of Nickels</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder=""/></td></tr><tr><td>Count of Dimes</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Quarters</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Half Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td>
			<td><tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
			<tr><td>Count of $1</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $5</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $10</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $20</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $50</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $100</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td></tr>
			</tbody>
			</table>
			
			<table width="100%" border="0" className="noBorder col-table-4"><tbody>
			<tr>
			<td>Current Cash Balance</td>
			<td align="left"> 
			<input type="text" name="" placeholder="" />
			</td>
			<td></td>
			<td></td>
			</tr>
			</tbody>
			</table>
			<div className="col-sm-12 form-group">
			<div className="innerBlockContainer"><h2>Current Check Balance</h2>
			<div className="row">
			<div className="col-sm-12">
			<table className="col-table-2 defaultGrid">
			<thead>
			<tr>
			<th>Check Nbr</th>
			<th>Amt</th></tr>
			</thead>
			<tbody>
			<tr>
			<td align="center">Total Check Amt</td>
			<td align="right">$0.00</td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
			</div>
			</div>
			<div className="col-sm-12 form-group">
			<div className="innerBlockContainer"><h2>Current CC/MO Balance</h2>
			<div className="row">
			<div className="col-sm-12">
			<table className="col-table-2 defaultGrid">
				<thead>
					<tr>
						<th>CC/MO Nbr</th>
						<th>Amt</th>
					</tr>
				</thead>
				<tbody>
			<tr>
			<td align="center">5004</td>
			<td align="right">$50.00</td>
			</tr>
			<tr>
			<td align="center">1452</td>
			<td align="right">$125.00</td>
			</tr>
			<tr>
			<td align="center">54546</td>
			<td align="right">$1000.00</td>
			</tr>
			<tr>
			<td align="center">1452</td>
			<td align="right">$100.00</td>
			</tr>
			<tr>
			<td align="center">80145</td>
			<td align="right">$80.00</td>
			</tr>
			<tr>
			<td align="center">1101</td>
			<td align="right">$30.00</td>
			</tr>
			<tr>
			<td align="center"><strong>Total CC/MO Amt</strong></td>
			<td align="right"><strong>$1,385.00</strong></td>
			</tr>
			</tbody>
			</table>
			</div>
			</div>
			</div>
			</div>
			
</div>

			<div className="col-sm-12 text-center"><button type="button">Finish De Assign</button></div></div>
	}else if(this.state.menu==='CLCOUT'){
		mlist = "Clock Out"
		emlist = <div className="col-sm-12 form-group" >        
			<table className="col-table-2 defaultGrid">
				<thead>
					<tr>
						<th>Clock in Time</th>
						<th>Clock out Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td align="center">05:04:47</td>
						<td align="center"><input type="text" name="clkOutTime" placeholder="05:35" value={this.state.clkOutTime} onChange={this.handleChange} /></td>
					</tr>
				</tbody>
			</table>
		</div>	
		ClockOut = <div className="col-sm-12 text-center">
			<button type="button">Clock Out</button>
		</div>
	}else if(this.state.menu === 'swipeCard'){
		mlist = "SwipeCard"
		emlist = <div className="col-sm-12 form-group">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe cellGap">
					<tbody>
						<tr>
							<td> Card#</td>
							<td>  <input type="text" name="Card Nbr" value=""/></td>
							<td> <button type="button">Swipe Card</button></td>
						</tr>	
						<tr>
							<td> Expiry Date</td>
							<td>
								<Datepicker id={'exDate'} name={'exDate'} ref='exDate' />
							</td>
							<td>
								<Datepicker id={'exDate1'} name={'exDate1'} ref='exDate1' />
							</td>
						</tr>						
					</tbody>
					</table>		
				</div>
            </div>
            swipeBTN = <div className="col-sm-12 text-center">
				<button type="button" > Done </button>
				<button type="button" > Cancel </button>
				</div>
	}else if(this.state.menu==='Eligibility'){
		mlist = "Eligibility"
		emlist = <div className="col-sm-12 form-group">
				<div className="col-sm-10 col-sm-offset-1 form-group">
					<p> Eligibility Assignment </p>
					<p> Customer Eligible </p>	
					<p> Click the OK button to continue </p>			
				</div>
            </div>
		OKBTN = <div className="col-sm-12 text-center">
		<button type="button" onClick={()=>{this.clsPop('OK')}}>OK</button>
		</div>
	}else if(this.state.menu==='TIMES'){
		mlist = "TimeSheet Maintenance"
		emlist = <div className="col-sm-12 form-group" >        
			<table width="100%" border="0" className="noBorder noStripe">
				<tbody>
					<tr>
						<td align="center">Payroll Period</td> 
						<td><Datepicker /></td>
					</tr>
				</tbody>
			</table>						
		</div>	
		TimeSheet = <div className="col-sm-12 text-center">
			<button type="button">Search</button>
		</div>
	}else if(this.state.menu==='MSG'){
		mlist = "Inbox (Messages)"
		emlist = <div className="col-sm-12 form-group mailCont" >        
			<div className="row">
				<div className="col-sm-12">
          <div className="col-sm-2">From:</div><div className="col-sm-10">Anthony, H <span className='mailPadDt'>Date: 12/16/2019</span></div>
        </div>                      
				<div className="col-sm-12">
					<div className="col-sm-2">Subject:</div><div className="col-sm-10">Veritec Update</div>
				</div>        
				<div className="col-sm-12 mailPad">          
          <p>Hi,</p>					
					<p>Veritec is down for maintenance activity. Will update once the service is resumed. </p>					
					<p>Regards,</p>
          <p>Anthony, H</p> 
				</div>
			</div>						
		</div>
	}
        
    return (
      <div>
		<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
			<div className="col-sm-12 form-group" hidden={!this.state.hideSearchHead}>
				<h2 className="reportHeads" ref={subtitle => this.subtitle = subtitle}>Choose <span className="pull-right"><button className="close closeBtn text-right" onClick={this.closeModal}><i className="fa fa-times"></i></button></span></h2>
			</div>
			<div className="col-sm-12 form-group" hidden={!this.state.hideHeaderHead}>
				<h2 className="reportHeads" ref={subtitle => this.subtitle = subtitle}>{mlist} <span className="pull-right"><button className="close closeBtn text-right" onClick={this.closeModal}><i className="fa fa-times"></i></button></span></h2>
			</div>
			<div className="col-sm-12 text-center form-group" hidden={!this.state.hideSearch}>
				<div className="col-sm-2">
					<button className="rightIcon" onClick={()=>this.props.addTabs({name: 'Summary', custFLNm: this.state.cName, custNbr: this.state.cNbr, custSsn: this.state.cSsn, custEmail: this.state.email, custPh: this.state.cPhone, custPhTyp: this.state.pType, custAddress: this.state.cAddress, custCity: this.state.cCity, custState: this.state.cState, custZip: this.state.cZip, newCust: this.state.newcst, pstatus: this.state.pstat, label: 'Details of', id: 'Summary_'+this.state.cNbr})} role="button"><i className="fa fa-list-alt"></i></button><br/><br/><strong>Summary</strong>
				</div>
				{iconslist}{niconslist}{liconslist}{riconslist}{aiconslist}{biconslist}	
			</div>
			<div hidden={!this.state.hideHeader}>
				{emlist}{emlistBtn}{ClockOut}{swipeBTN}{OKBTN}{TimeSheet}		
			</div>
			<div className="col-sm-12 form-group">				
				<div hidden={!this.state.hideActiveMilitary} ><ActiveMilitary /></div>
			</div>
        </Modal>        
  </div>
    );
  }
}