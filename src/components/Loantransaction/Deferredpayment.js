import React, { Component } from "react";

export default class Deferredpayment extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: '', mainDiv: true, plsDiv:true};
  }

  componentWillMount(){
    //alert(this.props.rVal+"..."+this.props.tranVal);
    this.setState({refProd: this.props.clVal, refTran: this.props.tranVal});
  }

  yesBtnFun()
  {
    this.setState({yesDiv : false, plsDiv:false, mainDiv:false});
  }

  render(){

    return (
        <div>
        {this.state.mainDiv ? <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2> Deferred Payment Details <span onClick={()=>{this.props.dpClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>

                    <div className="col-sm-12">
					<table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
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
							</table>
					</div>
                    &nbsp;&nbsp;
                    <div className="col-sm-12 text-center">                            
                        <button type="button" onClick={()=>{this.props.dpClose('false')}}> Cancel </button>
                        <button type="button" onClick={()=>{this.yesBtnFun()}}> Finish</button>
					</div>
                            
                </div>
            </div> : null
        }
    
           <div className="col-sm-12" hidden={this.state.plsDiv}>
                        <div className="innerBlockContainer">
                    <h2>Confirmation</h2>                    
                    <div className="text-center">
                    <p> Transaction Completed Successfully</p> 
					<p> Would youv like to complete another transaction for this customer?</p> 		
					<button type="button" onClick={()=>{this.props.dpClose('false')}}> No </button>					
                    <button type="button" onClick={()=>{this.props.dpClose('false')}}>Yes</button>
                    </div>
                    </div>
                </div>  
            
        </div>
    );
	
  } 
}