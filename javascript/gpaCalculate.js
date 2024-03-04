document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("gpaForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const grades = Array.from(document.querySelectorAll("input[name='grades']")).map(input => input.value);
        const credits = Array.from(document.querySelectorAll("input[name='credits']")).map(input => parseFloat(input.value));

        if (grades.some(grade => grade.trim() === "")) {
            showResult("Please enter all grades and credits.", "warning");
            return;
        }

        const gpa = calculateGPA(grades, credits);
        const comments = getGPAComments(gpa);

        showResult(`Your GPA is: ${gpa.toFixed(1)}<br>Comments: ${comments}`, "success");
    });
});

function calculateGPA(grades, credits) {
    let totalWeightedSum = 0;
    let totalCredits = 0;

    grades.forEach((grade, index) => {
        if (grade.trim() !== "" && !isNaN(credits[index])) {
            totalCredits += credits[index];
            switch (grade) {
                case 'A':
                    totalWeightedSum += 5 * credits[index];
                    break;
                case 'B':
                    totalWeightedSum += 4 * credits[index];
                    break;
                case 'C':
                    totalWeightedSum += 3 * credits[index];
                    break;
                case 'D':
                    totalWeightedSum += 2 * credits[index];
                    break;
                case 'E':
                    totalWeightedSum += 1 * credits[index];
                    break;
                case 'F':
                    totalWeightedSum += 0 * credits[index];
                    break;
                default:
                    // Handle invalid grade
                    break;
            }
        }
    });

    const gpa = totalWeightedSum / totalCredits;
    return isNaN(gpa) ? 0 : gpa;
}

function getGPAComments(gpa) {
    if (gpa >= 4.0) {
        return "Excellent";
    } else if (gpa >= 3.0) {
        return "Good";
    } else if (gpa >= 2.0) {
        return "Average";
    } else {
        return "Below Average";
    }
}

function showResult(message, type) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<div class="alert alert-${type} mt-3">${message}</div>`;
}
