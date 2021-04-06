import React, { Component } from "react";
import ReportDates from './ReportDates';

export default class TKExtracts extends Component {

  constructor (props) {
	  super(props);
  }
  
  componentDidMount(){
	  this.refs.rDates.rdData(""+"_"+"");
  };
    
  render(){
	
	return (
		<div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}