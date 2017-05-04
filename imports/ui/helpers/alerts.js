export const displayAlert = (title, message) => {
    if (title && message) {
        Bert.alert({
            hideDelay: 5000,
            title: title,
            message: message,
            type: 'success',
            style: 'fixed-top',
            icon: 'fa-check'
        });
    }
};
