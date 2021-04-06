import React, { Component } from "react";
import Datepicker from "./common/Datepicker";
import SimpleReactValidator from 'simple-react-validator';

export default class Phone extends Component {
  constructor(props){
    super(props);    
    this.state = {hidediv: false, hideInner: false, bssn: '', bFName: '', bLName: '', bAddrs: '', bABA: '', bChkg: '', bAcntStatus: '', bChkAcntNbr: '', bCChkAcntNbr: '', bRoutingNbr: '', bCRoutingNbr: '', cnt: [], height: 10, zind: -100}; 
	//this.close = this.close.bind(this);
	this.bnkInner = this.bnkInner.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.ssnValid = new SimpleReactValidator({className: 'error text-left'});
	this.bnkValid = new SimpleReactValidator({className: 'error'});	
  }

  componentWillMount(){
    this.setState({bFName: 'William', bLName: 'Defoe', bAddrs: 'TN 38301', bChkg: '228185655', bABA: '267084131', bAcntStatus: '', bChkAcntNbr: '', bCChkAcntNbr: '', bRoutingNbr: '', bCRoutingNbr: ''});   
  }

  /* componentDidMount(){
    this.refs.bdate.loadData("");
  } */

  handleChange=(e)=>{            
    this.setState({[e.target.name]: e.target.value });
  }

  bank(){    
    this.setState({hidediv: true});
  }
  
  bnkInner(){
	if (this.ssnValid.allValid()) {
		this.setState({hideInner: true, hideMain: true});
	} else {
		this.ssnValid.showMessages();
		this.forceUpdate();
	}
  } 

  bnkSubmit=()=>{
	if (this.bnkValid.allValid()) {
		alert('You submitted the form and stuff!');
  	} else {
	  	this.bnkValid.showMessages();
	  	this.forceUpdate();
  	}
}
 
  close=()=>{    
    this.setState({hidediv: false, hideInner: false, hideMain: false});
  }
  
  maxmize=()=>{
    let wHeight = window.$(document).height();
    window.$("#edit-bank-myAccnt").css('height', (wHeight-125)+"px");
    window.$("#editbank1").css('height', (wHeight-195)+"px");
  }
  
  minimize=()=>{
    let wHeight = window.$(document).height();                 
    window.$("#edit-bank-myAccnt").css('height', "auto");
    window.$("#editbank1").css('height', "auto");
  }
  
  disp=(str)=>{
    this.setState({hidediv: true});
  }     
  
  render(){    
	return (       
	<div id="edit-bank-myAccnt" className="footer-btn" hidden={!this.state.hidediv}>
		<div className="col-sm-12">
		<div className="row">
			<div className="mkePymt">
				<h2>
					<i className="fa fa-university "></i> Edit Bank Details
					<span id="close" onClick={()=>this.close()} className="footer-close"><i className="fas fa-times"></i></span>&nbsp;
					<span id="minmiz" onClick={()=>this.minimize()} className="footer-min"><i className="fas fa-window-maximize"></i></span>&nbsp;
					<span id="maxmiz" onClick={()=>this.maxmize()} className="footer-max"><i className="far fa-window-maximize"></i></span>
				</h2>
			</div>
				
			<div id="editbank" hidden={this.state.hideMain}>					
				<div className="col-sm-5 form-group text-left"><label>SSN Nbr</label></div>
				<div className="col-sm-7 form-group">
					<input type="text" name="bssn" className="ssnFormat" placeholder="XXX-XX-XXXX" maxlength="11" value={this.state.bssn} onChange={this.handleChange} />
					{this.ssnValid.message('ssn', this.state.bssn, 'required|min:11|max:11')}
				</div>
				<div className="col-sm-12 form-group">
					<button type="button" onClick={()=>this.bnkInner()}> Search </button>
				</div>
			</div>
				
				
				<div id="editbank1" className="col-sm-12 text-left" hidden={!this.state.hideInner}>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>SSN Nbr</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="bssn" placeholder="XXX-XX-8110" value={this.state.bssn} readOnly/>
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>First Name</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.bFName}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Last Name</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.bLName}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Address</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.bAddrs}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Chkg Acct Nbr</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.bChkg}
						</div>
					</div>
										
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>ABA/Routing Nbr</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.bABA}
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Account Status</label>
						</div>
						<div className="col-sm-7">
							<select name="bAcntStatus" value={this.state.bAcntStatus} onChange={this.handleChange}>
								<option value="A">Active</option>
								<option value="I">Inactive</option>
								<option value="C">Closed</option>
							</select>
							{this.bnkValid.message('Account Status', this.state.bAcntStatus, 'required')}
						</div>
					</div>					
					<br />						
					<div className="row">						
						<div className="col-sm-12 text-center">
					  		<button type="button" onClick={()=>this.bnkSubmit()}> Submit </button> 
							<button type="button" onClick=""> Add Bank </button> 
						</div>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
    
    </div>

    );
  }
}