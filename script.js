function updatePreview() {
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
   
    document.getElementById('previewName').innerText = `${firstName} ${middleName} ${lastName}`;
    document.getElementById('previewDesignation').innerText = document.getElementById('designation').value;
    document.getElementById('previewAddress').innerText = document.getElementById('address').value;
    document.getElementById('previewEmail').innerText = document.getElementById('email').value;
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value;
    document.getElementById('previewSummary').innerText = document.getElementById('summary').value;
   
    const workExperienceContainer = document.getElementById('workExperienceContainer');
    const previewWorkExperience = document.getElementById('previewWorkExperience');
    previewWorkExperience.innerHTML = '';
    for (let i = 0; i < workExperienceContainer.children.length; i++) {
        const title = workExperienceContainer.children[i].querySelector('.workTitle')?.value || '';
        const description = workExperienceContainer.children[i].querySelector('.workDescription')?.value || '';
        previewWorkExperience.innerHTML += `<h3>${title}</h3><p>${description}</p>`;
    }
   
    const workHistoryContainer = document.getElementById('workHistoryContainer');
    const previewWorkHistory = document.getElementById('previewWorkHistory');
    previewWorkHistory.innerHTML = '';
    for (let i = 0; i < workHistoryContainer.children.length; i++) {
        const title = workHistoryContainer.children[i].querySelector('.workHistoryTitle')?.value || '';
        const company = workHistoryContainer.children[i].querySelector('.workHistoryCompany')?.value || '';
        const location = workHistoryContainer.children[i].querySelector('.workHistoryLocation')?.value || '';
        const startDate = workHistoryContainer.children[i].querySelector('.workHistoryStartDate')?.value || '';
        const endDate = workHistoryContainer.children[i].querySelector('.workHistoryEndDate')?.value || '';
        const description = workHistoryContainer.children[i].querySelector('.workHistoryDescription')?.value || '';
        previewWorkHistory.innerHTML += `<h3>${title}</h3><p>${company}, ${location}</p><p>${startDate} - ${endDate}</p><p>${description}</p>`;
    }
 
    const educationContainer = document.getElementById('educationContainer');
    const previewEducation = document.getElementById('previewEducation');
    previewEducation.innerHTML = '';
    for (let i = 0; i < educationContainer.children.length; i++) {
        const school = educationContainer.children[i].querySelector('.educationSchool')?.value || '';
        const qualification = educationContainer.children[i].querySelector('.educationQualification')?.value || '';
        const city = educationContainer.children[i].querySelector('.educationCity')?.value || '';
        const startDate = educationContainer.children[i].querySelector('.educationStartDate')?.value || '';
        const endDate = educationContainer.children[i].querySelector('.educationEndDate')?.value || '';
        const description = educationContainer.children[i].querySelector('.educationDescription')?.value || '';
        previewEducation.innerHTML += `<h3>${school}</h3><p>${qualification}, ${city}</p><p>${startDate} - ${endDate}</p><p>${description}</p>`;
    }
   
    const projectsContainer = document.getElementById('projectsContainer');
    const previewProjects = document.getElementById('previewProjects');
    previewProjects.innerHTML = '';
    for (let i = 0; i < projectsContainer.children.length; i++) {
        const name = projectsContainer.children[i].querySelector('.projectTitle')?.value || '';
        const description = projectsContainer.children[i].querySelector('.projectDescription')?.value || '';
        const projectLink = projectsContainer.children[i].querySelector('.projectLink')?.value || '';
        previewProjects.innerHTML += `<h3>${name}</h3><p>${description}</p><p>${projectLink}</p>`;
    }
   
    const skillsContainer = document.getElementById('skillsContainer');
    const previewSkills = document.getElementById('previewSkills');
    previewSkills.innerHTML = '';
    for (let i = 0; i < skillsContainer.children.length; i++) {
        const skill = skillsContainer.children[i].querySelector('.skillName')?.value || '';
        previewSkills.innerHTML += `<p>${skill}</p>`;
    }
}
 
function loadImage(event) {
    const image = document.getElementById('previewImage');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
}
 
function addWorkExperience() {
    const workExperienceContainer = document.getElementById('workExperienceContainer');
    const workExperienceDiv = document.createElement('div');
    workExperienceDiv.className = 'work-experience-entry';
    workExperienceDiv.innerHTML = `
<label>Title:</label>
<input type="text" class="workTitle" oninput="updatePreview()">
<label>Description:</label>
<textarea class="workDescription" oninput="updatePreview()"></textarea>
<button type="button" class="remove-button" onclick="removeWorkExperience(this)">
            🗑️
</button>
<hr>
    `;
    workExperienceContainer.appendChild(workExperienceDiv);
}
 
