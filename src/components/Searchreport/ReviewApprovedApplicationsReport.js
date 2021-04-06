import React, { Component } from "react";
import ReportDates from './ReportDates';
import StateCode from '../common/States';

export default class ReviewApprovedApplicationsReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {rEmpNbr: '', rProdTyp: ''};
  }

  componentWillMount(){
    this.setState({rEmpNbr: '', rProdTyp: ''});
  };

  componentDidMount(){
	this.refs.rState.loadData("");
	this.refs.rDates.rdData(""+"_"+"");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>State Code</label></div>
				<div className="col-sm-6"><StateCode id={'rState'} name={'ste'} ref="rState" /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Employee Number</label></div>
				<div className="col-sm-6"><input type="text" name="rEmpNbr" placeholder="" value={this.state.rEmpNbr} onChange={this.handleChange} /></div>
			</div>
			<ReportDates ref="rDates"/>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Product Type</label></div>
				<div className="col-sm-6">
					<select name="rProdTyp" value={this.state.rProdTyp} onChange={this.handleChange} >
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