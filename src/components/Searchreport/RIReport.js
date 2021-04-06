import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class RIReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {riDepTyp: '', riDepActTyp: ''};
  }

  componentWillMount(){
    this.setState({riDepTyp: '', riDepActTyp: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.rDates.rdData(""+"_"+"");
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
					<select name="riDepTyp" value={this.state.riDepTyp} onChange={this.handleChange}>
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
					<select name="riDepActTyp" value={this.state.riDepActTyp} onChange={this.handleChange}>
						<option value=""></option> 
						<option value="N">InitialDeposit</option>
						<option value="Y">ReDeposit</option>
						<option value="ALL">Both</option>
					</select>
				</div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}