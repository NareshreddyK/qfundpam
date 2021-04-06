import React, { Component } from "react";

export default class Cancelach extends Component {

  constructor (props) {
    super(props);
    this.state = {caDiv: true, cacMain: true, achDet: true, cacCfrm: true, cacProd: '', cacTran: '', Content: ''};
  }

  componentWillMount(){
    this.setState({cacProd: this.props.cacVal, cacTran: this.props.tranVal});
  }

  componentDidUpdate(prevProps){
	if(prevProps.tranVal !== this.props.tranVal){
        this.setState({cacProd: this.props.cacVal, cacTran: this.props.tranVal, caDiv: false});
	
        if(this.props.tranVal == "CAC"){
            this.setState({achHead: "Cancel ACH", achDet: true});
        }else if(this.props.tranVal == "CSA"){
            this.setState({achHead: "Customer ACH Scheduled Payment Details", achDet: false, Content: 'ACH'});
        }else if(this.props.tranVal == "CSDC"){
            this.setState({achHead: "Customer DC Scheduled Payment Details", achDet: false, Content: 'DC'});
        }
	}
  }
  
  cacNext(){
      this.setState({cacMain: true, cacCfrm: false});
  }

  cacYes(){
    this.setState({cacMain: false, cacCfrm: true});
  }

  render(){

    let caLst = [];
    let caLst1 = [];

    let ca = [{select: '', custName: 'John', achCode: '29032438', amt: '184.00', effDate: '01/13/2021', loanNbr: '10917415', custNbr: '4914898'}];

    if(ca.length === 0){
		caLst.push(<tr><td align="left" colspan="7">Details not available.</td></tr>);
	}else{
		for(let c=0; c<=ca.length-1; c++){
			caLst.push(<tr><td align="center"><input type="checkbox" name="cacCheck" value={ca[c].select} /></td><td align="center">{ca[c].custName}</td><td align="center">{ca[c].achCode}</td><td align="right">$ {ca[c].amt}</td><td align="center">{ca[c].effDate}</td><td align="center">{ca[c].loanNbr}</td><td align="center">{ca[c].custNbr}</td></tr>); 
		}
	}

    if(this.state.cacTran === "CSDC"){
        let ca = [{select: '', custName: 'H,H', custNbr: '4985810', loanNbr: '11091157', dcSeqCode: '179285', amt: '200.00', effDate: '02/08/2021'}];

        if(ca.length === 0){
            caLst1.push(<tr><td align="left" colspan="7">Details not available.</td></tr>);
        }else{
            for(let cc=0; cc<=ca.length-1; cc++){
                caLst1.push(<tr><td align="center"><input type="checkbox" name="cacCheck" value={ca[cc].select} /></td><td align="center">{ca[cc].custName}</td><td align="center">{ca[cc].custNbr}</td><td align="center">{ca[cc].loanNbr}</td><td align="center">{ca[cc].dcSeqCode}</td><td align="right">$ {ca[cc].amt}</td><td align="center">{ca[cc].effDate}</td></tr>); 
            }
        }
    } else {
        let ca = [{select: '', custName: 'H,H', custNbr: '4985810', loanNbr: '11091157', achCode: '30524123', amt: '200.00', effDate: '02/08/2021'}];

        if(ca.length === 0){
            caLst1.push(<tr><td align="left" colspan="7">Details not available.</td></tr>);
        }else{
            for(let cc=0; cc<=ca.length-1; cc++){
                caLst1.push(<tr><td align="center"><input type="checkbox" name="cacCheck" value={ca[cc].select} /></td><td align="center">{ca[cc].custName}</td><td align="center">{ca[cc].custNbr}</td><td align="center">{ca[cc].loanNbr}</td><td align="center">{ca[cc].achCode}</td><td align="right">$ {ca[cc].amt}</td><td align="center">{ca[cc].effDate}</td></tr>); 
            }
        }
    }

    
    
    return(
        <div hidden={this.state.caDiv}>
            {this.state.cacMain ? 
                <div>                   
                        {this.state.achDet ?
                        <table width="100%" className="form-group">
                            <thead>
                                <tr>
                                    <th>Select All &nbsp; <input type="checkbox" /></th>
                                    <th>Customer Name</th>
                                    <th>ACH Code</th>
                                    <th>Amount</th>
                                    <th>Effective Date</th>
                                    <th>Loan Nbr</th>
                                    <th>Cust Nbr</th>
                                </tr>
                            </thead>
                            <tbody>
                                {caLst}
                            </tbody>
                        </table>
						: <table width="100%" className="form-group">
                            <thead>
                                <tr>
                                    <th>Select All &nbsp; <input type="checkbox" /></th>
                                    <th>Customer Name</th>
                                    <th>Cust Nbr</th>
                                    <th>Loan Nbr</th>									
                                    {(this.state.cacTran === "CSDC") ? 
									<th>DC Seq Code</th>
									: <th>ACH Code</th>
									}
                                    <th>Amount</th>
                                    <th>Effective Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {caLst1}
                            </tbody>
                        </table>
						}    
                        {this.state.cacCfrm ?
                            
                            <div className="row">
                                <div className="col-sm-12  text-center">
                                    <button type="button" onClick={() =>{this.cacNext()}}> Next </button>
                                </div>
                            </div>
                                
                        :

                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <p>&nbsp;</p>
                                    <p>You are selecting to CANCEL the above selected {this.state.Content} Transactions.</p>
                                    <p>Click YES to continue</p>
                                </div>
                                <div className="col-sm-4 col-sm-offset-4 form-group text-center">
                                    Enter customer reasons for cancelling <br/>
                                    <textarea className="form-control" rows="4" cols="8"></textarea>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <button type="button" onClick={() =>{this.cacYes()}}> Yes </button>                
                                    <button type="button" onClick={()=>{this.props.cacClose('false')}}> No </button>
                                </div>
                            </div>                               
                                                                
                        }                   
                        
                    
                </div>
                
            : 
                <div className="col-sm-12">  
				{(this.state.cacTran === "CAC")  ?				
                    <div class="innerBlockContainer">
					
                        <h2>Confirmation</h2>
                        <div class="text-center">
                            <p>Request completed successfully</p>
                        </div>
                        <div class="text-center">
                            <button type="button" onClick={()=>{this.props.cacClose('false')}}> Ok </button>
                        </div>
						</div>
					:
					<div class="innerBlockContainer">
					<h2>Confirmation</h2>
                        <div class="text-center">
                            <p>Transaction Completed Successfully</p>
							<p> Would youv like to complete another transaction for this customer?</p>
                        </div>
                        <div class="text-center">
						    <button type="button" onClick={()=>{this.props.cacClose('false')}}> Yes </button>
							<button type="button" onClick={()=>{this.props.cacClose('false')}}> No </button>
                        </div>
					
                    </div>
				}
                </div>
            }
        </div>
    );
	
  } 
}