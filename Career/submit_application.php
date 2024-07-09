<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $experience = $_POST['experience'];
    $availability = $_POST['availability'];
    $coverletter = $_POST['coverletter'];

    // Prepare email content
    $to = "alohacleaningco.ky01@gmail.com"; // Replace with your email address
    $subject = "New Job Application from Aloha Cleaning Co.";
    $message = "A new job application has been submitted:\n\n";
    $message .= "Full Name: " . $fullname . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Phone Number: " . $phone . "\n";
    $message .= "Previous Cleaning Experience:\n" . $experience . "\n";
    $message .= "Availability:\n" . $availability . "\n";
    $message .= "Cover Letter:\n" . $coverletter . "\n";

    // Set headers
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your application has been submitted.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Redirect or handle errors if accessed directly
    header("HTTP/1.0 403 Forbidden");
    echo "Access denied.";
}
?>
