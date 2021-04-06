import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

export default class Phone extends Component {
  constructor(props){
  super(props);    
    this.state = {hidediv: false, hideInner: false, pSSN: '', pFName: '', pLName: '', pAddrs: '', pPriPh: ''};
    this.close = this.close.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.phInner = this.phInner.bind(this);
	this.ssnValid = new SimpleReactValidator();
	this.phValid = new SimpleReactValidator();
  }
  componentWillMount(){
	this.setState({pFName: 'Tiger', pLName: 'Nixon', pAddrs: 'TN 38305', pPriPh: ''});
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }
  
  test(){    
    this.setState({hidediv: true});
  }
  
  phInner(){
	if (this.ssnValid.allValid()) {
		this.setState({hideInner: true, hideMain: true});
	} else {
		this.ssnValid.showMessages();
		this.forceUpdate();
	}  	
  }

  phSubmit=()=>{
	if (this.phValid.allValid()) {
		alert('You submitted the form and stuff!');
	} else {
		this.phValid.showMessages();
		this.forceUpdate();
	}
  }
  
  disp=(str)=>{
    this.setState({hidediv: true});
  }
  
  close(){
    this.setState({hidediv: false, hideInner: false, hideMain: false});
  }

 maxmize=()=>{
    let wHeight = window.$(document).height();
    window.$("#edit-phone-pop").css('height', (wHeight-125)+"px");
    window.$("#editphone11").css('height', (wHeight-195)+"px");
  }
  
  minimize=()=>{
    let wHeight = window.$(document).height();                 
    window.$("#edit-phone-pop").css('height', "auto");
    window.$("#editphone11").css('height', "auto");
  }  
  
  render(){    
    return (
      <div id="edit-phone-pop" className="footer-btn" hidden={!this.state.hidediv}>
	  <div className="col-sm-12">
	  <div className="row">
			<div className="mkePymt">			
				<h2>
				<i className="fa fa-phone"></i> Edit Phone
				<span id="phoneclose" onClick={this.close} className="footer-close"><i className="fas fa-times"></i></span>&nbsp;
				<span id="minmiz" onClick={()=>this.minimize()} className="footer-min"><i className="fas fa-window-maximize"></i></span>&nbsp;
				<span id="maxmiz" onClick={()=>this.maxmize()} className="footer-max"><i className="far fa-window-maximize"></i></span>
				</h2>
			</div>	
			
			
			<div id="editphone" hidden={this.state.hideMain}>					
				<div className="col-sm-5 form-group text-left">
					<label>SSN Nbr</label>
				</div>
				<div className="col-sm-7 form-group">
					<input type="text" name="pSSN" id="ssnFormat" maxlength="11" className="ssnFormat" placeholder="XXX-XX-XXXX" value={this.state.pSSN} onChange={this.handleChange}/>
					<div className="text-left error">{this.ssnValid.message('ssn', this.state.pSSN, 'required|min:11|max:11')}</div>
				</div>
				<div className="col-sm-12 form-group">
					<button type="button" onClick={()=>this.phInner()}> Search </button>
				</div>
			</div>
			

				<div id="editphone11" className="col-sm-12 text-left" hidden={!this.state.hideInner}>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>SSN Nbr</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="pSSN" placeholder="XXX-XX-8110" value={this.state.pSSN} readOnly/>
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>First Name</label>
						</div>
						<div className="col-sm-7">
							: {this.state.pFName}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Last Name</label>
						</div>
						<div className="col-sm-7">
							: {this.state.pLName}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Address</label>
						</div>
						<div className="col-sm-7">
							: {this.state.pAddrs}
						</div>
					</div>
					
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Primary Phone</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="pPriPh" placeholder="(XXX) XXX-XXXX" value={this.state.pPriPh} onChange={this.handleChange} />
							<div className="error">{this.phValid.message('Phone Nbr', this.state.pPriPh, 'required|numeric|min:10|max:10')}</div>
						</div>
					</div>	
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Secondary Phone</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="pSecPh" placeholder="(XXX) XXX-XXXX" value={this.state.pSecPh} onChange={this.handleChange} />
							<div className="error">{this.phValid.message('Phone Nbr', this.state.pSecPh, 'required|numeric|min:10|max:10')}</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Work Phone</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="pWrkPh" placeholder="(XXX) XXX-XXXX" value={this.state.pWrkPh} onChange={this.handleChange} />
							<div className="error">{this.phValid.message('Phone Nbr', this.state.pWrkPh, 'required|numeric|min:10|max:10')}</div>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Opt-In</label>
						</div>
						<div className="col-sm-7">
							: <input type="radio" name="in" value="Marketing" /> Marketing &nbsp; &nbsp; <input type="radio" name="in" value="Accounting" /> Accounting
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Opt-Out</label>
						</div>
						<div className="col-sm-7">
							: <input type="radio" name="out" value="Marketing" /> Marketing &nbsp; &nbsp; <input type="radio" name="out" value="Accounting" /> Accounting
						</div>
					</div>					
					<div className="row form-group">
						<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>this.phSubmit()}> Submit </button>
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