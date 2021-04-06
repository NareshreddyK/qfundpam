import React, { Component } from "react";
import CollectionMain from './Collmain';
import Loandecision from './Loandecision';
import Datepicker from './common/Datepicker';

export default class Dashboardtab extends Component {
  constructor(props){
    super(props);    
    this.state = {dHead: '', dSrchCol: true, hideCol: false, hideNewCust: false};
  }      
  
  componentDidMount(){
	this.setState({dHead: this.props.info.flName});
	let defdate= ((new Date().getMonth() > 8) ? (new Date().getMonth() + 1) : ('0' + (new Date().getMonth() + 1))) + '/' + ((new Date().getDate() > 9) ? new Date().getDate() : ('0' + new Date().getDate())) + '/' + new Date().getFullYear();
	this.refs.prevDtSel.loadData(defdate);
  };

  colShow=(str)=>{
	//window.$("#dSrch").css('overflow','hidden');
	if(this.state.dHead == "Online Customers"){
		this.setState({dSrchCol: false, hideCol: false, hideNewCust: true});
		this.refs.lnDec.disp(str);
	}else{
		this.setState({dSrchCol: false, hideCol: true, hideNewCust: false});
		this.refs.colc.disp(str);
	}
  }

  colClose(){
	//window.$("#dSrch").removeAttr('style');
	this.setState({dSrchCol: true, hideCol: false, hideNewCust: false});
  }
  
