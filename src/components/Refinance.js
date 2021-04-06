import React, { Component } from "react";
import Ilprefinance from './Loantransaction/Ilprefinance';
import Pdlrefinance from './Loantransaction/Pdlrefinance';
import Tlprefinance from './Loantransaction/Tlprefinance';

export default class Refinance extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: ''};
  }

  componentWillMount(){
    this.setState({refProd: this.props.rVal, refTran: this.props.tranVal});
  }

  refMain=()=>{
    this.props.refClose('false');   
  }

  render(){
    
    if(this.state.refProd == "ILP"){
        return (<div><Ilprefinance refIProd={this.state.refProd} refITran={this.state.refTran} Refinanceclose={this.refMain} /></div>);
    } else if(this.state.refProd == "PDL"){
        return (<div><Pdlrefinance refPProd={this.state.refProd} refPTran={this.state.refTran} Refinanceclose={this.refMain} /></div>);
    } else if(this.state.refProd == "TLP"){
        return (<div><Tlprefinance refTProd={this.state.refProd} refTTran={this.state.refTran} Refinanceclose={this.refMain} /></div>);
    }
	
  } 
}