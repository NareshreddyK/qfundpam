import React, { Component } from "react";

export default class PmtVoid extends Component {

  constructor (props) {
    super(props);
    this.state = {PlsConfirmDiv: true, FinPmtDIV: true, sucPmtDIV: true, pVoid: '', PmtDiv: false};
   this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
  }

  componentWillMount(){	
	this.setState({pVoid : this.props.vpVal});
  }
  FinPmtVoid =()=>{
	this.setState({FinPmtDIV:false, PmtDiv: true});
  }
  yesPmtVoid(){
	this.setState({sucPmtDIV:false, FinPmtDIV: true});
  }
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value, PlsConfirmDiv: true});
  }
  locFinishBtn(){
        this.setState({PlsConfirmDiv: false});
	  }
  nlClose(){
    this.props.ldCallback("LOC");
  }

  render(){
	if(this.state.pVoid === "TLP")
	{
	return (
        <div>
			<div className="col-sm-12" hidden={this.state.PmtDiv}>
                <div className="innerBlockContainer">
                    <h2>Void Payment Details <span onClick={()=>{this.props.vpClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>								
                    <div className="">
                <div className="">
                    <table className="noBorder noStripe col-table-4 form-group">
                        <tbody>
                            <tr>
                               <td align="left">Payment Amt <br/><input type="text" disabled value="702.46"/></td>
                              <td align="left">Disb Type<br/><select name="nColType">
                                        <option value=""></option>
                                        <option value="Cash">Cash</option>
                                    </select></td>		
                              <td align="left"> Encryption <br/><input type="text" value="AAE0A"/></td>	
							  <td></td>
                            </tr>
                        </tbody>
                    </table>
					
					{/*<div className="col-sm-12">
					<div className="innerBlockContainer">
					<h2> Loan Details</h2>
                    <table className="noBorder noStripe col-table-6">
                        <tbody>                           
							<tr>
                               <td align="left">Amt</td>
							   <td className="lblVal" align="left">0.00</td>
							
                               <td align="left">Fee</td>
							   <td className="lblVal" align="left">0.00</td>
							
                               <td align="left">Waive Fee </td>
							   <td className="lblVal" align="left">0.00</td>
							</tr>
							<tr>
                               <td align="left">Interest Amt</td>
							   <td className="lblVal" align="left">0.00</td>
							
                               <td align="left">Customary Fee Amt</td>
							   <td className="lblVal" align="left"> 0.00</td>
							
                               <td align="left">Cure Amt</td>
							   <td className="lblVal" align="left">0.00</td>
							</tr>							
							<tr>
                               <td align="left">Payment Made</td>
							   <td className="lblVal" align="left">802.46</td>
							
                               <td align="left">Amt Owed</td>
							   <td className="lblVal" align="left">0.00</td>
							</tr>
												
                        </tbody>
                    </table>
					</div>
					</div>*/}
										
                    
							</div>
							</div>
							
							<div className="col-sm-12 text-center form-group">
							<button type="button" onClick={() =>{this.FinPmtVoid()}}> Finish </button>							
						</div>

						

                </div>
            </div>
			
			<div hidden={this.state.FinPmtDIV}>
					<div className="col-sm-12">
						<div class="innerBlockContainer">
						<h2>Confirmation</h2>  
						<div class="text-center">
						<p>Void Payment Transaction Completed Successfully.</p>
						<button type="button" onClick={()=>{this.props.vpClose('false')}}>OK</button>
						</div>
						</div>
					</div>	
				</div>
				
				{/*<div hidden={this.state.FinPmtDIV}>
					<div className="col-sm-12">
						<div class="innerBlockContainer">
						<div class="form-group text-center">
						<br/>	
						<p>Do you want to Renew the loan?</p>
						<button type="button" onClick={() =>{this.yesPmtVoid()}}>Yes</button>
						<button type="button">No</button>
						</div>
						</div>
					</div>	
				</div>

				<div hidden={this.state.sucPmtDIV}>
					<div className="col-sm-12">
						<div class="innerBlockContainer">
						<div class="form-group text-center">
						<br/>	
						<p>Transaction Completed Successfully.</p>
						<button type="button" onClick={()=>{this.props.vpClose('false')}}>OK</button>
						</div>
						</div>
					</div>	
				</div>*/}
			</div>
			);
	}else{

	return (
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Void Payment Details <span onClick={()=>{this.props.vpClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>								
						{/* <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Loan Details</h2>					
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Principal Amt</td>
								 <td className="lblVal" align="left">96.94</td>
								<td align="left">Interest Amt</td>
								 <td className="lblVal" align="left">86.45</td>								 
                                
                           
                               <td align="left">Verification Fee</td>
								 <td className="lblVal" align="left">0.00</td>
								  </tr>
							<tr>
								<td align="left">Origination Fee</td>
								 <td className="lblVal" align="left">0.00</td>								 
                            
                               <td align="left">Tender Type</td>
								 <td className="lblVal" align="left">Money Order</td>
								<td align="left">Tender Amt</td>
								 <td className="lblVal" align="left">183.39</td>								 
                                
                            </tr>
							<tr>
                               <td align="left">CC/MO Nbr</td>
								 <td className="lblVal" align="left">873456367</td>
								<td align="left">Change Amt</td>
								 <td className="lblVal" align="left">0.00</td>
                            <td align="left">CC/MO Nbr</td>
								 <td className="lblVal" align="left">0.00</td>
                               
								 </tr> 
							<tr>
							<td align="left">Tender Type</td>
								 <td className="lblVal" align="left">0.00</td>
								<td align="left">Tender Amt</td>
								 <td className="lblVal" align="left">0.00</td>					 
                                
                            
                               
                            </tr> 							
                        </tbody>
                    </table>
							</div>
						</div>*/}
							<div className="col-sm-12">
							<table width="100%" className="col-table-4 form-group">
								<thead>
									<tr>
										<th>Payment Amt</th>
										<th>Disb Type</th>
										<th>Disb Amt</th>
										<th>Encryption</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">183.39</td>
										<td align="center"><select name="nColType">
                                        <option value="ACH"></option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select></td>
										<td align="center">183.39</td>
										<td align="center"><input type="text" name="nNxtPayDt" value=" "/></td>
									</tr>
								</tbody>
							</table>
							</div>
							<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.vpClose('false')}}> Void Payment </button>							
						</div>
                </div>
            </div>	
	
			
			
		
		);
	} 
  }
  }