import React from 'react';

import GeoCoder from '../containers/GeoCodeContainer';

export class ProfileComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            address: props.currentUser.address,
            lat: props.currentUser.position.coordinates[1],
            lng: props.currentUser.position.coordinates[0],
            isBuddy: props.currentUser.isBuddy(),
            canColor: props.currentUser.canColor()
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            currentUser: props.currentUser,
            address: props.currentUser.address,
            lat: props.currentUser.position.coordinates[1],
            lng: props.currentUser.position.coordinates[0],
            isBuddy: props.currentUser.isBuddy(),
            canColor: props.currentUser.canColor()
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedUser = {
                position: { type: "Point", coordinates: [ this.state.lng, this.state.lat ] },
                address: this.state.address,
                printBuddy: {
                    canColor: this.state.canColor,
                    isActive: this.state.isBuddy
                }
            }
        console.log("THIS SHOULD BE SENT FOR UPDATE: ", updatedUser); // TODO Metod för att uppdatera currentUsers info!
    }

    handleChange(e) {
        if (this.state.isBuddy) {
            this.setState({
                isBuddy: false,
                canColor: false
            });
        } else {
            this.setState({
                isBuddy: true
            });
        }
    }

    colorChange(e) {
        if (this.state.canColor) {
            this.setState({
                canColor: false
            });
        } else {
            this.setState({
                canColor: true
            });
        }
    }

    onPickAdress(address) {
        this.setState({
            address: address.formatted_address,
            lat: address.geometry.location.lat,
            lng: address.geometry.location.lng
        });
    }

    render() {
        return (
            <div id="profile">
                    <form className="col s10 offset-s1" onSubmit={(this.onSubmit)}>
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">email</i>
                            </label>
                            <div className="input-field col s10 offset-s1 m10 offset-m1">
                                <input id="email" type="email" className="validate" ref="email" value={this.state.currentUser.emails[0].address} disabled/>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="userId">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col s10 offset-s1 m10 offset-m1">
                                <input id="userId" type="text" className="validate" ref="username" value={this.state.currentUser.username} disabled/>
                            </div>
                        </div>
                        <div id="test-geocode" className="row">
                            <div className="col s10 offset-s1 m10 offset-m1">
                                <p>Set your home address</p>
                                <p><strong>{this.state.address}</strong></p>
                                <GeoCoder onPickAdress={(address) => {
                                    this.onPickAdress(address)
                                }}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="switch text-center" id="role-switcher">
                                <div className="col s12">
                                    <label>
                                        Requestor
                                        <input type="checkbox" checked={this.state.isBuddy}
                                               onChange={(e) => this.handleChange(e)}/>
                                        <span className="lever"></span>
                                        PrintBuddy
                                    </label>
                                </div>
                            </div>
                        </div>

                            {this.state.isBuddy ? (
                                <div className="row">
                                    <div className="switch text-center" id="color-switcher">
                                        <div className="col s12">
                                            <label>
                                                Black / White
                                                <input type="checkbox" checked={this.state.canColor}
                                                    onChange={(e) => this.colorChange(e)}/>
                                                <span className="lever"></span>
                                                Color
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ) : (null)}

                        <div className="row profile-modal-row">
                            <button className="col s10 offset-s1 waves-effect waves-light btn">SAVE CHANGES</button>
                        </div>
                    </form>
            </div>
        );
    }
}
    export default ProfileComponent



                            // {this.state.isBuddy ? (
                            //     <div className="switch text-center" id="color-switcher">
                            //         <div className="col s12">
                            //             <label>
                            //                 Black / White
                            //                 <input type="checkbox" checked={this.state.canColor}
                            //                     onChange={(e) => this.colorChange(e)}/>
                            //                 <span className="lever"></span>
                            //                 Color
                            //             </label>
                            //         </div>
                            //     </div>
                            // ) : (null)}

                            // {this.state.isBuddy ? (
                            //     <div ref="buddySelectBox" className="input-field col s6 offset-s3">
                            //         <i className="small material-icons printer">print</i>
                            //         <p>Set your printer settings if you want to be a Budddy!</p>
                            //         <select id="mySelectBox" multiple>
                            //             <option value="qwe" data-type="text-type" disabled> Set here</option>
                            //             <option value="color" data-type="text-type"> Color printer</option>
                            //         </select>
                            //     </div>
                            // ) : (null)}