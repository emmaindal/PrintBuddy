import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {displayError} from  '../helpers/errors';
import { Accounts } from 'meteor/accounts-base';


class Verified extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "Account is verifying"};
    }

    componentDidMount() {

        Accounts.verifyEmail( this.props.location.query.token, ( error ) =>{
            if ( error ) {
                displayError( "Error", error.reason);
            } else {
             this.setState({title:'Account is verified! Thanks!'});
            }
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

const VerifiedContainer = createContainer(() => {

    return {
    };
}, Verified);


export default VerifiedContainer;
