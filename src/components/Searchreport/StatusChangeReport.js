import React, { Component } from "react";
import ReportLevel from './ReportLevel'; 
import ReportDates from './ReportDates';

export default class StatusChangeReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {scrRadio: '', scrCustNbr: '', scrLoanNbr: ''};
  }

  componentWillMount(){
    this.setState({scrRadio: 'cn', scrCustNbr: '', scrLoanNbr: ''});
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
				<div className="col-sm-1"><input type="radio" name="scrRadio" value="cn" checked={this.state.scrRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Customer Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="scrCustNbr" placeholder="" value={this.state.scrCustNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="scrRadio" value="ln" checked={this.state.scrRadio === 'ln'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Loan Nbr</label></div>
				<div className="col-sm-6"><input type="text"name="scrLoanNbr" placeholder="" value={this.state.scrLoanNbr} onChange={this.handleChange} /></div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}