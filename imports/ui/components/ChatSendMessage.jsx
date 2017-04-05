import React from "react";

export default class AddPlayer extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        
        let message = this.refs.message.value.trim();
        console.log(message);

        if (message) {
            this.refs.message.value = "";
        }
    }
    render () {
        return (
            <div className="i">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
					<input className="form-input" ref="message" type="text" name="message" placeholder="Type a message..."/>
					<button className="btn-large waves-effect waves-light" type="submit" name="action">SEND</button>
				</form>
            </div>
        );
    }
}