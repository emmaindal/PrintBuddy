import React from 'react';
import FlipMove from 'react-flip-move';

const ActiveJobList = ({ listofjobs, userId }) => {
    const renderlist = () => {
        return (
            listofjobs.map((job, index) => {
                if (job.chosenOne == userId) {
                    return (
                        <li className="collection-item" key={index}>
                            <div className="content-for-li">
                                <p>Requestor: {job.requestorName()} - Reward: {job.reward} {job.currency} - Distance: {job.radius} meter , Address - {job.requestorPosition().address}</p>
                                <div className="buttongroup">
                                    <button className="btn waves-effect waves-light" onClick={() => { }}>Chat</button>
                                </div>
                            </div>
                        </li>
                    );
                } else {
                    return <li key={index} className="collection-item">You have no jobs at the moment...</li>;
                }
            })
        );
    }
    return (
        <div className="col s12 m10 offset-m1 l6">
            <ul className="collection with-header" id="joblist">
                <li className="collection-header"><h5>Active printjobs</h5></li>
                <FlipMove maintainContainerHeight={true}>
                    {renderlist()}
                </FlipMove>
            </ul>
        </div>
    );
}

export default ActiveJobList;

