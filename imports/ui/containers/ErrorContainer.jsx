import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import ErrorComponent from '../components/ErrorComponent';
import Nav from '../components/Nav';

class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        $("#prepage").fadeOut(200);
    }

    render() {
        return (
           <div>
               <ErrorComponent/>
           </div>
       );
    }
}

const ErrorContainer = createContainer(() =>{

    return{
    };
}, Error404);

ErrorContainer.propTypes = {

};

export default ErrorContainer;
