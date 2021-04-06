import React, { Component } from "react";

export default class PaymentInfo extends Component {

  constructor (props) {
    super(props);
    this.state = {totalAmtDue:'', tenderType:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){
	
	return (
        <div>
           <div className="col-sm-12">
            <div className="innerBlockContainer">
                <div className="col-sm-12">
                    <h2> PaymentInfo </h2>
                    <div className="row">
                        <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                            <tbody>                                         
                            <tr>
                                <td className="bgHighlt"> Total Amount Due <br/>
                                 <input type="text" name="totalAmtDue" value={this.state.totalAmtDue} onChange={this.handleChange}/>
                                </td>    
                                <td className="bgHighlt"> Tender Type <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
									<select>
										<option value=""> </option>
									</select>
                                </td>
                                <td className="bgHighlt"> Tender Amt <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <input type="text" name="confirmCardNbr" value=""/>
                                </td> 
								 <td className="bgHighlt"> Change <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <input type="text" name="confirmCardNbr" value=""/>
                                </td> 
                            </tr>
                            </tbody>
                        </table>
                    </div>
							<div className="col-sm-12 text-center form-group error">
								<h3> WARNING !</h3>
								<p>If your are conducting this transaction based on incoming phone call, it is a fraud! <b>DO NOT PROCEED, HANG UP THE PHONE, AND CONTACT YOUR DISTRICT MANAGER.</b></p>
								</div>
							
                </div>
            </div>
        </div>
        </div>
	);
  } 
}