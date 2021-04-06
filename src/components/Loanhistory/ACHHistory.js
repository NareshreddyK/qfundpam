import React, { Component } from "react";

export default class ACHHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {ahVal: ''}
  }

  componentWillMount(){
	this.setState({ahVal: this.props.thcVal});
  }
    
  render(){
	
	let achLst = [];
	let ac = [{achCode: '', achType: '', tran: '', achEffDt: '', achStat: '', amt: '', abaCode: '', chkAccNbr: ''}];
	for(let k=0; k<=ac.length-1; k++){
		achLst.push(<tr><td align="center">{ac[k].achCode}</td><td align="center">{ac[k].achType}</td><td align="center">{ac[k].tran}</td><td align="center">{ac[k].achEffDt}</td><td align="center">{ac[k].achStat}</td><td align="right">{ac[k].amt}</td><td align="center">{ac[k].abaCode}</td><td align="center">{ac[k].chkAccNbr}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th>ACH Code</th>
							<th>ACH Type</th>
							<th>Transaction</th>
							<th>ACH Effective Date</th>
							<th>ACH Status</th>
							<th>Amount</th>
							<th>ABA Code</th>
							<th>Check Account No</th>
						</tr>
					</thead>
					<tbody>
						{achLst}
					</tbody>
				</table>
			</div>	
		</div>
	
	);
  } 
}