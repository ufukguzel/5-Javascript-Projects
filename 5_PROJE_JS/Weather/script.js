// API anahtarınızı buraya yerleştirin
const API_KEY = "7f549912524c020fc17033f5f6af0024";
// Hava durumu verilerini almak istediğiniz şehri buraya yazın
const CITY = "İstanbul";
// API'ye göndermek için oluşturulan URL
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

// HTML elemanlarına erişmek için değişkenler oluşturun
const cityEl = document.getElementById('city');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const clockEl = document.getElementById('clock');

function updateClock() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	clockEl.textContent = timeString;
}

// Saati ilk kez güncelleyin
updateClock();

// Her saniye saat güncellemesi yapın
setInterval(() => {
  updateClock();
}, 1000);

// fetch() yöntemiyle API'ye istek gönderin ve verileri JSON formatında alın
fetch(URL)
		.then(response => response.json())
		.then(data => {
			// API'den alınan verileri kullanarak HTML elemanlarını güncelleyin
			cityEl.textContent = data.name;
			temperatureEl.textContent = `Temperature: ${data.main.temp} °C`;
			humidityEl.textContent = `Humidity: ${data.main.humidity} %`;
			windSpeedEl.textContent = `Wind Speed: ${data.wind.speed} m/s`;
		})
		.catch(error => console.log(error));