import React, { Component } from "react";

export default class Locclosure extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: '', mainDiv: true, plsDiv: true, lcCreditLine: '', lcOutstandingBal: '', lcAvailableBal: ''};
  }

  componentWillMount(){
    //alert(this.props.rVal+"..."+this.props.tranVal);
    this.setState({refProd: this.props.clVal, refTran: this.props.tranVal, lcCreditLine: '2500.00', lcOutstandingBal: '0.00', lcAvailableBal: '2500.00'});
  }

  CloseLoc()
  {
      this.setState({yesDiv : true, mainDiv:false});
  }

  yesBtnFun()
  {
    this.setState({yesDiv : false, plsDiv:false});
  }

  render(){

    return (
        <div>
          {this.state.mainDiv ? <div className="col-sm-12">
            <div className="innerBlockContainer">
              <h2> LOC Closure <span onClick={()=>{this.props.lcsClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
              <div className="col-sm-12">
					      <table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
									<tbody>
                    <tr>
                      <td>Line Of Credit</td>
                      <td align="center">{this.state.lcCreditLine}</td>
                      <td>Out Standing Balance</td>
                      <td align="center">{this.state.lcOutstandingBal}</td>
                      <td>Available Balance</td>
                      <td align="center">{this.state.lcAvailableBal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12 text-center">                            
                <button type="button" onClick={()=>{this.props.lcsClose('false')}}> Cancel </button>
                <button type="button" onClick={()=>{this.CloseLoc()}}> Close LOC</button>
					    </div>
            </div>
          </div> : null
        }
    
        {this.state.yesDiv ? <div className="col-sm-12">
          <div className="innerBlockContainer">
            <h2>Confirmation</h2>                    
            <div className="text-center">
              <p>Do you want to Close Line Of Credit</p>                    
              <button type="button" onClick={()=>{this.yesBtnFun()}}>Yes</button>
              <button type="button" onClick={()=>{this.props.lcsClose('false')}}>No</button>
            </div>
          </div>
        </div> 
        : 
        <div className="col-sm-12" hidden={this.state.plsDiv}>
          <div className="innerBlockContainer">
            <h2>Confirmation</h2>                    
            <div className="text-center">
              <p> Transaction Completed Successfully</p>                    
              <button type="button" onClick={()=>{this.props.lcsClose('false')}}>Ok</button>
            </div>
          </div>
        </div>  }
      </div>
    );
	
  } 
}