<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $resume = $_FILES['resume']['tmp_name'];
    $resume_name = $_FILES['resume']['name'];

    $to = 'alohacleaningco.ky01@gmail.com';
    $subject = 'New Job Application';
    $message = "Name: $name\nEmail: $email\nPhone: $phone\n";
    $headers = "From: $email";

    $file = chunk_split(base64_encode(file_get_contents($resume)));
    $boundary = md5("sanwebe");
    $headers .= "\nMIME-Version: 1.0\nContent-Type: multipart/mixed; boundary = $boundary";

    $body = "--$boundary\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\n";
    $body .= "Content-Transfer-Encoding: base64\n\n";
    $body .= chunk_split(base64_encode($message));
    
    $body .= "--$boundary\n";
    $body .= "Content-Type: application/octet-stream; name=".$resume_name."\n"; 
    $body .= "Content-Transfer-Encoding: base64\n";
    $body .= "Content-Disposition: attachment; filename=".$resume_name."\n\n";
    $body .= $file."\n";
    $body .= "--$boundary--";

    if (mail($to, $subject, $body, $headers)) {
        echo "Application sent successfully!";
    } else {
        echo "Failed to send application.";
    }
}
?>
