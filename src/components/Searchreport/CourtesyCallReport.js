import React, { Component } from "react";
import ReportLevel from './ReportLevel'; 
import ReportDates from './ReportDates';

export default class CourtesyCallReport extends Component {

  constructor (props) {
    super(props);        
  }

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.rDates.rdData(""+"_"+"");
  };
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}