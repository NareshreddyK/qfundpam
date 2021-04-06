import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class WBAReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {wbaRadio: ''};
  }
  
  componentWillMount(){
    this.setState({wbaRadio: ''});
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
				<div className="col-sm-1"><input type="radio" name="wbaRadio" value="wdp" checked={this.state.wbaRadio === 'wdp'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Week, Date and Prior Clock Out</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="wbaRadio" value="edp" checked={this.state.wbaRadio === 'edp'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Employee Name ,Date and Prior Clock Out</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="wbaRadio" value="dpc" checked={this.state.wbaRadio === 'dpc'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Date and Prior Clock Out</label></div>
			</div>
		</div>
	);
  } 
}