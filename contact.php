<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Your email (where the message will be delivered)
    $to = "avindinavodya@gmail.com";

    $subject = "New Message from Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message Sent Successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Message Failed to Send. Please try again.'); window.location.href='index.html';</script>";
    }
}
?>

