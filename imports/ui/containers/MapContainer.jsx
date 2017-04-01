import React from 'react';

import {InitialMap} from '../components/InitialMapComponent';


export class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [{
				position: {
					lat: 55.608868,
					lng: 12.994994,
				},
				funnymessage: "Wow this is awesome!",
			}]
		}

		this.handleMarkerClick = this.handleMarkerClick.bind(this);
	}

	handleMarkerClick(clickedMarker) {
		alert(clickedMarker.funnymessage);
	}

	render() {
		return (
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
				/>
			</div>
		);
	}
}