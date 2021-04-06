import React, { Component } from "react";

export default class EODovershort extends Component {
	constructor(props){
    super(props);    
	}	
  
  render(){	
	return (
	
		<div className="col-sm-12">
            <div className="innerBlockContainer">
                <h2> EOD Over/Short </h2>
                <div className="col-sm-12">
                    <table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
                                <tbody>
                                <tr>
                                    <td>Employee Name </td>
                                    <td align="center">Portal Admin</td>
                                    <td>Opening Balance</td>
                                    <td align="center">$1000.00</td>
                                    <td>Counted Balance</td>
                                    <td align="center">$100.00</td>
                                </tr>
                                <tr>    
                                    <td>System safe Balance</td>
                                    <td align="center">$1000.00</td>
                                    <td>Safe Over/Short Amount</td>
                                    <td align="center">$-900.00</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                &nbsp;
                <div className="col-sm-12">
                <div className="innerBlockContainer">
                        <h2> Out Of Balance Reason </h2>
                        <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                            <tbody>                                         
                            <tr>
                                <td className="bgHighlt"> Amount <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
                                    <input type="text" name="" value=""/>
                                </td>  
                                <td> Primary Reason <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
                                <select name="nColType">
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td> Product <br/>
                                <select name="nColType">
                                        <option value=""></option>
                                    </select>
                                </td>
                                <td className="bgHighlt"> Loan Nbr <br/>
                                    <input type="text"  value="0.00"/>
                                </td>
                            </tr>
                            
                            <tr>   
                                
                                <td> Notes <span className="text-danger"><i className="fa fa-asterisk"></i></span><br/>
                                    <textarea className="form-control">                                 
                                    </textarea>
                                </td>  
                            </tr>             
                            </tbody>
                        </table>
                    
                    <div className="col-sm-12 text-center form-group">                            
                        <button type="button" >Add O/S Instance</button>
					</div>
                        <div className="col-sm-12 form-group">
                        <table width="100%" border="0" className="col-table-5">
                            <tbody>                                         
                            <tr>
                                <th>Amount</th>
                                <th>Primary Reason</th>
                                <th>Product</th>
                                <th>Loan Nbr</th>
                                <th>Select</th>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        
                        <div className="col-sm-12 text-center">                            
                        <button type="button" onClick={()=>{this.props.dispEod("1")}}>Back</button>
                        <button type="button" onClick={() => {this.props.exitEOD()}}>Exit EOD</button>
                        <button type="button" onClick={()=>{this.props.dispEod()}}>Next</button>
					</div>
                    </div>
					</div>
                        
            </div>
        </div>
			
			);
  } 
}