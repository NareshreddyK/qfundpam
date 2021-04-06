import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import ReportDates from './ReportDates';

export default class NewLoanReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {nlrRadio: '', nlrCustNbr: '', nlrProdTyp: ''};
  }
  
  componentWillMount(){
    this.setState({nlrRadio: '', nlrCustNbr: '', nlrProdTyp: ''});
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
			<div className="row form-group bgHighlt">
				<div className="col-sm-1"><input type="radio" name="nlrRadio" value="cn" checked={this.state.nlrRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Customer Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="nlrCustNbr" placeholder="" value={this.state.nlrCustNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Product Type</label></div>
				<div className="col-sm-6">
					<select name="nlrProdTyp" value={this.state.nlrProdTyp} onChange={this.handleChange}>
						<option value="ALL" selected="">ALL</option>
						<option value="CCG">CCG</option>
						<option value="PDL">PDL</option>
						<option value="ILP">ILP</option>
						<option value="TLP">TLP</option>
						<option value="LOC">LOC</option>
					</select>
				</div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}