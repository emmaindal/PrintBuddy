import React from 'react';

export const JobList = ({listofjobs}) =>
	<div className="col s12 m10 offset-m1 l6">
		<ul className="collection with-header">
			<li className="collection-header"><h5>Nearby printjobs</h5></li>
			{listofjobs.map((job) => {
				return (
					<li className="collection-item" key={job.id}>Jobnr: {job.id} - Requestor: {job.requestor} - Reward: {job.reward} {job.currency} - Distance: {job.distance} meter</li>
				);
			})}
		</ul>
	</div>;
