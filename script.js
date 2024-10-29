
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '348400b99dd6b698e83035b8ecc4e916';
    // dzüünkharaa
    const city = 'dzüünkharaa';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json()) // json -руу хөрвүүлж байна.
      .then(data => {
        const weatherDiv = document.getElementById('weather');
        const temperature = data.main.temp;
        const tempmax = data.main.temp_max;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
  
        weatherDiv.innerHTML = `
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Max Temperature:</strong> ${tempmax}°C</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
          <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
          <p><strong>Sunrise:</strong> ${sunrise} m/s</p>
          <p><strong>Sunset:</strong> ${sunset} m/s</p>
        `;
      })
      .catch(error => {
        document.getElementById('weather').innerHTML = '<p>Failed to retrieve weather data.</p>';
        console.error('Error:', error);
      });
  });
  