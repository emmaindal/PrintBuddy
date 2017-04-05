import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {browserHistory} from 'react-router'

import TestComponent from '../components/TestComponent';
import {StepByStep} from '../components/StepByStepComponent';
import {JobList} from '../components/JobListComponent';
import {PendingBuddiesList} from '../components/PendingBuddiesListComponent';
import {displayAlert}from '../helpers/alerts';
import {displayError}from '../helpers/errors';
import {Items} from '../../api/items/items.js';
import {insert} from '../../api/items/methods';
import {removeAll} from '../../api/items/methods';
import MapContainer from './MapContainer';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.testClick = this.testClick.bind(this);
        this.testClick2 = this.testClick2.bind(this);

		//stepbystep component tests
        this.step1Click = this.step1Click.bind(this);
        this.step2Click = this.step2Click.bind(this);
        this.step3Click = this.step3Click.bind(this);
        this.step4Click = this.step4Click.bind(this);
        this.stepClear = this.stepClear.bind(this);

		//login / register test buttons
        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this);

		//printbuddies list
		    this.onChoose = this.onChoose.bind(this);

		//joblist
		    this.onApply = this.onApply.bind(this);
		    this.onViewLocation = this.onViewLocation.bind(this);

    }

    getInitialState() {
        return {
            step1: "",
            step2: "",
            step3: "",
            step4: "",
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    testClick() {
        displayAlert("title", "message");
    }

    testClick2() {
        const title = Math.random().toString(36).substring(7);
        const desc = Math.random().toString(36).substring(7);
        insert.call({title: title, desc: desc});
    }

    testClick3() {
        removeAll.call();
    }

    step1Click() {
        this.setState({
            step1: "active",
            step2: "",
            step3: "",
            step4: "",
        })

    }

    step2Click() {
        this.setState({
            step1: "finished",
            step2: "active",
            step3: "",
            step4: "",
        })

    }

    step3Click() {
        this.setState({
            step1: "finished",
            step2: "finished",
            step3: "active",
            step4: "",
        })

    }

    step4Click() {
        this.setState({
            step1: "finished",
            step2: "finished",
            step3: "finished",
            step4: "active",
        });
    }

    stepClear() {
        this.setState({
            step1: "",
            step2: "",
            step3: "",
            step4: "",
        });
    }


	// joblist knapp för att ansöka om jobb
	onApply(clickedId) {
		    alert(`You clicked APPLY for job: ${clickedId}`);
	}
	// printbuddy listknapp för att välja printbuddy
	onChoose(clickedId) {
		    alert(`You clicked onChoose for buddy: ${clickedId}`);
	}
	onViewLocation(clickedLocation) {
		    alert(`You clicked to view location for ${clickedLocation}! This should update the map to show it`);
	}


    render() {
        const {items} = this.props;
        const dummyJobList = [
            {
                id: 1,
                requestor: "Anna1337",
                delivery: "Yes",
                reward: 100,
                currency: "SEK",
                distance: 500,
            },
            {
                id: 2,
                requestor: "PelleSvanslös",
                delivery: "no",
                reward: 20,
                currency: "SEK",
                distance: 700,
            },
            {
                id: 3,
                requestor: "Kringlan75",
                delivery: "Yes",
                reward: 500,
                currency: "SEK",
                distance: 1500,
            },
        ];
		const dummyBuddiesList = [
			{
				_id: 241,
				email: "bengan@test.se", 
				username:"Bengan75",
				address: "Testvägen 7, Malmö",
			},
			{
				_id: 41,
				email: "micke_cyklar@test.se", 
				username:"Micke91",
				address: "Mickesgränd 1337, Malmö",
			},
		];

        return (
			<div>
				<div id="test-stepbystep">
					<StepByStep step1={this.state.step1} step2={this.state.step2} step3={this.state.step3} step4={this.state.step4}/>
					<h3>Test Step By Step</h3>
					<button className="btn waves-effect waves-light" onClick={this.step1Click}> Step 1</button>
					<button className="btn waves-effect waves-light" onClick={this.step2Click}> Step 2</button>
					<button className="btn waves-effect waves-light" onClick={this.step3Click}> Step 3</button>
					<button className="btn waves-effect waves-light" onClick={this.step4Click}> Step 4</button>
					<button className="btn waves-effect waves-light" onClick={this.stepClear}> Clear</button>
				</div>

				<div id="test-joblist" className="row">
					<div className="col l10 offset-l1">
						<JobList listofjobs={dummyJobList} onApply={this.onApply} onView={this.onViewLocation}/>
						<MapContainer/>
					</div>
				</div>

				<div id="test-pendinglist" className="row">
					<div className="col l10 offset-l1">
						<PendingBuddiesList buddylist={dummyBuddiesList} onChoose={this.onChoose} onView={this.onViewLocation}/>
						<MapContainer/>
					</div>
				</div>
				
				<TestComponent title='Test title' onClick={this.testClick} add={this.testClick2} remove={this.testClick3} items={items} ></TestComponent>
			</div>
        );
    }
}

Test.propTypes = {
    children: React.PropTypes.element, // matched child route component
};

// Create container är en hjälp class för att binda meteor data till react komponents
// https://atmospherejs.com/meteor/react-meteor-data
const TestContainer = createContainer(() => {
    Meteor.subscribe('items');

    return {
        items: Items.find({}).fetch()
    };
}, Test);

export default TestContainer;
