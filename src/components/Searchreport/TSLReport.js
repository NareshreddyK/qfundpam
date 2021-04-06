import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';
import StateCode from '../common/States';

export default class TSLReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {tslRadio: ''};
  }
  
  componentWillMount(){
    this.setState({tslRadio: 'tcn'});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.rDates.rdData(""+"_"+"");
	this.refs.tslStCde.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }    
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>State Code</label></div>
				<div className="col-sm-6"><StateCode id={'tslStCde'} name={'ste'} ref="tslStCde" /></div>
			</div>
			<ReportDates ref="rDates"/>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><u>Sort options</u></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="tslRadio" value="tcn" checked={this.state.tslRadio === 'tcn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Title Cycle Number</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="tslRadio" value="cn" checked={this.state.tslRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Name</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="tslRadio" value="vin" checked={this.state.tslRadio === 'vin'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>VIN</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="tslRadio" value="od" checked={this.state.tslRadio === 'od'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Origination Date</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="tslRadio" value="oa" checked={this.state.tslRadio === 'oa'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Origination Amount</label></div>
			</div>
		</div>
	);
  } 
}