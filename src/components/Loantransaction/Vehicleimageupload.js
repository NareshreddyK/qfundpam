import React, { Component } from "react";

export default class Vehicleimageupload extends Component {

  constructor (props) {
	super(props);
	this.state = {mainDiv:true, vehicleImgMsg: true};
  }    
  
   VehicleImgSuccess(){
	this.setState({mainDiv: true, vehicleImgMsg: false});
  }
  render(){
	
	return (
	
		<div>
            {this.state.mainDiv ? <div className="col-sm-12 form-group">
                     <div className="text-center">
                   <table width="100%">
								<thead>
									<tr>
										<th>VIN Number</th>
										<th>Vehicle Model</th>
										<th>Title Cycle</th>
										<th>Loan Number</th>
										<th>Cust Nbr</th>
										<th>Image Name</th>
										<th colspan="2">Select</th>
									</tr>
								</thead>
								<tbody>
									{this.state.vehicleImgMsg ? 
									<tr>
										<td align="center">1GTAGSGSSGHSRHY</td>
										<td align="center">C/K1500</td>
										<td align="center">TN-2205-10915652</td>
										<td align="center">10915652</td>
										<td align="center">4895729</td>
										<td align="center"></td>
										<td align="center"></td>
										<td align="center"></td>
									</tr> :
                                    <tr>
                                        <td align="center">1GTAGSGSSGHSRHY</td>
                                        <td align="center">C/K1500</td>
                                        <td align="center">TN-2205-10915652</td>
                                        <td align="center">10915652</td>
                                        <td align="center">4895729</td>
                                        <td align="center">IMG_21000.JPG</td>
                                        <td align="center"><button type="button"> ShowVehicleImage </button></td>
                                        <td align="center"><button type="button"> Delete </button></td>
                                    </tr>  }
								</tbody>
							</table> 
							</div>
							<div className="col-sm-12">
							<div className="row"><br/>
								<div className="col-sm-12">
									<h6>Vehicle Images</h6>
								</div>
								<div className="col-sm-3 form-group">
									<input type="file" id="img" name="img" accept="image/*" />
								</div>
								<div className="col-sm-1 form-group">
									<button type="button" className="addTndr"> <i className="fas fa-plus"></i> </button>
								</div>
							</div>
						</div>
							<div className="text-center">
					<button type="button" onClick={() => {this.VehicleImgSuccess()}}>Upload Images</button>
					
					</div>
					
				</div> : null }
        </div>
	
	);
  } 
}