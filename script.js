const form = document.querySelector("#application-form");

const companyInput = document.querySelector("#company");
const roleInput = document.querySelector("#role");
const dateInput = document.querySelector("#date-applied");
const statusInput = document.querySelector("#status");
const notesInput = document.querySelector("#notes");
const followUpInput = document.querySelector("#follow-up");

const formMessage = document.querySelector("#form-message");
const applicationList = document.querySelector("#application-list");

const heroNumber = document.querySelector(".hero-number");
const summaryNumbers = document.querySelectorAll(".summary-number");

const storageKey = "internshipApplications";


function loadApplications() {
    const savedApplications = localStorage.getItem(storageKey);

    if (savedApplications) {
        return JSON.parse(savedApplications);
    }

    return [];
}


function saveApplications() {
    localStorage.setItem(
        storageKey,
        JSON.stringify(applications)
    );
}


let applications = loadApplications();


function updateSummary() {
    const total = applications.length;

    const active = applications.filter(function(application) {
        return (
            application.status === "Applied" ||
            application.status === "Interview"
        );
    }).length;

    const interviews = applications.filter(function(application) {
        return application.status === "Interview";
    }).length;

    const offers = applications.filter(function(application) {
        return application.status === "Offer";
    }).length;

    const followUps = applications.filter(function(application) {
        return application.followUp === true;
    }).length;


    heroNumber.textContent = total;

    summaryNumbers[0].textContent = total;
    summaryNumbers[1].textContent = active;
    summaryNumbers[2].textContent = interviews;
    summaryNumbers[3].textContent = offers;
    summaryNumbers[4].textContent = followUps;
}


function renderApplications() {
    applicationList.innerHTML = "";


    if (applications.length === 0) {
        const emptyState = document.createElement("div");

        emptyState.className = "empty-state";


        const emptyLabel = document.createElement("p");

        emptyLabel.className = "empty-label";
        emptyLabel.textContent = "00 / EMPTY";


        const heading = document.createElement("h4");

        heading.textContent = "No applications yet.";


        const message = document.createElement("p");

        message.textContent =
            "Add your first internship application to begin tracking your search.";


        emptyState.appendChild(emptyLabel);
        emptyState.appendChild(heading);
        emptyState.appendChild(message);

        applicationList.appendChild(emptyState);

        return;
    }


    applications.forEach(function(application, index) {
        const article = document.createElement("article");

        article.className = "application-record";


        const number = document.createElement("p");

        number.className = "application-number";
        number.textContent = String(index + 1).padStart(2, "0");


        const details = document.createElement("div");

        details.className = "application-details";


        const company = document.createElement("h4");

        company.className = "application-company";
        company.textContent = application.company;


        const role = document.createElement("p");

        role.className = "application-role";
        role.textContent = application.role;


        const meta = document.createElement("p");

        meta.className = "application-meta";

        meta.textContent =
            "Applied " +
            application.dateApplied +
            " • " +
            (application.followUp ? "Follow-up" : "No action");


        const status = document.createElement("p");

        status.className = "application-status";
        status.textContent = application.status;


        details.appendChild(company);
        details.appendChild(role);
        details.appendChild(meta);


        article.appendChild(number);
        article.appendChild(details);
        article.appendChild(status);

        applicationList.appendChild(article);
    });
}


function addApplication() {
    const company = companyInput.value.trim();
    const role = roleInput.value.trim();
    const dateApplied = dateInput.value;
    const status = statusInput.value;
    const notes = notesInput.value.trim();
    const followUp = followUpInput.checked;


    if (
        company === "" ||
        role === "" ||
        dateApplied === "" ||
        status === ""
    ) {
        formMessage.textContent =
            "Please complete the company, role, date, and status before adding the application.";

        formMessage.className = "form-message error";

        return;
    }


    const application = {
        id: Date.now(),
        company: company,
        role: role,
        dateApplied: dateApplied,
        status: status,
        followUp: followUp,
        notes: notes
    };


    applications.push(application);

    saveApplications();


    formMessage.textContent = "Application added.";

    formMessage.className = "form-message success";


    form.reset();


    updateSummary();
    renderApplications();
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    addApplication();
});


updateSummary();
renderApplications();
