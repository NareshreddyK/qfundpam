import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class WLReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {wlProdTyp: ''};
  }

  componentWillMount(){
    this.setState({wlProdTyp: ''});
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
				<div className="col-sm-5 col-sm-offset-1"><label>Product Type</label></div>
				<div className="col-sm-6">
					<select name="wlProdTyp" value={this.state.wlProdTyp} onChange={this.handleChange}>
						<option value="ALL">ALL</option> 
						<option value="PDL">PDL</option>
						<option value="ILP">ILP</option>
						<option value="TLP">TLP</option>
						<option value="LOC">LOC</option>
					</select>
				</div>
			</div>
		</div>
	);
  } 
}