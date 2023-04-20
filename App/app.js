const apiUrl = 'https://localhost:3000';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const trainSchedule = document.querySelector('#train-schedule tbody');
    data.forEach(train => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${train.trainNumber}</td>
        <td>${train.trainName}</td>
        <td>${train.actualDepartureTime}</td>
        <td>${train.actualArrivalTime}</td>
        <td>${train.sleeperPrice}</td>
        <td>${train.sleeperAvailability}</td>
        <td>${train.acPrice}</td>
        <td>${train.acAvailability}</td>
      `;
      trainSchedule.appendChild(row);
    });
  })
  .catch(error => console.error(error));