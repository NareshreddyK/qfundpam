import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import Datepicker from '../common/Datepicker';

export default class NonCenterPaymentReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {nprRadio: ''};
  }
  
  componentWillMount(){
    this.setState({nprRadio: 'cn'});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.nprTranDt.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Transaction Date</label></div>
				<div className="col-sm-6"><Datepicker id={'nprTranDt'} name={'date'} ref='nprTranDt' /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><u>Sort options</u></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="st" checked={this.state.nprRadio === 'st'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Store</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="td" checked={this.state.nprRadio === 'td'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Transaction Date</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="cn" checked={this.state.nprRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Name</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="cn1" checked={this.state.nprRadio === 'cn1'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Customer Number</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="ln" checked={this.state.nprRadio === 'ln'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Loan Number</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="pt" checked={this.state.nprRadio === 'pt'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Product Type</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="pa" checked={this.state.nprRadio === 'pa'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Payment Amount</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="rb" checked={this.state.nprRadio === 'rb'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Remaining Balance</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="tt" checked={this.state.nprRadio === 'tt'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Tender Type</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="ps" checked={this.state.nprRadio === 'ps'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Payment Source</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="nprRadio" value="cs" checked={this.state.nprRadio === 'cs'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Check Status</label></div>
			</div>
		</div>
	);
  } 
}