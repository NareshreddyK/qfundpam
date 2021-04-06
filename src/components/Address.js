import React, { Component } from "react";
import State from "./common/States";
import SimpleReactValidator from 'simple-react-validator';

export default class Address extends Component {
  constructor(props){
    super(props);    
    this.state = {hidediv: false, hideInner: false, assn: '', aFName: '', aLName: '', aAddrs: '', aAddrs1: '', aCity: '', aZip: ''}; 
    this.close = this.close.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.ssnValid = new SimpleReactValidator();
  }

  componentWillMount(){
    this.setState({aFName: 'William', aLName: 'Defoe', aAddrs: '', aAddrs1: '', aCity: '', aZip: ''});
  }

  componentDidMount(){
    this.refs.astVal.loadData("Tennessee");
  }
  
  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });
  }
  
  addrs(){    
    this.setState({hidediv: true});
  }
  
  addrInner(){
	if (this.ssnValid.allValid()) {
		this.setState({hideInner: true, hideMain: true});
	} else {
		this.ssnValid.showMessages();
		this.forceUpdate();
	}
  }
  
  close(){
    this.setState({hidediv: false});
	this.setState({hideInner: false});
	this.setState({hideMain: false});	  
  }
  
  
 maxmize=()=>{
    let wHeight = window.$(document).height();
    window.$("#edit-addr").css('height', (wHeight-125)+"px");
    window.$("#editAddrs1").css('height', (wHeight-195)+"px");
  }
  
  minimize=()=>{
    let wHeight = window.$(document).height();                 
    window.$("#edit-addr").css('height', "auto");
    window.$("#editAddrs1").css('height', "auto");
  }  
  
  disp=(str)=>{
    this.setState({hidediv: true});
  } 
  
  render(){
    return (      
		<div id="edit-addr" className="footer-btn" hidden={!this.state.hidediv}>
		<div className="col-sm-12">
		<div className="row">
			<div className="mkePymt">
				<h2>
					<i className="fa fa-envelope"></i> Edit Address
					<span id="close" onClick={this.close} className="footer-close"><i className="fas fa-times"></i></span>&nbsp;
					<span id="minmiz" onClick={()=>this.minimize()} className="footer-min"><i className="fas fa-window-maximize"></i></span>&nbsp;
					<span id="maxmiz" onClick={()=>this.maxmize()} className="footer-max"><i className="far fa-window-maximize"></i></span>
				</h2>
			</div>
				
			<div id="editAddrs" hidden={this.state.hideMain}>					
				<div className="col-sm-5 form-group text-left"><label>SSN Nbr</label></div>
				<div className="col-sm-7 form-group">
					<input type="text" name="assn" className="ssnFormat" placeholder="XXX-XX-XXXX" maxlength="11" value={this.state.assn} onChange={this.handleChange}/>
					<div className="text-left error">{this.ssnValid.message('ssn', this.state.assn, 'required|min:11|max:11')}</div>
				</div>
				<div className="col-sm-12 form-group"><button type="button" id="editaddrsearch" onClick={()=>this.addrInner()}> Search </button></div>
			</div>
				
				
				<div id="editAddrs1" className="col-sm-12 text-left" hidden={!this.state.hideInner}>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>SSN Nbr</label>
						</div>
						<div className="col-sm-7">
							<input type="text" placeholder="XXX-XX-8110" name="assn" value={this.state.assn} />
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>First Name</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.aFName}
						</div>
					</div>
					<div className="row form-group lblVal">
						<div className="col-sm-5">
							<label>Last Name</label>
						</div>
						<div className="col-sm-7">
							:&nbsp;{this.state.aLName}
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Address 1</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="aAddrs" placeholder="Address 1" value={this.state.aAddrs} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Address 2</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="aAddrs1" placeholder="Address 2" value={this.state.aAddrs1} onChange={this.handleChange} />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>City</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="aCity" placeholder="City" value={this.state.aCity} onChange={this.handleChange} />
						</div>
					</div>	
					<div className="row form-group">
						<div className="col-sm-5">
							<label>State</label>
						</div>
						<div className="col-sm-7">
							<State id={'aState'} name={'ste'} ref="astVal" />
						</div>
					</div>
					<div className="row form-group">
						<div className="col-sm-5">
							<label>Zip Code</label>
						</div>
						<div className="col-sm-7">
							<input type="text" name="aZip" placeholder="Zip Code" value={this.state.aZip} onChange={this.handleChange} />
						</div>
					</div>		
					<div className="row form-group">						
					<div className="col-sm-12 text-center">
					  <button type="button"> Submit </button> 
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