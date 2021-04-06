import React, { Component } from "react";

export default class Payments extends Component {

  constructor (props) {
    super(props);
    this.state = {pymtProd: '', crTran: '', pymtTran:'', mainDiv: true, showMsg: '', showMsgGoto : false, showMsgYN: false, poVal: '', list: ['1'], hidediv: false};
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){	
	if(this.props.cVal !== undefined){
		this.setState({pymtProd: '', pymtTran : 'WriteOff', poVal: this.props.cVal});
	}else{
		this.setState({pymtProd: this.props.pmtVal, pymtTran : this.props.tranVal});
	}    
  }
 
  componentDidUpdate(prevProps)
  {
	window.$("#minusBtn0").remove(); 
	if(prevProps.tranVal !== this.props.tranVal)
	{
		this.setState({pymtTran : this.props.tranVal});
	}
	
  }
    
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
LocparPymt(str){
	if(str === "TLPDefault")
	{
		this.setState({mainDiv: false, showMsgYN: true});
	}else if(str === "PayOff")
	{
		this.setState({mainDiv: false, showMsgGoto: true});
	}else if(str === "goToPayOff")
	{
		this.setState({mainDiv: true, pymtTran: str, showMsgGoto: false});
	}else if(str === "future")
	{
		this.setState({mainDiv: false, fdcDpMsg: true, showDiv: true});
	}else if(str === "deferred")
	{
		this.setState({mainDiv: false, fdcDpMsg: true, showDiv: true});
	}else if(str === "yesDefaultTlp")
	{
		this.setState({mainDiv: false, pymtTran: str, DefMsgYN: true, showMsgYN: false});
	}else{
		this.setState({mainDiv: false, showDiv: true, DefMsgYN: false, fdcDpMsg: false, showMsg : str});
	}	
}

incr(str){
	let k = str+1;    
	this.setState(state =>{ const list = state.list.concat(k); return {list} }); 
	this.setState({hidediv: true});
	//window.$("#minusBtn0").remove();
  }
  
