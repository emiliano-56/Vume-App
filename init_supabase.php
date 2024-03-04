<?php
// init_supabase.php

//require 'GPA/autoload.php';
require __DIR__ . '/supabase-php/autoload.php';


use Supabase\Client;

$supabaseUrl = 'https://urppsryboyliqnxcxmip.supabase.co';
$supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVycHBzcnlib3lsaXFueGN4bWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MjIwMzIsImV4cCI6MjAyMzQ5ODAzMn0.EK2Bnb7_NE7MlDBYjiZdT3S_HZuR-3ZLR13q6oXc7gM';

$supabase = new Client($supabaseUrl, $supabaseKey);

?>

