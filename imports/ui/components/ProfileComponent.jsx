import React from 'react';
import i18n from 'meteor/universe:i18n';

export class ProfileComponent extends React.Component {
    render() {
        $(document).ready(function() {
            $('select').material_select();
        });
        return (
            <div>
                <h2>Profile settings</h2>
                <div id="profilback" className="row">
                    <form className="col offset-s1 s10">
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">email</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="email" type="email" className="validate" disabled/>
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="userId">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="userId" type="text" className="validate" disabled/>
                                <label htmlFor="userId">User Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col offset-s3 s6">
                                <input id="useraddres" type="text" className="validate"/>
                                <label htmlFor="useraddres">Addres</label>
                            </div>
                        </div>
                        <div className="switch">
                            <div className="col offset-s4 s4">
                                <label>
                                    Buddy
                                    <input type="checkbox"/>
                                    <span className="lever"></span>
                                    PrintBuddy
                                </label>
                            </div>
                        </div>
                        <div className="input-field col offset-s4 s4">
                            <i className="small material-icons printer">print</i>
                            <select multiple>
                                <option className="" value="" disabled>PrintBuddy settings</option>
                                <option value="1">Delevery</option>
                                <option value="2">Color</option>
                                <option value="3">välj</option>
                                <option value="4">välj</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="input-field col offset-s2 s8">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                <label htmlFor="icon_prefix2">Message</label>
                            </div>
                        </div>
                        <div className="row col offset-s5">
                            <button className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
    export default ProfileComponent
