import React from 'react';
import FlipMove from 'react-flip-move';

const PendingJobList = ({listofjobs, onView, onCancel}) => {
    const renderlist = () => {
        return (
            listofjobs.map((job, index) => {
                return (
                    <li className="collection-item" key={index}>
                        <div className="content-for-li">
                            <p> 
                                <i className="round-icon-green material-icons">description</i>
                                {job.title}<br/>
                                <i className={job.needColor ? "round-icon-green material-icons" : "round-icon-gray material-icons"}>print</i>
                                {job.needColor ? 'Color' : 'Black & White'}<br/>
                                <i className={job.delivery ? "round-icon-blue material-icons" : "round-icon-green material-icons"}>{job.delivery ? 'directions_run' : 'access_time'}</i>
                                {job.delivery ? `Delivery` : 'Pickup'}<br/>
                                <i className={job.reward > 0 ? "round-icon-green material-icons" : "round-icon-gray material-icons"}>{job.reward > 0 ? 'monetization_on' : 'money_off'}</i>
                                {job.reward > 0 ? `${job.reward} ${job.currency}` : 'No cash offered.'}
                            </p>
                            <div className="buttongroup">
                                <button className="btn waves-effect waves-light location-btn" onClick={() => {
                                    onView(job)
                                }}><i className="small material-icons">location_on</i></button>
                                <button className="btn waves-effect waves-light" onClick={() => {
                                    onCancel(job)
                                }}>Cancel
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })
        );
    }
    return (
        <div className="col s12 m12 l12">
            <ul className="collection with-header" id="pending-joblist">
                <li className="collection-header"><h5>Pending printjobs</h5></li>
                <FlipMove maintainContainerHeight={true}>
                    {renderlist()}
                </FlipMove>
            </ul>
        </div>
    );
}

export default PendingJobList;
