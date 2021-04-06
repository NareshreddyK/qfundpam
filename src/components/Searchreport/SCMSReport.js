import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import Datepicker from '../common/Datepicker';

export default class SCMSReport extends Component {

  constructor (props) {
	super(props);
  } 

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.scmsBusDt.loadData("");
  };  
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Business Date</label></div>
				<div className="col-sm-6"><Datepicker id={'scmsBusDt'} name={'date'} ref='scmsBusDt' /></div>
			</div>
		</div>
	);
  } 
}