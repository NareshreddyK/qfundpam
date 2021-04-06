import React, { Component } from "react";
import Datepicker from '../common/Datepicker';
import Popup from '../Popup';

export default class AdditionalNetSpendDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { cardType: '', cardNbr: '', confirmCardNbr: '', cardPlanType: '', fundSource: '', regFee: '', loadFee: '', loadFee: '', waiveregFee: '', waiveLoadFee: '', statusInfo: '', mainDiv:true};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    componentWillMount() {
        this.setState({ statusInfo: this.props.info });
    }
    menus(str) {
        this.refs.Popup.dispBlk(str);
    }
    swipeCardFun(str) {
        
        if (str === "swDoneFun" || str === "oKFun") {
            this.setState({statusInfo: str, mainDiv : false});
            this.props.callBackFun(str);
        } else {
            this.setState({ statusInfo: str });
        }
    }
    adClose(str){
        this.props.callBackFun(str);
        this.setState({mainDiv : true, statusInfo: str});
    }

    render() {

        return (
            <div>
                {this.state.mainDiv ? <div className="col-sm-12">
                    <div className="innerBlockContainer">
                        <div className="col-sm-12">
                            <h2> Additional/NetSpendDetails <span onClick={() => { this.props.addClose() }} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                            <div className="row">
                                {(this.state.statusInfo === "New") ?
                                    <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                                        <tbody>
                                            <tr>
                                                <td className="bgHighlt"> Card Type <span class="text-danger"><i class="fa fa-asterisk"></i></span><br />
                                                    <select name="cardType" value={this.state.cardType} onChange={this.handleChange}>
                                                        <option value="PREPAID_VISA"> PREPAID_VISA </option>
                                                    </select>
                                                </td>
                                                <td className="bgHighlt"> Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span><br />
                                                    <input type="text" name="cardNbr" value={this.state.cardNbr} onChange={this.handleChange} />
                                                </td>
                                                <td className="bgHighlt"> Confirm Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span><br />
                                                    <input type="text" name="confirmCardNbr" value={this.state.confirmCardNbr} onChange={this.handleChange} />
                                                </td>
                                                <td className="bgHighlt"> Card Plan Type <span class="text-danger"><i class="fa fa-asterisk"></i></span><br />
                                                    <select name="cardPlanType" value={this.state.cardPlanType} onChange={this.handleChange}>
                                                        <option value=""></option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="bgHighlt"> Fund Source <span class="text-danger"><i class="fa fa-asterisk"></i></span><br />
                                                    <select name="fundSource" value={this.state.fundSource} onChange={this.handleChange}>
                                                        <option value=""></option>
                                                    </select>
                                                </td>
                                                <td className="bgHighlt"> Registration Fee <br /> <input type="text" name="regFee" value={this.state.regFee} onChange={this.handleChange} /> </td>
                                                <td className="bgHighlt"> Load Fee <br />
                                                    <input type="text" name="loadFee" value={this.state.loadFee} onChange={this.handleChange} />
                                                </td>
                                                <td className="bgHighlt"> Load Amt <span class="text-danger"><i class="fa fa-asterisk"></i></span><br /><input type="text" name="loadAmt" value={this.state.loadAmt} onChange={this.handleChange} /> </td>
                                            </tr>
                                            <tr>
                                                <td className="bgHighlt"> Waive Registration Fee <br /><input type="text" name="waiveregFee" value={this.state.waiveregFee} onChange={this.handleChange} />
                                                </td>
                                                <td className="bgHighlt"> Waive Load Amt<br /> <input type="text" name="waiveLoadFee" value={this.state.waiveLoadFee} onChange={this.handleChange} /> </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" className="text-center">
                                                    <button type="button" onClick={() => this.menus('swipeCard')}> Swipe Card </button>
                                                    <button type="button"> Reset </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> : null
                                }
                                {(this.state.statusInfo === "Ex") ?
                                    <table width="100%" border="0" className="noBorder noStripe cellGap">
                                        <tbody>
                                            <tr>
                                                <td className="bgHighlt"> Card Type <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                                    <select name="cardType" value={this.state.cardType} onChange={this.handleChange}>
                                                        <option value="PREPAID_VISA"> PREPAID_VISA </option>
                                                    </select>
                                                </td>
                                                
                                                <td className="bgHighlt"> Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                                    <input type="text" name="cardNbr" value={this.state.cardNbr} onChange={this.handleChange} />
                                                </td>
                                                <td className="bgHighlt"> Confirm Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                                    <input type="text" name="confirmCardNbr" value={this.state.confirmCardNbr} onChange={this.handleChange} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" className="text-center">
                                                    <button type="button" onClick={() => this.menus('swipeCard')}> Swipe Card </button>
                                                    <button type="button"> Reset </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> : null
                                }
                                {(this.state.statusInfo === "Dash") ?
                                    <table width="100%" border="0" className="noBorder noStripe cellGap">
                                        <tbody>
                                            <tr>
                                                <td className="bgHighlt"> Card Type <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                                    <select name="cardType" value={this.state.cardType} onChange={this.handleChange}>
                                                        <option value="PREPAID_VISA"> PREPAID_VISA </option>
                                                    </select>
                                                </td>
                                                <td className="bgHighlt"> Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                                    <input type="text" name="cardNbr" value={this.state.cardNbr} onChange={this.handleChange} />
                                                </td>
                                                <td className="bgHighlt"> Confirm Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                                    <input type="text" name="confirmCardNbr" value={this.state.confirmCardNbr} onChange={this.handleChange} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" className="text-center">
                                                    <button type="button" onClick={() => this.swipeCardFun("swpCard")}> Swipe Card </button>
                                                    <button type="button"> Reset </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> : null
                                }
                                {(this.state.statusInfo === "swpCard") ?
                                    <table width="100%" border="0" className="noBorder noStripe cellGap">
                                        <tbody>
                                            <tr>
                                                <td> Card# <br /> <input type="text" name="Card Nbr" value="1882" /></td>
                                                <td valign="bottom"> <button type="button">Swipe Card</button></td>
                                            
                                                <td> Expiry Date <br/>
                                                    <Datepicker id={'exDate'} name={'exDate'} ref='exDate' value="Feb" />
                                                </td>
                                                <td valign="bottom">
                                                    <Datepicker id={'exDate'} name={'exDate'} ref='exDate' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="6" className="text-center">
                                                    <button type="button" onClick={() => this.swipeCardFun("swDoneFun")} > Done </button>
                                                    <button type="button" onClick={() => { this.adClose("Dash") }}> Cancel </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>: null
                                }
                            </div>
                        </div>
                    </div>
                </div> : null }
                {(this.state.statusInfo === "swDoneFun") ?
                    <div className="col-sm-12">          
                    <div className="innerBlockContainer">
                        <h2>Please Confirm</h2>
                        <div className="text-center">
                            <p> Please verify that the name of the card matches the customer's ID and that the last 4 Digits of the card being used in 1882.</p>
                            <p>Click on OK to continue OR Click on Cancel to go back.</p>
                            <button type="button" onClick={() => this.swipeCardFun("oKFun")}>Ok</button>
                            <button type="button" onClick={() => { this.adClose('swpCard') }}>Cancel</button>
                        </div>
                    </div>
                    </div> : <div className="col-sm-12 form-group">  
                            {(this.state.statusInfo === "oKFun") ?        
                             <div className="innerBlockContainer">
                                <h2> Additional/NetSpendDetails <span onClick={() => { this.props.addClose() }} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                                <table width="100%" border="0" className="noBorder noStripe cellGap">
                                    <tbody>
                                    <tr>
                                        <td className="bgHighlt"> Card Type <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                            <select name="cardType" value={this.state.cardType} onChange={this.handleChange} disabled>
                                                <option value="PREPAID_VISA"> PREPAID_VISA </option>
                                            </select>
                                        </td>
                                        
                                        <td className="bgHighlt"> Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/>
                                            <input type="text" name="cardNbr" value="1882" onChange={this.handleChange} />
                                        </td>

                                        <td className="bgHighlt"> Confirm Card Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span> <br/>
                                            <input type="text" name="confirmCardNbr" value="1882" onChange={this.handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" className="text-center">
                                            <button type="button" disabled> Swipe Card </button>
                                            <button type="button"> Reset </button>
                                        </td>
                                    </tr>
                                        </tbody>
                                </table> 
                            </div> : null }
                            </div>
                }
                <Popup ref='Popup' />
            </div>
        );
    }
}