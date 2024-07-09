<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $dob = htmlspecialchars($_POST['dob']);
    $address = htmlspecialchars($_POST['address']);
    $education = htmlspecialchars($_POST['education']);
    $experience = htmlspecialchars($_POST['experience']);
    $skills = htmlspecialchars($_POST['skills']);

    $to = 'alohacleaningco.ky01@gmail.com';
    $subject = 'New Job Application';
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nDate of Birth: $dob\nAddress: $address\nEducation: $education\nExperience: $experience\nSkills: $skills";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Application sent successfully!";
    } else {
        echo "Failed to send application.";
    }
}
?>
