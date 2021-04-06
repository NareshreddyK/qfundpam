import React, { Component } from "react";
import ReportLevel from './ReportLevel';
import Datepicker from '../common/Datepicker';

export default class CollectionActivity extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {caRadio: '', caChkStat: '', caCustNbr: '', caLoanNbr: ''}        
  }

  componentWillMount(){
    this.setState({caRadio: 'cs', caChkStat: '', caCustNbr: '', caLoanNbr: ''});
  }

  componentDidMount(){
	this.refs.rLevel.rlData("");
	this.refs.caDt.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="caRadio" value="cs" checked={this.state.caRadio === 'cs'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Check Status</label></div>
				<div className="col-sm-6">
					<select name="caChkStat" value={this.state.caChkStat} onChange={this.handleChange}>
						<option value="0" selected=""></option>
						<option value="ALL">ALL</option>
						<option value="HLD">Held</option>
						<option value="DEP">Deposited</option>
						<option value="RTN">Returned</option>
						<option value="WO">Written-Off</option>
						<option value="DEF">Default</option>
					</select>
				</div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="caRadio" value="cn" checked={this.state.caRadio === 'cn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Customer Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="caCustNbr" placeholder="" value={this.state.caCustNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="caRadio" value="ln" checked={this.state.caRadio === 'ln'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Loan Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="caLoanNbr" placeholder="" value={this.state.caLoanNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="caRadio" value="dt" checked={this.state.caRadio === 'dt'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Date</label></div>
				<div className="col-sm-6"><Datepicker id={'caDt'} name={'date'} ref='caDt' /></div>
			</div>
		</div>
	);
  } 
}