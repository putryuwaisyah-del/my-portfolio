// ---------- About Me story text (typed into the Barbie popup) ----------
const aboutStoryEN = [
    "Hi, I’m Puteri Uwaisyahtul Akashah, a fresh graduate with a Bachelor of Science (Hons.) in Mathematical Modelling and Analytics (Big Data) from Universiti Teknologi MARA (UiTM) Shah Alam. I am passionate about data, AI, and technology, and I enjoy solving problems, learning new things, and turning ideas into practical solutions.",
    "Throughout my academic journey and internship, I gained hands-on experience in data analytics, dashboard development, system testing, web development, and tools such as Power BI, Excel, MySQL, Python, HTML, CSS, and JavaScript. I also actively use AI tools such as ChatGPT, Claude, Google Gemini, NotebookLM, and other AI-powered tools to support my work, research, analysis, and development. I see AI not as a replacement for technical skills, but as a tool to enhance productivity, creativity, and efficiency, allowing me to work smarter, solve problems faster, and deliver high-quality results.",
    "One experience that reflects how I approach challenges was during my role as Assistant Director for the Mathletics Infinity Goal Championship (MIGC). At the last minute, the number of participating teams increased, requiring us to adjust the match schedule and format. On the same day, one of the coaches was also unable to attend. Instead of letting these changes disrupt the tournament, I worked with the committee to make simple adjustments to the match arrangements and ensure everything continued smoothly. This experience taught me to stay calm, communicate clearly, and find practical solutions when unexpected challenges arise.", 
    "Beyond technical skills, I value adaptability, teamwork, and continuous learning. I enjoy working with people, sharing ideas, and taking on new challenges. I believe good work is not only about having the right technical skills, but also about being willing to learn, adapt, and find a way forward.",
    "Outside of work, I enjoy playing badminton and Mobile Legends. I reached Mythical Glory as a Kagura main, which I believe has also taught me a little about strategy, teamwork, and staying calm under pressure. One small habit that reflects my personality is carrying mini packets of cat food in my bag so I can feed stray cats whenever I come across them. At home, I am also a proud cat parent to two cats.",
    "As a fresh graduate, I bring analytical thinking, curiosity, creativity, and a proactive mindset. I am always looking for smarter ways to work while maintaining quality and attention to detail. I hope to continue growing in the technology field, contribute meaningful ideas, and build solutions that create real value."
];

const aboutStoryMS = [
    "Hai, saya Puteri Uwaisyahtul Akashah, graduan baharu dengan Ijazah Sarjana Muda Sains (Kepujian) dalam Pemodelan Matematik dan Analitik (Data Raya) dari Universiti Teknologi MARA (UiTM) Shah Alam. Saya berminat dalam bidang data, kecerdasan buatan (AI) dan teknologi, serta gemar menyelesaikan masalah, mempelajari perkara baharu dan mengubah idea kepada penyelesaian yang praktikal.",
    "Sepanjang pengajian dan latihan industri, saya memperoleh pengalaman secara langsung dalam analitik data, pembangunan papan pemuka, pengujian sistem, pembangunan laman web serta penggunaan teknologi seperti Power BI, Excel, MySQL, Python, HTML, CSS dan JavaScript. Saya juga aktif menggunakan alat AI seperti ChatGPT, Claude, Google Gemini, NotebookLM dan pelbagai alat berasaskan AI lain untuk menyokong tugasan, penyelidikan, analisis dan pembangunan saya. Saya melihat AI bukan sebagai pengganti kepada kemahiran teknikal, tetapi sebagai alat untuk meningkatkan produktiviti, kreativiti dan kecekapan, membolehkan saya bekerja dengan lebih bijak, menyelesaikan masalah dengan lebih pantas serta menghasilkan kerja yang berkualiti tinggi.",
    "Salah satu pengalaman yang mencerminkan cara saya menghadapi cabaran adalah ketika saya berperanan sebagai Penolong Pengarah bagi Mathletics Infinity Goal Championship (MIGC). Pada saat akhir, jumlah pasukan yang menyertai kejohanan telah bertambah, menyebabkan kami perlu menyesuaikan jadual dan format perlawanan. Pada hari yang sama, salah seorang jurulatih juga tidak dapat hadir. Bagi memastikan perubahan tersebut tidak menjejaskan kelancaran kejohanan, saya bekerjasama dengan jawatankuasa untuk membuat penyesuaian mudah terhadap pengurusan perlawanan dan memastikan semuanya dapat diteruskan dengan lancar. Pengalaman ini mengajar saya untuk kekal tenang, berkomunikasi dengan jelas dan mencari penyelesaian yang praktikal apabila berhadapan dengan cabaran yang tidak dijangka.",
    "Selain kemahiran teknikal, saya mementingkan kebolehsuaian, kerja berpasukan dan pembelajaran berterusan. Saya gemar bekerjasama dengan orang lain, berkongsi idea dan mencabar diri dengan perkara baharu. Saya percaya hasil kerja yang baik bukan sahaja bergantung kepada kemahiran teknikal, tetapi juga kesediaan untuk belajar, menyesuaikan diri dan mencari jalan penyelesaian.",
    "Di luar waktu kerja, saya gemar bermain badminton dan Mobile Legends. Saya pernah mencapai tahap Mythical Glory sebagai pemain utama Kagura, yang secara tidak langsung mengajar saya tentang strategi, kerja berpasukan dan kekal tenang ketika berada di bawah tekanan. Satu tabiat kecil yang mencerminkan keperibadian saya ialah membawa pek kecil makanan kucing di dalam beg supaya saya dapat memberi makan kepada kucing terbiar apabila terserempak dengannya. Di rumah, saya juga merupakan pemilik kepada dua ekor kucing yang amat saya sayangi.",
    "Sebagai graduan baharu, saya membawa pemikiran analitikal, rasa ingin tahu, kreativiti dan sikap proaktif. Saya sentiasa mencari cara yang lebih baik dan bijak untuk bekerja sambil mengekalkan kualiti dan ketelitian. Saya berharap dapat terus berkembang dalam bidang teknologi, menyumbang idea yang bermakna dan membangunkan penyelesaian yang memberikan nilai sebenar."
    ];

const aboutStoryJA = [
    "はじめまして。Puteri Uwaisyahtul Akashahと申します。マラ工科大学（UiTM）シャーアラム校にて、数学モデリング・アナリティクス（ビッグデータ）を専攻し、理学士（優等学位）を取得した新卒者です。データ、AI、テクノロジーの分野に関心があり、問題解決や新しいことを学ぶこと、そしてアイデアを実用的なソリューションへと形にすることに興味を持っています。",
    "大学での学習およびインターンシップを通して、データ分析、ダッシュボード開発、システムテスト、Web開発などの実務経験を積みました。また、Power BI、Excel、MySQL、Python、HTML、CSS、JavaScriptなどの技術も使用してきました。さらに、ChatGPT、Claude、Google Gemini、NotebookLMなどのAIツールを積極的に活用し、業務、リサーチ、分析、開発などをサポートしています。私はAIを技術的なスキルの代替としてではなく、生産性、創造性、そして業務効率を高めるためのツールとして捉えています。AIを効果的に活用することで、よりスマートかつ効率的に業務に取り組み、問題を迅速に解決し、高品質な成果を生み出すことを目指しています。",
    "私の問題への向き合い方を示す経験の一つに、Mathletics Infinity Goal Championship（MIGC）で副ディレクターを務めた経験があります。大会直前に参加チーム数が増えたため、試合のスケジュールや形式を調整する必要がありました。また、大会当日にはコーチの一人が参加できなくなるという状況も発生しました。これらの変更によって大会の運営に支障が出ないよう、委員会のメンバーと協力し、試合運営を簡単に調整することで、すべてを円滑に進めることができました。この経験を通して、予期せぬ課題に直面した際にも冷静に対応し、明確にコミュニケーションを取りながら、実践的な解決策を見つけることの大切さを学びました。", 
    "技術的なスキルだけでなく、柔軟性、チームワーク、そして継続的な学習を大切にしています。人と協力し、アイデアを共有し、新しいことに挑戦することが好きです。良い仕事とは、技術的なスキルだけで決まるものではなく、学び続け、変化に適応し、解決策を見つけようとする姿勢も重要だと考えています。",
    "仕事以外では、バドミントンやMobile Legendsを楽しんでいます。Mobile LegendsではKaguraをメインキャラクターとしてプレイし、Mythical Gloryランクに到達しました。この経験を通して、戦略的に考えること、チームワーク、そしてプレッシャーの中でも冷静に対応することの大切さを学びました。また、私らしさを表す小さな習慣として、バッグに小さな猫用フードを入れておき、野良猫を見かけた際には餌をあげるようにしています。自宅では、2匹の猫を大切に育てています。",
    "新卒者として、論理的・分析的な思考力、好奇心、創造性、そして主体性を活かしていきたいと考えています。常により良く、より効率的な方法を探しながら、仕事の質と正確さを大切にしています。今後もテクノロジー分野で成長を続け、価値のあるアイデアを提案し、実際に役立つソリューションを生み出していきたいと考えています。"
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

    openBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        setTimeout(() => modal.classList.add("show"), 10);
        loadStory();
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
        modalText.innerHTML = "";
        const lang = window.currentLang || "en";
        const story = lang === "ms" ? aboutStoryMS : (lang === "ja" ? aboutStoryJA : aboutStoryEN);

        story.forEach((paragraph, index) => {
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
        const heart = document.createElement("i");
        heart.className = "fa-solid fa-heart";
        const angle = (i / 10) * Math.PI * 2;
        const tx = Math.cos(angle) * 70 + "px";
        const ty = Math.sin(angle) * 70 + "px";

        heart.style.position = "fixed";
        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.pointerEvents = "none";
        heart.style.fontSize = "16px";
        heart.style.color = "rgb(218, 49, 105)";
        heart.style.zIndex = "9999";
        heart.style.animation = "burstOut 0.7s ease-out forwards";
        heart.style.setProperty("--tx", tx);
        heart.style.setProperty("--ty", ty);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 700);
    }
}

