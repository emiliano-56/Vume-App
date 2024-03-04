
document.addEventListener("DOMContentLoaded", function() {
    // Array of anonymous GPAs
    var anonymousGPAs = ['4.10', '4.67', '4.12', '5.0', '4.55', '4.14', '5.0'];

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

    // Function to display anonymous GPAs sequentially
    function displayAnonymousGPAs() {
        var container = document.getElementById('cgpaContainer');
        var shuffledGPAs = shuffleArray(anonymousGPAs);
        var index = 0;

        setInterval(function() {
            var gpaItem = document.createElement('div');
            gpaItem.className = 'gpa-item';
            gpaItem.textContent = "GPA: " + shuffledGPAs[index];
            container.innerHTML = ''; // Clear previous GPA
            container.appendChild(gpaItem);
            gpaItem.style.display = 'block';
            index = (index + 1) % shuffledGPAs.length; // Update index for next GPA
        }, 5000); // Display each GPA after 5 seconds
    }

    // Display anonymous GPAs
    displayAnonymousGPAs();
});