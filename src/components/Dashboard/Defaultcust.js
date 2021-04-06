import React, { Component } from "react";

export default class Defaultcust extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles height210Px commonBG">
            <h2>Default Cust. <span>(Today)</span></h2>
            <div className="valueBox60 text-right"><img src="images/defaultCust.png" /><a href={'#'} onClick={()=>{this.props.dbrdTabs({name: 'Default Cust', custFLNm: 'Default Cust', id: 'DC'})}}>16</a></div>
        </div>
    );
  }
}