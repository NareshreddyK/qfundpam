import React, { Component } from "react";

export default class Leads extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles height120Px commonBG">
            <h2>Leads</h2>
            <div className="valueBox  text-right"><a href={'#'} onClick={()=>{this.props.dbrdTabs({name: 'Leads', custFLNm: 'Leads', id: 'Lead'})}}>23</a></div>
        </div>
    );
  }
}