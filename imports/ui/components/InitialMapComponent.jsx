import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps';

export const InitialMap = withGoogleMap(props => {
	return (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={14}
			center={{ lat: props.defaultCenter.lat, lng: props.defaultCenter.lng }}
		>
		{props.markers ? props.markers.map((marker, index) => (
			<Marker
				key={index}
				position={marker.requestorPosition()}
				onClick={() => props.onMarkerClick(marker)}
			>
			{marker.showInfo && (
				<InfoWindow onCloseClick={() => props.onCloseClick(marker)}>
					{
						<div id="infowindow">
							<li className="collection-item avatar">
								<i className={marker.needColor ? "infowindow-icon material-icons circle green" : "infowindow-icon material-icons circle"}>print</i>
								<span className="title">{marker.title}</span>
								<p>Color: {marker.needColor ? 'Yes' : 'No'}<br/>
								Pages: {marker.pages}<br/>
								Copies: {marker.copies}<br/>
								Requested by {marker.requestorName()}
								</p>
							</li>
							<li className="collection-item avatar">
								<i className={marker.delivery ? "infowindow-icon material-icons circle blue" : "infowindow-icon material-icons circle green"}>{marker.delivery ? 'directions_run' : 'access_time'}</i>
								<span className="title">{marker.delivery ? 'Delivery' : 'Pickup'}</span>
								<p>At {marker.lastTime} on {marker.lastDate}
								</p>
							</li>
							<li className="collection-item avatar">
								<i className={marker.reward > 0 ? "infowindow-icon material-icons circle green" : "infowindow-icon material-icons circle"}>{marker.reward > 0 ? 'monetization_on' : 'money_off'}</i>
								<span className="title">{marker.reward > 0 ? 'Cash' : 'Good Karma'}</span>
								<p>{marker.reward > 0 ? `${marker.reward} ${marker.currency}` : 'No cash offered.'}
								</p>
							</li>
						</div>
					}
				</InfoWindow>
			)}
			</Marker>
		)) : null }	
		</GoogleMap>
	);
});