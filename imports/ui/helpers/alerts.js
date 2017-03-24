export const displayAlert = (title, message) => {
    if (title && message) {
        Bert.alert({
            title: title,
            message: message,
            type: 'info',
            style: 'growl-top-right',
            icon: 'fa-info'
        });
    }
};
