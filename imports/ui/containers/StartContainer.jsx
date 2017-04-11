import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import Content from '../components/Content';
import Footer from '../components/Footer';


class Start extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
    }

	componentDidMount(){
		const $ = window.$;

		$(document).ready(function () {
		    $(function() {
		      $('a[href*="#"]:not([href="#"])').click(function() {
		        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		          var target = $(this.hash);
		          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		          if (target.length) {
		            $('html, body').animate({
		              scrollTop: target.offset().top
		            }, 1000);
		            return false;
		          }
		        }
		      });
		    });
		})

	}

	render() {
		return (
			<div>
				<Content/>
				<Footer/>
			</div>
		);
	}
}

const StartContainer = createContainer(() => {

    return {
    };
}, Start);


export default StartContainer;
