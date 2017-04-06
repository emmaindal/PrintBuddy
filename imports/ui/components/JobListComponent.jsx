import React from 'react';
import FlipMove from 'react-flip-move';

export const JobList = ({listofjobs, onApply, onView}) =>
	<div className="col s12 m10 offset-m1 l6">
		<ul className="collection with-header" id="joblist">
			<li className="collection-header"><h5>Nearby printjobs</h5></li>
			<FlipMove maintainContainerHeight={true}>
				{ listofjobs.length > 0 ? (
					listofjobs.map((job) => {
					return (
						<li className="collection-item" key={job.id}>
							<div className="content-for-li">
								<p>Jobnr: {job.id} - Requestor: {job.requestor} - Reward: {job.reward} {job.currency} - Distance: {job.distance} meter</p>
								<div className="buttongroup">
									<button className="btn waves-effect waves-light location-btn" onClick={() => {onView(job.requestor)}}><i className="small material-icons">location_on</i></button>
									<button className="btn waves-effect waves-light" onClick={() => {onApply(job.requestor)}}>APPLY</button>
								</div>
							</div>
						</li>
					);
				})
				): (
						<li className="collection-item">
							<div className="content-for-li">
								<p id="nojobsmessage"><em>There are currently no jobs available :(</em></p>
							</div>
						</li>
					)
				}
			</FlipMove>
		</ul>
	</div>;
