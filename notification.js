function notification(notifText) {
    Notification.requestPermission()
    .then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification(notifText);
        };
    });
}