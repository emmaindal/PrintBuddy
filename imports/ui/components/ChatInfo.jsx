import React from "react";

class ChatInfo extends React.Component {
    render() {
        const {request} = this.props;
        return (
            <div>
                <ul className="collection with-header chat-info-wrapper">
                    <li className="collection-header"><h4>Job info</h4></li>
                    <li className="collection-item"><span>Title:</span> {request.title} </li>
                    <li className="collection-item"><span>Namn:</span> {request.requestorName()} </li>
                    <li className="collection-item"><span>Adress:</span> Webersgade 7. St th 2100 Köpenhamn S</li>
                    <li className="collection-item"><span>Color:</span> {request.needColor ? 'Yes' : 'No' } </li>
                    <li className="collection-item"><span>Pages:</span> {request.pages}  </li>
                    <li className="collection-item"><span>Copies:</span> {request.copies}  </li>
                    <li className="collection-item"><span>Delivery:</span> {request.delivery ? 'Yes' : 'No' } </li>
                    <li className="collection-item"><span>Last Date:</span> {request.lastDate}</li>
                </ul>
            </div>
        );
    }
}

ChatInfo.propTypes = {
    info: React.PropTypes.object
};

export default ChatInfo;