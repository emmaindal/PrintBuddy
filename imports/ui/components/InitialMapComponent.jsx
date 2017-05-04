import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps';
import moment from 'moment';

export const InitialMap = withGoogleMap(props => {
	return (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={14}
			defaultCenter={{ lat: props.defaultCenter.lat, lng: props.defaultCenter.lng }}
		>
        <Marker
            position={{lat: props.defaultPosition.lat, lng:props.defaultPosition.lng}}
            defaultAnimation={2}
            icon={{url: "/assets/images/markerHome.png"}}
        />
		{props.markers ? props.markers.map((marker, index) => (
            
            <Marker
				key={index}
				position={marker.requestorPosition()}
				onClick={() => props.onMarkerClick(marker)}
                defaultAnimation={2}
				icon={ marker.delivery ? {url: "/assets/images/markerBlue.png"} : {url: "/assets/images/markerGreen.png"}}
			>
			
			{marker.showInfo && (
				<InfoWindow onCloseClick={() => props.onCloseClick(marker)}>
					{
						<div id="infowindow">
                            <li className="collection-item avatar">
                                <i className="round-icon-green material-icons">description</i>
                                <span className="title title-large">{marker.title}</span>
                                <p>
								{marker.requestorName()}
								</p>
                            </li>
							<li className="collection-item avatar">
								<i className={marker.needColor ? "infowindow-icon material-icons round-icon-green" : "infowindow-icon material-icons round-icon-gray"}>print</i>
								<p>Color: {marker.needColor ? 'Yes' : 'No'}<br/>
								Pages: {marker.pages}<br/>
								Copies: {marker.copies}<br/>
								</p>
							</li>
							<li className="collection-item avatar">
								<i className={marker.delivery ? "infowindow-icon material-icons round-icon-blue" : "infowindow-icon material-icons round-icon-green"}>{marker.delivery ? 'directions_run' : 'access_time'}</i>
								
								<p>Before {marker.lastTime} on {moment(marker.lastDate).format("ddd Do MMMM")}
								</p>
							</li>
							<li className="collection-item avatar">
								<i className={marker.reward > 0 ? "infowindow-icon material-icons round-icon-green" : "infowindow-icon material-icons round-icon-gray"}>{marker.reward > 0 ? 'monetization_on' : 'money_off'}</i>
								
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