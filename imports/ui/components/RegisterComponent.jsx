import React from 'react';
import i18n from 'meteor/universe:i18n';

export class RegisterComponent extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('select').material_select();
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h4 className="text-center">Register Account</h4>
                    <form className="col offset-s1 s10">
                        <div className="row">
                            <label htmlFor="email">
                                <i className="small material-icons">email</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="userId">
                                <i className="small material-icons">perm_identity</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="userId" type="text" className="validate" />
                                <label htmlFor="userId">User Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="password">
                                <i className="small material-icons">lock</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="confirmpassword">
                                <i className="small material-icons">lock</i>
                            </label>
                            <div className="input-field col offset-s3 s6">
                                <input id="confirmpassword" type="password" className="validate" />
                                <label htmlFor="confirmpassword">Confirm password</label>
                            </div>
                        </div>
                        <div className="switch">
                            <div className="col offset-s4 s4">
                                <label>
                                    Buddy
                                        <input type="checkbox" />
                                    <span className="lever"></span>
                                    PrintBuddy
                                    </label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </form>
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
                </div>
            </div>
        );
    }
}
export default RegisterComponent
