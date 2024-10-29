// Function to generate the resume content
function generateResume(data) {
    return "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n    ");
}
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get values from the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("Skills").value;
    // Create resume data object
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    // Display the generated resume
    var resumeDisplay = document.getElementById("resume-display");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume(resumeData);
    }
}
// Attach event listener to form
var form = document.getElementById("resume-form");
if (form) {
    form.addEventListener("submit", handleFormSubmit);
}
