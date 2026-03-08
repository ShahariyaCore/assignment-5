function logout(){
window.location.href="index.html"
}






let closedCard = [];
let openCard = [];
let currentStatus = "all";

const allSection= document.getElementById("all-Section")
const closedSection=document.getElementById("closed-Section")
const openSection=document.getElementById("open-Section")

function toggleStyle(id){

currentStatus = id;

const buttons=document.querySelectorAll("#all, #Open, #Closed");

buttons.forEach(btn=>{
btn.classList.remove("btn-primary")
btn.classList.add("btn-soft")
})

const active = document.getElementById(id);
active.classList.remove("btn-soft");
active.classList.add("btn-primary");

if (id === "all") {

allSection.classList.remove("hidden");
openSection.classList.add("hidden");
closedSection.classList.add("hidden");

displayIssues([...openCard, ...closedCard]);
}

if (id === "Open") {

allSection.classList.add("hidden");
openSection.classList.remove("hidden");
closedSection.classList.add("hidden");

displayIssues(openCard);
}

if (id === "Closed") {

allSection.classList.add("hidden");
openSection.classList.add("hidden");
closedSection.classList.remove("hidden");

displayIssues(closedCard);
}

}


const loadIssues = () => {

fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

.then(res => res.json())

.then(data => {

const issues = data.data;

openCard = issues.filter(issue => issue.status === "open");

closedCard = issues.filter(issue => issue.status === "closed");

displayIssues([...openCard, ...closedCard]);

toggleStyle("all");

});

};


const displayIssues = (issues) => {

const container = document.getElementById("issues-container");

container.innerHTML = "";

issues.forEach(issue => {

const div = document.createElement("div");

div.onclick = () => openModal(issue);

div.innerHTML = `

<div class="bg-white rounded-xl shadow-md p-5 border-t-4
${issue.status === "open" ? "border-green-500" : "border-purple-500"}">

<div class="flex justify-between items-center mb-3 ">

<span class="badge badge-outline capitalize px-[25px] py-[15px] font-medium ">
${issue.status}
</span>

<span id="Soft buttons" class="  px-[25px] py-[15px] text-[16px] font-medium 
${issue.priority=== "high" ? " btn btn-soft btn-secondary rounded-full" : ""} 
${issue.priority === "medium" ? "btn btn-soft btn-warning rounded-full" : ""} 
${issue.priority=== "low" ? "btn btn-active rounded-full" : ""}">
${issue.priority.toUpperCase()}
</span>

</div>

<h2 class="font-extrabold text-[16px] mb-2">
${issue.title}
</h2>

<p class="text-gray-500 text-sm mb-4 font-medium">
${issue.description.slice(0,80)}...
</p>

<div class="flex gap-2 flex-wrap mb-4">

${issue.labels.map(label =>
`<span class="btn btn-outline btn-accent rounded-full px-[15px] py-[5px] text-[16px] font-medium  ">${label}</span>`
).join("")}

</div>

<hr>

<div class=" grid grid-rows-2 gap-5 text-sm mt-3 text-gray-500">

<span>#${issue.id} by ${issue.author}</span>

<span>${new Date(issue.createdAt).toLocaleDateString()}</span>

</div>

</div>

`;

container.appendChild(div);

});

};


function openModal(issue){

document.getElementById("modal-title").innerText = issue.title;

document.getElementById("modal-status").innerText = issue.status;

document.getElementById("modal-author").innerText =
"Opened by " + issue.author;

document.getElementById("modal-date").innerText =
new Date(issue.createdAt).toLocaleDateString();

document.getElementById("modal-description").innerText =
issue.description;

document.getElementById("modal-assignee").innerText =
issue.author;

const priority = document.getElementById("modal-priority");

priority.innerText = issue.priority;

if(issue.priority === "high"){
priority.className = "badge badge-error px-[25px] py-[15px] text-[16px]";
}
else if(issue.priority === "medium"){
priority.className = "badge badge-warning px-[25px] py-[15px] text-[16px]";
}
else{
priority.className = "badge badge-neutral px-[25px] py-[15px] text-[16px]";
}

const labelsContainer = document.getElementById("modal-labels");

labelsContainer.innerHTML = issue.labels
.map(label => `<span class="btn btn-outline btn-info rounded-full px-[15px] py-[5px] text-[16px] font-medium ">${label}</span>`)
.join("");

document.getElementById("issueModal").showModal();

}

loadIssues();























