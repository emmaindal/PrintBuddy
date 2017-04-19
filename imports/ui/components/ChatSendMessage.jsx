import React from "react";

import { Picker } from 'emoji-mart';

class ChatSendMessage extends React.Component {
    onSubmit(e) {
        $('.form-input').focus();
        e.preventDefault();
        let message = this.refs.text.value.trim();
        if (message.length > 1) {
            this.refs.text.value = "";
            this.props.onSubmit(message);
        }
    }
    emojiPicker() {
        return (
            <Picker
                className="hide-on-med-and-down"
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
        );
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <input className="form-input" ref="text" type="text" name="message" placeholder="Type a message..." autoFocus />
                    <button className="btn-large waves-effect waves-light" type="submit" name="action">SEND</button>
                </form>
                {this.emojiPicker()}
            </div>
        );
    }
}

export default ChatSendMessage