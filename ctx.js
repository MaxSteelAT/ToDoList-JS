const ctx = document.getElementById('chart');

const labels = ['Drink water', 'Do exercise', 'Takes vitamins', 'Sleep 8hrs', 'Eat healthy', 'Enjoy']
// Uso de la librería chat.js
const data = {
    labels: [
      'Drink water', 
      'Do exercise', 
      'Take vitamins', 
      'Sleep 8 hours', 
      'Eat healthy', 
      'Enjoy'
    ],
    datasets: [{
      label: 'Information',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  
  const config = {
    type: 'polarArea',
    data: data,
    options: {}
  };



new Chart(ctx, config);

const now = moment();

document.getElementById('formattedDate').innerHTML =
'Fecha actual: ' + now;

// Formatear la fecha en un formato más legible
const formattedDate = now.format('MMMM Do YYYY, h:mm:ss a'); // Ejemplo: Octubre 14º 2024, 3:45:10 pm
document.getElementById('formattedDate').innerHTML = 'Today is: ' + formattedDate;
  

