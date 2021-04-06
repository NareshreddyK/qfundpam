import React, { Component } from "react";
import ReportLevel from './ReportLevel'; 
import ReportDates from './ReportDates';

export default class PromiseToPay extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {ptpStat: ''};
  }

  componentWillMount(){
    this.setState({ptpStat: ''});
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
				<div className="col-sm-5 col-sm-offset-1"><label>PTP Satus</label></div>
				<div className="col-sm-6">
					<select name="ptpStat" value={this.state.ptpStat} onChange={this.handleChange}>
						<option value=""></option>
						<option value="ALL">ALL</option>
						<option value="PTPAAG">PTP</option>
						<option value="PTPB">PTP Broken</option>
						<option value="PTPC">PTP Cancelled</option>
						<option value="PTPK">PTP Kept</option>
					</select>
				</div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}