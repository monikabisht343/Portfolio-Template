// Get the necessary elements
const nameInput = document.getElementById('name');
const contactInput = document.getElementById('contact');
const educationInput = document.getElementById('education');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');
const linkedinInput = document.getElementById('linkedin');
const githubInput = document.getElementById('github');
const twitterInput = document.getElementById('twitter');
const resumeSection = document.getElementById('resumeSection');
const saveButton = document.getElementById('saveButton');
const downloadButton = document.getElementById('downloadButton');
const portfolio = document.getElementById('portfolio');

// Function to generate resume content
function generateResumeContent() {
    // Create a string for social media links
    let socialLinks = '';
    
    // Add LinkedIn link if provided
    if (linkedinInput.value) {
        socialLinks += `<a href="${linkedinInput.value}" target="_blank" title="LinkedIn">
            LinkedIn
        </a><br>`;
    }
    
    // Add GitHub link if provided
    if (githubInput.value) {
        socialLinks += `<a href="${githubInput.value}" target="_blank" title="GitHub">
            GitHub
        </a><br>`;
    }
    
    // Add Twitter link if provided
    if (twitterInput.value) {
        socialLinks += `<a href="${twitterInput.value}" target="_blank" title="Twitter">
            Twitter
        </a><br>`;
    }
    
    //add Portfolio link provided by 
if (portfolio.value){
    socialLinks += `<a href="$githubInput.value}" target="_blank" title="Portfolio">
    Portfolio
    </a><br>`;
}
    // Resume content with all sections and social links
    return `
        <h2>${nameInput.value}</h2>
        <p><strong>Contact Information:</strong> ${contactInput.value}</p>
        <h3>Education</h3>
        <p>${educationInput.value}</p>
        <h3>Work Experience</h3>
        <p>${experienceInput.value}</p>
        <h3>Skills</h3>
        <p>${skillsInput.value}</p>
        <h3>Social Media Links</h3>
        ${socialLinks}
    `;
}

// Event listener for the "Save Resume" button
saveButton.addEventListener('click', function() {
    // Generate the resume content and display it in the resume section
    const resumeContent = generateResumeContent();
    resumeSection.innerHTML = resumeContent;
});

// Event listener for the "Download Resume" button
downloadButton.addEventListener('click', function() {
    // Generate the resume content
    const resumeContent = generateResumeContent();
    
    // Create a Blob object with the resume content and MIME type 'text/html'
    const blob = new Blob([resumeContent], { type: 'text/html' });
    
    // Create a URL object for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.html'; // Specify the file name for download
    
    // Simulate a click on the link to trigger the download
    link.click();
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
});
