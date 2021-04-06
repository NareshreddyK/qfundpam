import React, { Component } from "react";

export default class PTPcustomers extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles height210Px ptpBG">
            <h2>PTP Customers <span>(Today)</span></h2>
            <div className="valueBox120 text-right"><a href={'#'} onClick={()=>{this.props.dbrdTabs({name: 'PTP Customers', custFLNm: 'PTP Customers', id: 'PTPC'})}}>05</a></div>
        </div>
    );
  }
}