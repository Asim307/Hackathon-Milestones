// Get form and display elements
var resumeForm = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Event listener for form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh
    // Capture form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("Skills").value;
    // Update the resume display with entered data
    resumeDisplay.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Make the resume display section editable
    resumeDisplay.contentEditable = "true";
});
