import React from 'react';
import i18n from 'meteor/universe:i18n';
import FlipMove from 'react-flip-move';
import { ShareButtons, generateShareIcon } from 'react-share';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export class PendingBuddiesList extends React.Component {
    popCancelModal() {
        $('#cancelModal2').openModal('open');
    }
    render() {
        return (
            <div className="col s12 m12 l6">
                <ul className="collection with-header" id="pendingbuddieslist">
                    <li className="collection-header"><h5>{i18n.__('components.pendingbuddies.chooseHeader')}</h5><a onClick={this.popCancelModal} className="waves-effect waves-light btn btn-cancel cancel-button">Cancel</a></li>
                    <FlipMove maintainContainerHeight={true}>
                        {this.props.buddylist.length > 0 ? (
                            this.props.buddylist.map((buddy) => {
                                return (
                                    <li className="collection-item" key={buddy._id}>
                                        <div className="content-for-li">
                                            <div className="valign-wrapper">
                                                <i className="round-icon-blue material-icons z-depth-1">sentiment_very_satisfied</i>
                                            </div>
                                            <p className="valign-wrapper">
                                                {buddy.username} {i18n.__('components.pendingbuddies.offeredPrint')}<br />
                                            </p>
                                            <div className="buttongroup">
                                                <button className="btn waves-effect waves-light location-btn" onClick={() => { this.props.onView(buddy) }}><i className="small material-icons">location_on</i></button>
                                                <button className="btn waves-effect waves-light choose-btn" onClick={() => { this.props.onChoose(buddy._id) }}>{i18n.__('components.pendingbuddies.choose')}</button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                                <li className="collection-item">
                                    <div className="content-for-li">
                                        <p id="noapplicationmessage"><em>{i18n.__('components.pendingbuddies.noappliedmsg')}<br /> {i18n.__('components.pendingbuddies.socialsharemsg')}</em></p>
                                        <div>
                                            <FacebookShareButton
                                                url="https://www.printbuddy.se"
                                                title={i18n.__('components.pendingbuddies.facebookShareTitle')}
                                                description={i18n.__('components.pendingbuddies.facebookShareMsg')}
                                                picture="https://printbuddy.se/assets/images/PrintBuddyFacebook.jpg">
                                                <FacebookIcon size={36} round />
                                            </FacebookShareButton>
                                            <TwitterShareButton
                                                url="https://www.printbuddy.se"
                                                title={i18n.__('components.pendingbuddies.twitterShareMsg')}
                                                hashtags={["PrintBuddy", "PrintForMe"]}>
                                                <TwitterIcon size={36} round />
                                            </TwitterShareButton>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </FlipMove>
                </ul>
                <div id="cancelModal2" className="modal">
                    <div className="modal-content">
                        <h5>{i18n.__('components.pendingbuddies.cancelModalHeader')}</h5>
                        <br />
                        <p>{i18n.__('components.pendingbuddies.cancelModalParagraph')}</p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">{i18n.__('other.no')}</a>
                        <a onClick={this.props.handleJobCancel} className="modal-action modal-close waves-effect waves-green btn-flat">{i18n.__('other.yes')}</a>
                    </div>
                </div>
            </div>
        );
    }
}

