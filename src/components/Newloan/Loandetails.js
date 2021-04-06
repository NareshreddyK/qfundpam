import React, { Component } from "react";

export default class Loandetails extends Component {

  constructor (props) {
    super(props);
    this.state = {prodTyp: '', ldDiv: false};
  }

  componentWillMount(){
    
  }
  

  render(){
    
    let ldLst=[];
    let s;
    
    if(this.props.ld == "PDL"){
        s = [{loanAmt: '500.00', loanFee: '50.00', prmCpn: '0.00', totalDue: '550.00'}];

        for(let i=0; i<=s.length-1; i++){	  
            
            ldLst.push(<tbody><tr><td>Loan Amt</td><td>$ {s[i].loanAmt}</td></tr><tr><td>Loan Fee</td><td>$ {s[i].loanFee}</td></tr><tr><td>Promotions/Coupons</td><td>$ {s[i].prmCpn}</td></tr><tr><td>Total Due</td><td>$ {s[i].totalDue}</td></tr></tbody>);

        }
    } else if(this.props.ld == "ILP"){
        s = [{loanAmt: '2500.00', loanFee: '75.76', origFee: '0.00', verFee: '0.00', csoFee: '1215.00', totalAmt: '3790.76'}];

        for(let i=0; i<=s.length-1; i++){	  
            
            ldLst.push(<tbody><tr><td>Loan Amt</td><td>$ {s[i].loanAmt}</td></tr><tr><td>Loan Fee</td><td>$ {s[i].loanFee}</td></tr><tr><td>Origination Fee</td><td>$ {s[i].origFee}</td></tr><tr><td>Verification Fee</td><td>$ {s[i].verFee}</td></tr><tr><td>CSO Fee</td><td>$ {s[i].csoFee}</td></tr><tr><td>Total Amt</td><td>$ {s[i].totalAmt}</td></tr></tbody>);

        }
    }else if(this.props.ld == "TLP"){
        s = [{loanAmt: '300.00', loanFee: '56.70', dmvFee: '0.00', totalAmt: '356.70'}];

        for(let i=0; i<=s.length-1; i++){	  
            
            ldLst.push(<tbody><tr><td>Loan Amt</td><td>$ {s[i].loanAmt}</td></tr><tr><td>Loan Fee</td><td>$ {s[i].loanFee}</td></tr><tr><td>DMV Fee</td><td>$ {s[i].dmvFee}</td></tr><tr><td>Total Amt</td><td>$ {s[i].totalAmt}</td></tr></tbody>);

        }
    }

	return (
        <div className="col-sm-4 col-xs-12 form-group" hidden={this.state.ldDiv}>
            <div className="innerBlockContainer">
                <h2>Loan Details</h2>
                <div class="innerScrollContainer">
                    <table className="noStripe col-table-2 nth-evenColor">
                        {ldLst}                        
                    </table>
                </div>
            </div>
        </div>
	);
  } 
}