// =======================================================
// TRANSLATIONS
// =======================================================
const translations = {
    en: {
        magic_message: "Welcome! Before you start exploring, feel free to press the music button and enjoy my favourite playlist while you look through my portfolio.",
        nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_education: "Education",
        nav_experience: "Experience", nav_projects: "Projects", nav_volunteering: "Volunteering",
        nav_vision: "Vision Board", nav_contact: "Contact",
        hero_greeting: "Hello, I'm",
        hero_tagline: "Aspiring full stack developer, curious about data and design.",
        hero_btn_projects: "My Projects", hero_btn_contact: "Contact me",
        about_heading: "About me",
        about_intro: "Click below to learn more about my background and journey.",
        about_btn: "<i class='fa-solid fa-heart'></i> Learn More About Putely",
        about_modal_title: "Welcome to My Portfolio",
        about_tag1: "<i class='fa-solid fa-chart-column'></i> Power BI", about_tag2: "<i class='fa-solid fa-microchip'></i> AI Technology", about_tag3: "<i class='fa-solid fa-cat'></i> Cat Mom",
        about_tag4: "<i class='fa-solid fa-table-tennis-paddle-ball'></i> Badminton", about_tag5: "<i class='fa-solid fa-gamepad'></i> Glory Rank MLBB", about_tag6: "<i class='fa-solid fa-microphone'></i> Singing",
        ml_hero_caption: "Main Hero: Kagura — strategy, patience, and a touch of creativity",
        skills_heading: "Skills",
        education_heading: "Education",
        edu1_title: "Bachelor of Science (Hons.) Mathematical Modelling and Analytics",
        edu2_title: "Science Stream, Module 1",
        achievements_heading: "Achievements",
        ach1: "Dean's List, Semester 5 & 6",
        ach2: "Recipient of Biasiswa Kerajaan Negeri Sabah (BKNS) scholarship",
        ach3: "Led & trained the Kembara cheerleading team to 3rd place, PERKAD kawad kaki competition",
        ach4: "4th place, Mobile Legends inter-college tournament (SUKOL)",
        ach5: "Deputy Director – Managed a committee of 25 members in organizing a futsal and netball tournaments with over 100 participants.",
        experience_heading: "Work Experience",
        exp1_title: "Apprentice", exp1_sub: "K-Youth Development Programme — Khazanah Nasional x Aisling Group",
        exp2_title: "Data Analyst Intern", exp2_sub: "Unijaya Resources Sdn Bhd",
        exp3_title: "Printing Service Owner", exp3_sub: "Kolej Mawar, UiTM Shah Alam",
        exp4_title: "Mathematics & Science Tutor (Part-Time) ", exp4_sub: "Tuisyen Mesra PPR Lembah Subang 2",
        exp5_title: "Banquet Food Server (Part-Time)", exp5_sub: "Malaysia International Trade and Exhibition Centre (MITEC)",
        languages_heading: "Languages",
        volunteering_heading: "Volunteering",
        vol1_title: "<i class='fa-solid fa-people-group'></i> Festival Altruisme 3.0",
        vol1_desc: "Assisted in organizing a university festival centered on altruism and community engagement — supported event logistics, coordinated program activities, and assisted participants.",
        vol2_title: "<i class='fa-solid fa-flag-checkered'></i> Petronas GPM Grand Prix 2023",
        vol2_desc: "Volunteered as a UiTM representative at national motorsport events, supporting event activities and promoting student engagement.",
        vol3_title: "<i class='fa-solid fa-graduation-cap'></i> UiTM Convocation Ceremony",
        vol3_desc: "Assisted in managing event operations during graduation ceremonies, coordinating logistics and supporting graduates and guests.",
        vol4_title: "<i class='fa-solid fa-seedling'></i> Hari Komuniti MyPLUS",
        vol4_desc: "Contributed to school-led community clean-up initiatives, encouraging teamwork and community responsibility.",
        vol5_title: "<i class='fa-solid fa-heart'></i> Mawar Charity Fun Day",
        vol5_desc: "Planned and coordinated activities with orphans at Rumah Amal Budi Bistari, Shah Alam — interactive games, batik weaving sessions, and charity contributions.",
        vol6_title: "<i class='fa-solid fa-radiation'></i> PUSPATI TRIGA Reactor Tour",
        vol6_desc: "Gained exposure to nuclear reactor operations, safety protocols, and research applications in energy and science.",
        projects_heading: "Projects",
        projects_intro: "Hover a card to flip it and see the tools & story behind each one.",
        proj1_front_title: "Final Year Project", proj1_front_sub: "Hybrid Nanofluid Flow Modelling",
        proj1_back_title: "Mixed Convection Flow of Hybrid Nanofluids",
        proj1_back_desc: "Developed the mathematical model for mixed convection behavior of hybrid nanofluids flowing toward a stagnation point on a stretching cylinder with Newtonian heating effects.",
        proj2_front_title: "Economic Forecasting", proj2_front_sub: "US Policy Uncertainty Index",
        proj2_back_title: "Forecasting the U.S. EPU Index",
        proj2_back_desc: "Conducted time series forecasting on the U.S. Economic Policy Uncertainty Index, providing insights that support aviation industry decisions on capacity planning and strategy.",
        proj3_front_title: "Used Bike Market Insights", proj3_front_sub: "India Decision Support System",
        proj3_back_title: "Used Bike Market Decision Support",
        proj3_back_desc: "Developed an interactive Power BI decision support dashboard to analyze used bike market trends, pricing factors, and ownership patterns, enabling data-driven decisions for price optimization, inventory planning, and market trend analysis.",
        overview_btn: "<i class='fa-solid fa-magnifying-glass'></i> Overview",
        internship_heading: "Internship Projects",
        acc1_header: "<i class='fa-solid fa-desktop'></i> IRIS — Sistem Pengambilan Bersepadu (SPA Malaysia)",
        acc1_li1: "Conducted system testing for key modules, identifying defects and ensuring system functionality met business and user requirements.",
        acc1_li2: "Supported Final Acceptance Testing (FAT) by using Bluedot AI to capture meeting minutes, ensuring all feedback, decisions, and action items were accurately documented.",
        acc1_li3: "Used NotebookLM (Google AI) to quickly understand system workflows, improving testing speed and collaboration with team members.",
        acc1_li4: "Managed a centralized Google Sheets defect tracker to log issues, monitor testing progress, and follow up on bug fixes with developers.",
        acc2_header: "<i class='fa-solid fa-chart-column'></i> NSFiRM — National Suicide and Fatal Injury Registry (MOH Malaysia)",
        acc2_li1: "Assisted in developing and enhancing NSFiRM dashboards in Power BI, including DAX measures, map visualizations, and interactive report features.",
        acc2_li2: "Tested dashboard logic at national and state levels.",
        acc2_li3: "Published and managed Power BI embed links for system integration and reporting updates using Google Sheets.",
        acc2_li4: "Worked with Navicat to explore the NSFiRM database structure, tables, relationships, and data flow.",
        acc3_header: "<i class='fa-solid fa-globe'></i> AI Translation Tool",
        acc3_li1: "Assisted in developing an AI-powered translation workflow using the Google Gemini API in Laravel to automate multilingual localization through both UI and CLI.",
        acc3_li2: "Researched and applied AI-assisted UI/UX design using Figma AI and Vuexy components to streamline interface design.",
        acc3_li3: "Prepared and delivered a technical presentation on the objectives, workflow, and benefits of the tool.",
        proj1_popup_title: "Mixed Convection Flow of Hybrid Nanofluids",
        proj1_overview: [
            "Developed a computational model to simulate heat transfer behavior in hybrid nanofluids.",
            "Analyzed complex datasets generated through MATLAB simulations to identify performance trends and parameter relationships.",
            "Translated numerical results into actionable engineering insights through data visualization and analytical reporting."
        ],
        proj2_popup_title: "Forecasting the U.S. EPU Index",
        proj2_overview: [
            "Built a predictive model for KLCI using time series regression and macroeconomic indicators.",
            "Improved model performance through feature selection (GETS), multicollinearity analysis (VIF), and statistical validation.",
            "Delivered reliable forecasts by evaluating model accuracy with R\u00b2, Durbin-Watson, residual diagnostics, and one-step-ahead forecasting."
        ],
        proj3_popup_title: "Used Bike Market Decision Support",
        bike_o1_title: "1. Price Optimization Strategy",
        bike_o2_title: "2. Market Demand & Inventory Planning",
        bike_o3_title: "3. Trend & Risk Analysis",
        bike_decision_supported: "Decision Supported:",
        bike_o1_list: [
            "Identify the optimal selling price based on ownership history, bike model, and production year.",
            "Help sellers set competitive prices while enabling buyers to determine whether a listing is fairly priced."
        ],
        bike_o2_list: [
            "Determine which bike models and ownership categories dominate the market.",
            "Assist dealerships in deciding which bike types should be prioritized for purchasing, stocking, or resale."
        ],
        bike_o3_list: [
            "Monitor historical price trends and identify factors (e.g., horsepower, mileage, year) that affect resale value.",
            "Support strategic buying and selling decisions by recognizing market trends and potential pricing risks."
        ],
        slide_label: "<i class='fa-solid fa-file-lines'></i> Full Project Report",
        slide_label1: "<i class='fa-solid fa-file-lines'></i>  Project Slides ",
        dashboard_label: "<i class='fa-solid fa-chart-column'></i> Dashboard Preview",
        nsfirm_popup_title: "NSFiRM Dashboard using Power BI",
        nsfirm_overview: [
            "Assisted in developing and enhancing NSFiRM dashboards in Power BI, including DAX measures, map visualizations, and interactive report features.",
            "Tested dashboard logic at national and state levels.",
            "Published and managed Power BI embed links for system integration and reporting updates using Excel."
        ],
        nsfirm_slide_label: "<i class='fa-solid fa-chart-column'></i> Dashboard Previews",
        ai_popup_title: "AI Translation Tool",
        ai_overview: [
            "Developed an AI-powered translation workflow using the Google Gemini API in Laravel to automate multilingual localization via UI and CLI.",
            "Researched and applied AI-assisted UI/UX design using Figma AI and Vuexy components to streamline interface design.",
            "Prepared and delivered a technical presentation on the objectives, workflow, and benefits of the tool."
        ],
        ai_slide_label: "<i class='fa-solid fa-screwdriver-wrench'></i> Tool Preview",
        vision_heading: "Vision Board",
        vision_quote: "\"My best version is still becoming.\"",
        vc_dress_title: "Dress well", vc_dress_desc: "Dress with elegance and carry myself with confidence.",
        vc_health_title: "Healthy lifestyle", vc_health_desc: "Eat well, stay active, and take care of my mind, body and soul.",
        vc_brand_title: "Side business / Own brand",
        vc_brand_desc: "Build my own brand, inspire more women, and create timeless pieces that empower — Jelita Aurelle, where elegance meets confidence.",
        vc_digital_title: "Master more digital skills", vc_digital_desc: "Level up my skills in data, analytics, design and tech to stay future-ready.",
        vc_community_title: "Community project", vc_community_desc: "Give back, make an impact, and be part of something meaningful.",
        vc_comm_title: "Confident communication skills", vc_comm_desc: "Speak with clarity, confidence and impact in every situation.",
        vc_cook_title: "Strengthen My Faith (Istiqamah)", vc_cook_desc: "Strive to become a better Muslim through istiqamah — pray on time, choose kind words, help those in need, and make Selawat Al-Fatih part of my daily routine.",
        vc_car_title: "Own car", vc_car_desc: "Financial freedom to own my car and go anywhere I want.",
        vc_umrah_title: "Family Umrah", vc_umrah_desc: "Travel together, pray together, and create beautiful memories.",
        vc_lang_title: "Learn new languages", vc_lang_desc: "Hangul & Mandarin — new language, new world, new opportunities.",
        vision_banner: "FAITH &nbsp;•&nbsp; FOCUS &nbsp;•&nbsp; CONSISTENCY &nbsp;•&nbsp; GRATITUDE = MY FUTURE",
        brand_title: "Jerelle — Jelita Aurelle",
        brand_tagline: "Elegance Meets Confidence",
        brand_desc: "A future own-brand for baju kurung, kebaya & modern tradisi — designing timeless, modest pieces that celebrate heritage while empowering today's confident woman.",
        brand_tag1: "Own Brand", brand_tag2: "Timeless Design", brand_tag3: "Empowering Women",
        contact_heading: "Contact",
        lightbox_hint: "Click anywhere outside to close",
        nav_licenses: "Licenses",
        licenses_heading: "Licenses &amp; Certification",
        licenses_intro: "Select View Certificate on any card for a closer look.",
        cert1_title: "Navigating Through Microsoft Power BI",
        cert2_title: "PowerBI (Business Intelligence)",
        cert3_title: "Exploring Excel",
        cert4_title: "Cheer Team Participant - PERKAD 2022",
        cert5_title: "3rd Place - Cheer Competition",
        cert6_title: "Mawar Charity Fun Day 2023",
        cert7_title: "Global Webinar Series: Youth Volunteers",
        cert8_title: "Altruism Festival 3.0",
        cert9_title: "Tour of the PUSPATI TRIGA Reactor",
        cert_view_btn: "<i class='fa-solid fa-eye'></i> View Certificate",
        proj4_front_title: "Hotel Reservation System",
        proj4_front_sub: "ROOMA Hotel Database",
        proj4_back_title: "Hotel ROOMA Reservation Management System",
        proj4_back_desc: "Developed a hotel reservation management system using Microsoft Access, applying relational database design, SQL, forms, and reports to streamline reservation processes and improve data management.",
        rooma_popup_title: "Hotel ROOMA Reservation Management System",
        rooma_overview: [
            "<strong>Designed a Structured Relational Database</strong> — Designed and normalized a relational database (3NF) to ensure data consistency, eliminate redundancy, and establish efficient relationships between customers, reservations, rooms, employees, receipts, and room services.",
            "<strong>Developed SQL Queries for Business Insights</strong> — Created SQL queries to analyze operational data, including total sales, customer segmentation, employee statistics, room availability, payment analysis, and reservation trends to support data-driven decision-making.",
            "<strong>Improved Data Management &amp; Reporting</strong> — Developed interactive forms and automated reports to simplify reservation management, enhance data accuracy, reduce manual processing, and enable faster retrieval of business information."
        ],
        rooma_slide_label: "<i class='fa-solid fa-file-lines'></i> Full Project Report",
        acc2_li5: "Utilized ChatGPT and Claude AI to accelerate the development of advanced DAX and Power Query (M) solutions, enhancing dashboard functionality, performance, and user experience in Power BI.",
        acc3_li4: "Leveraged Claude AI to deepen understanding of Laravel development and Laragon environment configuration, troubleshoot implementation challenges, optimize code quality, and apply software engineering best practices."
    },
    ms: {
        magic_message: "Selamat datang! Sebelum anda mula meneroka, anda boleh menekan butang muzik dan menikmati senarai lagu kegemaran saya sambil menelusuri portfolio ini.",
        nav_home: "Utama", nav_about: "Tentang", nav_skills: "Kemahiran", nav_education: "Pendidikan",
        nav_experience: "Pengalaman", nav_projects: "Projek", nav_volunteering: "Kesukarelawanan",
        nav_vision: "Papan Visi", nav_contact: "Hubungi",
        hero_greeting: "Salam, saya",
        hero_tagline: "Bakal pembangun full stack, meminati data dan reka bentuk.",
        hero_btn_projects: "Projek Saya", hero_btn_contact: "Hubungi Saya",
        about_heading: "Tentang saya",
        about_intro: "Klik di bawah untuk mengetahui lebih lanjut tentang latar belakang dan perjalanan saya.",
        about_btn: "<i class='fa-solid fa-heart'></i> Ketahui Lebih Lanjut Tentang Putely",
        about_modal_title: "Selamat Datang ke Portfolio Saya",
        about_tag1: "<i class='fa-solid fa-chart-column'></i> Power BI", about_tag2: "<i class='fa-solid fa-microchip'></i> Teknologi AI", about_tag3: "<i class='fa-solid fa-cat'></i> Ibu Kucing",
        about_tag4: "<i class='fa-solid fa-table-tennis-paddle-ball'></i> Badminton", about_tag5: "<i class='fa-solid fa-gamepad'></i> Rank Glory MLBB", about_tag6: "<i class='fa-solid fa-microphone'></i> Menyanyi",
        ml_hero_caption: "Hero Utama: Kagura — strategi, kesabaran, dan sedikit kreativiti",
        skills_heading: "Kemahiran",
        education_heading: "Pendidikan",
        edu1_title: "Ijazah Sarjana Muda Sains (Kepujian) Pemodelan Matematik dan Analitik",
        edu2_title: "Aliran Sains, Modul 1",
        achievements_heading: "Pencapaian",
        ach1: "Dean's List, Semester 5 & 6",
        ach2: "Penerima biasiswa Biasiswa Kerajaan Negeri Sabah (BKNS)",
        ach3: "Mengetuai & melatih pasukan sorak Kembara ke tempat ke-3, pertandingan kawad kaki PERKAD",
        ach4: "Tempat ke-4, kejohanan Mobile Legends antara kolej (SUKOL)",
        ach5: "Naib Pengarah - Mengurus 25 ahli jawatankuasa dalam penganjuran kejohanan futsal dan bola jaring dengan penyertaan lebih daripada 100 peserta.",
        experience_heading: "Pengalaman Bekerja",
        exp1_title: "Perantis", exp1_sub: "Program Pembangunan K-Youth — Khazanah Nasional x Aisling Group",
        exp2_title: "Intern Penganalisis Data", exp2_sub: "Unijaya Resources Sdn Bhd",
        exp3_title: "Pemilik Perkhidmatan Percetakan", exp3_sub: "Kolej Mawar, UiTM Shah Alam",
        exp4_title: "Tutor Matematik & Sains (Sambilan)", exp4_sub: "Tuisyen Mesra PPR Lembah Subang 2",
        exp5_title: "Pelayan Majlis Jamuan (Sambilan)", exp5_sub: "Pusat Dagangan Antarabangsa Malaysia (MITEC)",
        languages_heading: "Bahasa",
        volunteering_heading: "Kesukarelawanan",
        vol1_title: "<i class='fa-solid fa-people-group'></i> Festival Altruisme 3.0",
        vol1_desc: "Membantu mengelolakan festival universiti berkonsepkan altruisme dan penglibatan komuniti — menyokong logistik acara, menyelaraskan aktiviti program, dan membantu peserta.",
        vol2_title: "<i class='fa-solid fa-flag-checkered'></i> Petronas GPM Grand Prix 2023",
        vol2_desc: "Menjadi sukarelawan sebagai wakil UiTM di acara sukan motor peringkat kebangsaan, menyokong aktiviti acara dan menggalakkan penglibatan pelajar.",
        vol3_title: "<i class='fa-solid fa-graduation-cap'></i> Majlis Konvokesyen UiTM",
        vol3_desc: "Membantu menguruskan operasi acara semasa majlis konvokesyen, menyelaraskan logistik dan menyokong graduan serta tetamu.",
        vol4_title: "<i class='fa-solid fa-seedling'></i> Hari Komuniti MyPLUS",
        vol4_desc: "Menyumbang kepada inisiatif gotong-royong komuniti anjuran sekolah, menggalakkan kerja berpasukan dan tanggungjawab komuniti.",
        vol5_title: "<i class='fa-solid fa-heart'></i> Mawar Charity Fun Day",
        vol5_desc: "Merancang dan menyelaraskan aktiviti bersama anak yatim di Rumah Amal Budi Bistari, Shah Alam — permainan interaktif, sesi menganyam batik, dan sumbangan amal.",
        vol6_title: "<i class='fa-solid fa-radiation'></i> Lawatan Reaktor PUSPATI TRIGA",
        vol6_desc: "Mendapat pendedahan mengenai operasi reaktor nuklear, protokol keselamatan, dan aplikasi penyelidikan dalam bidang tenaga dan sains.",
        projects_heading: "Projek",
        projects_intro: "Hover kad untuk membalikkannya dan lihat alat & kisah di sebaliknya.",
        proj1_front_title: "Projek Tahun Akhir", proj1_front_sub: "Pemodelan Aliran Nanofluid Hibrid",
        proj1_back_title: "Aliran Konveksi Campuran Nanofluid Hibrid",
        proj1_back_desc: "Membangunkan model matematik untuk kelakuan konveksi campuran nanofluid hibrid yang mengalir ke titik genangan pada silinder yang meregang dengan kesan pemanasan Newtonian.",
        proj2_front_title: "Ramalan Ekonomi", proj2_front_sub: "Indeks Ketidaktentuan Dasar AS",
        proj2_back_title: "Meramal Indeks EPU Amerika Syarikat",
        proj2_back_desc: "Menjalankan ramalan siri masa ke atas Indeks Ketidaktentuan Dasar Ekonomi AS, memberikan input yang menyokong keputusan industri penerbangan mengenai perancangan kapasiti dan strategi.",
        proj3_front_title: "Wawasan Pasaran Motosikal Terpakai", proj3_front_sub: "Sistem Sokongan Keputusan India",
        proj3_back_title: "Sokongan Keputusan Pasaran Motosikal Terpakai",
        proj3_back_desc: "Membangunkan dashboard sokongan keputusan Power BI interaktif untuk menganalisis trend pasaran motosikal terpakai, faktor harga, dan corak pemilikan, membolehkan keputusan berasaskan data untuk pengoptimuman harga, perancangan inventori, dan analisis trend pasaran.",
        overview_btn: "<i class='fa-solid fa-magnifying-glass'></i> Gambaran",
        internship_heading: "Projek Latihan Industri",
        acc1_header: "<i class='fa-solid fa-desktop'></i> IRIS — Sistem Pengambilan Bersepadu (SPA Malaysia)",
        acc1_li1: "Melaksanakan ujian sistem untuk modul utama, mengenal pasti kecacatan (defects) dan memastikan fungsi sistem memenuhi keperluan perniagaan serta pengguna.",
        acc1_li2: "Menyokong Final Acceptance Testing (FAT) dengan menggunakan Bluedot AI untuk merekod minit mesyuarat, memastikan semua maklum balas, keputusan, dan tindakan susulan didokumentasikan dengan tepat.",
        acc1_li3: "Menggunakan NotebookLM (Google AI) untuk memahami aliran sistem dengan lebih cepat, meningkatkan kelajuan ujian serta kerjasama dengan ahli pasukan.",
        acc1_li4: "Menguruskan penjejak kecacatan berpusat menggunakan Google Sheets untuk merekod isu, memantau kemajuan ujian, dan membuat susulan pembetulan pepijat bersama pembangun sistem",
        acc2_header: "<i class='fa-solid fa-chart-column'></i> NSFiRM — Daftar Bunuh Diri dan Kecederaan Maut Kebangsaan (KKM Malaysia)",
        acc2_li1: "Membantu membangun dan menambah baik dashboard NSFiRM dalam Power BI, termasuk ukuran DAX, visualisasi peta, dan ciri laporan interaktif.",
        acc2_li2: "Menguji logik dashboard di peringkat daerah dan negeri.",
        acc2_li3: "Menerbit dan menguruskan pautan embed Power BI untuk integrasi sistem dan kemas kini laporan menggunakan Google Sheets.",
        acc2_li4: "Bekerja dengan Navicat untuk meneroka struktur pangkalan data NSFiRM, jadual, hubungan, dan aliran data.",
        acc3_header: "<i class='fa-solid fa-globe'></i> Alat Terjemahan AI",
        acc3_li1: "Membangunkan aliran kerja terjemahan berkuasa AI menggunakan Google Gemini API dalam Laravel untuk mengautomasikan penyetempatan pelbagai bahasa melalui UI dan CLI",
        acc3_li2: "Menyelidik dan menggunakan reka bentuk UI/UX berbantukan AI menggunakan Figma AI dan komponen Vuexy untuk memperkemas reka bentuk antara muka",
        acc3_li3: "Menyediakan dan menyampaikan pembentangan teknikal mengenai objektif, aliran kerja, dan manfaat alat tersebut",
        proj1_popup_title: "Aliran Konveksi Campuran Nanofluid Hibrid",
        proj1_overview: [
            "Membangunkan model pengiraan untuk mensimulasikan kelakuan pemindahan haba dalam nanofluid hibrid.",
            "Menganalisis dataset kompleks yang dihasilkan melalui simulasi MATLAB untuk mengenal pasti trend prestasi dan hubungan parameter.",
            "Menterjemahkan hasil berangka kepada input kejuruteraan yang boleh diaplikasikan melalui visualisasi data dan pelaporan analitikal."
        ],
        proj2_popup_title: "Meramal Indeks EPU Amerika Syarikat",
        proj2_overview: [
            "Membina model ramalan untuk KLCI menggunakan regresi siri masa dan penunjuk makroekonomi.",
            "Meningkatkan prestasi model melalui pemilihan ciri (GETS), analisis multikolineariti (VIF), dan pengesahan statistik.",
            "Menghasilkan ramalan yang boleh dipercayai dengan menilai ketepatan model menggunakan R\u00b2, Durbin-Watson, diagnostik residual, dan ramalan satu langkah ke hadapan."
        ],
        proj3_popup_title: "Sokongan Keputusan Pasaran Motosikal Terpakai",
        bike_o1_title: "1. Strategi Pengoptimuman Harga",
        bike_o2_title: "2. Permintaan Pasaran & Perancangan Inventori",
        bike_o3_title: "3. Analisis Trend & Risiko",
        bike_decision_supported: "Keputusan Disokong:",
        bike_o1_list: [
            "Mengenal pasti harga jualan optimum berdasarkan sejarah pemilikan, model motosikal, dan tahun pengeluaran.",
            "Membantu penjual menetapkan harga kompetitif sambil membolehkan pembeli menentukan sama ada senarai jualan berpatutan."
        ],
        bike_o2_list: [
            "Menentukan model motosikal dan kategori pemilikan yang mendominasi pasaran.",
            "Membantu peniaga memutuskan jenis motosikal yang perlu diutamakan untuk pembelian, stok, atau jualan semula."
        ],
        bike_o3_list: [
            "Memantau trend harga sejarah dan mengenal pasti faktor (cth. kuasa kuda, jarak tempuh, tahun) yang mempengaruhi nilai jualan semula.",
            "Menyokong keputusan pembelian dan penjualan strategik dengan mengenal pasti trend pasaran dan risiko harga yang berpotensi."
        ],
        slide_label: "<i class='fa-solid fa-file-lines'></i>  Laporan Penuh Projek",
        slide_label1: "<i class='fa-solid fa-file-lines'></i>  Slaid Projek ",
        dashboard_label: "<i class='fa-solid fa-chart-column'></i> Paparan Dashboard",
        nsfirm_popup_title: "Dashboard NSFiRM Menggunakan Power BI",
        nsfirm_overview: [
            "Membantu membangun dan menambah baik dashboard NSFiRM dalam Power BI, termasuk ukuran DAX, visualisasi peta, dan ciri laporan interaktif.",
            "Menguji logik dashboard di peringkat kebangsaan dan negeri.",
            "Menerbit dan menguruskan pautan embed Power BI untuk integrasi sistem dan kemas kini laporan menggunakan Excel."
        ],
        nsfirm_slide_label: "<i class='fa-solid fa-chart-column'></i> Paparan Dashboard",
        ai_popup_title: "Alat Terjemahan AI",
        ai_overview: [
            "Membantu dalam pembangunan aliran kerja terjemahan berkuasa AI menggunakan Google Gemini API dalam Laravel untuk mengautomasikan proses lokalisasi pelbagai bahasa melalui antara muka (UI) dan CLI.",
            "Menyelidik dan menggunakan reka bentuk UI/UX berbantukan AI menggunakan Figma AI dan komponen Vuexy untuk memperkemas reka bentuk antara muka.",
            "Menyediakan dan menyampaikan pembentangan teknikal mengenai objektif, aliran kerja, dan manfaat alat tersebut."
        ],
        ai_slide_label: "<i class='fa-solid fa-screwdriver-wrench'></i> Slaid Projek",
        vision_heading: "Papan Visi",
        vision_quote: "\"Versi terbaik saya masih dalam proses.\"",
        vc_dress_title: "Berpakaian kemas", vc_dress_desc: "Berpakaian anggun dan membawa diri dengan penuh keyakinan.",
        vc_health_title: "Gaya hidup sihat", vc_health_desc: "Makan dengan baik, kekal aktif, dan menjaga minda, tubuh dan jiwa.",
        vc_brand_title: "Perniagaan sampingan / Jenama sendiri",
        vc_brand_desc: "Membina jenama sendiri, memberi inspirasi kepada lebih ramai wanita, dan mencipta koleksi abadi yang memperkasa — Jelita Aurelle, di mana keanggunan bertemu keyakinan.",
        vc_digital_title: "Menguasai lebih kemahiran digital", vc_digital_desc: "Meningkatkan kemahiran dalam data, analitik, reka bentuk dan teknologi untuk terus relevan.",
        vc_community_title: "Projek komuniti", vc_community_desc: "Memberi kembali, memberi impak, dan menjadi sebahagian daripada sesuatu yang bermakna.",
        vc_comm_title: "Kemahiran komunikasi yakin", vc_comm_desc: "Bercakap dengan jelas, yakin dan berkesan dalam setiap situasi.",
        vc_cook_title: "Memperkukuh Iman (Istiqamah)", vc_cook_desc: "Berusaha menjadi seorang Muslim yang lebih baik melalui istiqamah — solat tepat pada waktunya, bertutur dengan kata-kata yang baik, membantu mereka yang memerlukan, serta menjadikan Selawat Al-Fatih sebahagian daripada rutin harian saya.",
        vc_car_title: "Memiliki kereta sendiri", vc_car_desc: "Kebebasan kewangan untuk memiliki kereta sendiri dan pergi ke mana sahaja.",
        vc_umrah_title: "Umrah bersama keluarga", vc_umrah_desc: "Bermusafir bersama, bersolat bersama, dan mencipta kenangan indah.",
        vc_lang_title: "Belajar bahasa baharu", vc_lang_desc: "Hangul & Mandarin — bahasa baharu, dunia baharu, peluang baharu.",
        vision_banner: "IMAN &nbsp;•&nbsp; FOKUS &nbsp;•&nbsp; KONSISTENSI &nbsp;•&nbsp; KESYUKURAN = MASA DEPAN SAYA",
        brand_title: "Jerelle — Jelita Aurelle",
        brand_tagline: "Keanggunan Bertemu Keyakinan",
        brand_desc: "Bakal jenama sendiri untuk baju kurung, kebaya & moden tradisi — mereka bentuk pakaian sopan yang abadi, meraikan warisan sambil memperkasakan wanita yakin hari ini.",
        brand_tag1: "Jenama Sendiri", brand_tag2: "Reka Bentuk Abadi", brand_tag3: "Memperkasa Wanita",
        contact_heading: "Hubungi",
        lightbox_hint: "Klik di luar untuk tutup",
        nav_licenses: "Lesen",
        licenses_heading: "Lesen &amp; Pensijilan",
        licenses_intro: "Pilih \"Lihat Sijil\" pada mana-mana kad untuk paparan lebih dekat.",
        cert1_title: "Navigasi Melalui Microsoft Power BI",
        cert2_title: "PowerBI (Kecerdasan Perniagaan)",
        cert3_title: "Meneroka Excel",
        cert4_title: "Peserta Sorak — PERKAD 2022",
        cert5_title: "Tempat Ketiga, Pertandingan Sorak",
        cert6_title: "Hari Aktiviti Amal Mawar 2023",
        cert7_title: "Siri Webinar Global: Sukarelawan Belia",
        cert8_title: "Festival Altruisme 3.0",
        cert9_title: "Lawatan Reaktor PUSPATI TRIGA",
        cert_view_btn: "<i class='fa-solid fa-eye'></i> Lihat Sijil",
        proj4_front_title: "Sistem Tempahan Hotel",
        proj4_front_sub: "Pangkalan Data Hotel ROOMA",
        proj4_back_title: "Sistem Pengurusan Tempahan Hotel ROOMA",
        proj4_back_desc: "Membangunkan sistem pengurusan tempahan hotel menggunakan Microsoft Access, mengaplikasikan reka bentuk pangkalan data hubungan, SQL, borang, dan laporan untuk memperkemas proses tempahan serta meningkatkan pengurusan data.",
        rooma_popup_title: "Sistem Pengurusan Tempahan Hotel ROOMA",
        rooma_overview: [
            "<strong>Mereka Bentuk Pangkalan Data Hubungan Berstruktur</strong> — Mereka bentuk dan menormalkan pangkalan data hubungan (3NF) untuk memastikan konsistensi data, menghapuskan lebihan data, dan mewujudkan hubungan yang cekap antara pelanggan, tempahan, bilik, pekerja, resit, dan perkhidmatan bilik.",
            "<strong>Membangunkan Pertanyaan SQL untuk Wawasan Perniagaan</strong> — Menghasilkan pertanyaan SQL untuk menganalisis data operasi, termasuk jumlah jualan, segmentasi pelanggan, statistik pekerja, ketersediaan bilik, analisis pembayaran, dan trend tempahan bagi menyokong keputusan berasaskan data.",
            "<strong>Menambah Baik Pengurusan Data &amp; Pelaporan</strong> — Membangunkan borang interaktif dan laporan automatik untuk memudahkan pengurusan tempahan, meningkatkan ketepatan data, mengurangkan pemprosesan manual, dan membolehkan capaian maklumat perniagaan yang lebih pantas."
        ],
        rooma_slide_label: "<i class='fa-solid fa-file-lines'></i> Laporan Penuh Projek",
        acc2_li5: "Menggunakan ChatGPT dan Claude AI untuk mempercepatkan pembangunan penyelesaian DAX dan Power Query (M) yang lebih kompleks, meningkatkan fungsi, prestasi, dan pengalaman pengguna dashboard dalam Power BI.",
        acc3_li4: "Menggunakan Claude AI untuk memperdalam pemahaman mengenai pembangunan Laravel dan konfigurasi persekitaran Laragon, menyelesaikan cabaran pelaksanaan, mengoptimumkan kualiti kod, dan mengaplikasikan amalan terbaik kejuruteraan perisian."
    },
    ja: {
        magic_message: "ようこそ！探索を始める前に、音楽ボタンを押して私のお気に入りの曲を聴きながら、このポートフォリオをご覧ください。",
        nav_home: "ホーム", nav_about: "About", nav_skills: "スキル", nav_education: "学歴",
        nav_experience: "職歴", nav_projects: "プロジェクト", nav_volunteering: "ボランティア",
        nav_vision: "ビジョンボード", nav_contact: "お問い合わせ",
        hero_greeting: "こんにちは、",
        hero_tagline: "データとデザインに情熱を注ぐ、フルスタック開発者を目指しています。",
        hero_btn_projects: "プロジェクトを見る", hero_btn_contact: "お問い合わせ",
        about_heading: "自己紹介",
        about_intro: "詳しいプロフィールをご覧いただくには、下のボタンをクリックしてください。",
        about_btn: "<i class='fa-solid fa-heart'></i> Putelyについて詳しく見る",
        about_modal_title: "ようこそ、私のポートフォリオへ",
        about_tag1: "<i class='fa-solid fa-chart-column'></i> Power BI", about_tag2: "<i class='fa-solid fa-microchip'></i> AI技術", about_tag3: "<i class='fa-solid fa-cat'></i> 猫のママ",
        about_tag4: "<i class='fa-solid fa-table-tennis-paddle-ball'></i> バドミントン", about_tag5: "<i class='fa-solid fa-gamepad'></i> MLBB グローリーランク", about_tag6: "<i class='fa-solid fa-microphone'></i> 歌うこと",
        ml_hero_caption: "推しヒーロー：カグラ — 戦略、忍耐、そして少しのカオス",
        skills_heading: "スキル",
        education_heading: "学歴",
        edu1_title: "数理モデリング・分析学 理学士（優等）",
        edu2_title: "理系コース モジュール1",
        achievements_heading: "実績",
        ach1: "学部長優等生リスト、第5・6学期",
        ach2: "サバ州政府奨学金（BKNS）受給者",
        ach3: "Kembaraチアリーディングチームを率い、PERKADドリル大会で3位に導く",
        ach4: "モバイルレジェンド大学対抗トーナメント（SUKOL）4位",
        ach5: "副局長（ふくきょくちょう） – 25名の実行委員会メンバーを統括し、100名以上が参加するフットサル・ネットボール大会を成功裏に運営しました。",
        experience_heading: "職歴",
        exp1_title: "アプレンティス", exp1_sub: "K-Youth Development Programme — Khazanah Nasional x Aisling Group",
        exp2_title: "データアナリストインターン", exp2_sub: "Unijaya Resources Sdn Bhd",
        exp3_title: "印刷サービスオーナー", exp3_sub: "Kolej Mawar, UiTM Shah Alam",
        exp4_title: "数学・理科チューター（アルバイト）", exp4_sub: "Tuisyen Mesra PPR Lembah Subang 2",
        exp5_title: "宴会フードサーバー（アルバイト）", exp5_sub: "マレーシア国際貿易展示センター（MITEC）",
        languages_heading: "言語",
        volunteering_heading: "ボランティア",
        vol1_title: "<i class='fa-solid fa-people-group'></i> Festival Altruisme 3.0",
        vol1_desc: "利他主義と地域交流をテーマにした大学フェスティバルの運営を支援 — イベントのロジスティクス、プログラム進行、参加者サポートを担当。",
        vol2_title: "<i class='fa-solid fa-flag-checkered'></i> ペトロナスGPMグランプリ 2023",
        vol2_desc: "UiTM代表として国内モータースポーツイベントでボランティア活動を行い、学生の参加を促進。",
        vol3_title: "<i class='fa-solid fa-graduation-cap'></i> UiTM卒業式典",
        vol3_desc: "卒業式典の運営を支援し、ロジスティクスの調整や卒業生・来賓のサポートを担当。",
        vol4_title: "<i class='fa-solid fa-seedling'></i> Hari Komuniti MyPLUS",
        vol4_desc: "学校主導の地域清掃活動に貢献し、チームワークと地域責任感を促進。",
        vol5_title: "<i class='fa-solid fa-heart'></i> Mawarチャリティー・ファンデー",
        vol5_desc: "Rumah Amal Budi Bistari（シャー・アラム）の孤児たちとの活動を企画・運営 — インタラクティブなゲーム、バティック織り体験、チャリティー活動。",
        vol6_title: "<i class='fa-solid fa-radiation'></i> PUSPATI TRIGA原子炉見学",
        vol6_desc: "原子炉の運転、安全プロトコル、エネルギー・科学分野での研究応用について学ぶ機会を得る。",
        projects_heading: "プロジェクト",
        projects_intro: "カードにカーソルを合わせると裏返り、使用ツールとストーリーが見られます。",
        proj1_front_title: "卒業研究プロジェクト", proj1_front_sub: "ハイブリッドナノ流体流れのモデリング",
        proj1_back_title: "ハイブリッドナノ流体の混合対流",
        proj1_back_desc: "ニュートン加熱の影響下で、伸縮する円柱上のよどみ点に向かうハイブリッドナノ流体の混合対流挙動の数理モデルを開発しました。",
        proj2_front_title: "経済予測", proj2_front_sub: "米国政策不確実性指数",
        proj2_back_title: "米国EPU指数の予測",
        proj2_back_desc: "米国経済政策不確実性指数の時系列予測を行い、航空業界の容量計画・戦略に関する意思決定を支援する知見を提供しました。",
        proj3_front_title: "中古バイク市場インサイト", proj3_front_sub: "インド意思決定支援システム",
        proj3_back_title: "中古バイク市場の意思決定支援",
        proj3_back_desc: "中古バイク市場のトレンド、価格要因、所有パターンを分析するインタラクティブなPower BI意思決定支援ダッシュボードを開発し、価格最適化・在庫計画・市場トレンド分析のデータドリブンな意思決定を可能にしました。",
        overview_btn: "<i class='fa-solid fa-magnifying-glass'></i> 概要",
        internship_heading: "インターンシッププロジェクト",
        acc1_header: "<i class='fa-solid fa-desktop'></i> IRIS — 統合採用システム（マレーシアSPA）",
        acc1_li1: "主要モジュールのシステムテストを実施し、不具合を特定するとともに、システム機能が業務およびユーザー要件を満たしていることを確認しました。",
        acc1_li2: "Final Acceptance Testing（FAT）を支援し、Bluedot AIを使用して議事録を作成し、すべてのフィードバック、決定事項、アクションアイテムが正確に記録されるようにしました。",
        acc1_li3: "NotebookLM（Google AI）を活用してシステムのワークフローを迅速に理解し、テストの効率向上およびチームメンバーとの連携強化に貢献しました。",
        acc1_li4: "Google Sheetsを用いて一元化された不具合管理トラッカーを管理し、問題の記録、テスト進捗の監視、および開発者とのバグ修正のフォローアップを行いました。",
        acc2_header: "<i class='fa-solid fa-chart-column'></i> NSFiRM — 国家自殺・致死傷害登録システム（マレーシア保健省）",
        acc2_li1: "Power BIでのNSFiRMダッシュボードの開発・改善を支援（DAXメジャー、マップ可視化、インタラクティブなレポート機能を含む）。",
        acc2_li2: "国及び州レベルでダッシュボードのロジックをテスト",
        acc2_li3: "システム統合およびレポート更新のため、Google Sheetsを活用しPower BI埋め込みリンクの公開・管理を実施",
        acc2_li4: "NavicatでNSFiRMデータベースの構造、テーブル、関連性、データフローを調査",
        acc3_header: "<i class='fa-solid fa-globe'></i> AI翻訳ツール",
        acc3_li1: "LaravelでGoogle Gemini APIを使用したAI駆動の翻訳ワークフローを開発し、UIとCLI経由で多言語ローカライゼーションを自動化",
        acc3_li2: "Figma AIとVuexyコンポーネントを用いたAI支援UI/UXデザインを調査・適用し、インターフェースデザインを効率化",
        acc3_li3: "ツールの目的、ワークフロー、利点に関する技術プレゼンテーションを準備・発表",
        proj1_popup_title: "ハイブリッドナノ流体の混合対流",
        proj1_overview: [
            "ハイブリッドナノ流体の熱伝達挙動をシミュレートする計算モデルを開発しました。",
            "MATLABシミュレーションで生成された複雑なデータセットを分析し、性能トレンドとパラメータの関係を特定しました。",
            "データの可視化と分析レポートを通じて、数値結果を実用的な工学的知見に変換しました。"
        ],
        proj2_popup_title: "米国EPU指数の予測",
        proj2_overview: [
            "時系列回帰とマクロ経済指標を用いてKLCIの予測モデルを構築しました。",
            "特徴量選択（GETS）、多重共線性分析（VIF）、統計的検証によりモデル性能を改善しました。",
            "R\u00b2、Durbin-Watson、残差診断、1期先予測でモデル精度を評価し、信頼性の高い予測を実現しました。"
        ],
        proj3_popup_title: "中古バイク市場の意思決定支援",
        bike_o1_title: "1. 価格最適化戦略",
        bike_o2_title: "2. 市場需要と在庫計画",
        bike_o3_title: "3. トレンドとリスク分析",
        bike_decision_supported: "支援する意思決定：",
        bike_o1_list: [
            "所有履歴、バイクモデル、製造年に基づいて最適な販売価格を特定します。",
            "販売者が競争力のある価格を設定できるよう支援し、購入者が公正な価格かを判断できるようにします。"
        ],
        bike_o2_list: [
            "市場で優勢なバイクモデルと所有カテゴリーを特定します。",
            "販売店がどのバイクタイプを仕入れ・在庫・再販すべきか判断するのを支援します。"
        ],
        bike_o3_list: [
            "過去の価格トレンドを監視し、再販価値に影響する要因（馬力、走行距離、年式など）を特定します。",
            "市場トレンドと潜在的な価格リスクを把握することで、戦略的な売買判断を支援します。"
        ],
        slide_label: "<i class='fa-solid fa-file-lines'></i> プロジェクト全体報告書",
        slide_label1: "<i class='fa-solid fa-file-lines'></i> プロジェクトスライド",
        dashboard_label: "<i class='fa-solid fa-chart-column'></i> ダッシュボードプレビュー",
        nsfirm_popup_title: "Power BIを使用したNSFiRMダッシュボード",
        nsfirm_overview: [
            "Power BIでのNSFiRMダッシュボードの開発・改善を支援（DAXメジャー、マップ可視化、インタラクティブなレポート機能を含む）。",
            "国及び州レベルでダッシュボードのロジックをテストしました。",
            "システム統合とレポート更新のためExcelを用いてPower BI埋め込みリンクを公開・管理しました。"
        ],
        nsfirm_slide_label: "<i class='fa-solid fa-chart-column'></i> ダッシュボードプレビュー",
        ai_popup_title: "AI翻訳ツール",
        ai_overview: [
            "LaravelでGoogle Gemini APIを使用したAI駆動の翻訳ワークフローを開発し、UIとCLI経由で多言語ローカライゼーションを自動化しました。",
            "Figma AIとVuexyコンポーネントを用いたAI支援UI/UXデザインを調査・適用しました。",
            "ツールの目的、ワークフロー、利点に関する技術プレゼンテーションを準備・発表しました。"
        ],
        ai_slide_label: "<i class='fa-solid fa-screwdriver-wrench'></i> ツールプレビュー",
        vision_heading: "ビジョンボード",
        vision_quote: "「最高の自分は、まだ完成していない。」",
        vc_dress_title: "身だしなみを整える", vc_dress_desc: "上品に装い、自信を持って振る舞う。",
        vc_health_title: "健康的な生活", vc_health_desc: "きちんと食べ、活動的でいて、心と体と魂を大切にする。",
        vc_brand_title: "副業・自社ブランド",
        vc_brand_desc: "自分のブランドを築き、多くの女性にインスピレーションを与え、時代を超えるアイテムを生み出す — エレガンスと自信が出会うJelita Aurelle。",
        vc_digital_title: "デジタルスキルをさらに磨く", vc_digital_desc: "データ、分析、デザイン、テクノロジーのスキルを高め、常に将来に備える。",
        vc_community_title: "地域貢献プロジェクト", vc_community_desc: "恩返しをし、良い影響を与え、意義のあることの一部になる。",
        vc_comm_title: "自信あるコミュニケーション能力", vc_comm_desc: "あらゆる場面で明確に、自信を持って、効果的に話す。",
        vc_cook_title: "信仰を深める（イスティカーマ）", vc_cook_desc: "定刻の礼拝、思いやりのある言葉づかい、困っている方への支援、そしてサラワート・アル＝ファーティフを日々の習慣に取り入れることを通じて、より良いムスリムであることを目指しています。",
        vc_car_title: "自分の車を持つ", vc_car_desc: "経済的自由を得て自分の車を持ち、どこへでも行く。",
        vc_umrah_title: "家族でウムラ巡礼", vc_umrah_desc: "共に旅し、共に祈り、美しい思い出を作る。",
        vc_lang_title: "新しい言語を学ぶ", vc_lang_desc: "ハングルと中国語 — 新しい言語、新しい世界、新しいチャンス。",
        vision_banner: "信念 &nbsp;•&nbsp; 集中 &nbsp;•&nbsp; 継続 &nbsp;•&nbsp; 感謝 = 私の未来",
        brand_title: "Jerelle — Jelita Aurelle",
        brand_tagline: "エレガンスと自信の融合",
        brand_desc: "バジュ・クロン、クバヤ、モダン・トラディシのための将来の自社ブランド構想 — 伝統を称えながら、現代の自信ある女性を後押しする、上品で控えめなデザインを目指します。",
        brand_tag1: "自社ブランド", brand_tag2: "時代を超えるデザイン", brand_tag3: "女性のエンパワーメント",
        contact_heading: "お問い合わせ",
        lightbox_hint: "外側をクリックして閉じる",
        nav_licenses: "ライセンス",
        licenses_heading: "ライセンスと認定資格",
        licenses_intro: "各カードの「証明書を見る」を選択すると、詳細をご覧いただけます。",
        cert1_title: "Microsoft Power BI ナビゲーション研修",
        cert2_title: "Power BI（ビジネスインテリジェンス）",
        cert3_title: "Excel探求プログラム",
        cert4_title: "チアリーディング参加証明 — PERKAD 2022",
        cert5_title: "チアリーディング競技 第3位",
        cert6_title: "マワール慈善イベント 2023",
        cert7_title: "グローバルウェビナーシリーズ：青年ボランティア",
        cert8_title: "利他主義フェスティバル 3.0",
        cert9_title: "PUSPATI TRIGA原子炉見学",
        cert_view_btn: "<i class='fa-solid fa-eye'></i> 証明書を見る",
        proj4_front_title: "ホテル予約システム",
        proj4_front_sub: "ROOMAホテルデータベース",
        proj4_back_title: "ROOMAホテル予約管理システム",
        proj4_back_desc: "Microsoft Accessを用いてホテル予約管理システムを開発。リレーショナルデータベース設計、SQL、フォーム、レポートを活用し、予約業務の効率化とデータ管理の向上を実現した。",
        rooma_popup_title: "ROOMAホテル予約管理システム",
        rooma_overview: [
            "<strong>構造化されたリレーショナルデータベースの設計</strong> — 顧客、予約、客室、従業員、領収書、客室サービス間の効率的な関係を確立するため、リレーショナルデータベースを設計・正規化（第3正規形）し、データの一貫性を確保して冗長性を排除した。",
            "<strong>ビジネスインサイトのためのSQLクエリ開発</strong> — 総売上、顧客セグメント、従業員統計、客室の空き状況、支払い分析、予約傾向などの運用データを分析するSQLクエリを作成し、データに基づく意思決定を支援した。",
            "<strong>データ管理とレポート機能の改善</strong> — インタラクティブなフォームと自動レポートを開発し、予約管理を簡素化するとともに、データの正確性向上、手作業の削減、および業務情報への迅速なアクセスを実現した。"
        ],
        rooma_slide_label: "<i class='fa-solid fa-file-lines'></i> プロジェクト全体報告書",
        acc2_li5: "ChatGPTおよびClaude AIを活用し、高度なDAXおよびPower Query（M）ソリューションの開発を加速させ、Power BIにおけるダッシュボードの機能性、パフォーマンス、ユーザー体験を向上させた。",
        acc3_li4: "Claude AIを活用してLaravel開発およびLaragon環境設定への理解を深め、実装上の課題を解決し、コード品質を最適化するとともに、ソフトウェア工学のベストプラクティスを適用した。"
    }
};

