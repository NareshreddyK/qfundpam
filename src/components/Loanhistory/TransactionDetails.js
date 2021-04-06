import React, { Component } from "react";

export default class TransactionDetails extends Component {

  constructor (props) {
    super(props);
  }    
    
  render(){
	
	let transLst = [];
	
	let t = [{select: '', locNbr: '0398', tranDate: '12/19/2018', tran: 'Advance', totalAmt: '464.89', tenderType: 'Cash', vehicleStatus: '', pmt: '1', advAmt: '391.00', interest: '7.82', fee: '66.07', csoFee: '0.00', nsfFee: '0.00', lateFee: '0.00', dmvFee: '0.00', calloffFee: '0.00', repoFee: '0.00', saleFee: '0.00', renRedAmt: '0.00', refAmt: '0.00', empNbr: '92529825', otherFee: '0.00', waiveFee: '0.00', couponAmt: '0.00', owner: ''},{select: '', locNbr: '0398', tranDate: '01/18/2019', tran: 'Renewal', totalAmt: '73.89', tenderType: '', vehicleStatus: '', pmt: '2', advAmt: '0.00', interest: '7.82', fee: '66.07', csoFee: '0.00', nsfFee: '0.00', lateFee: '0.00', dmvFee: '0.00', calloffFee: '0.00', repoFee: '0.00', saleFee: '0.00', renRedAmt: '0.00', refAmt: '0.00', empNbr: '1', otherFee: '0.00', waiveFee: '0.00', couponAmt: '0.00', owner: ''},{select: '', locNbr: '0398', tranDate: '01/22/2019', tran: 'Default', totalAmt: '538.78', tenderType: '', vehicleStatus: 'DEFAULT', pmt: '', advAmt: '391.00', interest: '15.64', fee: '132.14', csoFee: '0.00', nsfFee: '0.00', lateFee: '0.00', dmvFee: '0.00', calloffFee: '0.00', repoFee: '0.00', saleFee: '0.00', renRedAmt: '0.00', refAmt: '0.00', empNbr: '1', otherFee: '0.00', waiveFee: '0.00', couponAmt: '0.00', owner: ''},{select: '', locNbr: '0398', tranDate: '01/22/2019', tran: 'Write-Off Bankrupt', totalAmt: '538.78', tenderType: '', vehicleStatus: '', pmt: '0', advAmt: '391.00', interest: '15.64', fee: '132.14', csoFee: '0.00', nsfFee: '0.00', lateFee: '0.00', dmvFee: '0.00', calloffFee: '0.00', repoFee: '0.00', saleFee: '0.00', renRedAmt: '0.00', refAmt: '0.00', empNbr: '92529682', otherFee: '0.00', waiveFee: '0.00', couponAmt: '0.00', owner: ''}];
	for(let i=0; i<=t.length-1; i++){
	  transLst.push(<tr><td align="center"><input type="radio" name="rad" value="" /></td><td align="center">{t[i].locNbr}</td><td align="center">{t[i].tranDate}</td><td align="left">{t[i].tran}</td><td align="right">$ {t[i].totalAmt}</td><td align="center">{t[i].tenderType}</td><td align="center">{t[i].vehicleStatus}</td><td align="center">{t[i].pmt}</td><td align="right">$ {t[i].advAmt}</td><td align="right">{t[i].interest} %</td><td align="right">$ {t[i].fee}</td><td align="right">$ {t[i].csoFee}</td><td align="right">$ {t[i].nsfFee}</td><td align="right">$ {t[i].lateFee}</td><td align="right">$ {t[i].dmvFee}</td><td align="right">$ {t[i].calloffFee}</td><td align="right">$ {t[i].repoFee}</td><td align="right">$ {t[i].saleFee}</td><td align="right">$ {t[i].renRedAmt}</td><td align="right">$ {t[i].refAmt}</td><td align="center">{t[i].empNbr}</td><td align="right">$ {t[i].otherFee}</td><td align="right">$ {t[i].waiveFee}</td><td align="right">$ {t[i].couponAmt}</td><td align="left">{t[i].owner}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<div className="table-reponsive">
				<table width="100%">
					<thead>
						<tr>
							<th>Select</th>
							<th>Loc Nbr</th>
							<th>Trans Date</th>
							<th>Transaction</th>
							<th>Total Amt</th>
							<th>Tender type</th>
							<th>Vehicle Status</th>
							<th>Pmt #</th>
							<th>Adv Amt</th>
							<th>Interest</th>
							<th>Fee</th>
							<th>CSO  Fee</th>
							<th>NSF Fee</th>
							<th>Late Fee</th>
							<th>DMV Fee</th>
							<th>CallOff Fee</th>
							<th>Repo Fee</th>
							<th>Sale Fee</th> 
							<th>Renewal Reduction Amt</th>
							<th>Refund Amt</th>
							<th>Emp Nbr</th>
							<th>Other Fee</th>
							<th>Waive Fee</th>
							<th>Promotion/Coupon Amt</th>
							<th>Owner</th>
						</tr>
					</thead>
					<tbody>
						{transLst}
					</tbody>
				</table>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 text-center">
					<br/>
					<button type="button">Receipt</button>
					<button type="button">VCR Form</button>
					<button type="button">Agreement</button>
					{/* <button type="button" className="btn-danger">Cancel</button> */}
				</div>
			</div>
		</div>
	
	);
  } 
}