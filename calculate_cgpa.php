<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $num_semesters = $_POST['num_semesters'];

  $total_grade_points = 0;
  $total_credits = 0;

  for ($i = 1; $i <= $num_semesters; $i++) {
    $gpa = $_POST['semester' . $i . '_gpa'];
    $credits = $_POST['semester' . $i . '_credits'];
    $total_grade_points += $gpa * $credits;
    $total_credits += $credits;
  }

  $cgpa = $total_grade_points / $total_credits;

  echo number_format($cgpa, 2);
}
?>