window.currentLang = "en";

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    window.currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
        const key = el.getAttribute("data-i18n-list");
        if (Array.isArray(dict[key])) {
            el.innerHTML = dict[key].map((item) => `<li>${item}</li>`).join("");
        }
    });

    document.body.classList.toggle("lang-ja", lang === "ja");

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("putely-lang", lang); } catch (e) {}
}

window.addEventListener("DOMContentLoaded", () => {
    let savedLang = "en";
    try { savedLang = localStorage.getItem("putely-lang") || "en"; } catch (e) {}
    applyLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
    });
});

// =======================================================
// DARK / LIGHT MODE TOGGLE
// =======================================================
window.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle ? themeToggle.querySelector(".theme-icon") : null;

    function setTheme(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        if (themeIcon) {
            themeIcon.classList.toggle("fa-moon", !isDark);
            themeIcon.classList.toggle("fa-sun", isDark);
        }
        try { localStorage.setItem("putely-theme", isDark ? "dark" : "light"); } catch (e) {}
    }

    let savedTheme = "light";
    try { savedTheme = localStorage.getItem("putely-theme") || "light"; } catch (e) {}
    setTheme(savedTheme === "dark");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            setTheme(!document.body.classList.contains("dark-mode"));
        });
    }
});

// =======================================================
// PROJECT OVERVIEW MODALS (FYP / Economic / Bike)
// =======================================================
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".overview-btn[data-modal]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const overlay = document.getElementById(btn.getAttribute("data-modal"));
            if (!overlay) return;
            const modal = overlay.querySelector(".project-modal");
            overlay.classList.add("active");
            setTimeout(() => modal.classList.add("show"), 10);
        });
    });

    document.querySelectorAll(".project-overlay").forEach((overlay) => {
        const modal = overlay.querySelector(".project-modal");
        const closeBtn = overlay.querySelector(".project-close");

        function closeThisModal() {
            modal.classList.remove("show");
            setTimeout(() => overlay.classList.remove("active"), 300);
        }

        if (closeBtn) closeBtn.addEventListener("click", closeThisModal);
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeThisModal();
        });
    });
});

