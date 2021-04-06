import React, { Component } from "react";
import ReportLevel from './ReportLevel';

export default class ActiveUsersReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {auEmpNbr: ''};
  }
  
  componentWillMount(){
    this.setState({auEmpNbr: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
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
				<div className="col-sm-6"><input type="text" name="auEmpNbr" placeholder="" value={this.state.auEmpNbr} onChange={this.handleChange}/></div>
			</div>
		</div>
	);
  } 
}