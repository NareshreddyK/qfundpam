import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import Datepicker from '../common/Datepicker';

export default class MostRecentCustomerReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {mrcrRadio: '', mrcrRadio1: '', mrcrNbr: ''};
  }

  componentWillMount(){
    this.setState({mrcrRadio: 'n', mrcrRadio1: 'cn', mrcrNbr: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.mrcrDt.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio" value="n" checked={this.state.mrcrRadio === 'n'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Number</label></div>
				<div className="col-sm-6"><input type="text" name="mrcrNbr" placeholder="" value={this.state.mrcrNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio" value="d" checked={this.state.mrcrRadio === 'd'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Date</label></div>
				<div className="col-sm-6"><Datepicker id={'mrcrDt'} name={'date'} ref='mrcrDt' /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><label><u>Sort Options</u></label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><label><u>Column Name</u></label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio1" value="de" checked={this.state.mrcrRadio1 === 'de'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Date Entered</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio1" value="cn" checked={this.state.mrcrRadio1 === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Name</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio1" value="cn1" checked={this.state.mrcrRadio1 === 'cn1'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Number</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio1" value="ca" checked={this.state.mrcrRadio1 === 'ca'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Address</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio1" value="cs" checked={this.state.mrcrRadio1 === 'cs'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Status</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="mrcrRadio1" value="ls" checked={this.state.mrcrRadio1 === 'ls'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Loan Status</label></div>
			</div>
		</div>
	);
  } 
}