function removeWorkExperience(button) {
    button.parentElement.remove();
    updatePreview();
}
 
function addWorkHistory() {
    const workHistoryContainer = document.getElementById('workHistoryContainer');
    const workHistoryDiv = document.createElement('div');
    workHistoryDiv.className = 'work-history-entry';
    workHistoryDiv.innerHTML = `
<div class="row">
<div class="column">
<label for="workHistoryTitle">Title:</label>
<input type="text" class="workHistoryTitle" oninput="updatePreview()">
</div>
<div class="column">
<label for="workHistoryCompany">Company/Organization:</label>
<input type="text" class="workHistoryCompany" oninput="updatePreview()">
</div>
<div class="column">
<label for="workHistoryLocation">Location:</label>
<input type="text" class="workHistoryLocation" oninput="updatePreview()">
</div>
</div>
<div class="row">
<div class="column">
<label for="workHistoryStartDate">Start Date:</label>
<input type="date" class="workHistoryStartDate" oninput="updatePreview()">
</div>
<div class="column">
<label for="workHistoryEndDate">End Date:</label>
<input type="date" class="workHistoryEndDate" oninput="updatePreview()">
</div>
<div class="column">
<label for="workHistoryDescription">Description:</label>
<textarea class="workHistoryDescription" oninput="updatePreview()"></textarea>
</div>
</div>
<button type="button" class="remove-button" onclick="removeWorkHistory(this)">
            🗑️
</button>
<hr>
    `;
    workHistoryContainer.appendChild(workHistoryDiv);
}
 
function removeWorkHistory(button) {
    button.parentElement.remove();
    updatePreview();
}
 
function addEducation() {
    const educationContainer = document.getElementById('educationContainer');
    const educationDiv = document.createElement('div');
    educationDiv.className = 'education-entry';
    educationDiv.innerHTML = `
<div class="row">
<div class="column">
<label for="educationSchool">School Name:</label>
<input type="text" class="educationSchool" oninput="updatePreview()">
</div>
<div class="column">
<label for="educationQualification">Qualification:</label>
<input type="text" class="educationQualification" oninput="updatePreview()">
</div>
<div class="column">
<label for="educationCity">City:</label>
<input type="text" class="educationCity" oninput="updatePreview()">
</div>
</div>
<div class="row">
<div class="column">
<label for="educationStartDate">Start Date:</label>
<input type="date" class="educationStartDate" oninput="updatePreview()">
</div>
<div class="column">
<label for="educationEndDate">End Date:</label>
<input type="date" class="educationEndDate" oninput="updatePreview()">
</div>
<div class="column">
<label for="educationDescription">Description:</label>
<textarea class="educationDescription" oninput="updatePreview()"></textarea>
</div>
</div>
<button type="button" class="remove-button" onclick="removeEducation(this)">
            🗑️
</button>
<hr>
    `;
    educationContainer.appendChild(educationDiv);
}
 
function removeEducation(button) {
    button.parentElement.remove();
    updatePreview();
}
 
function generateCV() {
    document.getElementById('cvPreview').style.display = 'block';
}
 
function downloadCV() {
    const element = document.getElementById('cvPreview');
    const options = {
        margin: 0.5,
        filename: 'CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
 
    html2pdf().set(options).from(element).save();
}
 
function addSkill() {
    const skillsContainer = document.getElementById('skillsContainer');
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-entry';
    skillDiv.innerHTML = `
<label>Skill:</label>
<input type="text" class="skillName" oninput="updatePreview()">
<button type="button" class="remove-button" onclick="removeSkill(this)">
            🗑️
</button>
<hr>
    `;
    skillsContainer.appendChild(skillDiv);
}
 
function removeSkill(button) {
    button.parentElement.remove();
    updatePreview();
}
 
function addProject() {
    const projectsContainer = document.getElementById('projectsContainer');
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-entry';
    projectDiv.innerHTML = `
<label>Project Title:</label>
<input type="text" class="projectTitle" oninput="updatePreview()">
<label>Description:</label>
<textarea class="projectDescription" oninput="updatePreview()"></textarea>
<label>Project Link:</label>
<input type="text" class="projectLink" oninput="updatePreview()">
<button type="button" class="remove-button" onclick="removeProject(this)">
            🗑️
</button>
<hr>
    `;
    projectsContainer.appendChild(projectDiv);
}
 
function removeProject(button) {
    button.parentElement.remove();
    updatePreview();
}
 
// Initialize with one work experience, one work history, and one education entry
addWorkExperience();
addWorkHistory();
addEducation();
addSkill();
addProject();