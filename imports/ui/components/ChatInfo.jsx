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
    render() {
        const { request } = this.props;
        return (
            <div>
                <ul className="collection with-header chat-info-wrapper">
                    <li className="collection-header"><h4>Job info</h4></li>
                    <li className="collection-item"><span>Title:</span> {request.title} </li>
                    <li className="collection-item"><span>Adress:</span> {request.delivery ? "Request Adress" : "Printbuddy Adress"}</li>
                    <li className="collection-item"><span>Color:</span> {request.needColor ? 'Yes' : 'No'} </li>
                    <li className="collection-item"><span>Pages:</span> {request.pages}  </li>
                    <li className="collection-item"><span>Copies:</span> {request.copies}  </li>
                    <li className="collection-item"><span>Price:</span> {request.reward} {request.currency} </li>
                    <li className="collection-item"><span>Delivery:</span> {request.delivery ? 'Yes' : 'No'} </li>
                    <li className="collection-item"><span>Last Date:</span> {moment(request.lastDate).format("ddd Do MMMM")}</li>
                    <div className="job-info-buttons">
                        <li className="collection-item">
                            <a onClick={this.showDoneModal} className="waves-effect waves-light btn">Finish Request</a>
                            <a onClick={this.showCancelModal} className="red lighten-2 waves-effect waves-red btn">Cancel Request</a>
                        </li>
                    </div>
                </ul>

                
            </div>
        );
    }
}

ChatInfo.propTypes = {
    info: React.PropTypes.object
};

export default ChatInfo;
