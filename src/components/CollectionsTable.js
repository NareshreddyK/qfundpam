import React, { Component } from "react";
import Main from './Collmain';

export default class CollectionsTable extends Component {
  constructor(props){
    super(props);
    this.state = {cNbr: ''};
  };    
  
  componentDidMount(){
	if ( window.$.fn.dataTable.isDataTable( '#dataTable3' ) ) {
		window.$('#dataTable3').DataTable();
	} else {
		window.$('#dataTable3').DataTable({
			"scrollX": true,
			"pageLength": 8,
  			"lengthMenu": [ 8, 16, 24, 32 ]
		});
	}
  }
    
  render(){
	const eqHght = {
		display: 'flex',
		marginBottom: '8px'
	};
	const pdngLeft = {
		paddingLeft: '0px'
	};
    
	let cmLst = [];
  
	let cm = [{triedToday: '', loanNbr: '97234', custName: 'Andy Parks', prodType: 'ILP', amtDue: '1016.00', dueDate: '', pastDueDays: '', daysFrom: '', daysIn: '', returnReason: '', returnDays: 'Payday', timezone: '', followUpDt: '', custStatus: 'Active', assignedTo: 'No', custNbr: '76497', futureDepDt: '', loanStatus: 'Open'}];

	for(let a=0; a<=cm.length-1; a++){
		cmLst.push(<tr><td align="center"><input type="checkbox" /></td><td align="center">{cm[a].triedToday}</td><td align="center">{cm[a].loanNbr}</td><td align="center">{cm[a].custName}</td><td align="center">{cm[a].prodType}</td><td align="right">$ {cm[a].amtDue}</td><td align="center">{cm[a].dueDate}</td><td align="center">{cm[a].pastDueDays}</td><td align="center">{cm[a].daysFrom}</td><td align="center">{cm[a].daysIn}</td><td align="center">{cm[a].returnReason}</td><td align="center">{cm[a].returnDays}</td><td align="center">{cm[a].timezone}</td><td align="center">{cm[a].followUpDt}</td><td align="center">{cm[a].custStatus}</td><td align="center">{cm[a].assignedTo}</td><td align="center">{cm[a].custNbr}</td><td align="center">{cm[a].futureDepDt}</td><td align="center">{cm[a].loanStatus}</td><td align="center"><button className="coltSrchRes" onClick={()=>this.props.ctClose()}> Go </button></td></tr>); 
	}
	
    return (
		<div className="height100" >      
			<div className="collectionContainer">
				<div className="collectionSubContainer">
				<div className="col-sm-12" >
					<div className="innerBlockContainer innerBlockMargin">
						<h2>Search Results</h2>
						<div className="col-sm-12 table-responsive" style={pdngLeft}>
							<table id="dataTable3">
								<thead>
									<tr>
										<th>#</th>
										<th>Tried Today?</th>
										<th>Loan Nbr</th>
										<th>Customer Name</th>
										<th>Product Type</th>
										<th>Amt Due</th>
										<th>Due Date</th>
										<th>Past Due Days</th>
										<th>Days from Pay Date</th>
										<th>Days In Collection</th>
										<th>Return Reason</th>
										<th>Return Days</th>
										<th>Time Zone</th>
										<th>Follow-up Date</th>
										<th>Customer Status</th>
										<th>Assigned To</th>
										<th>Customer Nbr</th>
										<th>Future Deposit Date</th>
										<th>Loan Status</th>
										<th>Select</th>
									</tr>
								</thead>
								<tbody>
									{cmLst}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				</div>
				<div class="clearfix"></div>
				
			</div>			
		</div>
		
    );
  }
}