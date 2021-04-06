import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';

export default class Mpay extends Component {
  constructor(props){
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.submitForm = this.submitForm.bind(this);
    this.validator = new SimpleReactValidator();    
    this.state = {list: ['1'], hidediv: false};                           
  }
  
  incr(str){
    let k = str+1;    
    this.setState(state =>{ const list = state.list.concat(k); return {list} }); 
    this.setState({hidediv: true});
    window.$("#minusBtn0").remove();     
  }
  
  decr(str){    
    window.$("#mke"+str).remove();        
  }    
  
  submitForm() {
	if (this.validator.allValid()) {
	  alert('You submitted the form and stuff!');
	} else {
	  this.validator.showMessages();
	  // rerender to show messages for the first time
	  // you can use the autoForceUpdate option to do this automatically`
	  this.forceUpdate();
	}
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  render(){        	  
    return (
		<div className="col-sm-12 form-group">			
			<div className="innerBlockContainer">
				<h2 className="pamHeads">Make Payment <span onClick={()=>{this.props.mclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-md-12 form-group">						
					<div id="custom-search-input1">
						<div className="col-sm-10">
							<div className="row">
								<div className="col-sm-2 form-group">
									<label>Payment Amt</label>
								</div>
								<div className="col-sm-3 form-group">
									<input type="text" name="pymtAmt" value={this.state.pymtAmt} onChange={this.handleChange} />
									<div className="text-danger">{this.validator.message('Payment Amt', this.state.pymtAmt, 'required|numeric')}</div>
								</div>
							</div>
						</div>
						<div className="col-sm-10">
							{this.state.list.map((item,index) => (
								<div id={"mke"+index} className="row">
									<div className="col-sm-2 form-group">
										<label>Tender Type</label>
									</div>
									<div className="col-sm-3 form-group">
										<select name="tndrTyp11" value={this.state.tndrTyp11} onChange={this.handleChange}>
											<option value="">-- Option --</option>
											<option value="CA">Cash</option>
											<option value="CC">Cashier Check</option>
											<option value="MO">Money Order</option>
											<option value="ACH">ACH</option>
											<option value="DC">DC</option>
										</select>
										<div className="text-danger">{this.validator.message('Tender Type', this.state.tndrTyp11, 'required')}</div>
									</div>
								
									<div className="col-sm-2 form-group">
										<label>Tender Amt</label>
									</div>	
									<div className="col-sm-3 form-group">
										<input type="text" name="tndrAmt11" value={this.state.tndrAmt11} onChange={this.handleChange} />
										<div className="text-danger">{this.validator.message('Tender Amt ', this.state.tndrAmt11, 'required|numeric')}</div>
									</div>
                  					<div className="col-sm-2 form-group text-center" id="Tndr1">
    									<button type="button" className="addTndr" onClick={()=>{this.incr('1')}}> <i className="fas fa-plus"></i> </button>
                    					<button type="button" className="addTndr btn-danger" hidden={!this.state.hidediv} id={"minusBtn"+index} onClick={()=>{this.decr(index)}}> <i className="fas fa-minus"></i> </button>                    
    							</div>                  
								</div>                                
							))}
							
							
						</div>
						
						<div id="mulTndr1" className="mulTndr"></div>
					
						<div className="clearfix"></div>													
						<div className="col-sm-12 form-group text-center">
						  <button type="button" onClick={this.submitForm}> Submit </button> 
						</div>
					</div>
				</div>
				<div className="col-md-12 text-center dispNone" id="mkePymtSuc1">
					<h3>Payment Successful</h3>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
    );
  }
}