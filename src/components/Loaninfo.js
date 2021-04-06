import React, { Component } from "react";

export default class Loaninfo extends Component {
  constructor(props){
    super(props);
    this.state = {cName: [], custNbr: ''};                           
  }
  
  loanData(str){
    this.setState({custNbr: str});
  }   
    
  render(){
  
    let loanLst = []; 
    if(this.state.custNbr === '10005'){ 
      let a = [{nm:"97234", prd:"ILP", amt: "0423", status: "Open", bstatus: "Current", cstatus: "Active", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "1010.00"},{nm:"39026", prd:"TLP", amt: "2217", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "888.44", schAmt: "0.00", payoffAmt: "888.44"},{nm:"41353", prd:"TLP", amt: "5335", status: "Void", bstatus: "Void", cstatus: "Inactive", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "0.00"},{nm:"129228", prd:"PDL", amt: "5335", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"},{nm:"92327", prd:"PDL", amt: "5335", status: "Open", bstatus: "HELD", cstatus: "Active", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "550.50"},{nm:"52463", prd:"LOC", amt: "5335", status: "Open", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"}];    
      for(let i=0; i<=a.length-1; i++){
        let st = '';
        if(a[i].status=='Open'){
          st+='O';
        }else if(a[i].status=='Write Off'){
          st+='WO';
        }else if(a[i].status=='Void'){
          st+='V';
        }else if(a[i].status=='Closed'){
          st+='C';
        }       
        loanLst.push(<tr className="loanNbr1"><td className="loanNbr text-left"><span className="lfIcon">{st}</span> <a href={'#'} onClick={()=>{this.props.addTabs(a[i]), this.props.nxt(a[i])}}>{a[i].nm}</a></td><td className="loanTyp">{a[i].prd}</td><td>{a[i].amt}</td><td>06/16/2018</td><td>&nbsp;</td><td>&nbsp;</td><td>{a[i].bstatus}</td><td>&nbsp;</td><td>Current</td><td>Current</td></tr>); 
      }
    } else if(this.state.custNbr === '10038'){ 
      let a = [{nm:"97235", prd:"ILP", amt: "0423", status: "Open", bstatus: "Current", cstatus: "Active", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "1010.00"},{nm:"39027", prd:"TLP", amt: "2217", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "888.44", schAmt: "0.00", payoffAmt: "888.44"},{nm:"41354", prd:"TLP", amt: "5335", status: "Void", bstatus: "Void", cstatus: "Inactive", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "0.00"},{nm:"129229", prd:"PDL", amt: "5335", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"},{nm:"92328", prd:"PDL", amt: "5335", status: "Closed", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "402.50"},{nm:"52464", prd:"LOC", amt: "5335", status: "Open", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"}];    
      for(let i=0; i<=a.length-1; i++){
        let st = '';
        if(a[i].status=='Open'){
          st+='O';
        }else if(a[i].status=='Write Off'){
          st+='WO';
        }else if(a[i].status=='Void'){
          st+='V';
        }else if(a[i].status=='Closed'){
          st+='C';
        }       
        loanLst.push(<tr className="loanNbr1"><td className="loanNbr text-left"><span className="lfIcon">{st}</span> <a href={'#'} onClick={()=>{this.props.addTabs(a[i]), this.props.nxt(a[i])}}>{a[i].nm}</a></td><td className="loanTyp">{a[i].prd}</td><td>{a[i].amt}</td><td>06/16/2018</td><td>&nbsp;</td><td>&nbsp;</td><td>{a[i].bstatus}</td><td>&nbsp;</td><td>Current</td><td>Current</td></tr>); 
      }
    } else if(this.state.custNbr === '11908'){ 
      let a = [{nm:"97236", prd:"ILP", amt: "0423", status: "Open", bstatus: "Current", cstatus: "Active", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "1010.00"},{nm:"39028", prd:"TLP", amt: "2217", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "888.44", schAmt: "0.00", payoffAmt: "888.44"},{nm:"41355", prd:"TLP", amt: "5335", status: "Void", bstatus: "Void", cstatus: "Inactive", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "0.00"},{nm:"129230", prd:"PDL", amt: "5335", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"},{nm:"92329", prd:"PDL", amt: "5335", status: "Closed", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "402.50"},{nm:"52465", prd:"LOC", amt: "5335", status: "Open", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"}];    
      for(let i=0; i<=a.length-1; i++){
        let st = '';
        if(a[i].status=='Open'){
          st+='O';
        }else if(a[i].status=='Write Off'){
          st+='WO';
        }else if(a[i].status=='Void'){
          st+='V';
        }else if(a[i].status=='Closed'){
          st+='C';
        }       
        loanLst.push(<tr className="loanNbr1"><td className="loanNbr text-left"><span className="lfIcon">{st}</span> <a href={'#'} onClick={()=>{this.props.addTabs(a[i]), this.props.nxt(a[i])}}>{a[i].nm}</a></td><td className="loanTyp">{a[i].prd}</td><td>{a[i].amt}</td><td>06/16/2018</td><td>&nbsp;</td><td>&nbsp;</td><td>{a[i].bstatus}</td><td>&nbsp;</td><td>Current</td><td>Current</td></tr>); 
      }
    } else if(this.state.custNbr === '13289'){ 
      let a = [{nm:"97237", prd:"ILP", amt: "0423", status: "Open", bstatus: "Current", cstatus: "Active", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "1010.00"},{nm:"39029", prd:"TLP", amt: "2217", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "888.44", schAmt: "0.00", payoffAmt: "888.44"},{nm:"41356", prd:"TLP", amt: "5335", status: "Void", bstatus: "Void", cstatus: "Inactive", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "0.00"},{nm:"129231", prd:"PDL", amt: "5335", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"},{nm:"92330", prd:"PDL", amt: "5335", status: "Closed", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "402.50"},{nm:"52466", prd:"LOC", amt: "5335", status: "Open", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"}];    
      for(let i=0; i<=a.length-1; i++){
        let st = '';
        if(a[i].status=='Open'){
          st+='O';
        }else if(a[i].status=='Write Off'){
          st+='WO';
        }else if(a[i].status=='Void'){
          st+='V';
        }else if(a[i].status=='Closed'){
          st+='C';
        }       
        loanLst.push(<tr className="loanNbr1"><td className="loanNbr text-left"><span className="lfIcon">{st}</span> <a href={'#'} onClick={()=>{this.props.addTabs(a[i]), this.props.nxt(a[i])}}>{a[i].nm}</a></td><td className="loanTyp">{a[i].prd}</td><td>{a[i].amt}</td><td>06/16/2018</td><td>&nbsp;</td><td>&nbsp;</td><td>{a[i].bstatus}</td><td>&nbsp;</td><td>Current</td><td>Current</td></tr>); 
      }
    } else { 
      let a = [{nm:"97238", prd:"ILP", amt: "0423", status: "Open", bstatus: "Current", cstatus: "Active", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "1010.00"},{nm:"39030", prd:"TLP", amt: "2217", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "888.44", schAmt: "0.00", payoffAmt: "888.44"},{nm:"41357", prd:"TLP", amt: "5335", status: "Void", bstatus: "Void", cstatus: "Inactive", ctyp: "New", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "0.00"},{nm:"129232", prd:"PDL", amt: "5335", status: "Write Off", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"},{nm:"92331", prd:"PDL", amt: "5335", status: "Closed", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "402.50"},{nm:"52467", prd:"LOC", amt: "5335", status: "Open", bstatus: "Written Off", cstatus: "Bankrupt", ctyp: "Returning", currntAmt: "0.00", schAmt: "0.00", payoffAmt: "500.00"}];    
      for(let i=0; i<=a.length-1; i++){
        let st = '';
        if(a[i].status=='Open'){
          st+='O';
        }else if(a[i].status=='Write Off'){
          st+='WO';
        }else if(a[i].status=='Void'){
          st+='V';
        }else if(a[i].status=='Closed'){
          st+='C';
        }       
        loanLst.push(<tr className="loanNbr1"><td className="loanNbr text-left"><span className="lfIcon">{st}</span> <a href={'#'} onClick={()=>{this.props.addTabs(a[i]), this.props.nxt(a[i])}}>{a[i].nm}</a></td><td className="loanTyp">{a[i].prd}</td><td>{a[i].amt}</td><td>06/16/2018</td><td>&nbsp;</td><td>&nbsp;</td><td>{a[i].bstatus}</td><td>&nbsp;</td><td>Current</td><td>Current</td></tr>); 
      }
    }
	  
    return (      
		<div className="scrollbar-inner">
			<h2>Loan Information</h2>
			<table width="100%" className="loanGrid">
				<thead>	
					<tr>
						<th className="loanNbr">Loan Nbr</th>
						<th className="loanTyp">Product Type</th>
						<th>Store Nbr</th>
						<th>Loan Date</th>
						<th>Due Date</th>				
						<th>Loan End Date</th>
						<th>Loan Status</th>
						<th>Check Status</th>
						<th>Balance Status</th>
						<th>Vehicle Status</th>
					</tr>	
				</thead>	
				<tbody>			
					{loanLst}
				</tbody>
			</table>
		</div>
    );
  }
}