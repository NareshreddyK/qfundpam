import React, { Component } from "react";
import Popup from '../Popup'

export default class Depositverification extends Component {
	constructor(props){
    super(props);    
    this.state = {mainDiv : true, plsDiv:false};
	}
	finDespBtn()
	{
		this.setState({mainDiv : false, plsDiv: true});
	}

  render(){	
	return (
		<div>
		{this.state.mainDiv ? <div className="col-sm-12 form-group">
			<div className="innerBlockContainer">
			<h2>Deposit Verification</h2>
			<table width="100%" border="0" className="noBorder col-table-4 form-group"><tbody>			
			<tr>
			<td>Current Cash Balance <br/> <input type="text" value="$ 0.00" disabled/></td>
			<td>Opening Safe Balance <br/> <input type="text" value="$ 1000.00" disabled/></td>			
			<td>Bag Nbr<br/><input type="text"/></td>
			</tr>			
			</tbody>
			</table>
			<table className="col-table-2 defaultGrid form-group">
			<thead>
						<tr>
							<th colSpan="6" align="left"> Current Check Balance</th>
						</tr>				
						<tr>
							<th>Check Nbr</th>
							<th>Customer Name</th>
							<th>Amt</th>
						</tr>
						<tr>
							<th>Total Check Nbr</th>
							<th></th>
							<th>$0.00</th>
						</tr>
					</thead>
			<tbody>
					
			</tbody>
			</table>
			<table className="col-table-2 defaultGrid">
			<thead>
						<tr>
							<th colSpan="6" align="left"> Current CC/MO Balance</th>
						</tr>
						<tr>
							<th>CC/MO Nbr</th>
							<th>Amt</th>
						</tr>
						<tr>
							<th>Total CC/MO Amt</th>
							<th>$ 0.00</th>
						</tr>
					</thead>
					<tbody>
			<tr>
						<td align="center">Grand Total</td>
						<td align="center">$ 0.00</td>
						</tr>
						
			</tbody>
			</table>
			<br />
			<div className="col-sm-12 text-center"><button type="button" onClick={()=>{this.props.dispVerfi('1')}}>Back</button> &nbsp; <button type="button" onClick={() => {this.props.exitEOD()}}>Exit EOD</button> &nbsp; <button type="button" onClick={() => {this.finDespBtn()}}>Finish Deposit</button></div>
			</div>
			</div> : null
		}
				{this.state.plsDiv ?  
					<div className="col-sm-12">
					<div className="innerBlockContainer">
					<h2>Confirmation</h2>                    
					<div className="text-center">
					<p> End Of Day Completed Successfully.</p>                    
					<button type="button" onClick={() => {this.props.exitEOD()}}>Ok</button>
					</div>
					</div>
					</div> :  null } 
		</div>
	);
  } 
}