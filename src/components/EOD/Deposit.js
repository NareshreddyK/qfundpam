import React, { Component } from "react";
import Popup from '../Popup'

export default class Deposit extends Component {
	constructor(props){
		super(props);
		this.Eoddep = this.Eoddep.bind(this);
	}	
	
	menus(str){
		this.refs.Popup.dispBlk(str);
	}
	
	Eoddep(){
		this.props.dispDep();
	}
  
  
  render(){	
	return (
	
		<div className="col-sm-12 form-group">
			<div className="innerBlockContainer">
			<h2>Deposit</h2>
			<table width="100%" border="0" className="noBorder col-table-4 form-group"><tbody>			
			<tr>
			<td>Deposit Cash Balance</td>
			<td align="left"><input type="text" name="" placeholder="" value="0.00"/></td>
			<td>{/*<button type="button">Exit EOD</button>*/}<button type="button">Calc Dep Amt</button></td>
			<td>Next day Opening Cash Balance $ 1000.00</td>
			</tr>	
			</tbody>
			</table>
			<table className="col-table-3 defaultGrid form-group">
			<thead>
			<tr>
			<th colSpan="3" align="left">Deposited Check Balance</th>
			</tr>
			<tr>
			<th>Check Nbr</th>
			<th>Customer Name</th>
			<th>Amt</th></tr>
			</thead>
			<tbody>
			<tr>
			<td align="center">Total Check Amt</td>
			<td></td>
			<td align="right">$0.00</td>
			</tr>
			</tbody>
			</table>
			<table width="100%">
			<thead>
			<tr>
			<th colSpan="3" align="left">Deposited CC/MO Balance</th>
			</tr>
			</thead>
			<tr>
			<th>CC/MO Nbr</th>
			<th>Amt</th>
			</tr>
			<tbody>
			<tr>
			<td align="center">Total CC/MO Amt</td>
			<td align="right">$0.00</td>
			</tr>
			</tbody>
			</table><br />
			<div className="col-sm-12 text-center"><button type="button" onClick={()=>{this.props.dispEod("1")}}>Back</button> &nbsp; 
			<button type="button" onClick={() => {this.props.exitEOD()}}>Exit EOD</button> &nbsp; {/*<button type="button" onClick={()=>this.menus('DP')}>Next</button>*/}<button type="button" onClick={()=>this.Eoddep()}>Next</button></div>
			</div>
			<Popup ref='Popup' Eoddep={this.Eoddep} />
			</div>
			);
  } 
}