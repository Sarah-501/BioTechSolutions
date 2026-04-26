document.addEventListener('DOMContentLoaded', () => {
    
    // Check which page we are on
    const isHomePage = document.getElementById('projectsGrid') !== null;
    const isProjectPage = document.getElementById('projectTitle') !== null;

    if (typeof projectsData === 'undefined') {
        console.error("projectsData is not defined. Ensure projects-data.js is loaded before project-loader.js");
        return;
    }

    if (isHomePage) {
        loadProjectCards();
    } else if (isProjectPage) {
        loadProjectDetails();
    }

    /**
     * Populates the index.html with project cards
     */
    /**
     * Populates the index.html with project cards and initializes slider
     */
    function loadProjectCards() {
        const grid = document.getElementById('projectsGrid');
        const dotsContainer = document.getElementById('sliderDots');
        grid.innerHTML = ''; // Clear existing
        dotsContainer.innerHTML = '';

        projectsData.forEach((project, index) => {
            const animationDelay = index * 0.1;
            
            const card = document.createElement('div');
            card.className = 'project-card fade-in';
            card.style.transitionDelay = `${animationDelay}s`;
            
            card.onclick = () => {
                window.location.href = `project.html?id=${project.id}`;
            };

            const imageSrc = project.media.images.length > 0 ? project.media.images[0] : '';

            card.innerHTML = `
                <div class="project-image">
                    <img src="${imageSrc}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <div class="project-category">${project.category}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.shortDescription}</p>
                    <div class="project-link">
                        Read Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            `;
            
            grid.appendChild(card);

            // Create dots (one for every few projects if many, or 1:1 if few)
            // For 14 projects, let's do 1:1 or group by 3
            if (index % 1 === 0) {
                const dot = document.createElement('div');
                dot.className = index === 0 ? 'dot active' : 'dot';
                dot.onclick = () => {
                    grid.scrollTo({
                        left: card.offsetLeft - 40,
                        behavior: 'smooth'
                    });
                };
                dotsContainer.appendChild(dot);
            }
            
            setTimeout(() => {
                card.classList.add('visible');
            }, 100 + (index * 50));
        });

        // Slider controls
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn && nextBtn) {
            prevBtn.onclick = () => {
                grid.scrollBy({ left: -410, behavior: 'smooth' });
            };
            nextBtn.onclick = () => {
                grid.scrollBy({ left: 410, behavior: 'smooth' });
            };
        }

        // Update dots on scroll
        grid.onscroll = () => {
            const scrollLeft = grid.scrollLeft;
            const cardWidth = 410; // Card width + gap
            const activeIndex = Math.round(scrollLeft / cardWidth);
            
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                if (i === activeIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        };
    }

    /**
     * Populates project.html based on the 'id' URL parameter
     */
    function loadProjectDetails() {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');

        if (!projectId) {
            // Redirect to home if no ID is found
            window.location.href = 'index.html#projects';
            return;
        }

        const project = projectsData.find(p => p.id === projectId);

        if (!project) {
            document.getElementById('projectTitle').innerText = "Project Not Found";
            return;
        }

        // Populate header
        document.getElementById('projectTitle').innerText = project.title;
        document.getElementById('projectCategory').innerText = project.category;
        document.getElementById('projectShortDesc').innerText = project.shortDescription;

        // Populate body paragraphs
        document.getElementById('projectProblem').innerText = project.problem;
        document.getElementById('projectMethodology').innerText = project.methodology;
        document.getElementById('projectResults').innerText = project.results;
        document.getElementById('projectConclusion').innerText = project.conclusion;

        // Populate Gallery
        const gallery = document.getElementById('projectGallery');
        gallery.innerHTML = '';
        if (project.media.images && project.media.images.length > 0) {
            project.media.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = `Project image for ${project.title}`;
                gallery.appendChild(img);
            });
        } else {
            gallery.style.display = 'none';
        }

        // Handle PDF
        const pdfSection = document.getElementById('projectPdf');
        const pdfLink = document.getElementById('pdfLink');
        if (project.media.pdf) {
            pdfSection.style.display = 'flex';
            pdfLink.href = project.media.pdf;
        } else {
            pdfSection.style.display = 'none';
        }
        
        // Ensure fade-ins are visible
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        }, 300);
    }
});
