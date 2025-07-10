// JavaScript function to validate the form
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let phonePattern = /^\d{10}$/; // Simple regex for 10-digit phone number

    if (!name || !email || !phone || !message) {
        alert("All fields are required!");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    alert("Thank you for your message! We'll get back to you soon.");
    return true; // Submit form if validation passes
}
