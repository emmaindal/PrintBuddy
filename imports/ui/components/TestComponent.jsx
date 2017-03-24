import React from 'react';
import i18n from 'meteor/universe:i18n';

const TestComponent = ({title, onClick}) =>
    <div className="test-component">
        <h3>{title}</h3>
        <button onClick={onClick}> Klicka på mig</button>
        <h3> Testa i18n {i18n.__('components.testComponent.test')}</h3>
    </div>;

export default TestComponent;
