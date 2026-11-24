// Nahar Builders - Shrabonti Dash
// Source: https://www.naharbuilders.com/
const projects = [
  { title: "Nakeeb Heights", category: "residential", meta: "Chandgaon R/A • 14 Stories • Completed", desc: "14-Storied Luxury Residential Tower with double basement and BNBC compliant design.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" },
  { title: "Nahar Specialized Hospital", category: "healthcare", meta: "Chattogram • 19 Stories • Landmark", desc: "19-Storied Modern Healthcare Facility with double basement and 150+ parking facility.", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80" },
  { title: "Hotel Tower Inn", category: "hospitality", meta: "Jubilee Road • 10 Stories • Completed", desc: "10-Storied 3-Star Hospitality Landmark with 110 premium guest rooms.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { title: "Akil Tower", category: "residential", meta: "Mozaffor Nagar • 10 Stories • Completed", desc: "10-Storied Residential Apartment Building with modern engineering standards.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { title: "Alhaj SA Tower", category: "residential", meta: "Hillview R/A • 9 Stories • Completed", desc: "9-Storied Residential Apartment Building with high structural standards.", img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&q=80" },
  { title: "Patiya Nahar Park & Resort", category: "hospitality", meta: "Patiya • Resort • Completed", desc: "Premium resort with swimming pool, green landscape and family recreation facilities.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" }
];

const grid = document.getElementById("projectGrid");
function renderProjects(filter = "all") {
  if (!grid) return;
  grid.innerHTML = "";
  projects.filter(p => filter === "all" || p.category === filter).forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${p.img}" alt="${p.title}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'"><div class="card-body"><span class="tag">${p.category}</span><h3>${p.title}</h3><p class="muted small">${p.meta}</p><p>${p.desc}</p><button class="btn btn-dark">View Details →</button></div>`;
    div.onclick = () => openModal(p);
    grid.appendChild(div);
  });
}
renderProjects();

document.querySelectorAll(".filter button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".filter button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  };
});

function openModal(p) {
  document.getElementById("mImg").src = p.img;
  document.getElementById("mTitle").innerText = p.title;
  document.getElementById("mMeta").innerText = p.meta;
  document.getElementById("mDesc").innerText = p.desc;
  document.getElementById("modal").style.display = "flex";
}
function closeModal() { document.getElementById("modal").style.display = "none"; }
document.getElementById("modal").onclick = (e) => { if (e.target.id === "modal") closeModal(); };
document.getElementById("menuBtn").onclick = () => document.getElementById("navLinks").classList.toggle("show");
document.querySelectorAll(".faq-item").forEach(item => { item.querySelector("h3").onclick = () => item.classList.toggle("open"); });
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  if (!document.getElementById("name").value.trim() || !document.getElementById("email").value.trim() || !document.getElementById("phone").value.trim() || !document.getElementById("message").value.trim()) { alert("Please fill all required fields."); return; }
  document.getElementById("formMsg").style.display = "block";
  this.reset();
});
// ===== Motion - Scroll Reveal (Thoughtful Animation) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      observer.unobserve(e.target); // ekbar aslei hobe, bar bar norbe na
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section, .card, .why-item, .step, .service-card").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});