import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps';

import {InitialMap} from '../components/InitialMapComponent';


export default class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [
				{
					id: 1,
					position: {
						lat: 55.608868,
						lng: 12.994994,
					},
					showInfo: false,
					message: "Wow this is awesome!",
				},
				{
					id: 2,
					position: {
						lat: 55.609898,
						lng: 12.995997,
					},
					showInfo: false,
					message: "This is marker 2!",
				}
			]
		}

		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.handleMarkerClose = this.handleMarkerClose.bind(this);
	}

	handleMarkerClick(clickedMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === clickedMarker) {
					marker.showInfo = true;
				} else {
					marker.showInfo = false;
				}
				return marker;
			})
		})
	}
	handleMarkerClose(clickedMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === clickedMarker) {
					marker.showInfo = false;
				}
				return marker;
			})
		})
	}

	render() {
		return (
			<div className="col s12 m10 offset-m1 l6">
				<div className="collection" style={{ height: "500px"}}>
					<div style={{height: "100%"}}>
						<InitialMap
							containerElement={
								<div style={{ height: "100%", width: "auto" }} />
							}
							mapElement={
								<div style={{ height: "100%", width: "auto" }} />
							}
							markers={this.state.markers}
							onMarkerClick={this.handleMarkerClick}
							onCloseClick={this.handleMarkerClose}
						/>
					</div>
				</div>
			</div>
		);
	}
}