import React from "react";
import moment from 'moment';
import ReactModal from "react-modal";
import i18n from 'meteor/universe:i18n';

class ChatInfo extends React.Component {
    showCancelModal() {
        $('#modal1').closeModal('close');
        $('#cancelModal').openModal('open');
    }

    showDoneModal() {
        $('#modal1').closeModal('close');
        $('#doneModal').openModal('open');

    }

    chatInfoWrapperStyle() {
        if (this.props.canCancel) {
            return "collection with-header chat-info-wrapper";
        } else {
            return "collection with-header chat-info-wrapper chat-info-wrapper-buddy";
        }
    }
    render() {
        const {request, canCancel} = this.props;
        return (
            <div className="chat-info">
                <ul className={this.chatInfoWrapperStyle()}>
                    <li className="collection-header"><h6>{i18n.__('components.chatinfo.header')}</h6></li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.title')}:</span> {request.title} </li>
                    <li className="collection-item">
                        <span>{i18n.__('components.chatinfo.address')}:</span> {request.delivery ? request.requestorAddress() : request.printBuddyAdress()}</li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.color')}:</span> {request.needColor ? i18n.__('other.yes') : i18n.__('other.no')} </li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.pages')}:</span> {request.pages}  </li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.copies')}:</span> {request.copies}  </li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.price')}:</span> {request.reward} {request.currency} </li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.delivery')}:</span> {request.delivery ? i18n.__('other.yes') : i18n.__('other.no')} </li>
                    <li className="collection-item">
                        <span>{i18n.__('components.chatinfo.lastDate')}:</span> {moment(request.lastDate).format("ddd Do MMMM")}
                    </li>
                    <li className="collection-item"><span>{i18n.__('components.chatinfo.lastTime')}:</span> {request.lastTime} </li>
                    {canCancel ? <div className="job-info-buttons">
                        <li className="collection-item">
                            <a onClick={this.showDoneModal} className="waves-effect waves-light btn">{i18n.__('components.chatinfo.finishRequest')}</a>
                            <a onClick={this.showCancelModal} className="waves-effect waves-red btn btn-cancel">{i18n.__('components.chatinfo.cancelRequest')}</a>
                        </li>
                    </div> : null}
                    {!canCancel ? <li className="collection-item job-info-buttons">
                        <a onClick={this.props.handleDownload} className="waves-effect waves-light btn button-doc">{i18n.__('components.chatinfo.downloadDocument')}</a>
                    </li> : null}
                </ul>
            </div>
        );
    }
}

ChatInfo.propTypes = {
    info: React.PropTypes.object,
    canCancel: React.PropTypes.bool
};

export default ChatInfo;
