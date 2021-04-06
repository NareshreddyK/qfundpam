import React, { Component } from "react";
import TransactionDetails from './TransactionDetails';

export default class Accordion extends Component {

  constructor (props) {
    super(props);
	this.loadData = this.loadData.bind(this);
	this.state = {cNbr: ''};
  }
    
  loadData(str){
  /*loadData(str){*/
	console.log("str..."+str);
	this.setState({cNbr: str});
  }
  
  componentWillMount(){      
    window.$("#"+this.state.cNbr+"d").accordion({heightStyle: "content"});
  }
  
  componentDidUpdate(){      
    window.$("#"+this.state.cNbr+"d").accordion({heightStyle: "content"});
  }
  
  render(){
			
	return (	
		<div id={this.state.cNbr+"d"}>
			<h3>Transaction Details</h3>
			<TransactionDetails />
		</div>	
	);
  } 
}