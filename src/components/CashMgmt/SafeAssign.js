import React, { Component } from "react";

export default class SafeAssign extends Component {
  constructor(props){
    super(props);
    this.state = {mainDiv:true, frstDiv : false};
  }

  nxtBtnFun(str)
  {
    if(str === '1')
    {
        this.setState({frstDiv: true, mainDiv: false});
    }else if(str === '2'){
        this.setState({mainDiv: false, twoDiv:true});
    }else if(str === '3'){
        this.setState({mainDiv: false, lastDiv:true});
    }else if(str === "No")
    {
        this.setState({mainDiv: true, twoDiv:false});
    }
  }
 

  render(){  
    return (
        <div>
                            
            {this.state.mainDiv ? <div><h2>Incorrect Processing Date <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
            <h4>Your Store's processing date does not match the current date. Please choose the option below that fits your situation.</h4>   
			<br/>
            <h5>The End of Day from yesterday was not completed. </h5>
            <button type="button" className="form-group" onClick={() =>{this.nxtBtnFun('1')}}>Next</button>
			<br/>
            <h5>I need to enter the transactions that were manually completed from a previous day. </h5>
            <button type="button" className="form-group" onClick={() =>{this.nxtBtnFun('2')}}>Next</button>
			<br/>
            <h5>None of the above. </h5> 
            <button type="button" className="form-group" onClick={() =>{this.nxtBtnFun('3')}}>Next</button>
                </div> : null }
        {this.state.frstDiv ? <div><h2>Incorrect Processing Date </h2><div className="col-sm-12 text-center"><p> QFund has determined that your location still has drawer(s) assigned. Please de-assign all drawers and then complete End-of-Day.</p>  
        <button type="button" onClick={() => {this.props.drClose('false')}}>Ok</button> </div> </div>: null}

        {this.state.twoDiv ? <div><h2>Incorrect Processing Date - Crash Package Entry</h2>
        <p>Qfund will now place your computer in a special status to allow you to enter all transactions that you completed manually from the previous business day. You will notice that your Task Bar will now appear Flashing. This will be a constant reminder that you are on the incorrect Business Date.</p>
        <p>You will need to complete the following: </p> 
        <p>--Enter all crash packages. (Record the Tender/Disbursement type that was used when you completed the transaction manually.)</p>
        <p>--De-assign all drawers.</p>
        <p>--Complete End-of-Day.</p>
        <p> --Log back in.</p>
        <p>--Begin business for the day.</p>        
        <div className="col-sm-12 text-center">
        <p>Are you sure this is what you wish to do?</p>
        <button type="button" onClick={() => {this.props.SafeFun()}}>Yes</button>
        <button type="button" onClick={() => {this.nxtBtnFun('No')}}>No</button>
        </div>
        </div>: null }
        {this.state.lastDiv ? <div><h2>Incorrect Processing Date</h2>
                
                <div className="col-sm-12 text-center">
                    <p>Please contact the Help Desk.</p> 
                    <button type="button" onClick={() => {this.props.drClose('false')}}>Ok</button>
                </div>
                </div>: null }
        </div>
    );
  }
}