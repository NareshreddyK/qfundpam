import React, { Component } from "react";

export default class PdlRpp extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {crProd: '', crTran: '', WpnSucces: false, nextDiv: false, mainDiv: true, pymtFreq:"", amtRpp:"", schPymt1:"", schAmt1:"", schDate1:"", schPymt2:"", schAmt2:"", schDate2:"", schPymt3:"", schAmt1:"", schDate3:"", schPymt4:"", schAmt4:"", schDate4:"", schPymt5:"", schAmt5:"", schDate5:"", schPymtTotal:"", schAmtTotal:"", collType:'', checkAmt:"", collAmtTotal:""};
  } 
                   
componentWillMount(){
    this.setState({crProd: this.props.crVal, crTran: this.props.tranVal, pymtFreq:"Monthly", amtRpp:"880.00", schPymt1:"Payment 1", schAmt1:"$ 220.00", schDate1:"02/22/2021", schPymt2:"Payment 2", schAmt2:"$ 220.00", schDate2:"03/22/2021", schPymt3:"Payment 3", schAmt3:"$ 220.00", schDate3:"04/22/2021", schPymt4:"Payment 4", schAmt4:"$ 220.00", schDate4:"05/22/2021", schPymt5:"Payment 5", schAmt5:"$ 220.00", schDate5:"06/22/2021", schPymtTotal:"Payment Total", schAmtTotal:"$ 880.00", collType:'', checkAmt:"Check Amt", collAmtTotal:'$ 880.00'});
  }
	WpnNext (){
		this.setState({nextDiv: true, WpnSucces: false, mainDiv:false});
	}
	WpnWorkPlan(){
		this.setState({WpnSucces: true, nextDiv: false, mainDiv:false, RppSucces: false});
	}
	RppFinPlan(){
		this.setState({RppSucces: true, nextDiv: false, mainDiv:false});
	}
	RppPay (){
		this.setState({RppPayment: true, RppSucces: false, WpnSucces: false, nextDiv: false, mainDiv:false});
	}
	RppplanPmt (){
		this.setState({RPPplanSucces: true, RppPayment: false, RppSucces: false, WpnSucces: false, nextDiv: false, mainDiv:false});
	}

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){	
	return (
		<div>
		{ this.state.mainDiv ?
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Payment Plan Options <span onClick={()=>{this.props.Rclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
									<td className="bgHighlt">Payment Frequency<br/>
									<input type="text" name="pymtFreq" value={this.state.pymtFreq} disabled /></td>
									<td className="bgHighlt">Amt Applied to Rpp<br/>
									<input type="text" name="amtRpp" value={this.state.amtRpp} disabled /></td>
									<td></td>
									<td></td>
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-12 text-center">
							<button type="button" onClick={() =>{this.WpnNext()}}> Next </button>	
							<button type="button" onClick={()=>{this.props.Rclose('false')}}> Cancel </button>
						</div>
			</div>
		</div>	: null 
		}
		
		{this.state.nextDiv ? <div className="col-sm-12">
            <div class="innerBlockContainer"> 
            <h2>Payment Plan Options <span onClick={()=>{this.props.Rclose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>                
                  <table width="100%" className="col-table-3">
				  <thead>
                 
                  <tr><th>&nbsp;</th><th>Amt</th><th>Scheduled PMT Dates</th></tr></thead>
                  <tbody>
                  <tr>
                    <td align="center">{this.state.schPymt1}</td>
                    <td align="center">{this.state.schAmt1}</td>
                    <td align="center">{this.state.schDate1}</td>
                  </tr>                  
                    <tr>
                      <td align="center">{this.state.schPymt2}</td>
                      <td align="center">{this.state.schAmt2}</td>
                      <td align="center">{this.state.schDate2}</td>
                    </tr>
                    <tr>
                      <td align="center">{this.state.schPymt3}</td>
                      <td align="center">{this.state.schAmt3}</td>
                      <td align="center">{this.state.schDate3}</td>
                    </tr>
                    <tr>
                      <td align="center">{this.state.schPymt4}</td>
                      <td align="center">{this.state.schAmt4}</td>
                      <td align="center">{this.state.schDate4}</td>
                    </tr> 
					<tr>
                      <td align="center">{this.state.schPymtTotal}</td>
					  <td align="center">{this.state.schAmtTotal}</td>
					  <td></td>
                    </tr>					
                    <tr>
                      <td align="center">Collateral Type</td>
                      <td>
						  <select name="collType" value={this.state.collType} onChange={this.handleChange}>
							  <option value="ACH">Cash</option>
							</select>
						</td>
					  <td></td>
                    </tr>
					<tr>
                      <td align="center">{this.state.checkAmt}</td>
                       <td align="center">{this.state.collAmtTotal}</td>
					  <td></td>
                    </tr>
                  </tbody>
                  </table>
            
            &nbsp;&nbsp;
                <div className="col-sm-12 text-center">                            
                    <button type="button" onClick={() =>{this.RppFinPlan()}}> Finished Payment Plan </button>
                    <button type="button" onClick={()=>{this.props.Rclose('false')}}> Cancel </button>
                </div>
                </div>
            </div> : null  }
			{this.state.RppSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>        
                    <div className="text-center">
                    <p> Do you want to continue the Repayment Plan for this customer? </p>  
						<button type="button" onClick={() =>{this.WpnWorkPlan()}}>Yes</button>					
						<button type="button" onClick={()=>{this.props.Rclose('false')}}>No</button>						
                    </div>
				</div>
			</div> : null
			}
			{this.state.WpnSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>        
                    <div className="text-center">
                    <p> Repayment Plan Transaction Completed Successfully. </p>  
					<p> Would you like to Complete Another Transaction for this Customer? </p>  					
						<button type="button" onClick={()=>{this.props.Rclose('false')}}>Yes</button>					
						<button type="button" onClick={()=>{this.props.Rclose('false')}}>No</button>						
                    </div>
				</div>
			</div> : null
			}
			{/*{this.state.RppPayment ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Payment Details</h2>        
                    <div className="col-sm-12">
                    <table width="100%" border="0" className="noBorder noStripe col-table-3 cellGap">
							<tbody>
								<tr>								
								<td className="bgHighlt" width="12%">Payment Amt<br/>
									<input type="text" name="mZip" value="220.00" disabled/></td>
									<td className="bgHighlt">Change<br/>
									<input type="text" name="mZip" disabled value="0.00" /></td>
									<td className="bgHighlt">ABA/Routing Nbr<br/>
									<input type="text" name="mZip" value="11111118" /></td>
								</tr>
							</tbody>
						</table>
						
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody><tr>
								
									<td className="bgHighlt" width="12%">Tender Type1<br/>
									<select name="nColType">
                                        <option value="ACH">CASH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select></td>
									<td className="bgHighlt">Tender Amt1<br/>
									<input type="text" name="mZip" value="220.00" /></td>
									<td className="bgHighlt">Tender Type2<br/><select name="nColType">
                                        <option value="ACH"></option>
                                        <option value="ACH">CASH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
									</td>	
									<td className="bgHighlt">Tender Amt2<br/>
									<input type="text" name="mZip" value="" /></td>									
									
								</tr>
								
								
							</tbody>
						</table>						
                    </div>
					<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.Rclose('false')}}> Cancel </button>
							<button type="button" onClick={() =>{this.RppplanPmt()}}> Finish Payment Plan Payment </button>	
						</div>
				</div>
			</div> : null
			}
			
			{this.state.RPPplanSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>      
                    <div className="text-center">
                    <p> RPP Payment Completed Successfully. </p>   
					<p> Would you like to Complete Another Transaction for this Customer? </p>  					
					<button type="button"  onClick={()=>{this.props.Rclose('false')}}>Yes</button>				
					<button type="button"  onClick={()=>{this.props.Rclose('false')}}>No</button>				
                    </div>
				</div>
			</div> : null
			}*/}
			
			
</div>			
	
	);
  } 
}