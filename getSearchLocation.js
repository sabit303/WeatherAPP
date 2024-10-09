
let latitude, longitude;
let searchInput;
export async function getSearchLocation() {
     searchInput = document.getElementsByClassName("search-input")[0].value;
   
    const getCoordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=7d49d2d2a28c800aff55c4ee6665bc1e`);
    
    const response = await getCoordinates.json();
    if (response.length === 0) {
        alert("Invalid or Not a city name");
    }
    console.log(response);
     latitude = response[0].lat;
     longitude = response[0].lon;
}

export function getgeoCoordinates() {
  return { latitude, longitude };
}
