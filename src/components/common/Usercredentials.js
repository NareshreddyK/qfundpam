import React, { Component } from "react";
import Popup from '../Popup';

export default class Usercredentials extends Component {
  constructor(props){
    super(props);
    this.state = {ucDiv: false, prodVal: ''};
	  this.ucClose = this.ucClose.bind(this);
  }

  componentWillMount(){
    this.setState({prodVal: this.props.uc});
  }
  
  ucClose(){	
    //alert(this.state.prodVal);	
    this.props.ucCallback(this.state.prodVal);
  }

  menus(str){
    this.refs.Popup.dispBlk(str);
  }

  render(){  
    return (
		 <div className="col-sm-4 col-xs-12 form-group" hidden={this.state.ucDiv}>
		<div className="innerBlockContainer">
            <h2>Credentials</h2>								
            <table className="noBorder noStripe col-table-4 form-group">
                <tbody>
                    <tr>
                        <td>User ID <input type="text" name="nUser" value=""/></td>
                    </tr>
                    <tr>    
                        <td>PIN# <input type="text" name="nPin" value=""/></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <button type="button" id="eligBtn" onClick={()=>this.menus('Eligibility')}> Eligibility </button>
                <button type="button" onClick={()=>this.ucClose()}> Finish Loan </button>
                <button type="button" className="btn-danger"> Cancel </button>
            </div>
        </div>
        <Popup ref='Popup' eligibility={this.eligibility}/>
		</div>
    );
  }
}