import React, { Component } from "react";

export default class Waivefee extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: '', mainDiv: true, plsDiv: false, subDiv:true, waiveInterest:"", waiveTitleLF:"", waiveMembFee:"", waiveLateFee:"", waiveNSF:"", waiveOrignFee:"", waiveCustFee:"", waiveTransFee:"", waiveEncryKey:"", waiveIntraDue:"", waiveIntraAmt:"", waiveNSFdue:"", waiveNSFAmt:'', waiveLateFeeDue:"", waiveLateFeeAmt:'', waiveTotalAmt:"", waiveTransCode:"", waiveEncryCode:""}
	this.handleChange = this.handleChange.bind(this);
	}

  componentWillMount(){
    //alert(this.props.rVal+"..."+this.props.tranVal);
    this.setState({refProd: this.props.waVal, refTran: this.props.tranVal, waiveInterest:"98.2", waiveTitleLF:"0.00", waiveMembFee:"0.00", waiveLateFee:"0.00", waiveNSF:"98.2", waiveOrignFee:"0.00", waiveCustFee:"0.00", waiveTransFee:"3565715", waiveEncryKey:"", waiveIntraDue:"6.03", waiveIntraAmt:"6.03", waiveNSFdue:"0.00", waiveNSFAmt:'', waiveLateFeeDue:"0.00", waiveLateFeeAmt:'', waiveTotalAmt:"0.00", waiveTransCode:"3565715", waiveEncryCode:"All2B"});
  }
  
  waiveFin (){
	    this.setState({ mainDiv: false, plsDiv: true, subDiv:false});
  }
  finBtnFun(){
      this.setState({mainDiv: false, plsDiv: false, transDiv:true});
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  render(){
    return (
        <div>
            {
                (this.state.refProd === "LOC") ? 
                <div> 
                {this.state.mainDiv ? <div className="col-sm-12">
                    <div className="innerBlockContainer">
                    <h2>Waive Fee<span onClick={()=>{this.props.wfaClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                    
                    <div className="col-sm-12">
                        <div className="row">
                        <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                            <tbody>                                         
                            <tr>
                                <td className="bgHighlt"> Interest <br/>
                                    <input type="text" name="waiveInterest" value={this.state.waiveInterest} onChange={this.handleChange}/>
                                </td>  
                                <td> Title Line Fee <br/>
                                <input type="text" name="waiveTitleLF" value={this.state.waiveTitleLF} onChange={this.handleChange} />
                                </td>
                                <td> Membership Fee <br/>
                                <input type="text" name="waiveMembFee" value={this.state.waiveMembFee} onChange={this.handleChange}/>
                                </td>
								<td> Late Fee <br/>
                                <input type="text" name="waiveLateFee" value={this.state.waiveLateFee} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            
                            <tr>   
                                <td className="bgHighlt"> NSF Fee <br/>
                                    <input type="text" name="waiveNSF" value={this.state.waiveNSF} onChange={this.handleChange}/>
                                </td>  
                                <td> Origination Fee <br/>
                                <input type="text" name="waiveOrignFee" value={this.state.waiveOrignFee} onChange={this.handleChange}/>
                                </td>
                                <td> Customer Fee <br/>
                                <input type="text" name="waiveCustFee" value={this.state.waiveCustFee} onChange={this.handleChange}/>
                                </td>
								<td> Transaction Nbr <br/>
                                     <input type="text" name="waiveTransFee" value={this.state.waiveTransFee} disabled/>
                                </td>
                            </tr>
                            <tr>
                                <td className="bgHighlt" valign="top"> Encryption Key <br/>
                                    <input type="text" name="waiveEncryKey" value={this.state.waiveEncryKey} onChange={this.handleChange}/>
                                </td>  
                                <td> Reason for Waiver <br/>
                                <textarea className="form-control">                                 
                                </textarea>
                                </td>
                            </tr>               
                            </tbody>
                        </table>
						
						
                    </div>
					</div>
                    <div className="col-sm-12 text-center">                            
                        <button type="button" > Cancel </button>                        
                        <button type="button" onClick={() => {this.finBtnFun()}}> Finish Waive</button>
					</div>
                            
                    </div>
                 </div> : null
                }
                </div>
                : <div>{this.state.subDiv ? <div className="col-sm-12">
                    <div className="innerBlockContainer">
                    <h2>Waive Fee<span onClick={()=>{this.props.wfaClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
					 <div className="col-sm-12">
                        <div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                            <tbody>                                         
                            <tr>
                                <td className="bgHighlt"> Interest Due<br/>
                                    <input type="text" name="waiveIntraDue" value={this.state.waiveIntraDue} onChange={this.handleChange}/>
                                </td>  
                                <td> Waive Interest Amt <br/>
                                <input type="text" name="waiveIntraAmt" value={this.state.waiveIntraAmt} onChange={this.handleChange} />
                                </td>
                                <td> NSF Fee Due <br/>
                                <input type="text" name="waiveNSFdue" value={this.state.waiveNSFdue} onChange={this.handleChange}/>
                                </td>
								<td>Waive NSF Fee Amt <br/>
                                <input type="text" name="waiveNSFAmt" value={this.state.waiveNSFAmt} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            
                            <tr>   
                                <td className="bgHighlt"> Late Fee Due <br/>
                                    <input type="text" name="waiveLateFeeDue" value={this.state.waiveLateFeeDue} onChange={this.handleChange}/>
                                </td>  
                                <td>Waive Late Fee Amt <br/>
                                <input type="text" name="waiveLateFeeAmt" value={this.state.waiveLateFeeAmt} onChange={this.handleChange}/>
                                </td>
                                <td> Total Amount Due <br/>
                                <input type="text" name="waiveTotalAmt" value={this.state.waiveTotalAmt} onChange={this.handleChange} />
                                </td>
								<td> Transaction Code <br/>
                                <input type="text" name="waiveTransCode" value={this.state.waiveTransCode} disabled/>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td className="bgHighlt"> Encryption Code <br/>
                                    <input type="text" name="waiveEncryCode" value={this.state.waiveEncryCode} onChange={this.handleChange}/>
                                </td>  
                                
                            </tr>               
                            </tbody>
                        </table>
						</div>
						<div className="col-sm-12 text-center">                            
                        <button type="button" onClick={() =>{this.waiveFin()}}>Finish</button>
					</div>
					</div>
					</div>
				</div> : null }</div>
            }
			{this.state.plsDiv ? <div className="col-sm-12">
			<div class="innerBlockContainer">
			<h2>Confirmation</h2>  
                        <div class="text-center">
                            <p>Waive Transaction completed succesfully</p>
                            <p>Would you like to complete another transaction for this customer? </p>
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={()=>{this.props.wfaClose('false')}}>Yes</button>
                            <button type="button" onClick={()=>{this.props.wfaClose('false')}}>No</button>
                        </div>
                    </div>
			</div> : null }
			{this.state.transDiv ?  
                        <div className="col-sm-12">
                        <div className="innerBlockContainer">
                        <h2>Confirmation</h2>                    
                        <div className="text-center">
                        <p> Transaction Completed Successfully.</p>                    
                        <button type="button" onClick={()=>{this.props.wfaClose('false')}}>Ok</button>
                        </div>
                        </div>
                        </div> :  null } 
            
        </div>
    );
	
  } 
}