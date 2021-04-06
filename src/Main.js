import React, { Component } from "react";
import Menu from './components/Menus'
import Body from './components/Body'
import Footer from './components/Footer'
import Login from './Login';

class Main extends Component {

  constructor (props) {
    super(props);
    this.menuList = this.menuList.bind(this);
    this.iconList = this.iconList.bind(this);
    this.menuMain = this.menuMain.bind(this); 
    this.state = {hideInner: false, hideDiv: true};       
  }
  
  triggerChildAlert(){ //Child Component Alert data  <button onClick={this.triggerChildAlert.bind(this)}>Click</button>
      this.refs.child.test();  
  }
  
  menuList(str){
    this.refs.menu.addTabs(str);
  }
  
  menuMain(str){     
     this.refs.sidemenu.menustat(str);
  }
  
  iconList(str){
    this.refs.iconlist.icons(str);
  }
  
  listName=()=>{
    //alert("Hi");
  } 
  
  login=(str)=>{
    if(str==='1'){
      this.setState({hideInner: true, hideDiv: false});              
    }else{
      this.setState({hideInner: false, hideDiv: true});
    }    
  }      
    
  render(){
    return (<div className="fullLengthContainer">
      <div className="height100" hidden = {this.state.hideInner}>        
      <Login login={this.login} />
      </div>              
      <div className="height100" hidden = {this.state.hideDiv}>             
        <Menu ref='sidemenu' menuList={this.menuList} iconList={this.iconList} />                                              
        <Body menuMain={this.menuMain} login={this.login} ref='menu'/>                
        <Footer ref='iconlist' menuList={this.menuList} />
      </div>                                                 
      </div>
    );
  } 
}

export default Main;