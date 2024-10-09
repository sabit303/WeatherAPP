
let latitude, longitude;
export async function getCurrentLocation() {
  try {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }
  } catch (error) {
    console.error("Error getting geolocation:", error);
    return null; 
  }
}

// Fetch the location and set latitude and longitude
getCurrentLocation()
  .then((position) => {
    if (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    } else {
      console.warn("Geolocation failed to retrieve position.");
    }
  })
  .catch((error) => {
    console.error("Error getting geolocation:", error);
  });

 
 export function getCoordinates() {
   return { latitude, longitude };
 }
