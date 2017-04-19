import React from 'react';
import i18n from 'meteor/universe:i18n';

import { Picker } from 'emoji-mart';

const TestComponent = ({ title, onClick, add, remove, items }) =>
    <div className="test-component">

        <h3>{title}</h3>
        <button onClick={onClick}> Klicka på mig</button>
        <button onClick={add}> Klicka på mig för att lägga till</button>
        <button onClick={remove}> Ta bort allt</button>
        <h3> Testa i18n {i18n.__('components.testComponent.test')}</h3>
        {items.map(it => (
            <li key={it._id}>
                {it.title}
                <br />
                {it.test()}
            </li>
        ))}
        <Picker
            emojiSize={20}
            perLine={9}
            skin={1}
            native={false}
            set='emojione'
            onClick={(emoji) => {
                const input = this.refs.text.value;
                this.refs.text.value = input + emoji.native;
            }}
        />
    </div>;

export default TestComponent;
