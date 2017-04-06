import React from 'react';
import FlipMove from 'react-flip-move';

export const PendingBuddiesList = ({buddylist, onChoose, onView}) =>
	<div className="col s12 m10 offset-m1 l6">
		<ul className="collection with-header" id="pendingbuddieslist">
			<li className="collection-header"><h5>Choose your Printbuddy for the job!</h5></li>
			<FlipMove maintainContainerHeight={true}>
				{ buddylist.length > 0 ? (
					buddylist.map((buddy) => {
					return (
						<li className="collection-item" key={buddy._id}>
							<div className="content-for-li">
								<p>Buddy: {buddy.username} - Address: {buddy.address} - Distance: "not set" meter</p> 
								<div className="buttongroup">
									<button className="btn waves-effect waves-light location-btn" onClick={() => {onView(buddy.address)}}><i className="small material-icons">location_on</i></button>
									<button className="btn waves-effect waves-light" onClick={() => {onChoose(buddy.username)}}>CHOOSE</button>
								</div>
							</div>
						</li>
					);
				})
				):  (
						<li className="collection-item">
							<div className="content-for-li">
								<p id="noapplicationmessage"><em>No one have applied for your job yet! Hang tight!</em></p>
							</div>
						</li>
					)
				}
			</FlipMove>
		</ul>
	</div>;