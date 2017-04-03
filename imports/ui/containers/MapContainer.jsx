import React from 'react';

import {InitialMap} from '../components/InitialMapComponent';


export default class MapContainer extends React.Component {
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
			<div className="col s12 m10 l6">
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
						/>
					</div>
				</div>
			</div>
			
		);
	}
}