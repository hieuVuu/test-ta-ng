const dataExperience = [
    {
        workTitle:"Take Az",
        workYear:"2018",
        workPosition:"Graphic Designer",
    },
    {
        workTitle:"Seal Commerce Asia",
        workYear:"2019 - 2021",
        workPosition:"UI/UX Designer",
    },
    {
        workTitle:"Sun Asterisk",
        workYear:"2021 - now",
        workPosition:" UI/UX Designer",
    },
]
window.onload = dataExperience.map((workEx)=> {
    const workWrapper = document.createElement('div');
    workWrapper.classList.add('work-item');
    workWrapper.innerHTML = `
    <div class="work-item-title font-bold font-medium">${workEx.workTitle}</div>
    <div class="work-item-year font-medium">${workEx.workYear}</div>
    <div class="work-item-position font-medium">${workEx.workPosition}</div>
    `
    document.querySelector('.resume-experience').appendChild(workWrapper);
})
