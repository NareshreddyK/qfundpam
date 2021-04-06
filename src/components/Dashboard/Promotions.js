import React, { Component } from "react";

export default class Promotions extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div>
            <h3>Promotion(s)</h3>
			<img src="images/adPromo.png" className="img-responsive" />
        </div>						
    );
  }
}