import React, { Component } from "react";

export default class Titletrack extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {crProd: '', crTran: '', TitleTrackSuc:false, nextDiv: false, mainDiv: true, TitleLoanNbr: '', TitleStage: ''};
  }
componentWillMount(){
    this.setState({crProd: this.props.crVal, crTran: this.props.tranVal, TitleLoanNbr: '', TitleStage: ''});
  }
  
  TTSubmit (){
	  this.setState({mainDiv: false, TitleTrackSuc: true});
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){	
	return (
		<div>
		{ this.state.mainDiv ?
		<div className = "col-sm-12">
		<div className="innerBlockContainer">
						   	<h2>Title Tracking Search <span onClick={()=>{this.props.TTClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
						   	<div className="col-sm-4 form-group">
							   Loan Nbr<br/>
							   <input type="text" name="TitleLoanNbr" value={this.state.TitleLoanNbr} onChange={this.handleChange} />
							</div>
							<div className="col-sm-4 form-group ">
								Stage<br/><select name="TitleStage" value={this.state.TitleStage} onChange={this.handleChange}>
										<option value=""></option>
										<option value="">Lien Not Applied For</option>
									</select>
						 	</div>
							<div className="col-sm-12 text-center">
					<button type="button" onClick={() =>{this.TTSubmit()}}>Submit</button>
					</div>
							</div>	</div>: null 
		}	

		{this.state.TitleTrackSuc ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>          
                    <div className="text-center">
                    <p> Title Status Updated Successfully. </p>    
					<button type="button" onClick={()=>{this.props.TTClose('false')}}>OK</button>				
                    </div>
				</div>
			</div> : null
			}	
			
</div>			
	
	);
  } 
}