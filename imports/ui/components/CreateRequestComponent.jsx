import React from 'react';

class CreateRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            range: "500",
            dateClassName: "datepicker",
            delivery: false,
        }
    }
    componentDidMount() {
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

    handleDeliveryChange(e) {
        if (this.state.delivery) {
            this.setState({ delivery: false });
        } else {
            this.setState({ delivery: true });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.refs.lastDate.value) {
            this.setState({ dateClassName: "datepicker invalid" });
        } else {
            const request = {
                delivery: this.refs.delivery.checked,
                needColor: this.refs.needColor.checked,
                radius: parseInt(this.state.range),
                lastDate: new Date(this.refs.lastDate.value),
                lastTime: this.refs.lastTime.value.trim(),
                reward: parseInt(this.refs.reward.value),
                pages: parseInt(this.refs.pages.value),
                copies: parseInt(this.refs.copies.value),
                currency: this.refs.currency.value,
                title: this.refs.title.value.trim()
            }
            this.props.submit(request)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m8 l6 xl4 offset-m2 offset-l3 offset-xl4 create-request">
                    <h4 className="center-align">CREATE REQUEST</h4>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row file-row">
                            <div className="file-field input-field col s10">
                                <div className="btn">
                                    <span>File</span>
                                    <input type="file" required/>
                                </div>
                                <div className="file-path-wrapper">
                                    <input className="file-path validate" type="text" placeholder="Upload the document" />
                                </div>
                            </div>
                            <div className="col s2">
                            </div>
                        </div>
                        <div className="row margin-bottom-after" >
                            <div className="input-field col s8 offset-s2" >
                                <input ref="title" className="validate" id="input-text" type="text" maxLength="40" required />
                                <label htmlFor="input-text">Job title</label>
                            </div>
                        </div>
                        <div className="switch center-align">
                            <label className="first-switch">
                                Black/White
                                <input type="checkbox" ref="needColor" />
                                <span className="lever"></span>
                                Color
                            </label>
                        </div>
                        <div className="switch center-align">
                            <label className="second-switch">
                                Pickup Yourself
                                <input type="checkbox" ref="delivery" 
                                    checked={this.state.delivery}
                                    onChange={(e) => this.handleDeliveryChange(e)}
                                />
                                <span className="lever"></span>
                                Request Delivery
                            </label>
                        </div>

                        {!this.state.delivery ? (
                            <div>
                                <p className="center-align">How far are you willing to travel for a pickup?</p>
                                <div className="row margin-bottom-after">
                                    <p className="center-align col s2">{this.state.range} m</p>
                                    <p className="range-field col s8">
                                        <input onChange={this.changeRange.bind(this)} ref="range" type="range" id="test5" value={this.state.range} min="100" max="10000" />
                                    </p>
                                </div>
                            </div>
                            ) : (null)}

                        <div className="row" >
                            <div className="input-field inline col s4 offset-s2" >
                                <input id="number" type="number" ref="pages" className="validate" required />
                                <label htmlFor="number">Nr of Pages</label>
                            </div>
                            <div className="input-field inline col s4" >
                                <input id="number" type="number" ref="copies" className="validate" required />
                                <label htmlFor="number">Nr of Copies</label>
                            </div>
                        </div>
                        <div className="row margin-bottom-after" >
                            <div className="input-field col s4 offset-s2" >
                                <input id="number" type="number" ref="reward" className="validate" required />
                                <label htmlFor="number">Reward</label>
                            </div>
                            <div className="input-field col s4">
                                <select ref="currency">
                                    <option defaultValue="sek">SEK</option>
                                    <option value="eur">EUR</option>
                                    <option value="usd">USD</option>
                                </select>
                                <label>Currency</label>
                            </div>
                        </div>
                        <p className="center-align">Set a last date for pick-up/delivery</p>
                        <div className="row margin-bottom-after">
                            <div className="col s4 offset-s2 input-field inline">
                                <input id="date" type="date" ref="lastDate" className={this.state.dateClassName} required/>
                                <label htmlFor="date">Date</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="timepicker" ref="lastTime" type="time" required/>
                                <label htmlFor="timepicker"></label>
                            </div>
                        </div>
                        
                        <div className="center-align">
                            <button className="btn-large waves-effect waves-light margin-bottom-after" type="submit" name="action">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

CreateRequest.propTypes = {
    submit: React.PropTypes.func,
}



export default CreateRequest;