import React, { Component } from "react";
import ReportDates from './ReportDates';
import ReportLevel from './ReportLevel';

export default class STDBTransactionReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {sttrRadio: '', sttrRadio1: '', sttrLoanNbr: '', sttrTranTyp: ''};
  }
  
  componentWillMount(){
    this.setState({sttrRadio: '', sttrRadio1: 'old', sttrLoanNbr: '125496', sttrTranTyp: 'SUCC'});
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
				<div className="col-sm-1"><input type="radio" name="sttrRadio" value="ln" checked={this.state.sttrRadio === 'ln'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Loan Number</label></div>
				<div className="col-sm-6"><input type="text" name="sttrLoanNbr" placeholder="" value={this.state.sttrLoanNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Transaction Type</label></div>
				<div className="col-sm-6">
					<select name="sttrTranTyp" value={this.state.sttrTranTyp} onChange={this.handleChange}>
						<option value=""></option>
						<option value="All">ALL</option>
						<option value="SUCC">Success</option>
						<option value="FAIL">Failure</option>
					</select>
				</div>
			</div>
			<ReportDates ref="rDates"/>
			<div className="row form-group">
				<div className="col-sm-11 col-sm-offset-1"><u>Sort options</u></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="sttrRadio1" value="old" checked={this.state.sttrRadio1 === 'old'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Original Loan Date</label></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="sttrRadio1" value="ln1" checked={this.state.sttrRadio1 === 'ln1'} onChange={this.handleChange} /></div>
				<div className="col-sm-11"><label>Loan Number</label></div>
			</div>
		</div>
	);
  } 
}