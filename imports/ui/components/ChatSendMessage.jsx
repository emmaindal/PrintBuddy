import React from "react";

import { Emoji } from 'emoji-mart';
import { Picker } from 'emoji-mart';

class ChatSendMessage extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            $('#chatbox').animate({
                scrollTop: $("#chatbox").prop("scrollHeight")
            }, 0);
        }, 100);
    }
    onSubmit(e) {
        $('.form-input').focus();
        e.preventDefault();
        let message = this.refs.text.value.trim();
        if (message.length > 1) {
            this.refs.text.value = "";
            this.props.onSubmit(message);
        }
    }
    popEmojiPicker() {
        $(".mobile-emoji").show();
        console.log("click");
    }
    emojiPickerMobile() {
        return (
            <Picker
                emojiSize={20}
                perLine={8}
                skin={1}
                native={false}
                set='apple'
                onClick={(emoji) => {
                    const input = this.refs.text.value;
                    this.refs.text.value = input + emoji.native;
                    $('.form-input').focus();
                }}
            />
        );
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <input className="form-input" ref="text" type="text" name="message" placeholder="Type a message..." autoFocus autoComplete="off" />
                    <div onClick={this.popEmojiPicker} className="smiley-pop">
                        <Emoji emoji='smiley' size={30} />
                    </div>
                    <button className="btn-large waves-effect waves-light" type="submit" name="action">SEND</button>
                </form>
                <div id="mobile-emoji" className="mobile-emoji">
                    {this.emojiPickerMobile()}
                </div>
            </div>
        );
    }
}

export default ChatSendMessage