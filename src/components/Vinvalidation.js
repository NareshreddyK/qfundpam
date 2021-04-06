import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

export default class Vinvalidation extends Component {
  constructor(props){
    super(props);    
    this.state = {hidediv: false, vVin: '', vMiles: '', vMaxLoanAmt: '', vMake: '', vModel: '', vYear: '', vBodyType: '', vinResult: true}; 
    this.close = this.close.bind(this); 
	this.vinInner = this.vinInner.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.vinValid = new SimpleReactValidator();
  }

  componentWillMount(){
    this.setState({vVin: '', vMiles: '', vMaxLoanAmt: '', vMake: '', vModel: '', vYear: '', vBodyType: ''});
  }
  
  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }

  vinInner(){
	if (this.vinValid.allValid()) {
		this.setState({vinResult: false});
	} else {
		this.vinValid.showMessages();
		this.forceUpdate();
	}  	
  }
  
  vin(){    
    this.setState({hidediv: true});
  }
  
  close(){
    this.setState({hidediv: false, vinResult: true});	  
  }
  
 maxmize=()=>{
    let wHeight = window.$(document).height();
	window.$("#edit-vin-pop").css('height', (wHeight-195)+"px");
    window.$("#editvin").css('height', (wHeight-265)+"px");
  }
  
  minimize=()=>{
    let wHeight = window.$(document).height();
	window.$("#edit-vin-pop").css('height', "auto");
    window.$("#editvin").css('height', "auto");
  }
  
  disp=(str)=>{
    this.setState({hidediv: true});
  } 
  
  render(){
    return (      
		<div id="edit-vin-pop" className="footer-btn" hidden={!this.state.hidediv}>
		<div className="col-sm-12">
		<div className="row">
			<div className="mkePymt">
				<h2>
					<i className="fa fa-car"></i> VIN Validation
					<span id="close" onClick={this.close} className="footer-close"><i className="fas fa-times"></i></span>&nbsp;
					<span id="minmiz" onClick={()=>this.minimize()} className="footer-min"><i className="fas fa-window-maximize"></i></span>&nbsp;
					<span id="maxmiz" onClick={()=>this.maxmize()} className="footer-max"><i className="far fa-window-maximize"></i></span>
				</h2>
			</div>
				
			<div id="editvin">
				<div className="col-sm-12 text-left">
					<div className="row form-group">
						<div className="col-sm-5">
							<label>VIN</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vVin" value={this.state.vVin} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Miles (OdoMeter)</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vMiles" value={this.state.vMiles} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">						
						<div className="col-sm-12 text-center">
							<button type="button"  onClick={()=>this.vinInner()}> GO </button> 
						</div>
					</div>
				</div>
				<div id="vinRes" className="col-sm-12 text-left" hidden={this.state.vinResult}>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Max Loan Amount</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vMaxLoanAmt" value={this.state.vMaxLoanAmt} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Make</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vMake" value={this.state.vMake} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Model</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vModel" value={this.state.vModel} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Year</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vYear" value={this.state.vYear} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Body Type</label> <span className="text-danger"><i className="fa fa-asterisk"></i></span>
						</div>
						<div className="col-sm-7">
							<input type="text" name="vBodyType" value={this.state.vBodyType} onChange={this.handleChange} />
						</div>
					</div>		
					<div className="row form-group">						
						<div className="col-sm-12 text-center">
							<button type="button"  onClick={this.close}> Close </button> 
						</div>
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