// =======================================================
// SLIDE GALLERIES (FYP / Economic / NSFiRM / AI Tool)
// =======================================================
window.addEventListener("DOMContentLoaded", () => {
    function buildNumbered(folder, prefix, total) {
        const arr = [];
        for (let i = 1; i <= total; i++) {
            arr.push(`${folder}${prefix}${String(i).padStart(2, "0")}.jpg`);
        }
        return arr;
    }

    const galleries = {
        fyp: {
            files: buildNumbered("images/myfyp_slides/", "slide-", 31)
            .filter((_, index) => index !== 1),
            img: "fypSlideImg",
            counter: "fypCounter",
            current: 0
        },
        econ: {
            files: buildNumbered("images/econ_slides/", "slide-", 28),
            img: "econSlideImg", counter: "econCounter", current: 0
        },
        nsfirm: {
            files: ["images/PSN_dashboard_prev.jpg", "images/FIN_dashboard_prev.jpg", "images/CRN_dashboard_prev.jpg"],
            img: "nsfirmSlideImg", counter: "nsfirmCounter", current: 0
        },
        ai: {
            files: buildNumbered("images/automation_slides/", "slide-", 21),
            img: "aiSlideImg", counter: "aiCounter", current: 0
        },
        rooma: {
            files: buildNumbered("images/rooma_slides/", "slide-", 36),
            img: "roomaSlideImg", counter: "roomaCounter", current: 0
        }
    };

    function updateSlide(key, direction) {
        const g = galleries[key];
        const imgEl = document.getElementById(g.img);
        const counterEl = document.getElementById(g.counter);
        if (!imgEl || !counterEl) return;

        imgEl.classList.remove("slide-in-left", "slide-in-right");
        void imgEl.offsetWidth; // force reflow so the animation replays
        imgEl.src = g.files[g.current];
        imgEl.classList.add(direction === "prev" ? "slide-in-left" : "slide-in-right");
        counterEl.textContent = `${g.current + 1} / ${g.files.length}`;
    }

    function goNext(key) {
        const g = galleries[key];
        if (!g) return;
        g.current = g.current < g.files.length - 1 ? g.current + 1 : 0;
        updateSlide(key, "next");
    }

    function goPrev(key) {
        const g = galleries[key];
        if (!g) return;
        g.current = g.current > 0 ? g.current - 1 : g.files.length - 1;
        updateSlide(key, "prev");
    }

    document.querySelectorAll(".slide-nav").forEach((btn) => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-gallery");
            if (btn.classList.contains("next")) goNext(key); else goPrev(key);
        });
    });

    // Swipe support (touch) + keyboard arrows while a project modal is open
    document.querySelectorAll(".slide-viewer").forEach((viewer) => {
        const navBtn = viewer.querySelector(".slide-nav");
        const key = navBtn ? navBtn.getAttribute("data-gallery") : null;
        if (!key) return;

        let touchStartX = null;
        viewer.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        viewer.addEventListener("touchend", (e) => {
            if (touchStartX === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 40) {
                if (dx < 0) goNext(key); else goPrev(key);
            }
            touchStartX = null;
        }, { passive: true });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        const openOverlay = document.querySelector(".project-overlay.active");
        if (!openOverlay) return;
        const navBtn = openOverlay.querySelector(".slide-nav");
        if (!navBtn) return;
        const key = navBtn.getAttribute("data-gallery");
        if (e.key === "ArrowRight") goNext(key); else goPrev(key);
    });
});

