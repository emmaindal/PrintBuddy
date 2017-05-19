import React from 'react';
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
                    <li className="collection-header"><h5>Choose a PrintBuddy for the job!</h5><a onClick={this.popCancelModal} className="waves-effect waves-light btn btn-cancel cancel-button">Cancel</a></li>
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
                                                {buddy.username} have offered to print for you!<br />
                                            </p>
                                            <div className="buttongroup">
                                                <button className="btn waves-effect waves-light location-btn" onClick={() => { this.props.onView(buddy) }}><i className="small material-icons">location_on</i></button>
                                                <button className="btn waves-effect waves-light choose-btn" onClick={() => { this.props.onChoose(buddy._id) }}>CHOOSE</button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                                <li className="collection-item">
                                    <div className="content-for-li">
                                        <p id="noapplicationmessage"><em>No one have applied for your job yet.<br /> Let your network know you need a PrintBuddy!</em></p>
                                        <div>
                                            <FacebookShareButton
                                                url="https://www.printbuddy.se"
                                                title="PrintBuddy needed!"
                                                description="Have a printer? We have a job for you!"
                                                picture="https://printbuddy.se/assets/images/PrintBuddyFacebook.jpg">
                                                <FacebookIcon size={36} round />
                                            </FacebookShareButton>
                                            <TwitterShareButton
                                                url="https://www.printbuddy.se"
                                                title="Looking for a PrintBuddy to print for me!"
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
                        <h5>Are you sure?</h5>
                        <br />
                        <p>Are you absolutely sure you want to Cancel this request?</p>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action modal-close waves-effect waves-green btn-flat">No</a>
                        <a onClick={this.props.handleJobCancel} className="modal-action modal-close waves-effect waves-green btn-flat">Yes</a>
                    </div>
                </div>
            </div>
        );
    }
}

