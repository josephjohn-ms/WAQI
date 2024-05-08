function toggleWeather() {
    // Implement any logic for displaying weather information
    document.getElementById('celsius').innerHTML = '32°C'; // Example: Change this line with your weather data
  }
  
  function toggleAQI() {
    // Redirect to another page (you can replace 'aqi-page.html' with the actual page URL)
    window.location.href = 'aqi1.html';
  }
  
  function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'flex' : 'none';
  }
  
  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
  
          // Call the function to get district name based on coordinates
          getDistrictName(latitude, longitude);
  
          // Display the current location
          document.getElementById('userLocation').innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
        },
        function (error) {
          document.getElementById('userDistrict').innerHTML = 'Unable to retrieve location';
        }
      );
    } else {
      document.getElementById('userDistrict').innerHTML = 'Geolocation is not supported by this browser.';
    }
  }
  
  function getDistrictName(latitude, longitude) {
    var apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var districtName = extractDistrict(data.address);
        document.getElementById('userDistrict').innerHTML = districtName;
      })
      .catch(error => {
        document.getElementById('userDistrict').innerHTML = 'Unable to retrieve district';
      });
  }
  
  function extractDistrict(address) {
    // Extract district information from the address object
    if (address && address.county) {
      return address.county;
    } else if (address && address.state_district) {
      return address.state_district;
    } else {
      return 'Unknown District';
    }
  }
  
  getUserLocation();