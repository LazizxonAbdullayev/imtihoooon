var form = document.querySelector('.job-form')
var companyInput = document.querySelector('.company-input')
var jobInput = document.querySelector('.job-input')
var salaryInput = document.querySelector('.salary-input')
var hCompany = document.querySelector('.h-company')
var hJob = document.querySelector('.h-job')
var hSAlary = document.querySelector('.h-salary')
var jobList = document.querySelector('.b-card-2')

var JobList = [{
    id: 1,
    text: ``}
]

function renderJobList () {
    
    for ( var index = 0; index < allJobList.length; index++) {
        var elCard2 = document.createElement ('li')
        elCard2.innerHTML = `<div class="job-card">
                                <div class="h-job card-header">
                                    ${allJobList[i].text}
                                </div>
                                <div class="card-body">
                                    <p class="h-company card-text">
                                        Company: <font class="fw-bold">Google</font>
                                    </p>
                                    <p class="h-salary card-text">
                                        Salary: <font class="fw-bold">4000$</font>
                                    </p>
                                </div>
                            </div>`;

                            jobList.appendChild(elCard2);

        
    }
}

function onSubmit(evt) {
    evt.preventDefault()

    var newJobList = {
        id: 1,
        hJob: `${jobInput.value.trim()}`,
        hCompany: `Company: ${companyInput.value.trim()}`,
        hSAlary: `Salary: ${salaryInput.value.trim()}`,

    }
    jobInput.value = null
    companyInput.value = null
    salaryInput.value = null
    console.log(newJobList)
}

form.addEventListener('submit', onSubmit)
renderJobList();

































// form.addEventListener('submit', function (e) {
//     e.preventDefault()
    
//     hJob.textContent = `${jobInput.value.trim()}`
//     hCompany.textContent = `Company: ${companyInput.value.trim()}`
//     hSAlary.textContent = `Salary: ${salaryInput.value.trim()}`

    
// })

