const hPhotos = [
  "static/images/h1.jpg",
  "static/images/h2.jpg",
  "static/images/h3.jpg",
  "static/images/h4.jpg",
  "static/images/h5.jpg",
  "static/images/h6.jpg",
];
const vPhotos1 = [
  "static/images/v2.jpg",
  "static/images/v3.jpg",
  "static/images/v4.jpg",
  "static/images/v5.jpg",
  "static/images/v6.jpg",
  "static/images/v7.jpg",
  "static/images/v8.jpg",
  "static/images/v9.jpg",
  "static/images/v10.jpg",
  "static/images/v11.jpg",
];

const vPhotos2 = [
  "static/images/v12.jpg",
  "static/images/v13.jpg",
  "static/images/v14.jpg",
  "static/images/v15.jpg",
  "static/images/v16.jpg",
  "static/images/v17.jpg",
  "static/images/v18.jpg",
  "static/images/v19.jpg",
  "static/images/v20.jpg",
  "static/images/v21.jpg",
  "static/images/v22.jpg",
];

let currentHIndex = 0;
const hPhotoElement = document.getElementById("photo");

let currentVIndex = 0;
const vPhotoElement1 = document.getElementById("photo1");
const vPhotoElement2 = document.getElementById("photo2");

function cyclePhotos() {
  currentHIndex = (currentHIndex + 1) % hPhotos.length;
  hPhotoElement.src = hPhotos[currentHIndex];
  currentVIndex = (currentVIndex + 1) % vPhotos1.length;
  setTimeout(function () {
    vPhotoElement2.src = vPhotos2[currentVIndex];
  }, 1000);
  vPhotoElement1.src = vPhotos1[currentVIndex];
}

setInterval(cyclePhotos, 4000); // Change photo every 3 seconds

// Set the date we're counting down to (July 5th, 2025 @ 1 PM)
var countDownDate = new Date("Jul 5, 2025 16:00:00").getTime();

// Update the countdown every second
var countdownFunction = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days + " days " + hours + " hours " + minutes + " minutes";

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML =
      "What are you doing here still? The wedding happened already!";
  }
}, 1000);
// Marker data with lat/long and address
const markers = [
  {
    position: { lat: 42.84864475233129, lng: -76.97952861852876 }, // Geneva on the Lake
    title: "Geneva on the Lake",
    address: "123 Lakeview Rd, Geneva, NY 14456", // Example address
  },
];

// Initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 42.84864475233129, lng: -76.97952861852876 },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
  });

  // Add markers to the map
  markers.forEach((markerData) => {
    const marker = new google.maps.Marker({
      position: markerData.position,
      map: map,
      title: markerData.title,
    });

    // Create an InfoWindow with formatted content
    const infoWindowContent = `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                <h3>${markerData.title}</h3>
                <p>${markerData.address}</p>
                <button id="copy-address-${markerData.title.replace(/\s+/g, "-")}" style="padding: 5px 10px; background-color: #007bff; color: white; border: none; cursor: pointer;">
                    Copy Address
                </button>
            </div>
        `;

    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });

    // Add click event to open InfoWindow
    marker.addListener("click", () => {
      infoWindow.open(map, marker);

      // Handle the copy address button click
      const copyButton = document.getElementById(
        `copy-address-${markerData.title.replace(/\s+/g, "-")}`,
      );
      if (copyButton) {
        copyButton.onclick = () => {
          navigator.clipboard
            .writeText(markerData.address)
            .then(() => {
              alert("Address copied to clipboard!");
            })
            .catch((err) => {
              console.error("Could not copy text: ", err);
            });
        };
      }
    });
  });
}
