import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';
import { browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';

import CreateRequestComponent from "../components/CreateRequestComponent";
import { insert } from '../../api/request/methods';
import { displayError } from '../helpers/errors';
import { insertFile, checkLogin } from '../helpers/googleApiHelper';

class CreateRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: false, file: {}, downloadUrl: "", googleStatus: "Upload to google drive" };
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileSubmit = this.onFileSubmit.bind(this);
        this.onfileChangeHandler = this.onfileChangeHandler.bind(this);

    }

    onfileChangeHandler(evt) {
        this.setState({ file: evt.target.files[0] });
    }

    onFileSubmit() {
        if (this.state.file.name) {
            if ($(".copies")[0].value > 0) {
                if ($(".pages")[0].value > 0) {
                    this.setState({ isLoading: true });
                    checkLogin().then((isSignId) => {
                        if (!isSignId) {
                            gapi.auth2.getAuthInstance().signIn().then(() => {
                                this.setState({ isLoading: false });
                                this.onFileSubmit();
                            });
                        } else {
                            insertFile(this.state.file).then((url) => {
                                this.setState({ googleStatus: "Uploaded" });
                                this.setState({ downloadUrl: url });
                                this.setState({ isLoading: false });
                                $(".the-spec").removeClass("disabled");
                                $('ul.tabs').tabs('select_tab', 'specification');
                            }, (err) => {
                                // todo maybe better error. Just log out the user now and then need try again
                                console.log(err);
                                gapi.auth2.getAuthInstance().signOut();
                                this.setState({ isLoading: false });
                                this.setState({ googleStatus: "something went wrong, Try sign in again" });
                            });
                        }
                    });
                } else {
                    displayError(i18n.__('other.whoops'), i18n.__('container.createrequestcontainer.errorPages'));
                }
            } else {
                displayError(i18n.__('other.whoops'), i18n.__('container.createrequestcontainer.errorCopies'));
            }
        } else {
            displayError(i18n.__('other.whoops'), i18n.__('container.createrequestcontainer.errorDocument'));
        }
    }

    componentDidMount() {
    }

    onSubmit(request) {
        if (this.state.downloadUrl) {
            request.position = Meteor.user().position;
            request.docURL = this.state.downloadUrl;
            insert.call(request, (err, res) => {
                if (err) {
                    if (err.error === 'request.insert.unauthorized') {
                        displayError(i18n.__('other.whoops'), i18n.__('container.createrequestcontainer.errorLogin'));
                    } else if (err.error === 'request.insert.invalidDate') {
                        displayError(i18n.__('container.createrequestcontainer.errorDate'), i18n.__('container.createrequestcontainer.errorDateMsg'));
                    } else {
                        // Unexpected error, handle it in the UI somehow
                        displayError(i18n.__('container.createrequestcontainer.errorUnexpect'), i18n.__('container.createrequestcontainer.errorUnexpectMsg'));
                    }
                }
            });
        } else {
            displayError(i18n.__('container.createrequestcontainer.errorUpload'), i18n.__('container.createrequestcontainer.errorUploadMsg'));
        }
    }

    render() {
        return (
            <div className="create-request-container">
                <CreateRequestComponent isLoading={this.state.isLoading} googleStatus={this.state.googleStatus}
                    submit={this.onSubmit} googleUrl={this.state.downloadUrl}
                    fileChangeHandler={this.onfileChangeHandler}
                    loginGoogleSubmit={this.onFileSubmit} />
            </div>
        );
    }
}

const CreateRequestContainer = createContainer(() => {

    return {};
}, CreateRequest);


export default CreateRequestContainer;