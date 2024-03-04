<?php
// login_process.php

require 'init_supabase.php'; // Initialize Supabase

$matricNumber = $_POST['matricNumber'];
$password = $_POST['password'];

// Authenticate the user with Supabase
$user = $supabase->auth()->signInWithEmailAndPassword($email, $password);

if ($user->error) {
    echo "Login failed: " . $user->error->message;
    exit();
}

// Redirect to the GPA calculation page
header("Location: calculate_gpa.php");
exit();
?>
