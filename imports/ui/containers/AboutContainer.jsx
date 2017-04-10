import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import AboutComponent from '../components/AboutComponent';
import Footer from '../components/Footer';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        const $ = window.$;
            $(document).ready(function(){
                $('.slider').slider();
            });
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
