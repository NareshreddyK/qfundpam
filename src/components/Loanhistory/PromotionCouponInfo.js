import React, { Component } from "react";

export default class PromotionCouponInfo extends Component {

  constructor (props) {
	super(props);
	this.state = {pcCampaignNm: '', pcProCpnCode: ''};
  }

  componentWillMount(){
    this.setState({pcCampaignNm: '', pcProCpnCode: ''});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="col-table-2">
						<thead>
							<tr>
								<th>Campaign Name</th>
								<th>Promotion/Coupon Code</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.state.pcCampaignNm}</td>
								<td>{this.state.pcProCpnCode}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}