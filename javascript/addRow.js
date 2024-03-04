document.addEventListener("DOMContentLoaded", function() {
    // Add row button functionality
    document.getElementById("addRow").addEventListener("click", function() {
        const tbody = document.querySelector("#gradesTable tbody");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" class="form-control grade-input" name="grades[]" placeholder="Grade (e.g., A)"></td>
            <td><input type="text" class="form-control" name="credits[]" placeholder="Credit Unit (e.g., 3)"></td>
        `;
        tbody.appendChild(newRow);
    });

    // Grade input validation
    document.addEventListener("keyup", function(event) {
        if (event.target.classList.contains("grade-input")) {
            const gradeInput = event.target;
            const grade = gradeInput.value.toUpperCase();
            if (!['A', 'B', 'C', 'D', 'E', 'F', ''].includes(grade)) {
                gradeInput.value = '';
                alert('Invalid grade! Please enter A, B, C, D, E, F, or leave it blank.');
            }
        }
    });
});

// Function to update GPA comments
// You can define this function here or elsewhere in your code



