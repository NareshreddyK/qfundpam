import React, { Component } from "react";

export default class ACHCustomers extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles form-group height210Px achCustDashBG">
            <h2>ACH Customers <span>(Today)</span></h2>
            <div className="valueBox120 text-right"><img src="images/achCustColl.png" align="left" /><a href={'#'} onClick={()=>{this.props.dbrdTabs({name: 'ACH Customers', custFLNm: 'ACH Customers', id: 'AC'})}}>241</a></div>
        </div>						
    );
  }
}