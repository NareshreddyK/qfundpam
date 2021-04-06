import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';
import Datepicker from '../common/Datepicker'

export default class ActivePrenoteReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {aprRadio: '', aprCustNbr: '', aprLoanNbr: '', aprAba: '', aprBnkNm: ''};
  }
  
  componentWillMount(){
    this.setState({aprRadio: 'cn', aprCustNbr: '', aprLoanNbr: '', aprAba: '', aprBnkNm: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.aprDtRet.loadData("");
    this.refs.aprDtSent.loadData("");
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
				<div className="col-sm-1"><input type="radio" name="aprRadio" value="cn" checked={this.state.aprRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Customer Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="aprCustNbr" placeholder="" value={this.state.aprCustNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="aprRadio" value="ln" checked={this.state.aprRadio === 'ln'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Loan Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="aprLoanNbr" placeholder="" value={this.state.aprLoanNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="aprRadio" value="dr" checked={this.state.aprRadio === 'dr'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Date Returned</label></div>
				<div className="col-sm-6"><Datepicker id={'aprDtRet'} name={'date'} ref='aprDtRet' /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="aprRadio" value="ds" checked={this.state.aprRadio === 'ds'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Date Sent</label></div>
				<div className="col-sm-6"><Datepicker id={'aprDtSent'} name={'date'} ref='aprDtSent' /></div>
			</div>
			<ReportDates ref="rDates"/>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="aprRadio" value="aba" checked={this.state.aprRadio === 'aba'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>ABA</label></div>
				<div className="col-sm-6"><input type="text" name="aprAba" placeholder="" value={this.state.aprAba} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="aprRadio" value="bn" checked={this.state.aprRadio === 'bn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Bank Name</label></div>
				<div className="col-sm-6"><input type="text" name="aprBnkNm" placeholder="" value={this.state.aprBnkNm} onChange={this.handleChange} /></div>
			</div>
		</div>
	);
  } 
}