// =======================================================
// IMAGE LIGHTBOX (profile photo, hero art, slides, results...)
// =======================================================
window.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("imgLightbox");
    if (!lightbox) return;

    const lightboxContent = lightbox.querySelector(".lightbox-content");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || "Full size preview";
        lightbox.classList.add("active");
        setTimeout(() => lightboxContent.classList.add("show"), 10);
    }

    function closeLightbox() {
        lightboxContent.classList.remove("show");
        setTimeout(() => lightbox.classList.remove("active"), 250);
    }

    // Delegated click so it also works for slide images whose src changes dynamically
    document.addEventListener("click", (e) => {
        const target = e.target.closest(".zoomable");
        if (!target) return;
        const full = target.getAttribute("data-full") || target.src;
        openLightbox(full, target.alt);
    });

    document.querySelectorAll(".ai-result-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            openLightbox(btn.getAttribute("data-full"), "AI translation result preview");
        });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) closeLightbox();
    });
});

// =======================================================
// BRAND / SIDE BUSINESS MODAL
// =======================================================
window.addEventListener("DOMContentLoaded", () => {
    const openBrandBtn = document.getElementById("openBrandBtn");
    const brandOverlay = document.getElementById("brandOverlay");
    if (!openBrandBtn || !brandOverlay) return;

    const brandModal = brandOverlay.querySelector(".brand-modal");
    const brandClose = brandOverlay.querySelector(".brand-close");

    openBrandBtn.addEventListener("click", () => {
        brandOverlay.classList.add("active");
        setTimeout(() => brandModal.classList.add("show"), 10);
    });

    function closeBrandModal() {
        brandModal.classList.remove("show");
        setTimeout(() => brandOverlay.classList.remove("active"), 300);
    }

    brandClose.addEventListener("click", closeBrandModal);
    brandOverlay.addEventListener("click", (e) => {
        if (e.target === brandOverlay) closeBrandModal();
    });
});

