import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class AllPaymentsReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {apOwner: '', apTranTyp: ''};
  }

  componentWillMount(){
    this.setState({apOwner: '', apTranTyp: ''});
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
				<div className="col-sm-5 col-sm-offset-1"><label>Transaction Type</label></div>
				<div className="col-sm-6">
					<select name="apTranTyp" value={this.state.apTranTyp} onChange={this.handleChange}>
						<option value=""></option>
						<option value="ALL">ALL</option>
						<option value="PRE">Pre default payment</option>
						<option value="POST">Post default payments</option>
					</select>
				</div>
			</div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Owner</label></div>
				<div className="col-sm-6">
					<select name="apOwner" value={this.state.apOwner} onChange={this.handleChange}>
						<option value=""></option>
						<option value="ALL">ALL</option>
						<option value="STORE">Store  Collection</option>
						<option value="CORPCOLL">Central collection</option>
					</select>
				</div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}