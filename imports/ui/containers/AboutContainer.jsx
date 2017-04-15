import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import AboutComponent from '../components/AboutComponent';


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }

    render() {
        return (
           <div>
               <AboutComponent/>
           </div>
       );
    }
}

const AboutContainer = createContainer(() =>{

    return{
    };
}, About);

export default AboutContainer;
