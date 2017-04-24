import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';

import CreateRequestComponent from "../components/CreateRequestComponent";
import {insert} from '../../api/request/methods';
import {displayError} from '../helpers/errors';
import {insertFile, checkLogin} from '../helpers/googleApiHelper';

class CreateRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, file: {}, downloadUrl: "", googleStatus: "Not uploaded"};
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileSubmit = this.onFileSubmit.bind(this);
        this.onfileChangeHandler = this.onfileChangeHandler.bind(this);

    }

    onfileChangeHandler(evt) {
        this.setState({file: evt.target.files[0]});
    }

    onFileSubmit() {
        if (this.state.file.name) {
            this.setState({isLoading: true});
            checkLogin().then((isSignId) => {
                if (!isSignId) {
                    gapi.auth2.getAuthInstance().signIn();
                    this.setState({isLoading: false});
                } else {
                    insertFile(this.state.file).then((url) => {
                        console.log(url)
                        this.setState({googleStatus: "uploaded!!!!!"});
                        this.setState({downloadUrl: url});
                        this.setState({isLoading: false});
                    }, (err) =>{
                        // todo maybe better error. Just log out the user now and then need try again
                        console.log(err);
                        gapi.auth2.getAuthInstance().signOut();
                        this.setState({isLoading: false});
                        this.setState({googleStatus: "something went wrong, Try sign in again"});
                    });
                }
            });
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
                        displayError("Wrong!", 'You need to login to add request');
                    } else if (err.error === 'request.insert.invalidDate') {
                        displayError("Back to the Future!", "You need to select 'Today' or a future date!");
                    } else {
                        // Unexpected error, handle it in the UI somehow
                        displayError("Error!", 'Something completely unexpected went terribly wrong :( ');
                    }
                }
            });
        } else {
            displayError("No No!", "You need to upload file to google drive!");
        }
    }

    render() {
        return (
            <div>
                <h2>CreateRequest Container</h2>
                <CreateRequestComponent isLoading={this.state.isLoading} googleStatus={this.state.googleStatus}
                                        submit={this.onSubmit}
                                        fileChangeHandler={this.onfileChangeHandler}
                                        loginGoogleSubmit={this.onFileSubmit}/>
            </div>
        );
    }
}

const CreateRequestContainer = createContainer(() => {

    return {};
}, CreateRequest);


export default CreateRequestContainer;