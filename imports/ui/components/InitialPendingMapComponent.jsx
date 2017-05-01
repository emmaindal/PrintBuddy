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
        <Marker
            key={props.userObject._id}
            position={{lat: props.userObject.position.coordinates[1], lng:props.userObject.position.coordinates[0]}}
            defaultAnimation={2}
            icon={{url: "/assets/images/markerHome.png"}}
        />
            {props.markers ? props.markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={{ lat: marker.position.coordinates[1], lng: marker.position.coordinates[0] }}
                    onClick={() => props.onMarkerClick(marker)}
                    defaultAnimation={2}
                    icon={{url: "/assets/images/markerRed.png"}}
                >
                    {marker.showInfo && (
                        <InfoWindow onCloseClick={() => props.onCloseClick(marker)}>
                            {
                                <div id="infowindow">
                                    <li className="collection-item avatar">
                                        <i className="infowindow-icon material-icons circle green">print</i>
                                        <div style={{marginLeft: "20px"}}>
                                            <span className="title">{marker.username}</span>
                                            <p>{marker.address}</p>
                                        </div>

                                    </li>
                                </div>
                            }
                        </InfoWindow>
                    )}
                </Marker>
            )) : console.log("Not working")}
        </GoogleMap>
    );
});