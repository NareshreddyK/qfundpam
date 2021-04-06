import React, { Component } from "react";
import ReportLevel from './ReportLevel'; 
import ReportDates from './ReportDates';

export default class DeceasedCustomerReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {dcrRadio: ''};
  }

  componentWillMount(){
    this.setState({dcrRadio: 'cn2'});
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
				<div className="col-sm-11 col-sm-offset-1"><label><u>Sort Options</u></label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><label><u>Column Name</u></label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="dd" checked={this.state.dcrRadio === 'dd'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Deceased Date</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="cn" checked={this.state.dcrRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Nbr</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="cn1" checked={this.state.dcrRadio === 'cn1'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Name</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="cn2" checked={this.state.dcrRadio === 'cn2'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Check Nbr</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="ca" checked={this.state.dcrRadio === 'ca'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Check Amt</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="to" checked={this.state.dcrRadio === 'to'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Total Owed</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="p" checked={this.state.dcrRadio === 'p'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Products</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="en" checked={this.state.dcrRadio === 'en'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Employee Name</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="dcrRadio" value="sn" checked={this.state.dcrRadio === 'sn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Store Nbr</label></div>
			</div>
		</div>
	);
  } 
}