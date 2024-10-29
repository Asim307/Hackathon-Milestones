// Function to initialize the resume builder
function initializeResumeBuilder() {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeDisplay = document.getElementById(
    "resume-display"
  ) as HTMLDivElement;
  const shareableLinkContainer = document.getElementById(
    "shareable-link-container"
  ) as HTMLDivElement;
  const shareableLink = document.getElementById(
    "shareable-link"
  ) as HTMLAnchorElement;
  const downloadButton = document.getElementById(
    "download-pdf"
  ) as HTMLButtonElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    generateResume(resumeDisplay);
    shareableLinkContainer.style.display = "block";
  });

  downloadButton.addEventListener("click", downloadResumeAsPDF);

  generateShareableLink(shareableLink);
}

// Function to generate the resume content
function generateResume(displayArea: HTMLDivElement) {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("Skills") as HTMLTextAreaElement)
    .value;

  displayArea.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;
}

// Function to generate a unique shareable link
function generateShareableLink(linkElement: HTMLAnchorElement) {
  const resumeData = encodeURIComponent(
    JSON.stringify({
      name: (document.getElementById("name") as HTMLInputElement).value,
      username: (document.getElementById("username") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      phone: (document.getElementById("phone") as HTMLInputElement).value,
      education: (document.getElementById("education") as HTMLTextAreaElement)
        .value,
      experience: (document.getElementById("experience") as HTMLTextAreaElement)
        .value,
      skills: (document.getElementById("Skills") as HTMLTextAreaElement).value,
    })
  );
}

// Function to download resume as PDF
function downloadResumeAsPDF() {
  const displayArea = document.getElementById(
    "resume-display"
  ) as HTMLDivElement;

  if (!displayArea) return;

  // For simplicity, using a basic approach
  const printWindow = window.open("", "_blank");
  printWindow?.document.write(`
        <html>
            <head><title>Resume</title></head>
            <body>${displayArea.innerHTML}</body>
        </html>
    `);
  printWindow?.document.close();
  printWindow?.print();
}

// Initialize the resume builder when the document is loaded
document.addEventListener("DOMContentLoaded", initializeResumeBuilder);
