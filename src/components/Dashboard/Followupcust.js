import React, { Component } from "react";

export default class Followupcust extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles height210Px commonBG">
            <h2>Follow-Up Cust.</h2>
            <div className="valueBox60 text-right"><img src="images/followup.png" /><a href={'#'} onClick={()=>{this.props.dbrdTabs({name: 'Follow-Up Cust', custFLNm: 'Follow-Up Cust', id: 'FUC'})}}>04</a></div>
        </div>
    );
  }
}