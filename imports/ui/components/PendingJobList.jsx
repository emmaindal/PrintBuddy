import React from 'react';
import FlipMove from 'react-flip-move';

const PendingJobList = ({listofjobs}) => {
    const renderlist = () => {
        return (
            listofjobs.length === 0 ? <li className="collection-item">You have not applied to any job yet</li>
            : 
            listofjobs.map((job) => {
                return (
                    <li className="collection-item" key={job._id}>
                        <div className="content-for-li">
                            <p>Requestor: {job.requestorName()} - Reward: {job.reward} {job.currency} - Distance: {job.radius} meter , Address - {job.requestorPosition().address}</p>
                            <div className="buttongroup">
                                <button className="btn waves-effect waves-light" onClick={() => { }}>Cancel</button>
                            </div>
                        </div>
                    </li>
                );
            })
        );
    }
    return (
        <div className="col s12 m10 offset-m1 l6">
            <ul className="collection with-header" id="joblist">
                <li className="collection-header"><h5>Pending printjobs</h5></li>
                <FlipMove maintainContainerHeight={true}>
                    {renderlist()}
                </FlipMove>
            </ul>
        </div>
    );
}

export default PendingJobList;




/*{
listofjobs.length > 0 ? (
    listofjobs.map((job) => {
        return (
            <li className="collection-item" key={job._id}>
                <div className="content-for-li">
                    <p>Requestor: {job.requestorName()} - Reward: {job.reward} {job.currency} - Distance: {job.radius} meter , Address - {job.requestorPosition().address}</p>
                    <div className="buttongroup">

                        <button className="btn waves-effect waves-light location-btn" onClick={() => { onView(job) }}><i className="small material-icons">location_on</i></button>
                        <button className="btn waves-effect waves-light" onClick={() => { onApply(job._id) }}>APPLY</button>
                    </div>
                </div>
            </li>
        );
    })
) : (
        <li className="collection-item">
            <div className="content-for-li">
                <p id="nojobsmessage"><em>There are currently no jobs available :(</em></p>
            </div>
        </li>
    )
}*/