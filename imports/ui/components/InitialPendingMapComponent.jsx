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
                    position={{ lat: marker.position.coordinates[1], lng: marker.position.coordinates[0] }}
                    onClick={() => props.onMarkerClick(marker)}
                    defaultAnimation={2}
                    icon={ marker.delivery ? {url: "/assets/images/markerBlue.png"} : {url: "/assets/images/markerGreen.png"}}
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