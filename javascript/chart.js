 var ctx = document.getElementById('gpaChart').getContext('2d');
    
    var gpaChart = new Chart(ctx, {
      type: 'line', // Using line chart as the base
      data: {
        labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'],
        datasets: [{
          label: 'GPA Performance',
          data: [3.5, 3.7, 3.8, 3.9, 4.0, 3.9],
          backgroundColor: 'rgba(187, 251, 76, 0.2)', // Hexadecimal color code for semi-transparent #BBFB4C
          borderColor: 'rgba(187, 251, 76, 1)', // Hexadecimal color code for #BBFB4C
          borderWidth: 1,
          fill: true // Fills the area under the line
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 4.0 // Adjust based on the maximum possible GPA
            }
          }]
        }
      }
    });
