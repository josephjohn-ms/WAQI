// Replace this with real AQI data
const aqiData = {
	current: 35,
	forecast: [
		{ day: 'Today', value: 42 },
		{ day: 'Tomorrow', value: 38 }
	]
};

document.getElementById('aqi-value').innerText = aqiData.current;

const forecastTableBody = document.querySelector('#aqi-forecast-table tbody');

aqiData.forecast.forEach(forecast => {
	const row = document.createElement('tr');
	const dayCell = document.createElement('td');
	const aqiCell = document.createElement('td');

	dayCell.innerText = forecast.day;
	aqiCell.innerText = forecast.value;

	row.appendChild(dayCell);
	row.appendChild(aqiCell);

	forecastTableBody.appendChild(row);
});