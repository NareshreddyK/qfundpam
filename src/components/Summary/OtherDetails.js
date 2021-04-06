import React, { Component } from "react";

export default class OtherDetails extends Component {

  constructor (props) {
    super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {oBankrupt: '', oRef: ''};
  }

  componentDidMount(){
	this.setState({oBankrupt: 'N', oRef: 'N'});
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({oBankrupt: 'N', oRef: 'N'});
	}else{
		this.setState({oBankrupt: '', oRef: ''});
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
				<h2>Other Details</h2>
				<div className="col-sm-12">
				<div className="row">
				<table className="noBorder noStripe cellGap col-table-4">								
					<tbody>
						<tr>
							<td className="bgHighlt"> 
								Bankruptcy <span className="text-danger"><i className="fa fa-asterisk"></i></span>
								<select name="oBankrupt" value={this.state.oBankrupt} onChange={this.handleChange}>
									<option value="">Bankruptcy</option>
									<option value="N">No</option>
									<option value="Y">Yes</option>
								</select>
							</td>
							<td>
							Referral Code
								<select name="oRef" value={this.state.oRef} onChange={this.handleChange}>
									<option value="">Referral Code</option>
									<option value="N">No</option>
									<option value="Y">Yes</option>
								</select>
							</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				</div>
				</div>
			</div>
		</div>
	
	);
  } 
}