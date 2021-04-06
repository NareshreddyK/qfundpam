import React, { Component } from "react";
import CustomerInfo from './CustomerInfo';
import CustomerAddressDetails from './CustomerAddressDetails';
import AdditionalNetSpendDetails from './AdditionalNetSpendDetails';
import PaymentInfo from './PaymentInfo';
import CardDash from './Carddashboard';

export default class ApplicationSearch extends Component {

  constructor (props) {
    super(props);
    this.handleStChange = this.handleChange.bind(this);
    this.state = {firstName: '', lastName: '', ssn:'', custNbr:'', phNbr:'', info:'New', btnDiv:true, cardDashboard:"", submitting:true};      
  }
  

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });      
  }
  asCloseTab = ()=>
  {
     window.$(".close-tab1").click();
     window.$("#SearchResult").addClass('active in');
    window.$("#searchMenu").addClass('active');
  }
  callBackFun = (str) =>{
    if(str === "swDoneFun")
    {
      this.setState({btnDiv: false});
    }else{
      this.setState({btnDiv: true, submitting:false });
    }
    
  }

  subBtnFun(str)
  {
    if(str === "Dash")
    {
      this.setState({cardDashboard:"Card", dashDiv:true, btnDiv:false}); 
    }
  }

  render(){
	const eqHght = {
		display: 'flex'
	}
	const noBG = {
	  background: 'transparent'
  }  

	return (
<div className="height100">
  <div className="collectionContainer">
    <div className="collectionSubContainer">     
     
          {(this.state.info === "New") ?
             <div> <CustomerInfo />
                  <CustomerAddressDetails />
                  <AdditionalNetSpendDetails info={this.state.info}/> 
		              <PaymentInfo /> 
                </div> : null
		      }
          {(this.state.info === "Ex") ?
             <div> <CustomerInfo />
                  <CustomerAddressDetails />
                  <AdditionalNetSpendDetails info={this.state.info}/> 
                </div> : null
		      }
          {(this.state.info === "Dash") ?
             <div hidden={this.state.dashDiv}>
                  <AdditionalNetSpendDetails info={this.state.info} addClose={this.asCloseTab} callBackFun={this.callBackFun}/>
                </div> : null
		      }         

          {(this.state.cardDashboard === "Card") ?
            <div><CardDash addClose={this.asCloseTab} /> </div> :  null}
         
          {this.state.btnDiv ? <div className="col-sm-12 text-center form-group">
            <button type="button" onClick={() => {this.asCloseTab()}}> Cancel </button>
            <button type="button" onClick={() => {this.subBtnFun(this.state.info)}} disabled={this.state.submitting}> Submit </button>           
          </div> : null }
      </div>
    </div>   
  </div>
);
  } 
}