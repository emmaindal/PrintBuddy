export const displayError = (title , message) => {
    if (title && message) {
        Bert.alert({
            hideDelay: 5000,
            title: title,
            message: message,
            type: 'danger',
            style: 'fixed-top',
            icon: 'fa-warning'
        });
    }
};
