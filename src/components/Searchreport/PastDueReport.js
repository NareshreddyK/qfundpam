import React, { Component } from "react";
import ReportLevel from './ReportLevel';

export default class PastDueReport extends Component {

  constructor (props) {
    super(props);        
  }
  
  componentDidMount(){
    this.refs.rLevel.rlData("");
  };
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel" />
		</div>
	);
  } 
}