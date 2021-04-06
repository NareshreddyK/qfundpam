import React, { Component } from "react";
import Popup from './Popup'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.appndId = this.appndId.bind(this);
    this.srchVal = this.srchVal.bind(this);
    this.state = {id: ''};     
    this.handleChange = this.handleChange.bind(this);
    this.state = {fName:'', fontChg: '', lstChng: ''};
  } 
  
  componentWillMount(){
	this.setState({fontChg: 'Arial'});
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  appndId=(str)=>{
  }
  
  srchVal=()=>{
	let radioValue = window.$("input[name='srchRadio']:checked").val();
	//alert(radioValue);
	/* if(radioValue == "NS"){
		this.props.addTabs({name: 'NetSpend', custFLNm: 'NetSpend', id: '6'})
	}else if(radioValue == "MR"){
		this.props.addTabs({name: 'Misc Receipts', custFLNm: 'Misc Receipts', id: 'MiscReceipts'})
	}else if(radioValue == "MD"){
		this.props.addTabs({name: 'Misc Disburssement', custFLNm: 'Misc Disburssement', id: 'MiscDisburssement'})
	} */
	this.props.search(this.state.fName+"_"+radioValue);
	window.$("input[name=srchRadio]").attr("checked", false);
  }

  menus(str){
    this.refs.Popup.dispBlk(str);
  }
  
  log=(str)=>{
	this.props.logOut(str);
  }
	
  render(){
	  
    return (
      <div><div className="headerTopHolder">
	<nav className="navbar navbar-default">
  <div className="container-fluid">
  	<div className="navbar-header">
      <a className="navbar-brand" href="#" id="qfdLogo">{/* <img alt="qfund" src="images/logo-qfund.png" /> */}</a>
    </div>
	<div className="navbar-header-search">
		<form className="navbar-form navbar-left">
		<div className="col-sm-12 form-group text-right">
          <input type="text" className="srchInput" value={this.state.fName} name="fName" onChange={this.handleChange}  placeholder="Search: First Name / Last Name / SSN" />
		  <div id="arrowLeft"><i className="fas fa-chevron-down"></i></div>
			<div className="srchIcon"><i className="fas fa-search" onClick={()=>this.srchVal()}></i></div>
			<div id="optShow">
				<div className="col-sm-12" id="optShow2"><div className="col-sm-12 bdrBtmNone"><strong>Advanced Search:</strong>&nbsp;</div><div className="col-sm-5"><label>First Name</label></div><div className="col-sm-7"><input type="text" placeholder="First Name" id="firstNm" name="firstNm" /></div><div className="col-sm-5"><label>Last Name</label></div><div className="col-sm-7"><input type="text" placeholder="Last Name" id="lastNm" name="lastNm" onChange={this.handleChange} /></div><div className="col-sm-5"><label>SSN</label></div><div className="col-sm-7"><input type="text" placeholder="XXX-XX-XXXX" id="ssn" name="ssn" /></div><div className="col-sm-5"><label>Loan Nbr</label></div><div className="col-sm-7"><input type="text" placeholder="Loan #" id="lnNbr" name="lnNbr" /></div><div className="col-sm-5"><label>Cust Nbr</label></div><div className="col-sm-7"><input type="text" placeholder="N/A" id="migCust" name="migCust" /></div><div className="col-sm-5"><label>Migrated Loan Nbr</label></div><div className="col-sm-7"><input type="text" placeholder="N/A" id="migLoan" name="migLoan" /></div><div className="col-sm-5"><label>Stage</label></div><div className="col-sm-7"><select name="stage" id="stage"><option value="">Select Option</option><option value="">Lien Not Applied For</option><option value="">Title Taken To DMV</option><option value="">Issues To Resolve</option><option value="">Not Able To Apply Lien</option><option value="">Title Returned From DMV</option><option value="">Lien Released</option><option value="">Sent To Auction</option><option value="">Sent To CSS</option><option value="">ETL</option></select></div><div class="clearfix"></div><div className="col-sm-12"><input type="radio" name="srchRadio" value="MR" checked={this.state.srchRadio === 'MR'} onChange={this.handleChange} />&nbsp; Misc Receipts &nbsp;<input type="radio" name="srchRadio" value="MD" checked={this.state.srchRadio === 'MD'} onChange={this.handleChange} />&nbsp; Misc Disbursement &nbsp; <input type="radio" name="srchRadio" value="NS" checked={this.state.srchRadio === 'NS'} onChange={this.handleChange} />&nbsp; NetSpend &nbsp; <input type="radio" name="srchRadio" value="TT" checked={this.state.srchRadio === 'TT'} onChange={this.handleChange} />&nbsp; Title Tracking</div></div>
			</div>
        </div>
		</form>
	</div>
	<div className="navbar-header-button">
		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        	<span className="sr-only">Toggle navigation</span>
        	<span className="icon-bar"></span>
        	<span className="icon-bar"></span>
        	<span className="icon-bar"></span>
      	</button>
	</div>
	<div className="navbar-header-icons">
		<ul className="nav navbar-nav navbar-right">			
			<li className="dropdown">      
			  	<button className="dropdown-toggle rightIcon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
		  			{/* <i className="fa fa-user"></i> */}   RJ     
				</button>            
				<ul className="dropdown-menu">					
					<li><a href="#" onClick={()=>this.menus('CLCOUT')}><span className="glyphicon glyphicon-time"></span> &nbsp;Clock Out</a></li>
					<li role="separator" className="divider"></li>					
					<li><a href="#" onClick={()=>this.menus('PWD')}><span className="glyphicon glyphicon-lock"></span> &nbsp;Change Password</a></li>
					<li role="separator" className="divider"></li>
					<li><a href="#" onClick={()=>this.menus('HELP')}><span className="glyphicon glyphicon-info-sign"></span> &nbsp;Help</a></li>
					<li role="separator" className="divider"></li>
					<li><a href="#" onClick={()=>this.menus('PRISCA')}><span className="glyphicon glyphicon-print"></span> &nbsp;Printers & Scanners</a></li>
					<li className="skinClrHead"><a href="#"><span className="glyphicon glyphicon-cog"></span> &nbsp;Skin Settings</a></li>
					<li  className="skinClr"><a href="#">
						Themes:&nbsp;&nbsp;
						<div className="btn-group text-center" role="group" aria-label="Basic example">
						<button type="button" className="themeBlue" rel="css/stylesBlue.css"><span>&nbsp;&nbsp;&nbsp;</span></button>
						<button type="button" className="themeGrey" rel="css/styles.css"><span>&nbsp;&nbsp;&nbsp;</span></button>	
						<button type="button" className="themeOthr"><span>&nbsp;&nbsp;&nbsp;</span></button>
						</div>
					</a></li> 
					<li  className="skinClr"><a href="#">
						Font size:
						<div className="btn-group text-center" role="group" aria-label="Basic example">
						<button type="button" id="btn-decrease"><span className="fntDec">A-</span></button>
						<button type="button" id="btn-orig"><span className="fntOrg">A</span></button>
						<button type="button" id="btn-increase"><span className="fntInc">A+</span></button>
						</div>
					</a></li>          
					<li  className="skinClr"><a href="#">
						Font Family:
						<select className="fontChange" name="fontChg" value={this.state.fontChg} onChange={this.handleChange}>
							<option value="arial">Arial</option>
							<option value="Gothic A1">Gothic A1</option>
							<option value="Open Sans">Open Sans</option>
							<option value="Roboto">Roboto</option>
							<option value="Ubuntu">Ubuntu</option>
							<option value="Open Sans Condensed">Open Sans Condensed</option>
						</select>
					</a></li>
				  </ul>                
			</li>
			{/* <li className="UName">RJ</li> */}
			<li className="dropdown notification">
			<button className="dropdown-toggle rightIcon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i></button> <span class="badge">1</span>			
			<ul className="dropdown-menu">					
					<li><a href="#"> &nbsp;Leads <span>1</span></a></li>
					<li role="separator" className="divider"></li>					
					<li><a href="#"> &nbsp;Pending Applications<span>2</span></a></li>
					<li role="separator" className="divider"></li>
					<li><a href="#"> &nbsp;Finished Applications<span>1</span></a></li>
				  </ul> 
				  </li>
			<li><button className="rightIcon" data-toggle="tooltip" data-placement="bottom" data-original-title="Logout" onClick={()=>this.log('2')}><i className="fa fa-sign-out-alt"></i></button></li>      
		</ul>
	</div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<div className="col-sm-12 form-group text-right text-white">
			<table className="noBorder noStripe verAlign">
      			<tbody>
					<tr>			
						<td><label>Store Nbr</label>:<br/><strong>0383</strong></td>			
						{/* <td>
							<label>Drawer</label>:<br/>
							<div class="btn-group btn-toggle" id="assign" data-toggle="buttons">
        						<label class="btn-label">Assign</label>
    							<label class="btn btn-hyper">
       								<a className="" href="#" onClick={()=>this.menus('NA')}  data-toggle="tooltip" data-placement="bottom">De-Assign</a>
    							</label>    
  							</div>
  						</td>
						<td>
							<label>Safe</label>:<br/>&nbsp;				
							<div class="btn-group btn-toggle" data-toggle="buttons">
								<label class="btn btn-hyper">
      								<a className="" href="#" onClick={()=>this.menus('CSA')}  data-toggle="tooltip" data-placement="bottom">Assign </a>
    							</label>
   								<label class="btn-label">De-Assign</label>    
  							</div>
						</td> */}				
						<td><label>Store Date</label>:<br/><strong>12/03/2019</strong></td>
						<td><label>Clock-In</label>:<br/><span className="clkTime"><strong>10:10 AM</strong></span></td>
					</tr>
      			</tbody>
			</table>
		</div>  
    </div>
  </div>
</nav>

<Popup ref='Popup' />
	</div></div>
    );
  }
}