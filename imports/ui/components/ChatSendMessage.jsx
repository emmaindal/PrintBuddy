import React from "react";

class ChatSendMessage extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        let message = this.refs.text.value.trim();
        if (message.length > 1) {
            this.refs.text.value = "";
            this.props.onSubmit(message);
        }
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <input className="form-input" ref="text" type="text" name="message" placeholder="Type a message..." />
                    <button className="btn-large waves-effect waves-light" type="submit" name="action">SEND</button>
                </form>
            </div>
        );
    }
}

export default ChatSendMessage