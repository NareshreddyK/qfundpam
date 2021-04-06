import React, { Component } from "react";
import Datepicker from '../common/Datepicker';
import PlsConfirm from '../Newloan/PlsConfirm';

export default class Locloaninfo extends Component {

  constructor (props) {
    super(props);
    this.state = {PlsConfirmDiv: true};
   this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
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
	
	return (
        <div>
            <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>New Line Of Credit <span  onClick={()=>this.nlClose()} className="close close-window text-right"><i class="fa fa-angle-double-left"></i> Back</span></h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Authorized LOC <br/><input type="text" name="nNxtPayDt" value="2500.00"/></td> 
								<td align="left">Available Line Of Credit <br/><input type="text" name="nNxtPayDt" value="2500.00"/></td> 
                                <td align="left">Due Date <br/><input type="text" name="nAccrDt" value="01/16/2021"/></td>
								 <td align="left">Next Statement Date <br/><input type="text" name="nAccrDt" value="12/29/2020"/></td>
                               
                                
                            </tr>
                            <tr>
							 <td align="left">Accrual Date <br/><input type="text" name="nAccrDt" value="12/29/2020"/></td>
								 <td align="left">Interest Rate <br/><input type="text" name="nNxtPayDt" value="24 (p.a)"/></td> 
								 <td>Method of Payment
                                    <select name="nColType">
                                        <option value="ACH">ACH</option>
                                        <option value="CHK">NOC</option>
                                    </select>
                                </td>
								<td>Electronic Documents Only?
                                    <select name="nColType">
                                        <option value="NO">No</option>
                                        <option value="YES">Yes</option>
                                    </select>
                                </td>
                                
                            </tr>
							<tr>							                         
                                <td align="left">Membership Fee</td>
								 <td className="lblVal" align="left">$0.00</td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>			
			
			
        </div>
	);
  } 
}