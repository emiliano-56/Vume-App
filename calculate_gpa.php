<?php
// calculate_gpa.php

require 'init_supabase.php'; // Initialize Supabase

// Verify if the user is authenticated
$user = $supabase->auth()->user();
if (!$user) {
    // Redirect to the login page if not authenticated
    header("Location: login.php");
    exit();
}

// Retrieve the user's matriculation number from the database
// Replace with actual code to retrieve data from your database
// Example: $matricNumber = execute("SELECT matriculation_number FROM users WHERE id = $user->id")->fetchColumn();

// Check if the user's matriculation number is valid
$allowedMatricNumbers = ["FUHSO/U20/001", "FUHSO/U20/002", "FUHSO/U20/003", "FUHSO/U20/004", "FUHSO/U20/005"];
if (!in_array($matricNumber, $allowedMatricNumbers)) {
    echo "Access denied. Only registered matriculation numbers are allowed.";
    exit();
}

// Proceed with GPA calculation functionality
echo "Welcome! You have access to GPA calculation functionality.";
?>
