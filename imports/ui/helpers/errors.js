export const displayError = (title , message) => {
    if (title && message) {
        Bert.alert({
            title: title,
            message: message,
            type: 'danger',
            style: 'growl-top-right',
            icon: 'fa-info'
        });
    }
};
