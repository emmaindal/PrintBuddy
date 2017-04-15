import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps';

export const InitialPendingMap = withGoogleMap(props => {
	return (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={14}
			center={{ lat: props.defaultCenter.lat, lng: props.defaultCenter.lng }}
		>
		{props.markers ? props.markers.map((marker, index) => (
			<Marker
				key={index}
				position={ marker.position }
				onClick={() => props.onMarkerClick(marker)}
			>
			{marker.showInfo && (
				<InfoWindow onCloseClick={() => props.onCloseClick(marker)}>
					{
						<div id="infowindow">
							<li className="collection-item avatar">
								<i className="infowindow-icon material-icons circle green">print</i>
								<span className="title">{marker.username}</span>
								<p>{marker.position.address}</p>
							</li>
						</div>
					}
				</InfoWindow>
			)}
			</Marker>
		)) : console.log("Not working") }	
		</GoogleMap>
	);
});