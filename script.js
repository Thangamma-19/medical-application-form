document.getElementById("medicalForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const medicalHistory = document.getElementById("medicalHistory").value.trim();
    const emergencyContact = document.getElementById("emergencyContact").value.trim();
    const emergencyContactNumber = document.getElementById("emergencyContactNumber").value.trim();

    // Simple validation
    if (fullName === "" || dob === "" || contact === "" || email === "" || medicalHistory === "" || emergencyContact === "" || emergencyContactNumber === "") {
        alert("All fields are required!");
        return;
    }

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Regular expression for phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(contact) || !phonePattern.test(emergencyContactNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // If validation passes, alert success
    alert("Form submitted successfully!");

    // Reset form
    document.getElementById("medicalForm").reset();
});