// Function to initialize the resume builder
function initializeResumeBuilder() {
    var form = document.getElementById('resume-form');
    var resumeDisplay = document.getElementById('resume-display');
    var shareableLinkContainer = document.getElementById('shareable-link-container');
    var shareableLink = document.getElementById('shareable-link');
    var downloadButton = document.getElementById('download-pdf');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        generateResume(resumeDisplay);
        shareableLinkContainer.style.display = 'block';
    });
    downloadButton.addEventListener('click', downloadResumeAsPDF);
    generateShareableLink(shareableLink);
}
// Function to generate the resume content
function generateResume(displayArea) {
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('Skills').value;
    displayArea.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Username:</strong> ").concat(username, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education:</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience:</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n    ");
}
// Function to generate a unique shareable link
function generateShareableLink(linkElement) {
    var resumeData = encodeURIComponent(JSON.stringify({
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('Skills').value,
    }));
}
// Function to download resume as PDF
function downloadResumeAsPDF() {
    var displayArea = document.getElementById('resume-display');
    if (!displayArea)
        return;
    // For simplicity, using a basic approach
    var printWindow = window.open('', '_blank');
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write("\n        <html>\n            <head><title>Resume</title></head>\n            <body>".concat(displayArea.innerHTML, "</body>\n        </html>\n    "));
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
}
// Initialize the resume builder when the document is loaded
document.addEventListener('DOMContentLoaded', initializeResumeBuilder);
