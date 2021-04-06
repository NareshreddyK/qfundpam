import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class EODSummary extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {eodsRadio: '', eodsStoreNbr: ''};
  }

  componentWillMount(){
    this.setState({eodsRadio: '', eodsStoreNbr: ''});
  };

  componentDidMount(){
	this.refs.eodBusDt.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-1"><input type="radio" name="eodsRadio" value="sn" checked={this.state.eodsRadio === 'sn'} onChange={this.handleChange} /></div>
				<div className="col-sm-5"><label>Store Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="eodsStoreNbr" placeholder="" value={this.state.eodsStoreNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Business Date</label></div>
				<div className="col-sm-6"><Datepicker id={'eodBusDt'} name={'date'} ref='eodBusDt' /></div>
			</div>
		</div>
	);
  } 
}