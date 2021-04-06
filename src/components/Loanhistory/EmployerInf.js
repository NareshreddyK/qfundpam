import React, { Component } from "react";

export default class EmployerInf extends Component {

  constructor (props) {
    super(props);
	this.state = {eIncSrc: '', eEmp: '', eNetPay: '', eGrossPay: '', ePayFreq: '', eEmpPh: ''};
  }

  componentWillMount(){
  	this.setState({eIncSrc: 'Other', eEmp: 'VA Disability', eNetPay: '$ 1740.00', eGrossPay: '$ 1740.00', ePayFreq: 'Monthly', eEmpPh: '(865)545-9514'});
  }    
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Primary Source of Income</td>
								<td>{this.state.eIncSrc}</td>
								<td>Current Employer</td>
								<td>{this.state.eEmp}</td>
								<td>Net Pay</td>
								<td>{this.state.eNetPay}</td>
							</tr>
							<tr>
								<td>Gross Pay</td>
								<td>{this.state.eGrossPay}</td>
								<td>Pay Frequency</td>
								<td>{this.state.ePayFreq}</td>
								<td>Employer Phone Nbr</td>
								<td>{this.state.eEmpPh}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}