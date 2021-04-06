import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import Datepicker from './../common/Datepicker';

export default class TimeSheetReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {tsEmpNbr: ''};
  }
  
  componentWillMount(){
    this.setState({tsEmpNbr: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.tsPayPeriod.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Employee Number</label></div>
				<div className="col-sm-6"><input type="text" name="tsEmpNbr" placeholder="" value={this.state.tsEmpNbr} onChange={this.handleChange}/></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Pay Period Begin Date</label></div>
				<div className="col-sm-6"><Datepicker id={'tsPayPeriod'} name={'date'} ref='tsPayPeriod' /></div>
			</div>
		</div>
	);
  } 
}