  render(){
	  var resTab = {
		  paddingLeft: '4px',
		  paddingRight: '16px'
	  };
	
	let searchLst = [];
	let stShrt = "";
  
	let s = [{name: 'Lindsay Fruchey', id: '30623', custSsn: 'XXX-XX-6385', custEmail: 'lfruchey83@gmail.com', custPh: '(534) 485-6946', custPhTyp: 'Cell', custAddress: '1332 Sun Crest Ln', custCity: 'Springfield', custState: 'Tennessee', custZip: '37172', newCust: '1', pstatus: '', status: 'PAM,Bankrupt,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '097212180'},{name: 'Ronald Paul', id: '30648', custSsn: 'XXX-XX-1577', custEmail: 'ronald.paul@gmail.com', custPh: '(534) 654-5465', custPhTyp: 'Home', custAddress: '2095 Eagle Trail', custCity: 'Morristown', custState: 'Tennessee', custZip: '37813', newCust: '1', pstatus: '', status: 'NL,Bankrupt,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '097969141'},{name: 'Edgar Gooch', id: '30687', custSsn: 'XXX-XX-7577', custEmail: 'gooch_edgar@gmail.com', custPh: '(534) 456-8979', custPhTyp: 'Cell', custAddress: '189 Helton Hollow Rd', custCity: 'Eidson', custState: 'Tennessee', custZip: '37731', newCust: '1', pstatus: '', status: 'PAM,Bankrupt,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '108768754'},{name: 'Bill Champion', id: '88878', custSsn: 'XXX-XX-5075', custEmail: 'champion_77@gmail.com', custPh: '(534) 741-9636', custPhTyp: 'Home', custAddress: '50 Fairmeadow', custCity: 'Jackson', custState: 'Tennessee', custZip: '38305', newCust: '1', pstatus: '', status: 'NL,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '234854625'},{name: 'Bob Skelly', id: '76562', custSsn: 'XXX-XX-0936', custEmail: 'bob.skelly36@gmail.com', custPh: '(534) 852-7414', custPhTyp: 'Cell', custAddress: '583 Cabot Cove', custCity: 'Clarksville', custState: 'Tennessee', custZip: '37042', newCust: '1', pstatus: '', status: 'PAM,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '456854725'},{name: 'Andy Parks', id: '76497', custSsn: 'XXX-XX-3020', custEmail: 'andypark_20@gmail.com', custPh: '(534) 957-7537', custPhTyp: 'Home', custAddress: '88 Shadow Lawn Dr', custCity: 'Jackson', custState: 'Tennessee', custZip: '38301', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '456854123'},{name: 'Michael Smith', id: '85689', custSsn: 'XXX-XX-7595', custEmail: 'michaelsmith09@gmail.com', custPh: '(485) 965-2356', custPhTyp: 'Home', custAddress: '230 Phillips Rd', custCity: 'Brighton', custState: 'Tennessee', custZip: '38011', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '112129561'},{name: 'Maria Rodriguez', id: '58015', custSsn: 'XXX-XX-8969', custEmail: 'mariarodriguez009@gmail.com', custPh: '(226) 985-3654', custPhTyp: 'Cell', custAddress: '245 Reeves Rd', custCity: 'Dyersburg', custState: 'Tennessee', custZip: '38024', newCust: '1', pstatus: '', status: 'NL,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '85761480'},{name: 'Smith Liam', id: '77785', custSsn: 'XXX-XX-2165', custEmail: 'smithliam91@gmail.com', custPh: '(254) 658-7458', custPhTyp: 'Cell', custAddress: '1302 E 8 Ave', custCity: 'Johnson City', custState: 'Tennessee', custZip: '37601', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '070880342'},{name: 'Johnson Noah', id: '41375', custSsn: 'XXX-XX-9857', custEmail: 'johnsonnoah115@gmail.com', custPh: '(895) 768-8787', custPhTyp: 'Cell', custAddress: '2170 bandera drive', custCity: 'Clarksville', custState: 'Tennessee', custZip: '37042', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '045896525'},{name: 'Williams Logan', id: '10005', custSsn: 'XXX-XX-3735', custEmail: 'williamslogan225@gmail.com', custPh: '(341) 525-3463', custPhTyp: 'Home', custAddress: '116 Shoun street', custCity: 'Mountain City', custState: 'Tennessee', custZip: '37683', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '025647854'},{name: 'Jones Elijah', id: '18462', custSsn: 'XXX-XX-3735', custEmail: 'joneselijah11@gmail.com', custPh: '(423) 534-8585', custPhTyp: 'Cell', custAddress: '119 West Ave', custCity: 'Lafollette', custState: 'Tennessee', custZip: '37766', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '25384814'},{name: 'Brown Carter', id: '22945', custSsn: 'XXX-XX-5685', custEmail: 'browncarter00@gmail.com', custPh: '(545) 785-1212', custPhTyp: 'Home', custAddress: '6510 Ridge Run dr', custCity: 'Knoxville', custState: 'Tennessee', custZip: '37921', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '235486574'},{name: 'Davis Gonzalez', id: '19624', custSsn: 'XXX-XX-7655', custEmail: 'davisgonzalez005@gmail.com', custPh: '(245) 565-7876', custPhTyp: 'Cell', custAddress: '1606 olive way', custCity: 'New Market', custState: 'Tennessee', custZip: '37820', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '235486574'},{name: 'David Miller', id: '11908', custSsn: 'XXX-XX-5289', custEmail: 'davidmiller01@gmail.com', custPh: '(345) 678-2345', custPhTyp: 'Cell', custAddress: '330 Goose Creek Rd', custCity: 'Dandridge', custState: 'Tennessee', custZip: '37725', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '0568942156'},{name: 'Wilson Phillips', id: '17389', custSsn: 'XXX-XX-8358', custEmail: 'wilsonphillips99@gmail.com', custPh: '(249) 223-8975', custPhTyp: 'Cell', custAddress: '1285 Old Highway 67', custCity: 'Butler', custState: 'Tennessee', custZip: '37640', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '100599473'},{name: 'Moore Roberts', id: '18115', custSsn: 'XXX-XX-9365', custEmail: 'mooreroberts99@gmail.com', custPh: '(423) 456-3434', custPhTyp: 'Home', custAddress: '1605 Lischey Avenue', custCity: 'Nashville', custState: 'Tennessee', custZip: '37207', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '015486952'},{name: 'Taylor Brooks', id: '27745', custSsn: 'XXX-XX-1215', custEmail: 'taylorbrooks001@gmail.com', custPh: '(556) 343-7876', custPhTyp: 'Home', custAddress: '4155 Beech Creek Rd', custCity: 'Rogersville', custState: 'Tennessee', custZip: '37857', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '069789161'},{name: 'Anderson Henry', id: '40562', custSsn: 'XXX-XX-6758', custEmail: 'andersonhenry005@gmail.com', custPh: '(231) 343-5657', custPhTyp: 'Home', custAddress: '4838 Bellbook DR', custCity: 'Hamilton Chattanooga', custState: 'Tennessee', custZip: '37416', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '053899366'},{name: 'Thomas Parker', id: '13289', custSsn: 'XXX-XX-4348', custEmail: 'thomasparker99@gmail.com', custPh: '(234) 345-1241', custPhTyp: 'Home', custAddress: '6323 Fairest Drive', custCity: 'Hamilton Harrison', custState: 'Tennessee', custZip: '37341', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '65345323'},{name: 'Jackson Levi', id: '43654', custSsn: 'XXX-XX-0923', custEmail: 'jacksonlevi01@gmail.com', custPh: '(222) 453-4674', custPhTyp: 'Home', custAddress: '4288 Woodland DR', custCity: 'Hamilton Ooltewah', custState: 'Tennessee', custZip: '37363', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '069420532'},{name: 'White Thomas', id: '26982', custSsn: 'XXX-XX-8712', custEmail: 'whitethomas456@gmail.com', custPh: '(232) 564-0202', custPhTyp: 'Home', custAddress: '2605 Taylor Street', custCity: 'Hamilton Chattanooga', custState: 'Tennessee', custZip: '37406', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '060765162'},{name: 'Harris Bell', id: '28389', custSsn: 'XXX-XX-5389', custEmail: 'harrisbell123@gmail.com', custPh: '(245) 765-9767', custPhTyp: 'Home', custAddress: '7204 Flagstone Drive', custCity: 'Hamilton Ooltewah', custState: 'Tennessee', custZip: '37421', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '057870621'},{name: 'Adam Davidson', id: '30035', custSsn: 'XXX-XX-6258', custEmail: 'adamdavidson9@gmail.com', custPh: '(680) 357-0540', custPhTyp: 'Cell', custAddress: '5113 Highway 58 Apt #325', custCity: 'Chattanooga', custState: 'Tennessee', custZip: '37416', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '033017243'},{name: 'Justin Bond', id: '69654', custSsn: 'XXX-XX-0585', custEmail: 'justinbond6@gmail.com', custPh: '(704) 875-5509', custPhTyp: 'Home', custAddress: '3904 Zinnia St', custCity: 'Hamilton Chattanooga', custState: 'Tennessee', custZip: '37421', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '069527493'},{name: 'Nathan Greene', id: '74054', custSsn: 'XXX-XX-3185', custEmail: 'nathangreene001@gmail.com', custPh: '(570) 503-9656', custPhTyp: 'Cell', custAddress: '2105 Wren Rd', custCity: 'Chattanooga', custState: 'Tennessee', custZip: '37412', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '076866279'},{name: 'Stephen Hodges', id: '55685', custSsn: 'XXX-XX-7258', custEmail: 'stephenhodges009@gmail.com', custPh: '(970) 677-4499', custPhTyp: 'Cell', custAddress: '407 Tiktin DR', custCity: 'Hamilton Chattanooga', custState: 'Tennessee', custZip: '37415', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '45059910'},{name: 'Sam Jones', id: '61425', custSsn: 'XXX-XX-6585', custEmail: 'samjones786@gmail.com', custPh: '(558) 325-4641', custPhTyp: 'Home', custAddress: '4914 Carolyn Ln', custCity: 'Hamilton Chattanooga', custState: 'Tennessee', custZip: '37411', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '114082457'},{name: 'Sebastian Greene', id: '10038', custSsn: 'XXX-XX-3798', custEmail: 'sebastiangreene11@gmail.com', custPh: '(469) 307-7776', custPhTyp: 'Cell', custAddress: '5021 Shoals Lane Apt A', custCity: 'Chattanooga', custState: 'Tennessee', custZip: '37416', newCust: '1', pstatus: '', status: 'PAM,Summary,Active,LD,ACTIVEM,RiskManagement', custStatus: 'Active', photoId: '073561990'},{name: 'Thomas Mackay', id: '98145', custSsn: 'XXX-XX-4162', custEmail: 'thomasmackay008@gmail.com', custPh: '(758) 456-7845', custPhTyp: 'Cell', custAddress: '5021 Shoals Lane Apt B', custCity: 'Chattanooga', custState: 'Tennessee', custZip: '37416', newCust: '1', pstatus: '', status: 'NL,Summary,Active,LD,ACTIVET,RiskManagement', custStatus: 'Active', photoId: '072649001'}];    

	for(let i=0; i<=s.length-1; i++){	  
		if(s[i].custState === "Tennessee"){
			stShrt = "TN";
		}
	  
		searchLst.push(<tr><td align="center">{s[i].id}</td><td>{s[i].name}</td><td align="center">{s[i].custSsn}</td><td align="center">{s[i].custStatus}</td><td align="center">{s[i].photoId}</td><td>{s[i].custAddress}, {s[i].custCity}, {stShrt} {s[i].custZip}</td><td align="center"><button type="button" onClick={()=>this.colShow(s[i])}>Go</button></td></tr>);
	}
	  
    return (		
		
		<div className="collectionContainer">
			<div className="collectionSubContainer" id="dSrch">
				<div className="col-sm-12" hidden={!this.state.dSrchCol}>			
					<div className="innerBlockContainer">
						<h2>{this.state.dHead} 
							<span className="dtSel"><Datepicker id={'dob'} name={'date'} ref='prevDtSel'/><label>Select Prev. Date:</label></span>
						</h2>
						<div className="table-responsive" style={resTab}>
							<table id="dataTable11" className="">
								<thead>
									<tr>
										<th><span>Cust#</span></th>
										<th><span>Cust Name</span></th>
										<th><span>SSN#</span></th>
										<th>Cust Status</th>
										<th>Photo ID Nbr</th>
										<th>Address</th>
										<th>Select</th>
									</tr>
								</thead>   
								<tbody>
									{searchLst}
								</tbody>                              
							</table>
						</div>
					</div>
				</div>

				<div className="colDiv1" hidden={!this.state.hideCol}>
					<h2 className="pamHeads">Collections <span onClick={()=>this.colClose()} className="close close-window text-right"><span className="colorgray">Click here to close</span>  <i className="fa fa-times"></i></span></h2>
					<CollectionMain ref="colc"/>
				</div>

				<div className="colDiv1" hidden={!this.state.hideNewCust}>
					<h2 className="pamHeads">New Loan <span onClick={()=>this.colClose()} className="close close-window text-right"><span className="colorgray">Click here to close</span>  <i className="fa fa-times"></i></span></h2>
					<div className="height100">
						<div className="collectionContainer">
							<div className="collectionSubContainer">
								<Loandecision ref="lnDec"/>										 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		

		
    );
  }
}