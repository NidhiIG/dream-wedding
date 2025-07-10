// Simulated User Data
let userData = {
    username: "Nidhi Bhutada",
    email: "nidhibhutada18@gmail.com",
    phone: "8956882056",
    address: "Karve Nagar, Pune.",
};

// Display User Data
function displayProfile() {
    document.getElementById("username").innerText = userData.username;
    document.getElementById("email").innerText = userData.email;
    document.getElementById("phone").innerText = userData.phone;
    document.getElementById("address").innerText = userData.address;

    // Populate Edit Form
    document.getElementById("edit-username").value = userData.username;
    document.getElementById("edit-email").value = userData.email;
    document.getElementById("edit-phone").value = userData.phone;
    document.getElementById("edit-address").value = userData.address;
}

// Open Edit Modal
function editProfile() {
    document.getElementById("edit-modal").style.display = "flex";
}

// Save Updated Profile
function saveProfile() {
    userData.username = document.getElementById("edit-username").value;
    userData.email = document.getElementById("edit-email").value;
    userData.phone = document.getElementById("edit-phone").value;
    userData.address = document.getElementById("edit-address").value;

    displayProfile();
    closeModal();
}

// Close Modal
function closeModal() {
    document.getElementById("edit-modal").style.display = "none";
}

// Initialize Profile on Page Load
document.addEventListener("DOMContentLoaded", displayProfile);
