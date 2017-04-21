import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {browserHistory} from 'react-router';

import CreateRequestComponent from "../components/CreateRequestComponent";
import {insert} from '../../api/request/methods';
import {displayError} from '../helpers/errors';

class CreateRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLogedInGoogle: false, fileData: {}};
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileSubmit = this.onFileSubmit.bind(this);
        this.onfileChangeHandler = this.onfileChangeHandler.bind(this);

    }

    onfileChangeHandler(evt){
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({fileData: reader.result});
            console.log(reader);
        };
        reader.readAsDataURL(evt.target.files[0]);
    }

    onFileSubmit() {

        if(!gapi.auth2.getAuthInstance().isSignedIn.get()){
            gapi.auth2.getAuthInstance().signIn();
        }else{
            var fileMetadata = {
                'name': 'pb.jpg'
            };
            var media = {
                mimeType: 'image/jpeg',
                body: this.state.fileData
            };

            /*
            gapi.client.drive.files.create({
                resource: fileMetadata,
                media: media,
                fields: 'id'
            }, (err, file) =>  {
                if(err) {
                    console.log(err);
                } else {
                    console.log('File Id:' , file.id);
                }
            }); */



            gapi.client.drive.files.create({
                resource: fileMetadata,
                media: media,
                fields: 'id'
            }).execute(function(resp, raw_resp) {
                console.log('Folder Id: ', resp.id);
            })
        }
    }

    componentDidMount() {
    }

    onSubmit(request) {
        request.position = Meteor.user().position;
        insert.call(request, (err, res) => {
            if (err) {
                if (err.error === 'request.insert.unauthorized') {
                    displayError("Wrong!", 'You need to login to add request');
                } else {
                    // Unexpected error, handle it in the UI somehow
                    displayError("Error!", 'Something went wrong :( ');
                }
            }
        });
    }

    render() {
        return (
            <div>
                <h2>CreateRequest Container</h2>
                <CreateRequestComponent submit={this.onSubmit} fileChangeHandler={this.onfileChangeHandler} loginGoogleSubmit={this.onFileSubmit}/>
            </div>
        );
    }
}

const CreateRequestContainer = createContainer(() => {

    return {};
}, CreateRequest);


export default CreateRequestContainer;