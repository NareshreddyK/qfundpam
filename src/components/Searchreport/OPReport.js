import React, { Component } from "react";
import ReportLevel from './ReportLevel';

export default class OPReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {opDepTyp: '', opDepActTyp: ''};
  }

  componentWillMount(){
    this.setState({opDepTyp: '', opDepActTyp: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("0.0");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Deposit Type</label></div>
				<div className="col-sm-6">
					<select name="opDepTyp" value={this.state.opDepTyp} onChange={this.handleChange}>
						<option value=""></option> 
						<option value="CK21">CK21</option>
						<option value="Manual">Manual</option>
						<option value="RCK">RCK</option>
						<option value="ACH">ACH </option>
						<option value="Debit Card">Debit Card</option>
						<option value="ALL">ALL </option>
					</select>
				</div>
			</div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Deposit Action Type</label></div>
				<div className="col-sm-6">
					<select name="opDepActTyp" value={this.state.opDepActTyp} onChange={this.handleChange}>
						<option value=""></option> 
						<option value="N">InitialDeposit</option>
						<option value="Y">ReDeposit</option>
						<option value="ALL">Both</option>
					</select>
				</div>
			</div>
		</div>
	);
  } 
}