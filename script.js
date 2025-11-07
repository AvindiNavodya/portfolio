// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  faders.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add('fade-in');
  });
});

// === Particle Background ===
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(129,140,248,0.3)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Fade-in-up for hero photo
window.addEventListener('load', () => {
  const fadeUp = document.querySelector('.fade-in-up');
  setTimeout(() => fadeUp.classList.add('visible'), 500);
});

// ==== PROJECT MODAL SYSTEM (Updated) ====

const projectData = {
  library: {
    title: "Library Management System (Group Project-Team Leader)",
    description: "The Library Management System is a web-based application that enables efficient book tracking, user management, book lending, and fine calculation. Developed by using HTML, CSS, JavaScript, PHP, and MySQL.Here,I Lead the team to get successful outcomes at the correct time line. ",
    video: "videos/library-demo.mp4",
    image: null,
    documentation: null,
    github: "https://github.com/Chamaracperera/LMS.git"
  },
  attendance: {
    title: "QR-Based Attendance System (Group Project)",
    description: "This system marks student attendance using QR scanning and manages batch-wise attendance data with reporting and analytics features.Here my role is to Conduct requirement analysis, manage time line and prepared technical documentation for system workflow and also I developed the location tracking feature.Here we used HTML,CSS,JS,PHP,MYSQL and XAMPP technologis for develop this project.",
    video: "videos/attendance-demo.mp4",
    image: null,
    documentation: "docs/attendance-doc.pdf",
    github: "https://github.com/Chamaracperera/Attendance-Marking-System.git"
  },
  alerts: {
    title: "FOT Alerts Mobile App (Individual Project)",
    description: "A mobile app designed to broadcast urgent notifications and updates at the university. Developed using Android Studio (Java) and Firebase.Here I Designed the UI and Documented development stages and maintained change logs for my project.",
    video: "videos/alerts-demo.mp4",
    image: null,
    documentation: "docs/alerts-doc.pdf",
    github: "https://github.com/AvindiNavodya/mobile-application-assignment02.git"
  },
  medicare: {
    title: "University Medicare System (Group Project-Team Leader)",
    description: "A modern UI/UX prototype for university healthcare appointment & patient management. Designed in Figma.The main purpose of this project is to practice Agile Methodologies.Here I lead the team to Design the University Medicare system using Agile practices.Here we manage the user stories , backlogs and sprints.Also Created workflows , project plans , and test cases.Also led documentation and managed meetings,and sprint planning.",
    video: null, // ✅ No video now
    image: "images/medicare-ui.png", // ✅ Add your image here
    documentation: "docs/medicare-doc.pdf",
    github: null // ✅ GitHub removed
  },
  smartpm: {
    title: "Smart PM - Project Management Tool (Individual Project)",
    description: "Smart PM is a web-based project task tracking tool built with HTML, CSS, JavaScript and Firebase Authentication.This is my individual practice project to increase knowledge.",
    video: "videos/smartpm-demo.mp4",
    image: null,
    documentation: null,
    github: "https://github.com/AvindiNavodya/smart-pm-project-management-tool.git"
  }
};

const modal = document.getElementById("projectModal");
const closeBtn = modal.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalVideo = document.getElementById("modalVideo");
const modalImage = document.getElementById("modalImage");
const modalDocumentation = document.getElementById("modalDocumentation");
const modalGithub = document.getElementById("modalGithub");

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.closest(".project-card").dataset.project;
    const p = projectData[key];

    modalTitle.textContent = p.title;
    modalDescription.textContent = p.description;

    // ✅ Check if project has video or image
    if (p.video === null) {
      modalVideo.style.display = "none";
      modalImage.style.display = "block";
      modalImage.src = p.image;
    } else {
      modalVideo.style.display = "block";
      modalImage.style.display = "none";
      modalVideo.src = p.video;
    }

    // Show/Hide Documentation
    modalDocumentation.style.display = p.documentation ? "inline-block" : "none";
    if (p.documentation) modalDocumentation.href = p.documentation;

    // Show/Hide GitHub
    modalGithub.style.display = p.github ? "inline-block" : "none";
    if (p.github) modalGithub.href = p.github;

    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  modalVideo.pause();
};

window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// ===== Certificate Modal =====
const certModal = document.getElementById("certificateModal");
const certImg = document.getElementById("certificateImg");
const certClose = certModal.querySelector(".close");

document.querySelectorAll(".certificate-card img").forEach(img => {
  img.addEventListener("click", () => {
    certModal.style.display = "block";
    certImg.src = img.src;
  });
});

certClose.addEventListener("click", () => {
  certModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === certModal) {
    certModal.style.display = "none";
  }
});