// =======================================================
// MUSIC PLAYER (YouTube IFrame API) — plays on, even after
// the popup is closed, because the player mount is never
// removed or hidden from the DOM. Nothing is loaded or cued
// until the visitor presses Play for the first time.
// =======================================================
const musicPlaylist = [
    { title: "Instrumental", artist: "Barbie", videoId: "On0FmXe9nJs" },
    { title: "Butterfly", artist: "BTS", videoId: "laE2mvwZN8w" },
    { title: "Oh!", artist: "Snsd", videoId: "TGbwL8kSpEk" },
    { title: "What Is Love?", artist: "TWICE", videoId: "w4nihuYVTW0" },
    { title: "Just One Day", artist: "BTS", videoId: "t9JbdvifAMw" }
];

let ytPlayer = null;
let ytPlayerReady = false;
let currentTrackIndex = 0;
let isMusicPlaying = false;
let isRepeatOn = false;
let progressTimer = null;
let hasUserStartedPlayback = false;

window.onYouTubeIframeAPIReady = () => {
    ytPlayer = new YT.Player("youtubeMount", {
        height: "200",
        width: "200",
        playerVars: {
            controls: 0,
            disablekb: 1,
            origin: window.location.origin
        },
        events: {
            onReady: () => { ytPlayerReady = true; },
            onStateChange: onPlayerStateChange,
            onError: onPlayerError
        }
    });
};

