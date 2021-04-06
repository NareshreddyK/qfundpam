import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class CustomerAddressDetails extends Component {

  constructor (props) {
    super(props);
    this.state = {address1:'', address2:'', city:'', state:'', zipCode:'', email:'', phNbr:'', phType:'', addressType:''};
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
                    <h2> Customer Address Details </h2>
                    <div className="row">
                        <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                            <tbody>                                         
                            <tr>
                                <td className="bgHighlt"> Address1 <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <input type="text" name="address1" value={this.state.address1} onChange={this.handleChange}/>
                                </td>
                                <td className="bgHighlt"> Address2 <br/>
                                <input type="text" name="address2" value={this.state.address2} onChange={this.handleChange}/>
                                </td>
                                <td className="bgHighlt"> City <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                                </td>
                                <td className="bgHighlt"> State <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <select name="state" value={this.state.state} onChange={this.handleChange}>
                                        <option value="Tennessee"> Tennessee </option>
                                    </select>
                                </td>   
                            </tr>
                            <tr>                                     
                                <td className="bgHighlt"> Zip Code <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <input type="text" name="zipCode" value={this.state.zipCode} onChange={this.handleChange}/>
                                </td>
                                <td className="bgHighlt"> Email<br/>
                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                </td>
                                <td className="bgHighlt"> Phone Number <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                    <input type="text" name="phNbr" value={this.state.phNbr} onChange={this.handleChange}/>
                                </td> 
                                <td className="bgHighlt"> Phone Type <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <select name="phType" value={this.state.phType} onChange={this.handleChange}>
                                        <option value="Cell Phone"> Cell Phone</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>    
                                <td className="bgHighlt"> Address Type <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                    <select name="addressType" value={this.state.addressType} onChange={this.handleChange}>
                                        <option value="Physical"> Physical </option>
                                    </select>
                                </td>
                            </tr>
                                                   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
	);
  } 
}