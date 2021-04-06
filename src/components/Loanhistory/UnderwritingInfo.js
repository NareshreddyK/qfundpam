import React, { Component } from "react";

export default class UnderwritingInfo extends Component {

  constructor (props) {
	super(props);
	this.state = {uiVeritecTranNbr: '', uiMLAStat: '', uiOFACStat: ''};
  }

  componentWillMount(){
    this.setState({uiVeritecTranNbr: '', uiMLAStat: '', uiOFACStat: ''});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="col-table-3">
						<thead>
							<tr>
								<th>Veritec Tran Nbr</th>
								<th>MLA Status</th>
								<th>OFAC Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.state.uiVeritecTranNbr}</td>
								<td>{this.state.uiMLAStat}</td>
								<td>{this.state.uiOFACStat}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}