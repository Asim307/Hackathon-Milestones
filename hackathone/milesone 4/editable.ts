
// Get form and display elements
const resumeForm = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

// Event listener for form submission
resumeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents page refresh

    // Capture form input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("Skills") as HTMLTextAreaElement).value;

    // Update the resume display with entered data
    resumeDisplay.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Make the resume display section editable
    resumeDisplay.contentEditable = "true";
});

