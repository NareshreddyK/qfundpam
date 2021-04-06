import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class StoreCashManagement extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {scmStoreNbr: ''};
  }

  componentWillMount(){
    this.setState({scmStoreNbr: ''});
  };

  componentDidMount(){
	this.refs.scmBusDt.loadData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Store Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="scmStoreNbr" placeholder="" value={this.state.scmStoreNbr} onChange={this.handleChange} /></div>
			</div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Business Date</label></div>
				<div className="col-sm-6"><Datepicker  id={'scmBusDt'} name={'date'} ref='scmBusDt' /></div>
			</div>
		</div>
	);
  } 
}