import React, { Component } from "react";

export default class CISReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {cisCustNbr: ''};
  }

  componentWillMount(){
    this.setState({cisCustNbr: ''});
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<div className="row form-group bgHighlt">
				<div className="col-sm-5 col-sm-offset-1"><label>Customer Nbr</label></div>
				<div className="col-sm-6"><input type="text" name="cisCustNbr" placeholder="" value={this.state.cisCustNbr} onChange={this.handleChange} /></div>
			</div>
		</div>
	);
  } 
}