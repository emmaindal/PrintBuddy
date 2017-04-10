import React from 'react';

export default class AboutComponent extends React.Component {

    render() {
        return(
            <div>
                <h1>About Component</h1>
                <div className="slider fullscreen">
                    <ul className="slides">

                        <li>
                            <img src="https://static.pexels.com/photos/273238/pexels-photo-273238.jpeg" />
                            <div className="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan..</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://static.pexels.com/photos/33488/navigation-car-drive-road.jpg" />
                            <div className="caption left-align">
                                <h3>Left Aligned Caption!</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan..</h5>
                            </div>
                        </li>
                        <li>
                            <img src="https://static.pexels.com/photos/52608/pexels-photo-52608.jpeg" />
                            <div className="caption right-align">
                                <h3>Right Aligned Caption!</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan..</h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
