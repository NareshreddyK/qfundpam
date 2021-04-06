import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class ARActivityReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {araRadio: ''};
  }
  
  componentWillMount(){
    this.setState({araRadio: 'td'});
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
				<div className="col-sm-1"><input type="radio" name="araRadio" value="td" checked={this.state.araRadio === 'td'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Transaction Date</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="araRadio" value="cn" checked={this.state.araRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Last Name</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="araRadio" value="rcc" checked={this.state.araRadio === 'rcc'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>RCC Status Change</label></div>
			</div>
		</div>
	);
  } 
}