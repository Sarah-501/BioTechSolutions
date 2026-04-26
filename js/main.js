document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if(mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    const heroContent = document.querySelector('.hero-content');
    const heroFloating = document.querySelector('.floating-elements');
    const heroInfoBar = document.querySelector('.hero-info-bar');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if(navbar) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;

            // Navbar style and Body state
            if (scrollPos > 10) {
                navbar.classList.add('scrolled');
                document.body.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
                document.body.classList.remove('scrolled');
            }

            // Hero foreground elements fade out
            if (heroContent) {
                const opacity = 1 - (scrollPos / 400); 
                const infoBarOpacity = 1 - (scrollPos / 150); // Fade info bar much faster
                const transform = scrollPos * 0.3;
                
                const elements = [
                    { el: heroContent, op: opacity, move: true },
                    { el: heroFloating, op: opacity },
                    { el: heroInfoBar, op: infoBarOpacity },
                    { el: scrollIndicator, op: infoBarOpacity }
                ];
                
                elements.forEach(item => {
                    if (item.el) {
                        const currentOp = item.op;
                        if (currentOp >= 0) {
                            item.el.style.opacity = currentOp;
                            if (item.move) item.el.style.transform = `translateY(${transform}px)`;
                        } else {
                            item.el.style.opacity = 0;
                            item.el.style.pointerEvents = 'none';
                        }
                    }
                });
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default if it's pointing to an element on the same page
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });

    // --- Contact Form Submission (Mock) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});
