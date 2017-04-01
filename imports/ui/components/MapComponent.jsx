import React from 'react';

import {MapContainer} from '../containers/MapContainer';

export const MapComponent = () =>
	<div className="row">
		<div className="col s12 m10 l6">
			<div className="collection" style={{ height: "500px"}}>
				<MapContainer/>
			</div>
		</div>
	</div>;