function onPlayerError(event) {
    // 2 = invalid id, 5 = HTML5 error, 100 = removed/private,
    // 101 / 150 = embedding disabled by the video owner
    console.warn("[music player] YouTube error code", event.data, "on track", currentTrackIndex, musicPlaylist[currentTrackIndex]);
    if (!hasUserStartedPlayback) return; // never auto-skip/auto-play before the user pressed Play
    const titleEl = document.getElementById("musicTrackTitle");
    if (titleEl) titleEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Unavailable, skipping...';
    setTimeout(nextMusicTrack, 1200);
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isMusicPlaying = true;
        startProgressTimer();
    } else if (event.data === YT.PlayerState.PAUSED) {
        isMusicPlaying = false;
        stopProgressTimer();
    } else if (event.data === YT.PlayerState.ENDED) {
        isMusicPlaying = false;
        stopProgressTimer();
        if (isRepeatOn) {
            ytPlayer.seekTo(0);
            ytPlayer.playVideo();
        } else {
            nextMusicTrack();
        }
    }
    updateMusicUI(
        ytPlayer ? ytPlayer.getCurrentTime() * 1000 : 0,
        ytPlayer ? ytPlayer.getDuration() * 1000 : 0,
        isMusicPlaying
    );
}

function startProgressTimer() {
    stopProgressTimer();
    progressTimer = setInterval(() => {
        if (!ytPlayer || typeof ytPlayer.getCurrentTime !== "function") return;
        updateMusicUI(ytPlayer.getCurrentTime() * 1000, ytPlayer.getDuration() * 1000, true);
    }, 500);
}

function stopProgressTimer() {
    if (progressTimer) clearInterval(progressTimer);
    progressTimer = null;
}

function formatMusicTime(ms) {
    if (!ms || ms < 0) return "0:00";
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return m + ":" + String(s).padStart(2, "0");
}

function updateMusicUI(position, duration, playing) {
    const fill = document.getElementById("musicProgressFill");
    const thumb = document.getElementById("musicProgressThumb");
    const elapsed = document.getElementById("musicElapsed");
    const dur = document.getElementById("musicDuration");
    const vinyl = document.getElementById("vinylDisc");
    const playBtn = document.getElementById("musicPlayBtn");
    const floatBtn = document.getElementById("musicBtn");

    const pct = duration > 0 ? Math.min(100, Math.max(0, (position / duration) * 100)) : 0;
    if (fill) fill.style.width = pct + "%";
    if (thumb) thumb.style.left = pct + "%";
    if (elapsed) elapsed.textContent = formatMusicTime(position);
    if (dur) dur.textContent = formatMusicTime(duration);
    if (vinyl) vinyl.classList.toggle("spinning", playing);
    if (playBtn) {
        const icon = playBtn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-play", !playing);
            icon.classList.toggle("fa-pause", playing);
        }
    }
    if (floatBtn) floatBtn.classList.toggle("playing", playing);
}

function renderNowPlaying() {
    const track = musicPlaylist[currentTrackIndex];
    const titleEl = document.getElementById("musicTrackTitle");
    if (titleEl) titleEl.textContent = hasUserStartedPlayback ? `${track.artist} — ${track.title}` : "Press play to start";
}

function renderMusicPlaylist() {
    const ul = document.getElementById("musicPlaylist");
    if (!ul) return;
    ul.innerHTML = musicPlaylist.map((t, i) => `
        <li data-index="${i}" class="${i === currentTrackIndex && hasUserStartedPlayback ? "active" : ""}">
            <span><span class="track-num">${String(i + 1).padStart(2, "0")}</span>${t.artist} — ${t.title}</span>
            <span class="track-playing-icon">${i === currentTrackIndex && hasUserStartedPlayback ? '<i class="fa-solid fa-volume-high"></i>' : ""}</span>
        </li>
    `).join("");
    ul.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => playTrack(parseInt(li.getAttribute("data-index"), 10), true));
    });
}

function playTrack(index, autoplay) {
    currentTrackIndex = index;
    hasUserStartedPlayback = true;
    renderNowPlaying();
    renderMusicPlaylist();
    if (!ytPlayer || typeof ytPlayer.loadVideoById !== "function") return;
    if (autoplay) {
        ytPlayer.loadVideoById(musicPlaylist[index].videoId);
    } else {
        ytPlayer.cueVideoById(musicPlaylist[index].videoId);
    }
}

function nextMusicTrack() {
    playTrack((currentTrackIndex + 1) % musicPlaylist.length, true);
}

function prevMusicTrack() {
    playTrack((currentTrackIndex - 1 + musicPlaylist.length) % musicPlaylist.length, true);
}

function toggleMusicRepeat() {
    isRepeatOn = !isRepeatOn;
    const btn = document.getElementById("musicRepeatBtn");
    if (btn) btn.classList.toggle("active", isRepeatOn);
}

