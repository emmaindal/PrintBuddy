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
			defaultCenter={{ lat: 55.608868, lng: 12.994994 }}	
		>
		{props.markers.map((marker, index) => (
			<Marker
				key={index}
				position={marker.position}
				onClick={() => props.onMarkerClick(marker)}
			>
			{marker.showInfo && (
				<InfoWindow onCloseClick={() => props.onCloseClick(marker)}>
					{
						<div id="infowindow">{marker.message}</div>
					}
				</InfoWindow>
			)}
			</Marker>
		))}	
		</GoogleMap>
	);
});