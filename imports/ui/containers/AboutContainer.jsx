import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import AboutComponent from '../components/AboutComponent';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
           <div>
               <AboutComponent onSubmitEmail={this.props.onSubmitEmail}/>
           </div>
       );
    }
}

const AboutContainer = createContainer(() =>{

    return{
    };
}, About);

AboutContainer.propTypes = {
    onSubmitEmail: React.PropTypes.func
};

export default AboutContainer;
