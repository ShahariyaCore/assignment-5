function logout(){
window.location.href="index.html"
}

// ================= GLOBAL =================
let closedCard = [];
let openCard = [];
let  currentStatus = "all";


const all = document.getElementById("all")
const openList =document.getElementById("Open")
const closed =document.getElementById("Closed")

const allSection= document.getElementById("all-Section")
const closedSection=document.getElementById("closed-Section")
const openSection=document.getElementById("open-Section")

// ================= FILTER BUTTON STYLE =================

function toggleStyle(id){
    
       currentStatus = id;
    const buttons=document.querySelectorAll("#all, #Open, #Closed");

    buttons.forEach(btn=>{
    btn.classList.remove("btn-primary")
    btn.classList.add("btn-soft")})

    const active = document.getElementById(id);
  active.classList.remove("btn-soft");
  active.classList.add("btn-primary");


   

   // ===== FIX: className mistake removed =====
  if (id === "all") {
    allSection.classList.remove("hidden");
    closedSection.classList.add("hidden");
    openSection.classList.add("hidden")
  }

  if (id === "Open") {
    allSection.classList.add("hidden");
     openSection.classList.remove("hidden");
    closedSection.classList.add("hidden")
  }

  if (id === "Closed") {
     allSection.classList.add("hidden");
    openSection.classList.add("hidden");
    closedSection.classList.remove("hidden")
   
  }
}

toggleStyle("all")


const loadIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(data => {
      const issues = data.data;

      openCard = issues.filter(issue => issue.status === "open");
      closedCard = issues.filter(issue => issue.status === "closed");

      displayIssues(issues);
    });
};



const displayIssues = (issues) => {

  const container = document.getElementById("issues-container");
  container.innerHTML = "";

  issues.forEach(issue => {

    const div = document.createElement("div");

    div.innerHTML = `
    
    <div class="bg-white rounded-xl shadow-md p-5 border-t-4 
    ${issue.status === "open" ? "border-green-500" : "border-purple-500"}">

        <div class="flex justify-between items-center mb-3">
            <span class="badge badge-outline capitalize">${issue.status}</span>
            <span class="badge 
            ${issue.priority === "high" ? "badge-error" : ""}
            ${issue.priority === "medium" ? "badge-warning" : ""}
            ${issue.priority === "low" ? "badge-neutral" : ""}
            ">
            ${issue.priority}
            </span>
        </div>

        <h2 class="font-bold text-lg mb-2">
        ${issue.title}
        </h2>

        <p class="text-gray-500 text-sm mb-4">
        ${issue.description.slice(0,80)}...
        </p>

        <div class="flex gap-2 flex-wrap mb-4">
        ${issue.labels.map(label => 
        `<span class="badge badge-outline">${label}</span>`
        ).join("")}
        </div>

        <hr>

        <div class=" flex justify-between text-sm mt-3 text-gray-500">
            <span>#${issue.id} by ${issue.author}</span>
            <span>${new Date(issue.createdAt).toLocaleDateString()}</span>
        </div>

    </div>
    
    `;

    container.appendChild(div);

  });

};

loadIssues();