window.addEventListener("DOMContentLoaded", () => {
    renderNowPlaying();
    renderMusicPlaylist();

    const musicBtn = document.getElementById("musicBtn");
    const musicOverlay = document.getElementById("musicOverlay");
    const musicModal = document.getElementById("musicModal");
    const musicCloseBtn = document.getElementById("musicCloseBtn");

    function openMusicModal() {
        musicOverlay.classList.add("active");
        setTimeout(() => musicModal.classList.add("show"), 10);
    }
    function closeMusicModal() {
        musicModal.classList.remove("show");
        setTimeout(() => musicOverlay.classList.remove("active"), 300);
    }

    if (musicBtn && musicOverlay && musicModal && musicCloseBtn) {
        musicBtn.addEventListener("click", openMusicModal);
        musicCloseBtn.addEventListener("click", closeMusicModal);
        musicOverlay.addEventListener("click", (e) => {
            if (e.target === musicOverlay) closeMusicModal();
        });
    }

    const playBtn = document.getElementById("musicPlayBtn");
    const prevBtn = document.getElementById("musicPrevBtn");
    const nextBtn = document.getElementById("musicNextBtn");
    const repeatBtn = document.getElementById("musicRepeatBtn");

    if (playBtn) {
        playBtn.addEventListener("click", () => {
            if (!ytPlayer) return;
            // First press ever: nothing has been loaded yet, so start track 0.
            if (!hasUserStartedPlayback) {
                playTrack(0, true);
                return;
            }
            if (typeof ytPlayer.getPlayerState !== "function") return;
            if (isMusicPlaying) ytPlayer.pauseVideo();
            else ytPlayer.playVideo();
        });
    }
    if (prevBtn) prevBtn.addEventListener("click", prevMusicTrack);
    if (nextBtn) nextBtn.addEventListener("click", nextMusicTrack);
    if (repeatBtn) repeatBtn.addEventListener("click", toggleMusicRepeat);

    // ---- Seek: click or drag the progress bar to jump to any point ----
    const progressBar = document.getElementById("musicProgressBar");
    if (progressBar) {
        let dragging = false;

        function fractionFromEvent(e) {
            const rect = progressBar.getBoundingClientRect();
            const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
            return Math.min(1, Math.max(0, x / rect.width));
        }

        function previewSeek(fraction) {
            if (!ytPlayer || typeof ytPlayer.getDuration !== "function") return;
            const duration = ytPlayer.getDuration() || 0;
            updateMusicUI(fraction * duration * 1000, duration * 1000, isMusicPlaying);
        }

        function commitSeek(fraction) {
            if (!ytPlayer || typeof ytPlayer.seekTo !== "function") return;
            const duration = ytPlayer.getDuration() || 0;
            if (duration <= 0) return;
            ytPlayer.seekTo(fraction * duration, true);
            updateMusicUI(fraction * duration * 1000, duration * 1000, isMusicPlaying);
        }

        function startDrag(e) {
            if (!ytPlayer || !hasUserStartedPlayback) return;
            dragging = true;
            progressBar.classList.add("dragging");
            previewSeek(fractionFromEvent(e));
            e.preventDefault();
        }

        function moveDrag(e) {
            if (!dragging) return;
            previewSeek(fractionFromEvent(e));
        }

        function endDrag(e) {
            if (!dragging) return;
            dragging = false;
            progressBar.classList.remove("dragging");
            commitSeek(fractionFromEvent(e));
        }

        progressBar.addEventListener("mousedown", startDrag);
        window.addEventListener("mousemove", moveDrag);
        window.addEventListener("mouseup", endDrag);

        progressBar.addEventListener("touchstart", startDrag, { passive: false });
        window.addEventListener("touchmove", moveDrag, { passive: true });
        window.addEventListener("touchend", endDrag);

        // A plain click (no drag) still seeks to that point.
        progressBar.addEventListener("click", (e) => {
            if (!ytPlayer || !hasUserStartedPlayback) return;
            commitSeek(fractionFromEvent(e));
        });
    }

    // ---- Magic popup ----
    const magicBtn = document.getElementById("magicBtn");
    const magicOverlay = document.getElementById("magicOverlay");
    const magicModal = document.getElementById("magicModal");
    const magicCloseBtn = document.getElementById("magicCloseBtn");

    if (magicBtn && magicOverlay && magicModal && magicCloseBtn) {
        magicBtn.addEventListener("click", () => {
            magicOverlay.classList.add("active");
            setTimeout(() => magicModal.classList.add("show"), 10);
        });
        function closeMagicModal() {
            magicModal.classList.remove("show");
            setTimeout(() => magicOverlay.classList.remove("active"), 300);
        }
        magicCloseBtn.addEventListener("click", closeMagicModal);
        magicOverlay.addEventListener("click", (e) => {
            if (e.target === magicOverlay) closeMagicModal();
        });
    }
});

// =======================================================
// UPGRADE PASS — smoother transitions & captivating motion
// (additive only: does not alter any existing text/logic)
// =======================================================
window.addEventListener("DOMContentLoaded", () => {

    // ---------- Scroll progress bar ----------
    const progressBar = document.createElement("div");
    progressBar.id = "scrollProgress";
    document.body.appendChild(progressBar);

    const navbarEl = document.getElementById("navbar");

    function updateOnScroll() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + "%";

        if (navbarEl) {
            navbarEl.classList.toggle("scrolled", scrollTop > 10);
        }
    }
    updateOnScroll();
    window.addEventListener("scroll", updateOnScroll, { passive: true });

    // ---------- Active nav link highlighting ----------
    const navLinks = Array.from(document.querySelectorAll("#navbar .nav-links a"));
    const sectionMap = navLinks
        .map((link) => {
            const id = link.getAttribute("href");
            if (!id || !id.startsWith("#")) return null;
            const section = document.querySelector(id);
            return section ? { link, section } : null;
        })
        .filter(Boolean);

    if (sectionMap.length) {
        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const match = sectionMap.find((m) => m.section === entry.target);
                    if (!match) return;
                    if (entry.isIntersecting) {
                        navLinks.forEach((l) => l.classList.remove("active-link"));
                        match.link.classList.add("active-link");
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );
        sectionMap.forEach((m) => navObserver.observe(m.section));
    }

    // ---------- Staggered reveal delays ----------
    // Groups reveal-boxes by their immediate parent so cards inside the
    // same grid cascade in one after another instead of popping together.
    const revealGroups = new Map();
    document.querySelectorAll(".reveal-box").forEach((box) => {
        const parent = box.parentElement;
        if (!revealGroups.has(parent)) revealGroups.set(parent, []);
        revealGroups.get(parent).push(box);
    });
    revealGroups.forEach((boxes) => {
        boxes.forEach((box, i) => {
            const delay = Math.min(i, 6) * 0.08;
            box.style.setProperty("--reveal-delay", delay + "s");
        });
    });

    // ---------- Ripple click feedback ----------
    const rippleSelector =
        ".btn, .barbie-btn, .overview-btn, .cert-btn, .contact-box, .lang-btn, " +
        ".theme-toggle, .float-btn, .music-ctrl-btn, .slide-nav, .accordion-header";

    document.addEventListener("click", (e) => {
        const target = e.target.closest(rippleSelector);
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.4;
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        if (getComputedStyle(target).color) {
            // Use a tinted ripple on light backgrounds, white on filled ones
            const bg = getComputedStyle(target).backgroundColor;
            const isLight = bg === "rgba(0, 0, 0, 0)" || bg === "transparent" || bg.includes("255, 255, 255");
            if (isLight) ripple.classList.add("ripple-dark");
        }
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        const prevPosition = getComputedStyle(target).position;
        if (prevPosition === "static") target.style.position = "relative";
        target.classList.add("ripple-wrap");
        target.appendChild(ripple);
        ripple.addEventListener("animationend", () => {
            ripple.remove();
            target.classList.remove("ripple-wrap");
        });
    });

    // ---------- Cursor glow in hero (desktop / hover-capable only) ----------
    const hero = document.getElementById("hero");
    if (hero && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        const glow = document.createElement("div");
        glow.className = "cursor-glow";
        hero.prepend(glow);

        hero.addEventListener("mousemove", (e) => {
            const rect = hero.getBoundingClientRect();
            glow.style.setProperty("--x", e.clientX - rect.left + "px");
            glow.style.setProperty("--y", e.clientY - rect.top + "px");
            glow.classList.add("active");
        });
        hero.addEventListener("mouseleave", () => glow.classList.remove("active"));
    }
});

// =======================================================
// RESPONSIVE PASS — mobile nav + touch-friendly interactions
// (additive only: does not alter any existing text/logic)
// =======================================================
window.addEventListener("DOMContentLoaded", () => {

    // ---------- Mobile hamburger nav ----------
    const navToggle = document.getElementById("navToggle");
    const navLinksEl = document.getElementById("navLinks");
    const navScrim = document.getElementById("navScrim");

    function closeMobileNav() {
        if (!navLinksEl) return;
        navLinksEl.classList.remove("open");
        navToggle && navToggle.setAttribute("aria-expanded", "false");
        navScrim && navScrim.classList.remove("active");
        document.body.style.overflow = "";
    }

    function openMobileNav() {
        if (!navLinksEl) return;
        navLinksEl.classList.add("open");
        navToggle && navToggle.setAttribute("aria-expanded", "true");
        navScrim && navScrim.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    if (navToggle && navLinksEl) {
        navToggle.addEventListener("click", () => {
            const isOpen = navLinksEl.classList.contains("open");
            isOpen ? closeMobileNav() : openMobileNav();
        });

        navLinksEl.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMobileNav);
        });

        navScrim && navScrim.addEventListener("click", closeMobileNav);

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMobileNav();
        });

        // Collapse the mobile panel automatically if the viewport is
        // resized back up to desktop width while it's open.
        window.addEventListener("resize", () => {
            if (window.innerWidth > 980) closeMobileNav();
        });
    }

    // ---------- Tap-to-flip project cards on touch devices ----------
    if (window.matchMedia("(hover: none)").matches) {
        document.querySelectorAll(".flip-card").forEach((card) => {
            card.addEventListener("click", (e) => {
                // Let real links/buttons inside the card back face work normally
                if (e.target.closest("a, button")) return;
                card.classList.toggle("flipped");
            });
        });
    }
});

// =======================================================
// BACK-TO-TOP BUTTON — fades in once you've scrolled down a
// bit, fades out again near the top. Sits above the magic/music
// float buttons in the same stack.
// =======================================================
window.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("backToTopBtn");
    if (!topBtn) return;

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    let ticking = false;
    function toggleTopBtn() {
        topBtn.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);
        ticking = false;
    }
    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                requestAnimationFrame(toggleTopBtn);
                ticking = true;
            }
        },
        { passive: true }
    );
    toggleTopBtn();
});