  decr(str){    
    window.$("#mke"+str).remove();        
  } 

render(){
	return (
        <div>
            {this.state.mainDiv ? <div className="col-sm-12">
                	<div class="row">
						{(this.state.pymtTran === "TLPDefault") ?
							<div className="col-sm-3 form-group">
								Default Balance <br/><input type="text" name="paymentAmt" value="1466.00"/> 
							</div>
						: null }

						{(this.state.pymtTran === "repo") ?
						<div className="col-sm-3 form-group">
							Repo Payment<br/><input type="text" name="paymentAmt" value="1466.00"/>
						</div>
						: null}

						

						{(this.state.pymtTran === "Partial") ? 
						<div> 
							<div class="col-sm-3 form-group">
								Payment Amt<br/><input type="text" name="paymentAmt" value="200.00"/>
							</div>
							<div class="col-sm-3 form-group">
							Tender Type1<br /><select name="nColType">
									<option value="Cash">Cash</option>
								</select>
							</div>
							<div class="col-sm-3 form-group">
								Tender Amt1 <br/><input type="text" name="paymentAmt" value="10.00"/>
							</div>
							<div class="col-sm-3 form-group">
								Tender Type2<br /><select name="nColType">
										<option value="Cash"> </option>
									</select>
							</div>
							<div className="col-sm-3 form-group">
								Tender Amt2 <br/><input type="text" name="paymentAmt" value=" "/>
							</div> 
						</div> : null }

						{(this.state.pymtTran === "partial" || this.state.pymtTran === "PayOff" || this.state.pymtTran === "goToPayOff" || this.state.pymtTran === "repo" || this.state.pymtTran === "default" || this.state.pymtTran === "writeoff" || this.state.pymtTran === "TLPDefault") ? 
						<div>
							<div class="col-sm-3 form-group">
								Payment Amt<br/><input type="text" name="paymentAmt" value="200.00"/>
							</div> 
							{(this.state.pymtTran === "TLPDefault") ?
							<div>
								<div className="col-sm-4 form-group"><br/>
									<input type="checkbox" /> Min  Payment Amount to Current:129.00
								</div>
								<div className="clearfix"></div> 
								</div>
							: null }
							<div className="col-sm-3 form-group">
								Tender Type1<br/><select name="nColType">
											<option value="Cash">Cash</option>
										</select>
							</div>
							<div className="col-sm-3 form-group">
								Tender Amt1<br/><input type="text" name="paymentAmt" value="200.00"/>
							</div> 		
							{(this.state.pymtTran === "partial" || this.state.pymtTran === "PayOff" || this.state.pymtTran === "goToPayOff") ? 
							<div> 
								{(this.state.pymtTran !== "goToPayOff") ? <div>
									<div className="col-sm-3 form-group">
									Statement Min Payment Amount<br/><input type="text" disabled value="0.00"/>
									</div>
									<div className="col-sm-3 form-group">
										Due Date<br/><input type="text" disabled value="01/16/2021"/>
									</div>
								</div>: null}
								<div className="col-sm-3 form-group">
								<span className="error">Available Credit</span><br/><input type="text" disabled value="2000.00"/>
								</div>
								<div className="col-sm-3 form-group">
								<span className="error">Cure Amt </span><br/><input type="text" disabled value="0.00"/>
								</div>
							</div> : null }		
							{!(this.state.pymtTran === "repo" || this.state.pymtTran === "TLPDefault") ?
							<div className="col-sm-3 form-group">
								Change<br/><input type="text" disabled value="0.00"/>
							</div> : null}
							
						</div> : null }

						{(this.state.pymtTran === "repo" || this.state.pymtTran === "TLPDefault") ? 
						<div>
							<div className="col-sm-3 form-group">
								Tender Type2<br/><select name="nColType">
											<option value="Cash">Cash</option>
										</select>
							</div>
							<div className="col-sm-3 form-group">
								Tender Amt2<br/><input type="text" name="paymentAmt" value="200.00"/>
							</div> 
							<div className="col-sm-3 form-group">
								Change<br/><input type="text" disabled value="0.00"/>
							</div>
						</div> : null }

						{(this.state.pymtTran === "VS") ? 
							<div className="innerBlockContainer">
								<h2>Voluntary Surrender Transaction <span onClick={()=>{this.props.pymtClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
								<div className="col-sm-4 form-group">
										Voluntary Surrender Amount<br/><input type="text" name="paymentAmt" value="1466.00"/>
								</div>
								<div className="col-sm-4 form-group">
									Comments<br/><textarea className="form-control"></textarea>
								</div>
								<div className="col-sm-4 form-group"><br/>
									<button type="button" onClick={()=>{this.props.pymtClose('false')}}> Cancel </button>
									<button type="button" onClick={()=>{this.LocparPymt()}}> Finish Payment </button>
								</div>
							</div> : null }
						{(this.state.pymtTran === "RF") ? 
						<div className="innerBlockContainer">
							<h2>Refund <span onClick={()=>{this.props.pymtClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
							<div className="col-sm-4 form-group">
								Over Payment Amt<br/><input type="text" name="paymentAmt" disabled value="50.70"/>
							</div>
							<div className="col-sm-4 form-group">
									Disb Type<br/><select name="nColType">
										<option value="ACH">CASH</option>
										<option value="CHK">Check</option>
									</select>
							</div>
							<div className="col-sm-4 form-group"><br/>
								<button type="button" onClick={()=>{this.props.pymtClose('false')}}> Cancel </button>
								<button type="button" onClick={()=>{this.LocparPymt()}}> Finish Refund </button> 
							</div>
						</div>: null}

						{(this.state.pymtTran === "future") ?
							<div>
								<div className="col-sm-4 form-group">
								Schedule Pay Date
									<select>
										<option value="01/12/2021">01/12/2021</option>                                            
									</select>
								</div>
								<div className="col-sm-4 form-group">
									Payment Amt <input type="text" name="achCRtngNbr" value="184.00" />
								</div>
								<div className="col-sm-4 form-group">
									Select Card
									<select>
										<option value="NEW">New Card</option>                                            
									</select>
								</div>
							</div> : null }

							{(this.state.pymtTran === "corporate") ?
						<div>
					<div className="col-sm-7">
					<div className="innerBlockContainer">
						<h2> Enter Payment </h2>
						{this.state.list.map((item,index) => (
					<div id={"mke"+index} className="col-sm-12">
						<table width="100%" border="0" className="noBorder noStripe col-table-4">
							<tbody>
								<tr>
								<td className="bgHighlt" width="12%">Tender Type1<br/>
									<select name="nColType">
                                        <option value="ACH">CASH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select></td>
									<td className="bgHighlt">Tender Number<br/>
									<input type="text" name="mZip" value="1" /></td>
									<td className="bgHighlt">Tender Amount<br/>
									<input type="text" name="mZip" value="344.00" /></td>
									<td valign="bottom"><br/><div className="col-sm-2 form-group text-center" id="Tndr1">
								<button type="button" className="addTndr" onClick={()=>{this.incr('1')}}> <i className="fas fa-plus"></i> </button>
								<button type="button" className="addTndr btn-danger"  hidden={!this.state.hidediv} id={"minusBtn"+index} onClick={()=>{this.decr(index)}}> <i className="fas fa-minus"></i> </button>                    
    						 </div></td>									
									
								</tr>
								
							</tbody>
						</table>
						</div>
					))
				}
					</div>
					</div>
					<div className="col-sm-5">
					<div className="innerBlockContainer">
						<h2> Payment Summary</h2>
							<table width="100%" border="0" className="noBorder noStripe col-table-3">
								<tbody>
									<tr>								
										<td className="bgHighlt">No of Loans<br/>
										<input type="text" name="mZip" value="1" /></td>
										<td className="bgHighlt">Total of Payments<br/>
										<input type="text" name="mZip" value="344.00" /></td>
									</tr>
									
								</tbody>
							</table>
					</div>
					</div>
				</div> : null}

					</div>
					
					{(this.state.pymtTran === "deferred") ?
						<table width="100%" className="noBorder noStripe col-table-6 nth-evenColor form-group">
							<tbody>
								<tr>
									<td>Installment Nbr</td>
									<td align="left">1</td>
									<td>Installment Amt</td>
									<td align="left">233.70</td>
									<td>Installment Amt Paid</td>
									<td align="left">0.00</td>
								</tr>
								<tr>
									<td>Installment Amt Due</td>
									<td align="left">233.70</td>
									<td>Payment Due Date</td>
									<td align="left">02/12/2021</td>
									<td>Principal Amt to be defer</td>
									<td align="left">114.12</td>
								</tr>
								<tr>
									<td>Interest Amt to be defer</td>
									<td align="left">109.58</td>
									<td>Origination Amt to be defer</td>
									<td align="left">10.00</td>
								</tr>
							</tbody>
						</table> : null }
					 
					<div className="text-center">
						{!(this.state.pymtTran === "future" || this.state.pymtTran === "RF" || this.state.pymtTran === "VS" || this.state.pymtTran === "") ?
							<div>
								<button type="button" onClick={()=>{this.props.pymtClose('false')}}> Cancel </button>
								<button type="button" onClick={()=>{this.LocparPymt(this.state.pymtTran)}}> Finish Payment </button>
							</div> : null }

						{(this.state.pymtTran === "future") ?
						<div>
							<button type="button"> Swipe Card </button>                
							<button type="button" onClick={() =>{this.LocparPymt(this.state.pymtTran)}}> Schedule Payment </button>
						</div>: null }

					</div>

				</div>	: null }

				{this.state.showDiv ? <div className="col-sm-12">
						<div className="innerBlockContainer">
						<h2>Confirmation</h2>                       
                    <div className="text-center">
						<p> Transaction Completed Successfully.</p>
						{this.state.fdcDpMsg ? <div><p> Would youv like to complete another transaction for this customer?</p> 		
						<button type="button" onClick={()=>{this.props.pymtClose('false')}}>Yes</button> 
						<button type="button" onClick={()=>{this.props.pymtClose('false')}}> No </button>
						</div> : <button type="button" onClick={()=>{this.props.pymtClose('false')}}>OK</button> }                    
						
                    </div>
					</div>
				</div> : null }
				
			{this.state.showMsgGoto ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>                    
                    <div className="text-center">
                    <p> Go to payoff screen to pay total amount or cancel to stay. </p>    
					<button type="button" onClick={() => {this.LocparPymt("goToPayOff")}}>Go to Pay Off Screen</button>					
                    <button type="button" onClick={()=>{this.props.pymtClose('false')}}>Cancel</button>
                    </div>
				</div>
			</div> : null
			}
			
			{this.state.showMsgYN ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>                
                    <div className="text-center">
                    <p> Do you want to Renew the loan? </p>    
					<button type="button" onClick={() => {this.LocparPymt("yesDefaultTlp")}}>Yes</button>					
                    <button type="button" onClick={()=>{this.props.pymtClose('false')}}>No</button>
                    </div>
				</div>
			</div> : null
			}
			
			{this.state.DefMsgYN ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>     
                    <div className="text-center">
                    <p> Amount paid does not satisfied renewal amount. Do you want to post it as normal payment? </p>    
					<button type="button" onClick={()=>{this.LocparPymt()}}>Yes</button>					
                    <button type="button" onClick={()=>{this.props.pymtClose('false')}}>No</button>
                    </div>
				</div>
			</div> : null
			}
				
        </div>
	);
  } 
}