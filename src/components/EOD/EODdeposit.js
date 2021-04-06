import React, { Component } from "react";

export default class EODdeposit extends Component {
	constructor(props){
    super(props);    
	}	
  
  render(){	
	return (
	
		<div className="col-sm-12 form-group">			
			<div className="innerBlockContainer">
			<h2>End of the Day Deposit</h2>
			<table width="100%">
					<thead>
						<tr>
							<th colSpan="6" align="left"> ILP Deafult ACH</th>
						</tr>				
						<tr>
							<th>Customer Name</th>
							<th>Loan Nbr </th>
							<th>Check Nbr</th>
							<th>Amt</th>
							<th>Due Date</th>
							<th>Select</th>
						</tr>
					</thead>		
					<tbody>
						<tr>
						<td align="center">Rodriguez,Melanie</td>
						<td align="center">10641607</td>
						<td align="center">ACH</td>
						<td align="right">$ 120.34</td>
						<td align="center">02/01/2021</td>	
						<td align="center"><input type="checkbox" name="SEL" value="" /></td>
						</tr>
						<tr>
						<td align="center">Carraway,Kenneth</td>
						<td align="center">10639862</td>
						<td align="center">ACH</td>
						<td align="right">$ 81.27</td>
						<td align="center">01/22/2021</td>	
						<td align="center"><input type="checkbox" name="SEL" value="" /></td>
						</tr>
						<tr>
						<td align="center">Becker,Tina</td>
						<td align="center">10641792</td>
						<td align="center">ACH</td>
						<td align="right">$ 147.09</td>
						<td align="center">01/25/2021</td>	
						<td align="center"><input type="checkbox" name="SEL" value="" /></td>
						</tr>	
						<tr>
						<td align="center">Bobbitt,Cristina</td>
						<td align="center">10640972</td>
						<td align="center">ACH</td>
						<td align="right">$ 471.89</td>
						<td align="center">01/15/2021</td>	
						<td align="center"><input type="checkbox" name="SEL" value="" /></td>
						</tr>						
					</tbody>
				</table><br />
				<div className="col-sm-12 text-center"><button type="button" onClick={()=>{this.props.dispDep('1')}}>Back</button> &nbsp; <button type="button" onClick={() => {this.props.exitEOD()}}>Exit EOD</button> &nbsp; <button type="button" onClick={()=>{this.props.dispVerfi()}}>Next</button></div>
</div>
</div>
			);
  } 
}