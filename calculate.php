<?php
if (isset($_POST['calculate'])) {
    // Check if grades are empty
    if (empty(array_filter($_POST['grades']))) {
        echo "<div class='container mt-5'>";
        echo "<h2>GPA Calculation Result</h2>";
        echo "<div class='alert alert-warning mt-3'>Please enter details to calculate.</div>";
        echo "</div>";
        exit; // Stop execution
    }

    // Function to calculate GPA
    function calculateGPA($grades, $credits) {
        $totalWeightedSum = 0;
        $totalCredits = 0;
        foreach ($grades as $key => $grade) {
            if (!empty($grade) && !empty($credits[$key])) {
                $totalCredits += $credits[$key];
                switch ($grade) {
                    case 'A':
                        $totalWeightedSum += 5 * $credits[$key];
                        break;
                    case 'B':
                        $totalWeightedSum += 4 * $credits[$key];
                        break;
                    case 'C':
                        $totalWeightedSum += 3 * $credits[$key];
                        break;
                    case 'D':
                        $totalWeightedSum += 2 * $credits[$key];
                        break;
                    case 'E':
                        $totalWeightedSum += 1 * $credits[$key];
                        break;
                    case 'F':
                        $totalWeightedSum += 0 * $credits[$key];
                        break;
                    default:
                        // Handle invalid grade
                        break;
                }
            }
        }
        $gpa = $totalWeightedSum / $totalCredits;
        return number_format($gpa, 1); // Format GPA to have one decimal place
    }

    // Function to determine GPA comments
    function getGPAComments($gpa) {
        if ($gpa >= 4.0) {
            return "Excellent";
        } elseif ($gpa >= 3.0) {
            return "Good";
        } elseif ($gpa >= 2.0) {
            return "Average";
        } else {
            return "Below Average";
        }
    }

    // Get grades and credits from form
    $grades = $_POST['grades'];
    $credits = $_POST['credits'];

    // Calculate GPA
    $gpa = calculateGPA($grades, $credits);

    // Get GPA comments
    $comments = getGPAComments($gpa);

    echo "<div class='container mt-5 text-center'>";
    echo "<h2>GPA Calculation Result</h2>";
    echo "<div class='alert alert-success mt-3'>Your GPA is: $gpa</div>";
    echo "<div class='alert alert-info mt-3'>Comments: $comments</div>";
    echo "</div>";
    

}
?>




