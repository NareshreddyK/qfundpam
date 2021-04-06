import React, { Component } from "react";

export default class Primaryphone extends Component {
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
  
  disPhone(str){
    if(str==='E'){
      window.$(".priPhEdt").show();
      window.$(".priPhUpdt").hide(); 
      window.$("input[name='pPhone']").prop('disabled', true);                 
    }else{
      window.$(".priPhEdt").hide();
      window.$(".priPhUpdt").show(); 
      window.$("input[name='pPhone']").prop('disabled', false);           
    }
  }   
          
  render(){      
    
    return (      
		
      <td>
        <span id="priPhNbr"><input type="text" className="formEdit" name='pPhone' onChange={this.handleChange.bind(this)} value={this.state.id} disabled="disabled" /></span>
        <span className="priPhEdt"><button type="button" onClick={()=>this.disPhone()}><i className="fas fa-edit"></i></button></span>
        <span className="priPhUpdt dispNone">
          <button type="button" onClick={()=>this.disPhone('E')}><i className="fas fa-save"></i></button>&nbsp;
          <button type="button" className="btn-danger" onClick={()=>this.disPhone('E')}><i className="fas fa-ban"></i></button>
        </span>
        </td>   
    );
  }
}