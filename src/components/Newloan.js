import React, { Component } from "react";
import Loandecision from './Loandecision';

export default class Newloan extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
	this.refs.ldVal.loadData(this.props.info.ssn+"_"+this.props.info.flName+"_"+this.props.info.caddress+"_"+this.props.info.ccity+"_"+this.props.info.cstate+"_"+this.props.info.czip);
  };

  render(){	
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
                    <Loandecision ref="ldVal"/>										 
				</div>
			</div>
		</div>
	);
  } 
}