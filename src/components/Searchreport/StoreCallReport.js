import React, { Component } from "react";
import ReportLevel from './ReportLevel'; 
import ReportDates from './ReportDates';

export default class StoreCallReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {scrEmpNbr: ''};
  }

  componentWillMount(){
    this.setState({scrEmpNbr: ''});
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
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Employee Number</label></div>
				<div className="col-sm-6"><input type="text" name="scrEmpNbr" placeholder="" value={this.state.scrEmpNbr} onChange={this.handleChange} /></div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}