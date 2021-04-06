import React, { Component } from "react";
import Main from './Collmain';
import Search from './Collectionsearch';
import Table from './CollectionsTable';

export default class Collections extends Component {
  constructor(props){
    super(props);
    this.state = {cData: ''};                           
  };

  componentWillMount(){
    this.setState({cData: this.props.info.vl});
  }

  cCLose=()=>{
    window.$('#contLeft').click();
    this.setState({cData: "Main"});
  }
  
  render(){
	
    if(this.state.cData==='2'){
      return (
        <div id="colect1" className="height100">
  			<Search />
  			<div className="contntHide"><span id="contLeft"><i className="fas fa-angle-left"></i></span></div>
  			<Table ctClose={this.cCLose}/>
  		</div>
      );
    }else{
      return (
        <div id="colect1" className="height100">
  			<Search />
  			<div className="contntHide"><span id="contLeft"><i className="fas fa-angle-left"></i></span></div>
  			<Main />
  		</div>
      );
    }       	  
    
  }
}