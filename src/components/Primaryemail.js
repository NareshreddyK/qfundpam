import React, { Component } from "react";

export default class Primaryemail extends Component {
  constructor(props){
    super(props);    
    this.loadData = this.loadData.bind(this);
    this.state = {id: ''};                               
  }
  
  loadData(str){
    this.setState({id: str});
  } 
  
  handleChange(e){
    this.setState({id: e.target.value});
  }
  
  disEmail(str){
    if(str==='E'){
      window.$(".priPhEdtem").show();
      window.$(".priPhUpdtem").hide(); 
      window.$("input[name='pEmail']").prop('disabled', true);                 
    }else{
      window.$(".priPhEdtem").hide();
      window.$(".priPhUpdtem").show(); 
      window.$("input[name='pEmail']").prop('disabled', false);           
    }
  }   
          
  render(){      
    
    return (      
		
      <td>
        <span id="priPhNbr"><input type="text" className="formEdit" name='pEmail' onChange={this.handleChange.bind(this)} value={this.state.id} disabled="disabled" /></span>
        <span className="priPhEdtem"><button type="button" onClick={()=>this.disEmail()}><i className="fas fa-edit"></i></button></span>
        <span className="priPhUpdtem dispNone">
          <button type="button" onClick={()=>this.disEmail('E')}><i className="fas fa-save"></i></button>
          <button type="button" className="btn-danger" onClick={()=>this.disEmail('E')}><i className="fas fa-ban"></i></button>
        </span>
        </td>   
    );
  }
}