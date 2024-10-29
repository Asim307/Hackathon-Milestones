
// Interface to define the structure of resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to generate the resume content
function generateResume(data: ResumeData): string {
    return `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Experience</h3>
        <p>${data.experience}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
    `;
}

// Function to handle form submission
function handleFormSubmit(event: Event) {
    event.preventDefault();

    // Get values from the form inputs
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("Skills") as HTMLTextAreaElement).value;

    // Create resume data object
    const resumeData: ResumeData = { name, email, phone, education, experience, skills };

    // Display the generated resume
    const resumeDisplay = document.getElementById("resume-display");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = generateResume(resumeData);
    }
}

// Attach event listener to form
const form = document.getElementById("resume-form");
if (form) {
    form.addEventListener("submit", handleFormSubmit);
}

