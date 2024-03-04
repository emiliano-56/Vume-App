<?php
// register_process.php

require 'init_supabase.php'; // Initialize Supabase

$matricNumber = $_POST['matricNumber'];
$email = $_POST['email'];
$password = $_POST['password'];

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address";
    exit();
}

// Validate matriculation number
if (!preg_match("/^FUHSO\/U20\/\d{3}$/", $matricNumber)) {
    echo "Invalid matriculation number";
    exit();
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Register the user in Supabase
$user = $supabase->auth()->signUp($email, $hashedPassword);

if ($user->error) {
    echo "Registration failed: " . $user->error->message;
    exit();
}

// Store the user data in your database using prepared statements
$stmt = $pdo->prepare("INSERT INTO users (matriculation_number, email, password) VALUES (?, ?, ?)");
$stmt->execute([$matricNumber, $email, $hashedPassword]);

header("Location: login.php"); // Redirect to login page
exit();
?>
