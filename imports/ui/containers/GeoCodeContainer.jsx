import react from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';

import Geocode from '../helpers/Geocode';

class GeoCodeComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			input: "",
			suggestions: [],
		}
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		this.setState({input: e.target.value});
		setTimeout(() => {
			if (this.state.input.length > 2) {
				Geocode(this.state.input).then((response) => {
					if (response) {
						const suggestionList = response.map((adress) => {
							return adress;
						});
						this.setState({ suggestions: suggestionList});
					}
				}).catch((error) => {console.log(error)});
			}
		}, 1000);
		
	}

	onPickAdress(adress) {
		this.props.onPickAdress(adress);
	}

	render() {
		return (
			<div>
				<input value={this.state.input} onChange={this.onInputChange}/>
				<div className="collection" id="geocodelist">
					{ this.state.suggestions.length > 0 ? (
						this.state.suggestions.map((adress, index) => {
						return (
							<a key={index} onClick={() => {this.onPickAdress(adress)}} className="collection-item">{adress.formatted_address}</a>
							);
						})
					 ) : (<div/>)
				}
				</div>
			</div>
		)
	}
}

GeoCodeComponent.propTypes = {
	onPickAdress : React.PropTypes.func,
};

// Create container är en hjälp class för att binda meteor data till react komponents
// https://atmospherejs.com/meteor/react-meteor-data
const GeoCodeContainer = createContainer(() => {

    return {

    };
}, GeoCodeComponent);

export default GeoCodeContainer;
