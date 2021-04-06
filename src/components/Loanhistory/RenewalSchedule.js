import React, { Component } from "react";

export default class RenewalSchedule extends Component {

  constructor (props) {
    super(props);
	this.state = {rsVal: ''}
  }

  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({rsVal: this.props.cVal});
	}
  }
    
  render(){
	
	let renwLst = [];
	let r = [];

	if(this.state.rsVal !== "PS"){
		r = [{pmtDate: '01/18/2019', days: '30', pmt: '73.89', newInt: '7.82', newFee: '66.07', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '0.00', bal: '391.00', csoFeeBal: '0.00'},{pmtDate: '02/17/2019', days: '30', pmt: '73.89', newInt: '7.82', newFee: '66.07', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '0.00', bal: '391.00', csoFeeBal: '0.00'},{pmtDate: '03/19/2019', days: '30', pmt: '73.89', newInt: '7.82', newFee: '66.07', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '0.00', bal: '391.00', csoFeeBal: '0.00'},{pmtDate: '04/18/2019', days: '30', pmt: '93.44', newInt: '7.82', newFee: '66.07', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '371.45', csoFeeBal: '0.00'},{pmtDate: '05/18/2019', days: '30', pmt: '89.74', newInt: '7.42', newFee: '62.77', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '351.90', csoFeeBal: '0.00'},{pmtDate: '06/17/2019', days: '30', pmt: '86.05', newInt: '7.03', newFee: '59.47', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '332.35', csoFeeBal: '0.00'},{pmtDate: '07/17/2019', days: '30', pmt: '82.35', newInt: '6.64', newFee: '56.16', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '312.80', csoFeeBal: '0.00'},{pmtDate: '08/16/2019', days: '30', pmt: '78.66', newInt: '6.25', newFee: '52.86', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '293.25', csoFeeBal: '0.00'},{pmtDate: '09/15/2019', days: '30', pmt: '74.96', newInt: '5.86', newFee: '49.55', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '273.70', csoFeeBal: '0.00'},{pmtDate: '10/15/2019', days: '30', pmt: '71.27', newInt: '5.47', newFee: '46.25', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '254.15', csoFeeBal: '0.00'},{pmtDate: '11/14/2019', days: '30', pmt: '67.58', newInt: '5.08', newFee: '42.95', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '234.60', csoFeeBal: '0.00'},{pmtDate: '12/14/2019', days: '30', pmt: '63.88', newInt: '4.69', newFee: '39.64', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '215.05', csoFeeBal: '0.00'},{pmtDate: '01/13/2020', days: '30', pmt: '60.19', newInt: '4.30', newFee: '36.34', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '195.50', csoFeeBal: '0.00'},{pmtDate: '02/12/2020', days: '30', pmt: '56.49', newInt: '3.91', newFee: '33.03', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '175.95', csoFeeBal: '0.00'},{pmtDate: '03/13/2020', days: '30', pmt: '52.79', newInt: '3.51', newFee: '29.73', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '156.40', csoFeeBal: '0.00'},{pmtDate: '04/12/2020', days: '30', pmt: '49.10', newInt: '3.12', newFee: '26.43', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '136.85', csoFeeBal: '0.00'},{pmtDate: '05/12/2020', days: '30', pmt: '45.40', newInt: '2.73', newFee: '23.12', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '117.30', csoFeeBal: '0.00'},{pmtDate: '06/11/2020', days: '30', pmt: '41.71', newInt: '2.34', newFee: '19.82', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '97.75', csoFeeBal: '0.00'},{pmtDate: '07/11/2020', days: '30', pmt: '38.01', newInt: '1.95', newFee: '16.51', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '78.20', csoFeeBal: '0.00'},{pmtDate: '08/10/2020', days: '30', pmt: '34.32', newInt: '1.56', newFee: '13.21', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '58.65', csoFeeBal: '0.00'},{pmtDate: '09/09/2020', days: '30', pmt: '30.63', newInt: '1.17', newFee: '9.91', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '39.10', csoFeeBal: '0.00'},{pmtDate: '10/09/2020', days: '30', pmt: '26.93', newInt: '0.78', newFee: '6.60', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '19.55', csoFeeBal: '0.00'},{pmtDate: '11/08/2020', days: '30', pmt: '23.24', newInt: '0.39', newFee: '3.30', maturedInt: '0.00', unpaidInt: '0.00', maturedDMV: '0.00', unpaidDMV: '0.00', newCSOFee: '0.00', maturedCSOFee: '0.00', unpaidCSOFee: '0.00', principal: '19.55', bal: '0.00', csoFeeBal: '0.00'}];
		for(let j=0; j<=r.length-1; j++){
		renwLst.push(<tr><td align="center">{[j+1]}</td><td align="center">{r[j].pmtDate}</td><td align="center">{r[j].days}</td><td align="right">$ {r[j].pmt}</td><td align="right">{r[j].newInt} %</td><td align="right">$ {r[j].newFee}</td><td align="right">$ {r[j].maturedInt}</td><td align="right">$ {r[j].unpaidInt}</td><td align="right">$ {r[j].maturedDMV}</td><td align="right">$ {r[j].unpaidDMV}</td><td align="right">$ {r[j].newCSOFee}</td><td align="right">$ {r[j].maturedCSOFee}</td><td align="right">$ {r[j].unpaidCSOFee}</td><td align="right">$ {r[j].principal}</td><td align="right">$ {r[j].bal}</td><td align="right">$ {r[j].csoFeeBal}</td></tr>); 
		}
	}else{
		r = [{pmtDate: '02/26/2021', pymtStat: 'Due', days: '29', amt: '103.25', newInt: '61.25', maturedInt: '61.25', unpaidInt: '0.00', principal: '37.00', bal: '263.00'},{pmtDate: '03/26/2021', pymtStat: 'Due', days: '28', amt: '103.25', newInt: '51.85', maturedInt: '51.85', unpaidInt: '0.00', principal: '51.40', bal: '211.60'},{pmtDate: '04/27/2021', pymtStat: 'Due', days: '32', amt: '103.25', newInt: '47.67', maturedInt: '47.67', unpaidInt: '0.00', principal: '55.58', bal: '156.02'},{pmtDate: '05/27/2021', pymtStat: 'Due', days: '30', amt: '103.25', newInt: '32.95', maturedInt: '32.95', unpaidInt: '0.00', principal: '70.30', bal: '85.72'},{pmtDate: '06/25/2021', pymtStat: 'Due', days: '29', amt: '103.22', newInt: '17.50', maturedInt: '17.50', unpaidInt: '0.00', principal: '85.72', bal: '0.00'}];
		for(let j=0; j<=r.length-1; j++){
		renwLst.push(<tr><td align="center">{[j+1]}</td><td align="center">{r[j].pmtDate}</td><td align="center">{r[j].days}</td><td align="right">$ {r[j].amt}</td><td align="right">{r[j].newInt} %</td><td align="right">$ {r[j].maturedInt}</td><td align="right">$ {r[j].unpaidInt}</td><td align="right">$ {r[j].principal}</td><td align="right">$ {r[j].bal}</td></tr>); 
		}
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th>Pmt # </th>
							<th>Pmt Date</th>
							<th>Days </th>
							{(this.state.rsVal !== "PS") ? <th>Pmt </th> : null }
							{(this.state.rsVal === "PS") ? <th>Amount </th> : null }
							<th>New Interest </th>
							{(this.state.rsVal !== "PS") ? <th>New Fee </th> : null }
							<th>Matured Interest </th>
							<th>Unpaid Interest</th>
							{(this.state.rsVal !== "PS") ? <th>Matured DMV Fee</th> : null }
							{(this.state.rsVal !== "PS") ? <th>Unpaid DMV Fee</th> : null }
							{(this.state.rsVal !== "PS") ? <th>New CSO Fee Earned</th> : null }
							{(this.state.rsVal !== "PS") ? <th>Matured CSO  Fee</th> : null }
							{(this.state.rsVal !== "PS") ? <th>Unpaid CSO  Fee</th> : null }
							<th>Principal </th>
							<th>Balance</th>
							{(this.state.rsVal !== "PS") ? <th>CSO Fee Balance</th> : null }
						</tr>
					</thead>
					<tbody>
						{renwLst}	
					</tbody>
				</table>
			</div>					
		</div>
	
	);
  } 
}