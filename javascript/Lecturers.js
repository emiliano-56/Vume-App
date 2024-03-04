

document.addEventListener("DOMContentLoaded", function() {
    // Array of lecturer names
    var lecturerNames = ['Mr Hart', 'Mr Ode', 'Mr Patrick', 'Mr OnoJa', ' Mr Kekong', 'Mrs Joy', 'Mr Elisha', 'Mr Patrick', 'Mr Emmanuel', 'Dr Davis', "HOD, Dr Omotehinwa"];

    // Shuffle the array randomly
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Function to display randomized lecturer names
    function displayRandomizedLecturerNames() {
        var container = document.getElementById('lecturerContainer');
        var shuffledNames = shuffleArray(lecturerNames);
        var index = 0;

        setInterval(function() {
            var lecturerItem = document.createElement('div');
            lecturerItem.className = 'lecturer-item';
            lecturerItem.textContent = "Lecturers: " + shuffledNames[index];
            container.innerHTML = ''; // Clear previous name
            container.appendChild(lecturerItem);
            lecturerItem.style.display = 'block';
            index = (index + 1) % shuffledNames.length; // Update index for next name
        }, 5000); // Display each name after 5 seconds
    }

    // Display randomized lecturer names
    displayRandomizedLecturerNames();
});
