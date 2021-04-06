import React, { Component } from "react";
import Countbydenomination from '../common/Countbydenomination';

export default class EndofDay extends Component {
	constructor(props){
    super(props);    
	this.state = {ccMOBal:''};
	this.handleChange = this.handleChange.bind(this);
	}  

	handleChange=(e)=>{        
		this.setState({[e.target.name]: e.target.value });
	  }

  render(){	
	return (
	
			<div className="col-sm-12 form-group">
			<div className="innerBlockContainer">
			<h2>Safe Balance <span class="txtRhtEod"><input type="radio" name=""/> Count by Denomination</span></h2>
			<Countbydenomination />
			<div className="row">
			<div className="col-sm-12">			
			
			
			<table width="100%" border="0" className="noBorder col-table-4"><tbody>
			<tr>
			<td valign="top">Cash Balance <br/>
			<input type="text" name="" placeholder="" />
			</td>
			<td valign="top">CC/MO Balance <br />
			<input type="text" name="ccMOBal" placeholder="0.00" id="ccMOBal" value={this.state.ccMOBal} onChange={this.handleChange}/>
			</td>
			<td valign="top">EOD Comments <br />
			<textarea rows="2" cols="50" className="form-control" /></td>
			<td valign="top">Date/Time <br/>01/13/2021</td>
			
			</tr>
			</tbody>
			</table>
			<table className="col-table-2 defaultGrid form-group">
			<thead>
			<tr>
			<th>Check Nbr</th>
			<th>Amt</th></tr>
			</thead>
			<tbody>
			<tr>
			<td align="center">Total Check Amt</td>
			<td align="right">$0.00</td>
			</tr>
			</tbody>
			</table>
			
			</div>
			<div className="col-sm-12 text-center"><button type="button" onClick={() => {this.props.exitEOD()}}>Exit EOD</button> &nbsp; 
			{/*<button type="button" onClick={()=>{this.props.dispEod()}}>Balance Safe</button>*/}<button type="button" onClick={()=>{this.props.dispEod(this.state.ccMOBal)}}>Balance Safe</button></div></div>
			</div>
			</div>		
	);
  } 
}