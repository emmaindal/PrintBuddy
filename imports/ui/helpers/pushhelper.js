import {updateUserPushId, removeUserPushId} from '../../api/user/methods';

let isSub = false

export function removePushId(userId) {
    OneSignal.push(function () {
        OneSignal.getUserId(function (pushId) {
            if (pushId) {
                removeUserPushId.call({
                    pushId: pushId,
                    userId: userId
                }, (err, res) => {

                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    });
}

export function subscriptionToPushIdChange() {
    OneSignal.push(function () {
        OneSignal.getUserId(function (userId) {
            if (userId) {
                updateUserOnServer(userId);
            }
        });
    });

    OneSignal.push(function () {
        // Occurs when the user's subscription changes to a new value.
        if (!isSub) {
            OneSignal.on('subscriptionChange', function (isSubscribed) {
                if (isSubscribed) {
                    OneSignal.getUserId(function (userId) {
                        if (userId) {
                            updateUserOnServer(userId);
                        }
                    });
                }
            });
            isSub = true;
        }
    });
}


function updateUserOnServer(pushId) {
    updateUserPushId.call({
        pushId: pushId,
    }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
        }
    });
}



