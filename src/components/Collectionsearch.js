import React, { Component } from "react";
import Datepicker from "./common/Datepicker";

export default class Collectionsearch extends Component {
  constructor(props){
    super(props);
    this.state = {cNbr: '', csFName: '', csLName: '', csSsn: '', csEmail: '', csPhNbr: '', csLoanNbr: '', csBnkAcntNbr: '', csQueueProduct: '', csQueueNm: '', csProdTyp: '', csCenter: ''};	
  };
  
  componentDidMount(){
    window.$("#accordion3").accordion({heightStyle: "content"});
  };
  
  componentDidUpdate(){
    window.$("#accordion3").accordion({heightStyle: "content"});
  };

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  render(){	 
		
    return (
      <div className="searchListHolder searchListHolder2">
			<h2>Search</h2>
				<div className="col-sm-12">
					
					<div id="accordion3">
						<h3>Search by Customer</h3>
						<div>
							<div className="row">
								<div className="form-group">
								  <input type="text" name="csFName" placeholder="First name" value={this.state.csFName} onChange={this.handleChange} />
								</div>
								<div className="form-group">
								  <input type="text" name="csLName" placeholder="Last name" value={this.state.csLName} onChange={this.handleChange} />
								</div>
								<div className="form-group">
								  <input type="text" name="csSsn" placeholder="last 4 SSN #" value={this.state.csSsn} onChange={this.handleChange} />
								</div>
								<div className="form-group">
								  <input type="text" name="csEmail" placeholder="Email Address" value={this.state.csEmail} onChange={this.handleChange} />
								</div>
								<div className="form-group">
								  <input type="text" name="csPhNbr" placeholder="Phone Number" value={this.state.csPhNbr} onChange={this.handleChange} />
								</div>
								<div className="form-group">
								  <input type="text" name="csLoanNbr" placeholder="Loan #" value={this.state.csLoanNbr} onChange={this.handleChange} />
								</div>
								<div className="form-group">
								  <input type="text" name="csBnkAcntNbr" placeholder="Bank Account Number #" value={this.state.csBnkAcntNbr} onChange={this.handleChange} />
								</div>
							</div>
						</div>
						<h3>Search by Queue</h3>
						<div>
							<div className="row">
								<div className="form-group">
									<label>Product Type</label>
									<select name="csQueueProduct" id="csQueueProduct" value={this.state.csQueueProduct} onChange={this.handleChange}><option value="ALL" selected="">ALL</option><option value="PDL">Payday Loan</option><option value="ILP">Installment Loan</option><option value="TLP">Title Loan</option><option value="LOC">Line of Credit</option></select>
								</div>
								<div className="form-group">
									<label>Queue Name</label>
									<select name="csQueueNm" id="csQueueNm" value={this.state.csQueueNm} onChange={this.handleChange}><option value="">Please Select</option><option value="1187">All All</option><option value="1186">All No Activity Days</option><option value="1182">All PTP</option><option value="1185">All Past Due</option><option value="1183">All RTN</option><option value="1184">All follow Up Days</option></select>
								</div>
								<div className="form-group">
									<label>Channel</label><br/>
									<input name="chStore" type="checkbox" value="store" id="store"/> Store &nbsp; 
									<input name="chOnline" type="checkbox" value="online" id="online"/> Online
								</div>
							</div>
						</div>
						<h3>Funds Verification</h3>
						<div>
							<div className="row">
								<div className="form-group listNne" id="showFun1">
									<ul>
										<li><input name="showFunOpt1" type="radio" value="pd" id="pd"/>&nbsp; <label for="pd">Past Due</label></li>
										<li><input name="showFunOpt1" type="radio" value="rtn" id="rtn"/>&nbsp; <label for="rtn">Returned</label></li>
										<li><input name="showFunOpt1" type="radio" value="wo" id="wo"/>&nbsp; <label for="wo">Write Off</label></li>
									</ul>
								</div>
								<div className="form-group listNne hide" id="showRet2">
									<ul id="rtnOptions">
										<li><input name="showRetOpt2" type="checkbox" value="nsf"/>&nbsp; NSF</li>
										<li><input name="showRetOpt2" type="checkbox" value="sp"/>&nbsp; Stop Payment</li>
										<li><input name="showRetOpt2" type="checkbox" value="ac"/>&nbsp; Account Closed</li>
										<li><input name="showRetOpt2" type="checkbox" value="oth"/>&nbsp; Other</li>
										<li><input name="showRetOpt2" type="checkbox" value="all" id="rtn2All"/>&nbsp; All</li>
									</ul>
								</div>
								<div className="form-group listNne hide" id="woDates1">
									<div className="col-sm-12 form-group">Start Date: <Datepicker id={'csStartDt'} name={'date'} ref='csStartDt' /></div>
									<div className="col-sm-12 form-group">End Date: <Datepicker id={'csEndDt'} name={'date'} ref='csEndDt' /></div>											
								</div>
							</div>
						</div>
						<h3 className="hide">Search by Product</h3>
						<div className="hide">
							<div className="row">
								<div className="form-group">
									<select name="csProdTyp" className="ddList" id="csProdTyp" value={this.state.csProdTyp} onChange={this.handleChange} >
										<option value="">Please Select Product Type</option>
										<option value="PDL">PDL</option>
										<option value="LOC">LOC</option>
										<option value="ILP">ILP</option>
										<option value="TLP">TLP</option>
									</select>
								</div>
								<div className="form-group hide" id="options1">
									<ul className="radioon">
										<li><input type="radio" name="optradio" value="funds"/>&nbsp; Funds Verification</li>
										<li><input type="radio" name="optradio" value="hdd"/>&nbsp; Having a Due Date</li>
										<li><input type="radio" name="optradio"/>&nbsp; Past Due</li>
										<li><input type="radio" name="optradio"/>&nbsp; Deposited</li>
										
										<li><input type="radio" name="optradio"/>&nbsp; Cleared</li>
										<li><input type="radio" name="optradio" value="Del"/>&nbsp; Returned</li>
										
										<li><input type="radio" name="optradio"/>&nbsp; Default</li>
										<li><input type="radio" name="optradio"/>&nbsp; Written Off</li>
									</ul>              
								</div>							
								<div className="form-group hide" id="options2">
									<ul className="radioon">
										<li><input type="radio" name="optradio1" value="hdd"/> Having a Due Date</li>
										<li><input type="radio" name="optradio1"/> Past Due</li>
													
										<li><input type="radio" name="optradio1"/>&nbsp; Default </li>
									</ul>
								</div>
								
								<div className="form-group hide" id="options3">
									<ul className="radioon">
										<li><input type="radio" name="optradio2" value="hdd"/> Having a Due Date</li>
										<li><input type="radio" name="optradio2"/> Past Due</li>
									</ul>				
								</div>
											 
								<div className="form-group hide">
									<ul id="showFun">
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Returned</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Past Due</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; NSF</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Stop Payment</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Account Closed</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; All</li>
									</ul>
								</div>  
								
								<div className="form-group hide">
									<ul id="showRet">
										<li className="col-md-6"><input type="checkbox"/>&nbsp; NSF</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Stop Payment</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Fee Only</li>
										<li className="col-md-6"><input type="checkbox"/>&nbsp; Account Closed</li>                        
										<li className="col-md-6"><input type="checkbox"/>&nbsp; All</li>
									</ul>   
								</div>
								
								<div className="form-group hide">
									<div id="dateicon"><Datepicker id={'csDte1'} name={'date'} ref='csDte1' /> </div>
								</div>
								
								<div className="form-group hide">
									<div id="dateicon2"><Datepicker id={'csDte2'} name={'date'} ref='csDte2' /> </div>
								</div>	
								
								<div className="form-group hide">
									<div id="dateicon3"><Datepicker id={'csDte3'} name={'date'} ref='csDte3' /> </div>
								</div>
							</div>
							
						</div>
					</div><br />
				
					<div className="col-sm-12 form-group">						
						<input type="text" name="csCenter" placeholder="Center #" value={this.state.csCenter} onChange={this.handleChange} />
					</div>
					
					<div className="form-group text-center">
						<button type="button"> Search </button>
					</div>
				</div>
			</div>
    );
  }
}