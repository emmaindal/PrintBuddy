import React from 'react';
import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps';

import {InitialMap} from '../components/InitialMapComponent';


class MapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.handleMarkerClose = this.handleMarkerClose.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.clickedId) {
			nextProps.markers = nextProps.markers.map(marker =>{
				if(marker._id == nextProps.clickedId){
					marker.showInfo = true;
				} else {
					marker.showInfo = false;
				}
			});
		}
		this.setState({
			markers: nextProps.markers,
		});
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
							defaultCenter={this.props.defaultCenter}
							onMarkerClick={this.handleMarkerClick}
							onCloseClick={this.handleMarkerClose}
						/>
					</div>
				</div>
			</div>
		);
	}
}

MapContainer.propTypes = {
    markers: React.PropTypes.array,
	defaultCenter: React.PropTypes.object,
};

export default MapContainer;