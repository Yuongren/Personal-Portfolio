    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === "#" || targetId === "") return;
            const targetElem = document.querySelector(targetId);
            if(targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Resume download simulation (fake download)
    const resumeBtn = document.querySelector('.btn-primary[href="#contact"]');
    if(resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // simulate file download by creating a dummy text file or just alert
            const link = document.createElement('a');
            link.href = 'data:application/octet-stream,' + encodeURIComponent('Alex_Rivera_Resume_2025.pdf (demo)');
            link.download = 'Alex_Rivera_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('Demo resume download started! (Sample file)');
        });
    }

    // Simple contact form handling (no backend)
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const msg = document.getElementById('message').value.trim();
            if(!name || !email || !msg) {
                feedback.innerHTML = '<span style="color:#e11d48;"><i class="fas fa-exclamation-circle"></i> Please fill all fields.</span>';
                feedback.style.color = "#e11d48";
                return;
            }
            if(!email.includes('@') || !email.includes('.')) {
                feedback.innerHTML = '<span style="color:#e11d48;"><i class="fas fa-envelope-open-text"></i> Enter a valid email.</span>';
                return;
            }
            feedback.innerHTML = '<span style="color:#16a34a;"><i class="fas fa-check-circle"></i> Thanks! I\'ll get back soon (demo).</span>';
            contactForm.reset();
            setTimeout(() => {
                feedback.innerHTML = '';
            }, 4000);
        });
    }

    // additional nav active highlight (simple)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = '#1f2937';
            if(link.getAttribute('href') === `#${current}`) {
                link.style.color = '#2563eb';
            }
        });
    });