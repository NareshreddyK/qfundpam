import React, { Component } from "react";
import ReportDates from './ReportDates';
import ReportLevel from './ReportLevel';

export default class MonetaryTransferLog extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {mtlTranTyp: '', mtlEmpNbr: ''};
  }
  
  componentWillMount(){
    this.setState({mtlTranTyp: '', mtlEmpNbr: ''});
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
				<div className="col-sm-5 col-sm-offset-1"><label>Transaction Type</label></div>
				<div className="col-sm-6">
					<select name="mtlTranTyp" value={this.state.mtlTranTyp} onChange={this.handleChange}>
						<option value=""></option>
						<option value="ALL">ALL</option>         
						<option value="STC">Safe to Drawer</option>
						<option value="CTS">Drawer De-Assign</option>
						<option value="SAB">Safe Assign</option>
						<option value="SDA">Safe De-Assign</option>
						<option value="LTS"> Store to Store Send</option>
						<option value="LTR">Store to Store Receive</option>
						<option value="DEP">Bank Deposit</option>
						<option value="COS">Cash Over Short</option>
						<option value="SBAL">Safe Balance</option>
						<option value="WIT">Withdrawal</option>
						<option value="DCOS">Drawer cash over short</option>
						<option value="DBAL">Drawer Balance</option>
					</select>
				</div>
			</div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Employee Number</label></div>
				<div className="col-sm-6"><input type="text" name="mtlEmpNbr" placeholder="" value={this.state.mtlEmpNbr} onChange={this.handleChange}/></div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}