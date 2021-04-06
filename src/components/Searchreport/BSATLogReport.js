import React, { Component } from "react";
import ReportLevel from './ReportLevel';

export default class BSATLogReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {bProdTyp: ''};
  }

  componentWillMount(){
    this.setState({bProdTyp: ''});
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
				<div className="col-sm-5 col-sm-offset-1"><label>Product Type</label></div>
				<div className="col-sm-6">
					<select name="bProdTyp" value={this.state.bProdTyp} onChange={this.handleChange} >
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