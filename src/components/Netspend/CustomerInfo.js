import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class CustomerInfo extends Component {

  constructor (props) {
    super(props);
    this.state = {lastName: '', firstName: '', middleName: '', ssnNbr:'', govtIdnumber:'', govtIdType:'', govtIdCountry:''};
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
                    <h2> Customer Information </h2>
                    <div className="row">
                        <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                            <tbody>                                         
                            <tr>
                                <td className="bgHighlt"> Last Name <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                                </td>  
                                <td> First Name <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                                </td>
                                <td> Middle Name <br/>
                                 <input type="text" name="middleName" value={this.state.middleName} onChange={this.handleChange}/>
                                </td>
								<td> SSN <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                <input type="text" name="ssnNbr" value={this.state.ssnNbr} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            
                            <tr>                                      
                                <td className="bgHighlt"> DOB <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                <Datepicker id={'cidob'} name={'cidob'} ref='cidob' />
                                </td>
                                <td className="bgHighlt"> Govt Id Number <br/>
                                <input type="text" name="govtIdnumber" value={this.state.govtIdnumber} onChange={this.handleChange}/>
                                </td>                            
                                <td className="bgHighlt"> Govt Id Type <br/>
                                    <select name="govtIdType" value={this.state.govtIdType} onChange={this.handleChange}>
                                        <option value="Drivers License"> Drivers License </option>
                                    </select>
                                </td>  
                                <td className="bgHighlt"> Govt Id Country <br/>
                                <input type="text" name="govtIdCountry" value={this.state.govtIdCountry} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>    
                                <td className="bgHighlt"> Govt Id Expiry Date  <br/>
                                <Datepicker id={'govtexpiryDate'} name={'govtexpiryDate'} ref='govtexpiryDate' />
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