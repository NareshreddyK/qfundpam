import React, { Component } from "react";

export default class ActiveMilitary extends Component {

  constructor (props) {
    super(props);        
  }    
    
  render(){
	const bgAM ={
		background : '#fcfcfc'
	};
	return (
			<div className="height100">
				
				<div className="innerBlockContainer" style={bgAM}>			
											
					<br />
					<table width="100%" className="noBorder noStripe">
						<tbody>
							<tr>
								<td>Active Military Type</td>
								<td align="right"><input type="radio" name="actMil" /></td>
								<td>
									&nbsp; 
									Full time regular uniformed members of the military (or) their dependents
								</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td align="right"><input type="radio" name="actMil" /></td>
								<td>
									&nbsp; 
									Active Duty Reserve or Guard (or) their Dependents
								</td>
							</tr>
							<tr><td colSpan="2">&nbsp;</td></tr>
							<tr>
								<td colSpan="3" align="center">
									<button type="button">Finish</button>
									<button type="button" className="btn-danger">Cancel</button>
								</td>
							</tr>
						</tbody>
					</table>
					
			
				</div>
						
			</div>
    );
  } 
}