import React, { Component } from "react";
import ReportDates from './ReportDates';
import StateCode from '../common/States';

export default class ACRReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {acrRadio: '', acrStrNbr: ''};
  }
  
  componentWillMount(){
    this.setState({acrRadio: '', acrStrNbr: ''});
  };

  componentDidMount(){
	this.refs.acrState.loadData("");
	this.refs.rDates.rdData(""+"_"+"");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<div className="row form-group">
				<div className="col-sm-1"><input type="radio" name="acrRadio" value="sn" checked={this.state.acrRadio === 'sn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Store Nbr</label></div>
				<div className="col-sm-6"><input type="text" placeholder="" name="acrStrNbr" className="form-control" value={this.state.acrStrNbr} onChange={this.handleChange}/></div>
			</div>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>State Code</label></div>
				<div className="col-sm-6"><StateCode id={'acrState'} name={'ste'} ref="acrState" /></div>
			</div>
			<ReportDates ref="rDates"/>
		</div>
	);
  } 
}