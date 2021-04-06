import React, { Component } from "react";

export default class Achivement extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="dashBoardTiles height120Px commonBG">
            <h2>Your Achivement <span>for</span> <span className="ddBox">
                <select name="select">
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="apr">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                </select>
                <select name="select">
                    <option value="">2015</option>
                    <option value="">2016</option>
                    <option value="">2017</option>
                    <option value="">2018</option>
                    <option value="">2019</option>
                </select>
            </span></h2>
            <div className="col-sm-3"><div className="yourAchv">PDL<span>10</span></div></div>							
            <div className="col-sm-3"><div className="yourAchv">ILP<span>08</span></div></div>							
            <div className="col-sm-3"><div className="yourAchv">TITLE<span>25</span></div></div>							
            <div className="col-sm-3"><div className="yourAchv">LOC<span>03</span></div></div>							
        </div>						
    );
  }
}