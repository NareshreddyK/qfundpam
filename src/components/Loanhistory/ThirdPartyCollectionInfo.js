import React, { Component } from "react";

export default class ThirdPartyCollectionInfo extends Component {

  constructor (props) {
	super(props);
	this.state = {tcTranOutDt: '', tcTranInDt: '', tcAcntSold: '', tcSoldTo: '', tcSoldDt: '', tcMarkSale: '', tcAgencyNm: ''};
  }

  componentWillMount(){
    this.setState({tcTranOutDt: '', tcTranInDt: '', tcAcntSold: '', tcSoldTo: '', tcSoldDt: '', tcMarkSale: 'No', tcAgencyNm: ''});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Transfer Out Date</td>
								<td>{this.state.tcTranOutDt}</td>
								<td>Transfer In Date</td>
								<td>{this.state.tcTranInDt}</td>
								<td>Account Sold</td>
								<td>{this.state.tcAcntSold}</td>
							</tr>
							<tr>
								<td>Sold To</td>
								<td>{this.state.tcSoldTo}</td>
								<td>Sold Date</td>
								<td>{this.state.tcSoldDt}</td>
								<td>Mark For Sale</td>
								<td>{this.state.tcMarkSale}</td>
							</tr>
							<tr>
								<td>Agency Name</td>
								<td>{this.state.tcAgencyNm}</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}