import React from 'react';
import i18n from 'meteor/universe:i18n';

import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.popLoginModal = this.popLoginModal.bind(this);
        this.popRegisterModal = this.popRegisterModal.bind(this);
    }
    componentDidMount() {
        $('.slider').slider({
            indicators: false,
            height: "inherit"
        });
        
        //start at top on refresh page

        //hide scrollToTopp icon at top of page
        $('#scrollToTop').hide();
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('#scrollToTop').fadeIn("slow");
            } else {
                $('#scrollToTop').fadeOut("fast");
            }
        });
        
        //Click event to scroll to top
        $('#scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

        //Infite animation for arrow bounce
        setInterval(() => {
            $(".bounce-arrow").addClass("animated bounce");
        }, 5000);
        setInterval(() => {
            $(".bounce-arrow").removeClass("animated bounce");
        }, 6000);

        //animation-in on scroll
        $(".sub-title").css('opacity', '0');
        $(".img-info-two").css('opacity', '0');
        $("#second-row").css('opacity', '0');
        $(".laptop-start").css('opacity', '0');
        $(".sub-title-two").css('opacity', '0');
        $(".tech-info").css('opacity', '0');
        $("#tech-logos").css('opacity', '0');
        $(".our-team-heading").css('opacity', '0');
        $(".team-photos").css('opacity', '0');
        var options = [
            {selector: '.sub-title', offset: 100, callback: function() {
                $(".sub-title").show();
                $(".sub-title").addClass("animated fadeInUp");
            } },
            {selector: '.img-info-two', offset: 100, callback: function() {
                $(".img-info-two").show();
                $(".img-info-two").addClass("animated fadeInUp");
            } },
            {selector: '#second-row', offset: 100, callback: function() {
                $("#second-row").show();
                $("#second-row").addClass("animated fadeInUp");
            } },
            {selector: '.laptop-start', offset: 350, callback: function() {
                $(".laptop-start").show();
                $(".laptop-start").addClass("animated fadeIn");
            } },
            {selector: '.sub-title-two', offset: 100, callback: function() {
                $(".sub-title-two").show();
                $(".sub-title-two").addClass("animated fadeIn");
            } },
            {selector: '.tech-info', offset: 100, callback: function() {
                $(".tech-info").show();
                $(".tech-info").addClass("animated fadeIn");
            } },
            {selector: '#tech-logos', offset: 100, callback: function() {
                $("#tech-logos").show();
                $("#tech-logos").addClass("animated fadeIn");
            } },
            {selector: '.our-team-heading', offset: 100, callback: function() {
                $(".our-team-heading").show();
                $(".our-team-heading").addClass("animated fadeIn");
            } },
            {selector: '.team-photos', offset: 100, callback: function() {
                $(".team-photos").show();
                $(".team-photos").addClass("animated fadeIn");
            } },
        ];
        Materialize.scrollFire(options);
    }
    popLoginModal() {
        $('#register-modal').closeModal();
        $('#login-modal').openModal({
            inDuration: 100,
            outDuration: 100,
        });
    }
    popRegisterModal() {
        $('#login-modal').closeModal();
        $('#register-modal').openModal({
            inDuration: 100,
            outDuration: 100,
        });
        $('#register-modal').animate({
            scrollTop: 0
        }, 10);
    }

    render() {
        return (
            <div className="start-page">
                <div>
                    <i className="fa fa-angle-double-up" id="scrollToTop" aria-hidden="true"></i>
                </div>
                <nav role="navigation">
                    <div style={{ marginLeft: "5%", marginRight: "5%" }} className="nav-wrapper">
                        <a id="logo-container" href="/start" className="brand-logo">PRINTBUDDY</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#contact">   {i18n.__('components.content.contact')}</a></li>
                            <li><a id="btn-poploginmodal"  onClick={this.popLoginModal}>   {i18n.__('components.content.login')}</a></li>

                        </ul>

                        <ul id="mobile-nav" className="side-nav">
                            <li><a href="#contact">{i18n.__('components.content.contact')}</a></li>
                            <li><a onClick={this.popLoginModal}>{i18n.__('components.content.login')}</a></li>
                        </ul>
                        <a href="#" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
                <div id="index-banner">
                    <div id="start" className="section no-pad-bot">
                        <div className="container">
                            <h1 className="header center teal-text text-lighten-2"></h1>
                            <div className="row center">
                                <h5 className="header col s12 light"></h5>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="welcome col s12 m12 l10">
                            <h1 className="slogan animated fadeInDownBig"><span className="main-slogan"> {i18n.__('components.content.mainTitle')}</span><br /><span className="slogan-smaller">{i18n.__('components.content.mainTitle2')} <span>{i18n.__('components.content.mainTitle3')}</span>.</span></h1>

                            <a id="btn-popregistermodal" onClick={this.popRegisterModal} className="btn btn-1 sign-up animated fadeIn">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                {i18n.__('components.content.join')}
                            </a>
                            <h6 className="animated fadeIn"><div onClick={this.popLoginModal}><a style={{ opacity: "0.9" }} >{i18n.__('components.content.AlreadyHaveAccount')}</a></div></h6>
                            <div className="bounce-arrow"><a href="#info-two"><i className="arrow-btn material-icons">keyboard_arrow_down</i></a></div>
                        </div>
                    </div>

                </div>
                <div className="mobile-start animated fadeInUp hide-on-med-and-down">
                    <div className="mobile-overlay">
                        <div className="slider">
                            <ul className="slides">
                                <li>
                                    <img />
                                    <div className="caption center-align">
                                        <h3>PrintBuddy<br/> {i18n.__('components.content.mobileSlideTitle1')}</h3>
                                        <h5 className="light grey-text text-lighten-3" style={{paddingTop: '10%', lineHeight: '1.4'}}> {i18n.__('components.content.mobileSlideInfo1')}<br/><br/> #PrintBuddy</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="caption center-align">
                                        <h3>{i18n.__('components.content.mobileSlideTitle2')}</h3>
                                        <h5 className="light grey-text text-lighten-3" style={{paddingTop: '10%', lineHeight: '1.4'}}>{i18n.__('components.content.mobileSlideInfo2')}<br/><br/> #PrintBuddy</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="caption left-align">
                                        <h3>{i18n.__('components.content.mobileSlideTitle3')}</h3>
                                        <h5 className="light grey-text text-lighten-3" style={{paddingTop: '10%', lineHeight: '1.4'}}>{i18n.__('components.content.mobileSlideInfo3')}</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/assets/images/mobile-device.png" alt="mobile-device" />
                </div>

                <div className="info-two section scrollspy" id="info-two">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h2 className="sub-title">{i18n.__('components.content.sectionOneMainTitle')}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <img className="img-info-two" src="/assets/images/computer.jpg" alt="computer display printbuddy app" />
                        </div>
                    </div>
                    <div style={{ marginBottom: "0" }} className="row" id="second-row">
                        <div style={{ marginBottom: "7%" }} className="col s12 m10 l3 offset-m1 offset-l1">
                            <div className="icon-block">
                                <h2 className="center">{i18n.__('components.content.sectionOneLeftSubTitle')}</h2>
                                <p className="light">{i18n.__('components.content.sectionOneLeftParagraph')}</p>
                            </div>
                        </div>
                        <div style={{ marginBottom: "7%" }} className="col s12 m10 l3 offset-m1 offset-l1">
                            <div className="icon-block">
                                <h2 className="center">{i18n.__('components.content.sectionOneCenterSubTitle')}</h2>
                                <p className="light">{i18n.__('components.content.sectionOneCenterParagraph')}</p>
                            </div>
                        </div>
                        <div style={{ marginBottom: "7%" }} className="col s12 m10 l3 offset-m1 offset-l1">
                            <div className="icon-block">
                                <h2 className="center">{i18n.__('components.content.sectionOneRightSubTitle')}</h2>
                                <p className="light">{i18n.__('components.content.sectionOneRightParagraph')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-three">
                    <div id="about" className="section">
                        <div className="row">
                            <div className="laptop-row">
                                <div style={{ textAlign: "center" }} className="laptop-start">
                                    <div className="laptop-overlay">
                                        <div className="slider">
                                            <ul className="slides">
                                                <li>
                                                    <img src="/assets/images/laptop-view2.png" alt="Printout delivery service via PrintBuddy"/>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/hand.jpg" alt="Amazing chat conversation with a Printbuddy"/>
                                                </li>
                                                <li>
                                                    <img src="/assets/images/laptop-view3.png" alt="List of printjobs provided via PrintBuddy"/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src="/assets/images/laptop.png" alt="laptop showing PrintBuddy website" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align">
                                <h3 className="sub-title-two">{i18n.__('components.content.sectionTwoMainTitle')}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="login-modal" className="modal login-modal">
                    <div className="modal-content">
                        <i className="material-icons cancel-icon modal-action modal-close ">clear</i>
                        <LoginContainer />
                        <div className="breakit row">
                            <div className="line-break col s10 offset-s1"></div>
                        </div>
                        <div className="row">
                            <div className="col s10 offset-s1" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                                <div>{i18n.__('components.content.modalLoginMessage')}</div>
                                <a onClick={this.popRegisterModal}>{i18n.__('components.content.modalLoginMessageLink')}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="register-modal" className="modal register-modal ">
                    <div id="scrollbar">
                        <div className="modal-content">
                            <i className="material-icons cancel-icon modal-action modal-close ">clear</i>
                            <RegisterContainer />
                            <div className="breakit row">
                                <div className="line-break col s10 offset-s1"></div>
                            </div>
                            <div className="row">
                                <div className="col s10 offset-s1" style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                                    <div>{i18n.__('components.content.modalRegisterMessage')}</div>
                                    <a onClick={this.popLoginModal}>{i18n.__('components.content.modalRegisterMessageLink')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
