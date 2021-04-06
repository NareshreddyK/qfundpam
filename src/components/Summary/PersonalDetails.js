import React, { Component } from "react";

export default class PersonalDetails extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	const eqHght = {
		display: 'flex'
	};
	return (
	
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2>Personal Details</h2>
			</div>
		</div>
	
	);
  } 
}