import React from "react";
import moment from 'moment';
import ReactModal from "react-modal";

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
                    <li className="collection-header"><h6>Job info</h6></li>
                    <li className="collection-item"><span>Title:</span> {request.title} </li>
                    <li className="collection-item">
                        <span>Adress:</span> {request.delivery ? request.requestorAddress() : request.printBuddyAdress()}</li>
                    <li className="collection-item"><span>Color:</span> {request.needColor ? 'Yes' : 'No'} </li>
                    <li className="collection-item"><span>Pages:</span> {request.pages}  </li>
                    <li className="collection-item"><span>Copies:</span> {request.copies}  </li>
                    <li className="collection-item"><span>Price:</span> {request.reward} {request.currency} </li>
                    <li className="collection-item"><span>Delivery:</span> {request.delivery ? 'Yes' : 'No'} </li>
                    <li className="collection-item">
                        <span>Last Date:</span> {moment(request.lastDate).format("ddd Do MMMM")}
                    </li>
                    <li className="collection-item"><span>Last Time:</span> {request.lastTime} </li>
                    {canCancel ? <div className="job-info-buttons">
                        <li className="collection-item">
                            <a onClick={this.showDoneModal} className="waves-effect waves-light btn">Finish Request</a>
                            <a onClick={this.showCancelModal} className="waves-effect waves-red btn btn-cancel">Cancel
                                Request</a>
                        </li>
                    </div> : null}
                    {!canCancel ? <li className="collection-item job-info-buttons">
                        <a onClick={this.props.handleDownload} className="waves-effect waves-light btn button-doc">Download Document</a>
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
