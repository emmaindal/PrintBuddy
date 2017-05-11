import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ErrorComponent from '../components/ErrorComponent';

class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
    }
    componentDidMount(){
        $(document).ready(function(){
            $("#prepage").fadeOut(200);
            $('.modal-trigger').leanModal();
        });
    }

    onSubmitEmail(form){
		Meteor.call(
            'sendEmail',
            '<info@printbuddy.se>',
            form.email,
            'From about form name:' + form.name,
            form.text
        );
	}

    render() {
        return (
           <div>
               <ErrorComponent onSubmitEmail={this.onSubmitEmail}/>
           </div>
       );
    }
}

const ErrorContainer = createContainer(() =>{

    return{
    };
}, Error404);

ErrorContainer.propTypes = {
    onSubmitEmail: React.PropTypes.func
};

export default ErrorContainer;
