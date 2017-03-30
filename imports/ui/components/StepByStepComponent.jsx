import React from 'react';

export const StepByStep = ({step1, step2, step3, step4}) =>
	<div className="row">
		<div className="col s12 m10 offset-m1 l8 offset-l2">
			<ul className="stepper horizontal">
				<li className={"step " + step1} id="step-1">
					<div className="step-title"><i className="step-tag small material-icons">input</i></div>
				</li>
				<li className={"step " + step2} id="step-2">
					<div className="step-title"><i className="step-tag small material-icons">list</i></div>
				</li>
				<li className={"step " + step3} id="step-3">
					<div className="step-title"><i className="step-tag small material-icons">chat</i></div>
				</li>
				<li className={"step " + step4} id="step-4">
					<div className="step-title"><i className="step-tag small material-icons">done</i></div>
				</li>
			</ul>
		</div>
	</div>;