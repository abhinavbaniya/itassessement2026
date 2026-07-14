// Contact Form Validation
function validateForm() {

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Name Validation
    if (name === "") {
        alert("Please enter your full name.");
        document.getElementById("name").focus();
        return false;
    }

    // Email Validation
    if (email === "") {
        alert("Please enter your email address.");
        document.getElementById("email").focus();
        return false;
    }

    // Email Format Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }

    // Phone Validation
    if (phone === "") {
        alert("Please enter your phone number.");
        document.getElementById("phone").focus();
        return false;
    }

    // Allow only numbers
    let phonePattern = /^[0-9]{7,15}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must contain only numbers (7-15 digits).");
        document.getElementById("phone").focus();
        return false;
    }

    // Message Validation
    if (message === "") {
        alert("Please enter your message.");
        document.getElementById("message").focus();
        return false;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        document.getElementById("message").focus();
        return false;
    }

    // Success Message
    alert("Thank you! Your message has been sent successfully.");

    return true;
}