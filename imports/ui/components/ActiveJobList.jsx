import React from 'react';
import FlipMove from 'react-flip-move';
import {ShareButtons, generateShareIcon} from 'react-share';

const {FacebookShareButton, TwitterShareButton} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const ActiveJobList = ({ listofjobs, onChatClicked, onView}) => {
    const renderlist = () => {
        return (
            listofjobs.map((job, index) => {
                    return (
                        <li className="collection-item" key={index}>
                            <div className="content-for-li">
                                <p> 
                                    <i className="round-icon-green material-icons">description</i>
                                    <span className="job-title-span">{job.title}</span><br/>
                                    <i className={job.needColor ? "round-icon-green material-icons" : "round-icon-gray material-icons"}>print</i>
                                    {job.needColor ? 'Color' : 'Black & White'}<br/>
                                    <i className={job.delivery ? "round-icon-blue material-icons" : "round-icon-green material-icons"}>{job.delivery ? 'directions_run' : 'access_time'}</i>
                                    {job.delivery ? `Delivery` : 'Pickup'}<br/>
                                    <i className={job.reward > 0 ? "round-icon-green material-icons" : "round-icon-gray material-icons"}>{job.reward > 0 ? 'monetization_on' : 'money_off'}</i>
                                    {job.reward > 0 ? `${job.reward} ${job.currency}` : 'No cash offered.'}
                                </p>
                                <div className="buttongroup">
                                    <button className="btn waves-effect waves-light location-btn" onClick={() => {onView(job)}}><i className="small material-icons">location_on</i></button>
                                    <button className="btn waves-effect waves-light apply-btn" onClick={() => onChatClicked(job._id)}>Chat</button>
                                </div>
                            </div>
                        </li>
                    );
            })
        );
    }
    return (
        <div className="col s12 m12 l12">
            <ul className="collection with-header" id="active-joblist">
                <li className="collection-header"><h5>Active printjobs</h5></li>
                <FlipMove maintainContainerHeight={true}>
                    {listofjobs.length > 0 ? (
                        renderlist()
                    ) : (
                        <li className="collection-item">
                            <div className="content-for-li">
                                <p id="noapplicationmessage"><em>You have no active jobs at the moment.<br/> Let your network know you are a PrintBuddy!</em></p>
                                <div style={{ display: 'inherit'}}>
									<FacebookShareButton 
										url="https://www.printbuddy.se" 
										title="I'm a PrintBuddy!" 
										description="Need something printed? Join PrintBuddy and let a local PrintBuddy print for you!" 
										picture="https://blogs.which.co.uk/technology/wp-content/uploads/2012/11/Printer-Ink-Waste2.jpg">
										<FacebookIcon size={36} round/>
									</FacebookShareButton>
									<TwitterShareButton
										url="https://www.printbuddy.se" 
										title="Need something printed? Join PrintBuddy and let a local PrintBuddy print for you!" 
										hashtags={["PrintBuddy", "PrintForYou"]}>
										<TwitterIcon size={36} round/>
									</TwitterShareButton>
								</div>
                            </div>
                        </li>
                    )}
                </FlipMove>
            </ul>
        </div>
    );
}

export default ActiveJobList;

