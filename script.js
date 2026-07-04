// ---------- About Me story text (typed into the Barbie popup) ----------
const aboutStory = [
    "Hi, I'm Puteri Uwaisyahtul Akashah, a fresh graduate in Mathematical Modelling and Analytics (Big Data) from UiTM Shah Alam, with a passion for technology, data, and continuous learning. I enjoy solving complex problems, exploring innovative ideas, and transforming data into meaningful insights. Throughout my academic journey and internship, I have gained hands-on experience in data analytics, Power BI, system testing, dashboard development, and AI-assisted workflows, continuously strengthening both my technical and communication skills.",
    "I enjoy leveraging AI tools to improve productivity and deliver better results. I have experience using Claude.ai, NotebookLM, Bluedot.ai, ChatGPT, Google Gemini, and Figma AI to support research, data analysis, software testing, documentation, UI/UX design, presentation preparation, and knowledge management. By combining AI with technical expertise, I aim to work smarter, accelerate problem-solving, and produce high-quality outcomes in every project",
    "Beyond academics, I believe personal growth comes from embracing new experiences. I actively participate in community service, volunteering, and university events because I enjoy collaborating with people and creating a positive impact. In my free time, I love playing badminton, exploring nature, spending time with my two adorable cats, singing, and playing Mobile Legends, where I've achieved the Glory rank. Gaming has strengthened my teamwork, strategic thinking, quick decision-making, and ability to stay calm under pressure—qualities I bring into both my professional and personal life.", 
    "I see myself as a curious, adaptable, and lifelong learner who is always eager to embrace new challenges. My goal is to build a career where I can leverage data, AI, and technology to create meaningful solutions, contribute to innovative teams, and continue growing as a professional while inspiring others along the way."
];

window.addEventListener("DOMContentLoaded", () => {

    // ---------- Scroll reveal ----------
    const boxes = document.querySelectorAll(".reveal-box");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });
    boxes.forEach((box) => observer.observe(box));

    // ---------- Barbie popup wiring ----------
    const openBtn = document.getElementById("openAboutBtn");
    const closeBtn = document.getElementById("closeAboutBtn");
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("aboutModal");
    const modalText = document.getElementById("modalText");

    let storyLoaded = false;

    openBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        setTimeout(() => modal.classList.add("show"), 10);

        if (!storyLoaded) {
            loadStory();
            storyLoaded = true;
        }
    });

    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => overlay.classList.remove("active"), 300);
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });

    // ---------- Accordion (Internship projects) ----------
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            header.parentElement.classList.toggle("open");
        });
    });

    function loadStory() {
        aboutStory.forEach((paragraph, index) => {
            const p = document.createElement("p");
            p.style.opacity = "0";
            p.style.transform = "translateY(10px)";
            p.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            p.innerText = paragraph;
            modalText.appendChild(p);

            setTimeout(() => {
                p.style.opacity = "1";
                p.style.transform = "translateY(0)";
            }, 150 * (index + 1));
        });
    }
});

// ---------- Copy email ----------
function copyEmail() {
    const label = document.getElementById("emailLabel");
    const original = label.innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText("putryuwaisyah@gmail.com");
    }

    label.innerText = "Copied!";
    setTimeout(() => {
        label.innerText = original;
    }, 1300);
}

// ---------- Heart burst effect ----------
function burst(e) {
    const x = e.clientX;
    const y = e.clientY;

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("span");
        heart.innerText = "💗";
        const angle = (i / 10) * Math.PI * 2;
        const tx = Math.cos(angle) * 70 + "px";
        const ty = Math.sin(angle) * 70 + "px";

        heart.style.position = "fixed";
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.pointerEvents = "none";
        heart.style.fontSize = "16px";
        heart.style.zIndex = "9999";
        heart.style.animation = "burstOut 0.7s ease-out forwards";
        heart.style.setProperty("--tx", tx);
        heart.style.setProperty("--ty", ty);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 700);
    }
}
