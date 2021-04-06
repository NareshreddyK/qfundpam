import React, { Component } from "react";

export default class Futuredcpayment extends Component {

  constructor (props) {
    super(props);
    this.state = {fdcMain: true, fdcProd: '', fdcTran: ''};
  }

  componentWillMount(){
    this.setState({fdcProd: this.props.fdcVal, fdcTran: this.props.tranVal});
  }
  
  fdcPayment(){
      this.setState({fdcMain: false});
  }

  render(){
    
    return(
        <div>
            {this.state.fdcMain ? 
                <div className="col-sm-12">
                    <div className="innerBlockContainer">
                        <h2>Future DC Payment <span onClick={()=>{this.props.fdcClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                        
                        <table className="noBorder noStripe col-table-3">
                            <tbody>
                                <tr>
                                    <td>
                                        Schedule Pay Date
                                        <select>
                                            <option value="01/12/2021">01/12/2021</option>                                            
                                        </select>
                                    </td>
                                    <td>
                                        Payment Amt <input type="text" name="achCRtngNbr" value="184.00" />
                                    </td>
                                    <td>
                                        Select Card
                                        <select>
                                            <option value="NEW">New Card</option>                                            
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="3">
                                        <button type="button"> Swipe Card </button>                
                                        <button type="button" onClick={() =>{this.fdcPayment()}}> Schedule Payment </button>                
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                
            : 
                <div className="col-sm-12">                    
                    <div class="innerBlockContainer">
                        <h2>Confirmation</h2>
                        <div class="text-center">
                            <p>Schedule Payment completed successfully</p>
                            <p>Would you like to complete another transaction for this customer? </p>
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={()=>{this.props.fdcClose('false')}}>Yes</button>
                            <button type="button" onClick={()=>{this.props.fdcClose('false')}}>No</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
	
  } 
}