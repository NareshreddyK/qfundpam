import React, { Component } from "react";
import Datepicker from './../common/Datepicker';

export default class ReportDates extends Component {

  constructor (props) {
	super(props);
	this.rdData = this.rdData.bind(this);
  }

  rdData(str){
	let dates = str.split("_");
	this.refs.rdBeginDt.loadData(dates[0]);
	this.refs.rdEndDt.loadData(dates[1]);
  }
  
  render(){
	
	return (
		<div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Begin Date</label></div>
				<div className="col-sm-6"><Datepicker id={'rdBeginDt'} name={'date'} ref='rdBeginDt' /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>End Date</label></div>
				<div className="col-sm-6"><Datepicker id={'rdEndDt'} name={'date'} ref='rdEndDt' /></div>
			</div>
		</div>
	);
  } 
}