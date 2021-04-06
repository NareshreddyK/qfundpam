import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

class Login extends Component {

  constructor (props) {
    super(props);           
  }
  
  triggerChildAlert(){ //Child Component Alert data  <button onClick={this.triggerChildAlert.bind(this)}>Click</button>
      this.refs.child.test();  
  } 
  
  log=(str)=>{
    this.props.login(str);
  }   
    
  render(){
  
        
  
    return (
		<div className="midContainer">
		<div className="midCell">
		<div className="loginHolder">
			<div className="col-xs-6 col-sm-4 col-md-3 col-sm-offset-2 col-md-offset-3 text-center"><img src="images/logo-login.png" className="img-responsive" /></div>
			<div className="col-xs-6 col-sm-4 col-md-3 mid-border">
				<h2>Sign In Here !</h2>
				<div className="row">
					<div className="col-sm-4 loginLable">User Id</div>
					<div className="col-xs-10 col-sm-8 form-group loginField"><input type="text" name="" /></div>
				</div>
				<div className="row">
					<div className="col-sm-4 loginLable">Password</div>
					<div className="col-xs-10 col-sm-8 form-group loginField"><input type="password" name="" /></div>
				</div>
				<div className="row">
					<div className="col-sm-4 loginLable">Store Nbr</div>
					<div className="col-xs-10 col-sm-8 form-group loginField"><input type="text" name="" /></div>
				</div>
				<div className="row">
					<div className="col-sm-4 loginLable">&nbsp;</div>
					<div className="col-xs-10 col-sm-8 form-group loginField text-center"><input type="button" onClick={()=>this.log('1')} name="" className="btn btn-success" value="&nbsp;&nbsp;Login&nbsp;&nbsp;" /></div>
				</div>
			</div>
			<div className="col-xs-12 col-sm-12 copyright">Copyrights &copy;&nbsp;&nbsp;<img src="images/logoRights.png" /></div> 
		</div>
	</div>
</div>
                                                     
     
    );
  } 
}

export default Login;