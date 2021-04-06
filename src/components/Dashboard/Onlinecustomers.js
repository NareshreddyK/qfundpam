import React, { Component } from "react";

export default class Onlinecustomers extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles height120Px onlineCustBG">
            <h2>Online Customers <span>(Cash at Store)</span></h2>
            <div className="valueBox  text-right"><img src="images/onlineCust.png" align="left" /><a href={'#'} onClick={()=>{this.props.dbrdTabs({name: 'Online Customers', custFLNm: 'Online Customers', id: 'OC'})}}>10</a></div>
        </div>						
    );
  }
}