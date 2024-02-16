//GeoLocation API

(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
      },
      (error) => {
        console.error("Error occurred:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
})();
