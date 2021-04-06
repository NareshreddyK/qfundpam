import React, { Component } from "react";
import Drawdetails from '../Newloan/Drawdetails';

export default class PlsConfirm extends Component {

  constructor (props) {
    super(props);
    this.state = {cStatus: '', cText: '', pcDiv: false, locDiv: true, tlpDiv: true, drawshow: true};
    this.handleChange = this.handleChange.bind(this);
    this.pcClose = this.pcClose.bind(this);
  }

  componentWillMount(){
    //alert(this.props.pc);
    this.setState({cStatus: this.props.pc});
  }
  
  handleChange=(e)=>{
	  this.setState({[e.target.name]: e.target.value});
  }
	
  PlsYes(str){
    if(str == "LOC"){
      this.setState({locDiv: false, tlpDiv: true, pcDiv: true, drawshow: true});
    } if(str == "TLP" || str == "PDL"){
      this.setState({locDiv: true, tlpDiv: false, pcDiv: true, drawshow: true, cText: 'Advance Completed Successfully.'});
    } if(str == "ILP"){
      this.setState({locDiv: true, tlpDiv: false, pcDiv: true, drawshow: true, cText: 'Installment Loan Completed Successfully.'});
    }
  }
  
  drawDiYes(str){
    if(str == "LOC"){
      this.setState({drawshow: false, pcDiv: true, locDiv: true});
		  window.$("#UCFinish button .finishDrawHide").removeClass('hide');
    } if(str == "TLP" || str == "ILP" || str == "PDL"){
      this.setState({pcDiv: false, tlpDiv: true, locDiv: true, cStatus: ''});
      this.props.ldCallback("draw");
    }
  }
  
  pcClose=()=>{
    this.setState({pcDiv: false, tlpDiv: true, locDiv: true, cStatus: ''});
    this.props.ldCallback("draw");
  }

  render(){

    let cText;
    if(this.state.cStatus == "LOC"){
      cText = <div className="form-group text-center">Line Of Credit $ 2500 issuing in the name if Test, Test.</div>;
    } else if(this.state.cStatus == "TLP"){
      cText = <div className="form-group text-center">For <strong>Test Test</strong> will receive an advance of <strong>$300.00</strong> today.<br/>The Total Due Amt is <strong>$356.70</strong>(Prinicipal+Fees).<br/>The Customer will receive <strong>$300.00</strong> in the form of <strong>Cash</strong>.</div>;
    } else if(this.state.cStatus == "ILP"){
      cText = <div className="form-group text-center">For <strong>Test Test</strong> will receive a Cash Advance of <strong>$2500.00</strong> today.<br/>The Amt of <strong>$758.16</strong> for first installment Due on <strong>01/13/2021</strong>.<br/>The Total Due Amt is <strong>$3790.76</strong>(Prinicipal+Fees).<br/> The Customer will receive the advance in the form of <strong>Cash</strong>.</div>;
    } else if(this.state.cStatus == "PDL"){
      cText = <div className="form-group text-center">For <strong>Test Test</strong>, Check Nbr <strong>ACH</strong> in the amount of $550.00 is being held untill <strong>01/13/2021</strong>.<br/>The customer will receive the amount advance in the <strong>Cash</strong>.</div>;
    }
	
	return (
        <div>
           <div className="col-sm-12" hidden={this.state.pcDiv}>
                <div className="innerBlockContainer">
                    <h2>Please Confirm</h2>
                    {cText}
					          <div className="text-center">
                      <button type="button" onClick={()=>this.PlsYes(this.state.cStatus)}> Yes </button>
                      <button type="button" className="btn-danger"> No </button>
                    </div>					
                </div>
            </div>
			
            <div hidden={this.state.locDiv}>
              <div className="col-sm-12">
                <div className="innerBlockContainer">
                          <br />
                  <p className="text-center">Line Of Credit $ 2500 issuing in the name if Test, Test has been completed successfully.</p>
                  <p className="text-center">Would the customer like to perform a draw on their account.</p>
                  <div className="text-center">
                        <button type="button" onClick={()=>this.drawDiYes(this.state.cStatus)}> Yes </button>
                        <button type="button" className="btn-danger"> No </button>
                    </div>					
                </div>
              </div>
            </div>
			
			      <div hidden={this.state.drawshow}>
                <Drawdetails pcCallBack={this.pcClose}/>
            </div>

            <div hidden={this.state.tlpDiv}>
              <div className="col-sm-12">
                <div className="innerBlockContainer">
                  <br />
                  <p className="text-center">{this.state.cText}</p>
                  <div className="text-center">
                        <button type="button" onClick={()=>this.drawDiYes(this.state.cStatus)}> Ok </button>
                    </div>					
                </div>
              </div>
            </div>
			
        </div>
	);
  } 
}