import React, { Component } from "react";

export default class Locloaninfo extends Component {

  constructor (props) {
    super(props);
    this.state = {DrawAmtDiv: true};
   this.handleChange = this.handleChange.bind(this);
    this.drClose = this.drClose.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  finishDraw(){
        this.setState({DrawAmtDiv: false, DrawFinish: true});
	  }
  
  drClose(){
    this.props.pcCallBack("draw");
    this.setState({DrawAmtDiv: true});
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12" hidden={this.state.DrawFinish}>
                <div className="innerBlockContainer">
                    <h2>Draw Details </h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Authorized LOC <br/><input type="text" name="nNxtPayDt" value="2500.00"/></td> 
								<td align="left">Outstanding balance <br/><input type="text" name="nNxtPayDt" value="0.00"/></td> 
                                <td align="left">Available Credit <br/> <input type="text" name="nNxtPayDt" value="2500.00"/></td>
								 <td align="left">Draw Amt <br/> <input type="text" name="nNxtPayDt" value="500.00"/></td>                            
                                
                            </tr>
                            <tr>
							 <td>Disb Type
                                    <select name="nColType">
                                        <option value="Cash">Cash</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                                </td>								 
                               <td align="left">Disb Amt <br/> <input type="text" name="nNxtPayDt" value="500.00"/></td> 
								 <td>Disb Type
                                    <select name="nColType">
                                        <option value=""></option>
                                        <option value="Cash">Cash</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select>
                                </td>
								 <td align="left">Disb Amt <br/> <input type="text" name="nNxtPayDt" value=""/></td> 
                                
                            </tr>							                          
                        </tbody>
                    </table>
					<div className="text-center">
                            <button type="button" className="btn-danger"> Cancel </button>
                            <button type="button" onClick={()=>this.finishDraw()}> Finish Draw </button>
                        </div>
                </div>
            </div>			
			<div className="col-sm-12" hidden={this.state.DrawAmtDiv}>
                <div className="innerBlockContainer">
                    <br />
                    <p className="text-center">Draw Amount $500 issues in the name of Test Test successfully</p>
					<div className="text-center">
                            <button type="button" onClick={()=>this.drClose()}> OK </button>
                        </div>					
                </div>
            </div>
			
        </div>
	);
  } 
}