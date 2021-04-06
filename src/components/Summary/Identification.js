import React, { Component } from "react";

export default class Identification extends Component {

  constructor (props) {
    super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {iNbr: '', iSSN: '', iPin: '', iLang: '', iStrNbr: ''};
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({iNbr: valSplt[0], iSSN: valSplt[1], iPin: '', iLang: 'EN', iStrNbr: '0398'});
	}else{
		this.setState({iNbr: '', iSSN: '', iPin: '', iLang: '', iStrNbr: ''});
	}
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  render(){
	const eqHght = {
		display: 'flex'
	};
	return (
	
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2>Identification <button className="pull-right" type="button"> Save </button><span className="pull-right">Customer Nbr: &nbsp;{this.state.iNbr} &nbsp; </span></h2>
				<table width="100%" border="0" className="noBorder cellGap col-table-4">              
					<tbody>
						<tr>
							
							<td>
							SSN
							<input type="text" name="iSSN" placeholder="SSN" className="bgHighlt" value={this.state.iSSN} onChange={this.handleChange} /></td>
							
							<td>
							PIN#
							<input type="text" name="iPin" placeholder="PIN#" value={this.state.iPin} onChange={this.handleChange} /></td>
							<td>
							Language
							<select name="iLang" value={this.state.iLang} onChange={this.handleChange}>                        
								<option value=""> Select Language </option>
								<option value="EN">English</option>
							  </select></td>
							<td>
							Store Nbr
							<input type="text" name="iStrNbr" placeholder="Store Nbr" value={this.state.iStrNbr} onChange={this.handleChange} /></td>
						</tr>
					</tbody>	
				</table>
				
			</div>
		</div>
	
	);
  } 
}