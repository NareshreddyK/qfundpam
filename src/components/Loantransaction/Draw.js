import React, { Component } from "react";

export default class Draw extends Component {

  constructor (props) {
    super(props);
    this.state =  {refProd: '', refTran: '',  mainDiv:true, dAuth: '', dOutstanding: '', dAvailable: '', dDraw: '', dDisbTyp1: '', dDisbAmt1: '', dDisbTyp2: '', dDisbAmt2: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  componentWillMount(){
    //alert(this.props.rVal+"..."+this.props.tranVal);
    this.setState({refProd: this.props.drVal, refTran: this.props.tranVal, dAuth: '2500.00', dOutstanding: '0.00', dAvailable: '2500.00', dDraw: '500.00', dDisbTyp1: 'Cash', dDisbAmt1: '500.00', dDisbTyp2: '', dDisbAmt2: ''});
  }

  finBtnFun(){
      this.setState({plsDiv : true, mainDiv:false});
  }

  render(){
	
	return (
        <div>
            {this.state.mainDiv ? <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Draw Details <span onClick={()=>{this.props.drwClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>								
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                                <td align="left">Authorized LOC <br/><input type="text" name="dAuth" value={this.state.dAuth} disabled /></td> 
								<td align="left">Outstanding balance <br/><input type="text" name="dOutstanding" value={this.state.dOutstanding} disabled /></td> 
                                <td align="left">Available Credit <br/><input type="text" name="dAvailable" value={this.state.dAvailable} disabled /></td>
								<td align="left">Draw Amt <br/><input type="text" name="dDraw" value={this.state.dDraw} onChange={this.handleChange} /></td>
                            </tr>
                            <tr>
							    <td align="left">Disb Type 1 <br/>
                                    <select name="dDisbTyp1" value={this.state.dDisbTyp1} onChange={this.handleChange} >
                                        <option value="Cash">Cash</option>
                                    </select></td>
								<td align="left">Disb Amt 1 <br/><input type="text" name="dDisbAmt1" value={this.state.dDisbAmt1} onChange={this.handleChange} /></td> 
								<td>Disb Type 2
                                    <select name="dDisbTyp2" value={this.state.dDisbTyp2} onChange={this.handleChange} >
                                        <option value=""></option>
                                    </select>
                                </td>
								<td align="left">Disb Amt 2 <br/><input type="text" name="dDisbAmt2" value={this.state.dDisbAmt2} onChange={this.handleChange} /></td> 
                            </tr>                          
                        </tbody>
                    </table>

                    &nbsp;&nbsp;
                    <div className="col-sm-12 text-center">                            
                        <button type="button" onClick={()=>{this.props.drwClose('false')}}> Cancel </button>
                        <button type="button" onClick={()=>{this.finBtnFun()}}> Finish Draw</button>
					</div>

                </div>
            </div>	: null 
        }		
			
			{  this.state.plsDiv ?<div className="col-sm-12">
                        <div className="innerBlockContainer">
                    <h2>Confirmation</h2>                    
                    <div className="text-center">
                    <p> Draw Amount {this.state.dDraw} issued in the of Test Test Successfully.</p>                    
                    <button type="button" onClick={()=>{this.props.drwClose('false')}}>Ok</button>
                    </div>
                    </div>
                </div> : null }
        </div>
	);
  } 
}