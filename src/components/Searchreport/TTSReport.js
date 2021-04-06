import React, { Component } from "react";
import ReportLevel from './ReportLevel';

export default class TTSReport extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {ttsTrkStat: ''};
  }
  
  componentWillMount(){
    this.setState({ttsTrkStat: ''});
  };

  componentDidMount(){
	this.refs.rLevel.rlData("");
  };

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value });
  }
    
  render(){
	
	return (
		<div>
			<ReportLevel ref="rLevel"/>
			<div className="row form-group">
				<div className="col-sm-5 col-sm-offset-1"><label>Tracking Status </label></div>
				<div className="col-sm-6">
					<select name="ttsTrkStat" value={this.state.ttsTrkStat} onChange={this.handleChange}>
						<option value=""></option>
						<option value="LIENNOTAPPLIEDFOR">Lien Not Applied For</option>
						<option value="TITLETAKENTODMV">Title Taken To DMV</option>
						<option value="ISSUESTORESOLVE">Issues To Resolve</option>
						<option value="NOTABLETOAPPLYLIEN">Not Able To Apply Lien</option>
						<option value="TITLERETURNEDFROMDMV">Title Returned From DMV</option>
						<option value="LIENRELEASED">Lien Released</option>
						<option value="SENTTOAUCTION">Sent To Auction</option>
						<option value="SENTTOCSS">Sent To CSS</option>
						<option value="ETL">ETL</option>
					</select>
				</div>
			</div>
		</div>
	);
  } 
}