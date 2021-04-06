import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class HoldOverReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {horRadio: ''};
  }
  
  componentWillMount(){
    this.setState({horRadio: 'dr'});
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
			<ReportDates ref="rDates"/>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><u>Sort options</u></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="horRadio" value="dr" checked={this.state.horRadio === 'dr'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Date Range</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="horRadio" value="cr" checked={this.state.horRadio === 'cr'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Center</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="horRadio" value="st" checked={this.state.horRadio === 'st'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>State</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="horRadio" value="ac" checked={this.state.horRadio === 'ac'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>All Centers</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="horRadio" value="sc" checked={this.state.horRadio === 'sc'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>State and Center</label></div>
			</div>
		</div>
	);
  } 
}