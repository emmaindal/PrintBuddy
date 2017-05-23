import React from "react";
import i18n from 'meteor/universe:i18n';

import { Emoji } from 'emoji-mart';
import { Picker } from 'emoji-mart';

class ChatSendMessage extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            $('#chatbox').animate({
                scrollTop: $("#chatbox").prop("scrollHeight")
            }, 0);
        }, 100);

        $(".mobile-emoji").hide();
        $(document).click(function (e) {
            if (!$(e.target).hasClass("smiley-pop")) {
                $("#mobile-emoji").hide();
            }
        });
    }
    onSubmit(e) {
        $('.form-input').focus();
        e.preventDefault();
        let message = this.refs.text.value.trim();
        if (message.length >= 1) {
            this.refs.text.value = "";
            this.props.onSubmit(message);
        }
    }
    popEmojiPicker() {
        $(".mobile-emoji").show();
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
                    <input className="form-input" ref="text" type="text" name="message" placeholder={i18n.__('components.chatsendmessage.placeholderMessage')} autoFocus autoComplete="off" />
                    <div onClick={this.popEmojiPicker} className="smiley-pop">
                        <Emoji onClick={this.popEmojiPicker} emoji='smiley' size={30} />
                    </div>
                    <button className="btn-large waves-effect waves-light" type="submit" name="action">{i18n.__('components.chatsendmessage.sendButton')}</button>
                </form>
                <div id="mobile-emoji" className="mobile-emoji">
                    {this.emojiPickerMobile()}
                </div>
            </div>
        );
    }
}

export default ChatSendMessage