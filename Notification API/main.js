(async () => {
  const showNotification = () => {
      //Creating the Notification API
    const notification = new Notification("Title", {
      body: "This is a new notification",
      icon: "./vN.jpg",
    });
        //Setting the timeout interval to close the Notification
    setTimeout(() => {
      notification.close();
    }, 10 * 1000);
    //Creating the Event listener for action in the Notification
    notification.addEventListener("click", () => {
      window.open("https://www.google.com/");
    });
  };
    // Getting the permission for grant or deny
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    showNotification();
  } else {
    console.error("Permission denied for showing notifications.");
  }
})();
