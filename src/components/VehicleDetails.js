import React, { Component } from "react";

export default class VehicleDetails extends Component {

  constructor (props) {
    super(props);
    this.state = {PlsConfirmDiv: true};
   this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value, PlsConfirmDiv: true});
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Vehicle Details</h2>
					<div className="col-sm-12">
					<h6>Do you want to provide vehicle details to qualify for Title Products? &nbsp; &nbsp; &nbsp; &nbsp;  <input type="radio" name="nAccrDt"/> Yes &nbsp; <input type="radio" name="nAccrDt"/> No </h6>	
					</div>
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Vehicle Type <br/><select name="nColType">
                                        <option value="ACH">Auto</option>
                                    </select></td> 
								<td align="left">VIN <br/><select name="nColType">
                                        <option value="ACH">New</option>
                                        <option value="ACH">3A8FY48B68T125964</option>
                                    </select></td> 
                                <td align="left">&nbsp;</td> 
								<td align="left">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="left">New VIN <br/><input type="text" name="nAccrDt" value="3A8FY48B68T125964"/></td> 
								<td align="left">Miles <br/><input type="text" name="nAccrDt" value="15"/></td> 
							    <td align="left">Series <br/><select name="nColType">
                                        <option value="ACH">Base 4D SUV</option>
                                    </select></td>
                                <td>&nbsp;</td>
                            </tr>                         
                        </tbody>
                    </table>
                </div>
            </div>			
			
			
        </div>
	);
  } 
}