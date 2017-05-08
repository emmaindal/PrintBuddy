import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Nav from '../components/Nav';
import Content from '../components/Content';
import AboutComponent from '../components/AboutComponent';
import Footer from '../components/Footer';


class Start extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
    }
	componentDidMount(){
		const $$ = window.$;

		$$(document).ready(function () {
		    $$(function() {
		      $$('a[href*="#"]:not([href="#"])').click(function() {
		        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		          var target = $$(this.hash);
		          target = target.length ? target : $$('[name=' + this.hash.slice(1) +']');
		          if (target.length) {
		            $$('html, body').animate({
		              scrollTop: target.offset().top
		            }, 1000);
		            return false;
		          }
		        }
		      });
		    });
		})
        $("#prepage").fadeOut(200);
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
				<Content/>
				<AboutComponent onSubmitEmail={this.onSubmitEmail}/>
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
