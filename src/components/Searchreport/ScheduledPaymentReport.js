import React, { Component } from "react";
import ReportLevel from './ReportLevel';

export default class ScheduledPaymentReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {sprRadio: '', sprRccSchPymt: '', sprEppSchPymt: ''};
  }

  componentWillMount(){
    this.setState({sprRadio: 'rcc', sprRccSchPymt: '', sprEppSchPymt: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="sprRadio" value="rcc" checked={this.state.sprRadio === 'rcc'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>RCC Scheduled Payments</label></div>
				<div className="col-sm-6"><input type="text" name="sprRccSchPymt" placeholder="" value={this.state.sprRccSchPymt} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="sprRadio" value="epp" checked={this.state.sprRadio === 'epp'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>EPP Scheduled Payments</label></div>
				<div className="col-sm-6"><input type="text" name="sprEppSchPymt" placeholder="" value={this.state.sprEppSchPymt} onChange={this.handleChange} /></div>
			</div>
		</div>
	);
  } 
}