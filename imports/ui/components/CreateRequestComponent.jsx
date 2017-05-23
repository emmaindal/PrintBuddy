import React from 'react';
import i18n from 'meteor/universe:i18n';
import TimePicker from 'material-ui/TimePicker';
import moment from "moment";
import { displayError } from '../helpers/errors';

class CreateRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            range: "500",
            dateClassName: "datepicker",
            delivery: null,
            time: null
        }
    }

    componentDidMount() {
        $('ul.tabs').tabs();

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year
            format: 'yyyy-mm-dd',
            today: "Today"
        });

        $('select').material_select();
    }

    changeRange() {
        const range = this.refs.range.value;
        this.setState({
            range
        });
    }
    handleTimeChange(e, date) {
        this.setState({
            time: date
        });
    }
    handleDeliveryChange(e) {
        if (this.state.delivery) {
            this.setState({ delivery: false });
        } else {
            this.setState({ delivery: true });
        }
    }
    handleRadioChange(e) {
        if (e.target.id === "test5") {
            this.setState({
                delivery: true
            });
        } else {
            this.setState({
                delivery: false
            });
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const tid = this.state.time;
        const lastTime = (moment(tid).format().slice(11,-9));
        if (this.state.delivery === null) {
            displayError(i18n.__('components.createrequestcomponent.whoops'), i18n.__('components.createrequestcomponent.errorDelivery'));
            return;
        }
        if (!this.state.time) {
            displayError(i18n.__('components.createrequestcomponent.whoops'), i18n.__('components.createrequestcomponent.errorDate'));
            return;
        }
        if (!this.state.time) {
            displayError(i18n.__('components.createrequestcomponent.whoops'), i18n.__('components.createrequestcomponent.errorTime'));
            return;
        }
        if (!this.refs.lastDate.value) {
            this.setState({ dateClassName: "datepicker invalid" });
        } else {
            const request = {
                delivery: this.state.delivery,
                needColor: this.refs.needColor.checked,
                radius: parseInt(this.state.range),
                lastDate: new Date(this.refs.lastDate.value),
                lastTime: lastTime,
                reward: parseInt(this.refs.reward.value),
                pages: parseInt(this.refs.pages.value),
                copies: parseInt(this.refs.copies.value),
                currency: this.refs.currency.value,
                title: this.refs.title.value.trim()
            }
            this.props.submit(request)
        }
    }
    renderFirstSection() {
        return (
            <div>
                <div className="row file-row">
                    <div className="file-field input-field col s10">
                        <div className="btn">
                            <span>File</span>
                            <input type="file" required onChange={this.props.fileChangeHandler} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"
                                placeholder={i18n.__('components.createrequestcomponent.pickADocument')} />
                        </div>
                    </div>
                    <div className="col s2">
                    </div>
                </div>

                <div className="row margin-bottom-after">
                    <div className="input-field inline col s3 offset-s2">
                        <input id="number" type="number" ref="pages" className="validate pages" required />
                        <label htmlFor="number">{i18n.__('components.createrequestcomponent.nrOfPages')}</label>
                    </div>
                    <div className="input-field inline col s3 offset-s2">
                        <input id="number" type="number" ref="copies" className="validate copies" required />
                        <label htmlFor="number">{i18n.__('components.createrequestcomponent.nrOfCopies')}</label>
                    </div>
                </div>
                <div className="switch center-align">
                    <label className="first-switch">
                        {i18n.__('components.createrequestcomponent.blackWhite')}
                                <input type="checkbox" ref="needColor" />
                        <span className="lever"></span>
                        {i18n.__('other.color')}
                            </label>
                </div>
                <div className="row upload-row">
                    <div className="center-align">
                        {this.props.isLoading ?
                            <div id="createRequest-sk-circle" className="sk-circle">
                                <div className="sk-circle1 sk-child"></div>
                                <div className="sk-circle2 sk-child"></div>
                                <div className="sk-circle3 sk-child"></div>
                                <div className="sk-circle4 sk-child"></div>
                                <div className="sk-circle5 sk-child"></div>
                                <div className="sk-circle6 sk-child"></div>
                                <div className="sk-circle7 sk-child"></div>
                                <div className="sk-circle8 sk-child"></div>
                                <div className="sk-circle9 sk-child"></div>
                                <div className="sk-circle10 sk-child"></div>
                                <div className="sk-circle11 sk-child"></div>
                                <div className="sk-circle12 sk-child"></div>
                            </div> :
                            <div className="btn-large btn-upload" onClick={this.props.loginGoogleSubmit}><span>{this.props.googleStatus}</span></div>
                        }
                    </div>
                </div>

            </div>
        );

    }
    renderSecondSection() {
        return (
            <div>
                <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="input-field col s8 offset-s2">
                        <input ref="title" className="validate" id="input-text" type="text" maxLength="40"
                            required />
                        <label htmlFor="input-text">{i18n.__('components.createrequestcomponent.jobDescription')}</label>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: "25px" }}>
                    <div className="input-field col s3 offset-s2">
                        <input id="number" type="number" ref="reward" className="validate" required />
                        <label htmlFor="number">{i18n.__('components.createrequestcomponent.reward')}</label>
                    </div>
                    <div className="input-field col s3 offset-s2">
                        <select ref="currency">
                            <option defaultValue="sek">{i18n.__('components.createrequestcomponent.SEK')}</option>
                            <option value="eur">{i18n.__('components.createrequestcomponent.EUR')}</option>
                            <option value="usd">{i18n.__('components.createrequestcomponent.USD')}</option>
                        </select>
                        <label>{i18n.__('components.createrequestcomponent.currency')}</label>
                    </div>
                </div>
                <div className="row" style={{textAlign: "center", marginBottom: "15px"}}>                
                        <div className="col s4 offset-s2">
                            <input onChange={(e) => this.handleRadioChange(e)} className="with-gap" name="group2" type="radio" id="test5"  />
                            <label style={{marginLeft: "-20px"}} htmlFor="test5">{i18n.__('components.createrequestcomponent.wantDelivery')}</label>
                        </div>
                        <div className="col s5">
                            <input onChange={(e) => this.handleRadioChange(e)} ref="buddyCheck" className="with-gap" name="group2" type="radio" id="test6"  />
                            <label htmlFor="test6">{i18n.__('components.createrequestcomponent.wantPickup')}</label>
                        </div>
                    </div>
                {this.state.delivery === false ? (
                    <div style={{ marginBottom: "25px" }}>
                        <p className="center-align">{i18n.__('components.createrequestcomponent.travelMessage')}</p>
                        <div className="row">
                            <p className="center-align col s2">{this.state.range} m</p>
                            <p className="range-field col s8">
                                <input onChange={this.changeRange.bind(this)} ref="range" type="range"
                                    id="test5" value={this.state.range} min="100" max="10000" />
                            </p>
                        </div>
                    </div>
                ) : (null)}
                <p style={{marginTop: "25px"}} className="center-align">{i18n.__('components.createrequestcomponent.setLastDate')}</p>
                <div className="row" style={{ marginBottom: "15px" }}>
                    <div className="col s3 offset-s2 input-field inline" style={{marginTop: "0"}}>
                        <input id="date set-date" type="date" ref="lastDate" placeholder="Last Date" className={this.state.dateClassName} required /> 
                    </div>
                    <div className="input-field col s3 offset-s2" style={{marginTop: "0"}}>
                        <TimePicker id="timepicker" format="24hr" hintText="Last Time" ref="lastTime"
                        value={this.state.time} onChange={this.handleTimeChange.bind(this)} 
                        textFieldStyle={{width: "100%", fontSize: "1rem", color: "#9e9e9e!important", borderBottom: "1px solid #9e9e9e", height: "39px", lineHeight: "12px"}}
                        dialogStyle={{paddingTop: "5vh"}} />
                    </div>
                </div>

                <div className="center-align">
                    <button className="btn-large waves-effect waves-light margin-bottom-after btn-upload" type="submit"
                        name="action">{i18n.__('components.createrequestcomponent.submit')}
                    </button>
                </div>
                
            </div>
        );
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l4 offset-m2 offset-l4 create-request" style={{ padding: "0px" }}>
                    <form id="request-form" onSubmit={this.onSubmit.bind(this)}>
                        <ul id="request-tabs" className="tabs row">
                            <li className="tab col s3"><a className="active" href="#documentation">{this.props.googleUrl ? (<i className='material-icons small'>done</i>) : null}
                                Document</a></li>
                            <li className="tab col s3 the-spec disabled"><a href="#specification">{i18n.__('components.createrequestcomponent.details')}</a></li>
                        </ul>
                        <div id="documentation" className="col s12">{this.renderFirstSection()}</div>
                        <div id="specification" className="col s12">{this.renderSecondSection()}</div>
                    </form>
                </div>
            </div>
        );
    }
}

CreateRequest.propTypes = {
    submit: React.PropTypes.func,
    fileChangeHandler: React.PropTypes.func,
    loginGoogleSubmit: React.PropTypes.func,
    googleStatus: React.PropTypes.string,
    isLoading: React.PropTypes.bool,
}


export default CreateRequest;

