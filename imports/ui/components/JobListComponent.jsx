import React from 'react';
import i18n from 'meteor/universe:i18n';
import FlipMove from 'react-flip-move';

export const JobList = ({userId, listofjobs, onApply, onView}) =>
    <ul className="collection with-header" id="joblist">
        <li className="collection-header"><h5>Nearby printjobs</h5></li>
        <FlipMove maintainContainerHeight={true}>
            { listofjobs.length > 0 ? (
                listofjobs.map((job) => {
                    return (
                        <li className="collection-item content-for-li" key={job._id}>
                            <p>
                                <i className="round-icon-green material-icons">description</i>
                                <span className="job-title-span">{job.title}</span><br/>
                                <i className={job.needColor ? "round-icon-green material-icons" : "round-icon-gray material-icons"}>print</i>
                                {job.needColor ? i18n.__('other.color') : i18n.__('other.blackWhite')}<br/>
                                <i className={job.delivery ? "round-icon-blue material-icons" : "round-icon-green material-icons"}>{job.delivery ? 'directions_run' : 'access_time'}</i>
                                {job.delivery ? `${i18n.__('other.delivery')} - ${Math.round(job.distance)} ${i18n.__('other.meters')}.` : i18n.__('other.pickup')}<br/>
                                <i className={job.reward > 0 ? "round-icon-green material-icons" : "round-icon-gray material-icons"}>{job.reward > 0 ? 'monetization_on' : 'money_off'}</i>
                                {job.reward > 0 ? `${job.reward} ${job.currency}` : i18n.__('other.nocash')}
                            </p>
                            <div className="buttongroup">
                                <button className="btn waves-effect waves-light location-btn" onClick={() => {
                                    onView(job)
                                }}><i className="small material-icons">location_on</i></button>
                                {job.possibleOnes.includes(userId) ?  <button className="btn waves-effect waves-light disabled apply-btn" >{i18n.__('components.joblistcomponent.applied')}</button> :
                                    <button className="btn waves-effect waves-light apply-btn" onClick={() => {
                                        onApply(job._id)
                                    }}>{i18n.__('components.joblistcomponent.apply')}</button>
                                }
                            </div>
                        </li>
                    );
                })
            ) : (
                <li className="collection-item">
                    <div className="content-for-li">
                        <p id="nojobsmessage"><em>{i18n.__('components.joblistcomponent.nojobsmessage')}</em></p>
                    </div>
                </li>
            )
            }
        </FlipMove>
    </ul>
;
