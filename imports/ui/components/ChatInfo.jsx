import React from "react";

class ChatInfo extends React.Component {
    render() {
        return (
            <div>
                <ul className="collection with-header chat-info-wrapper">
                    <li className="collection-header"><h4>Job info</h4></li>
                    <li className="collection-item"><span>Namn:</span> Alexander Lööf </li>
                    <li className="collection-item"><span>Adress:</span> Webersgade 7. St th 2100 Köpenhamn S</li>
                    <li className="collection-item"><span>Color:</span> No </li>
                    <li className="collection-item"><span>Pages:</span> 2 </li>
                    <li className="collection-item"><span>Copies:</span> 1 </li>
                    <li className="collection-item"><span>Delivery:</span> Yes </li>
                    <li className="collection-item"><span>Last Date:</span> 2017-04-20</li>
                </ul>
            </div>

        );
    }
}

export default ChatInfo;