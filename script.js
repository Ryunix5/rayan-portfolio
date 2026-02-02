// Intro Animation Sequence
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('mainContent');

    // After 4 seconds, hide intro and show main content
    setTimeout(() => {
        intro.classList.add('hidden');
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
    }, 4000);
});

// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Clickable headings that switch tabs
document.querySelectorAll('.clickable-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        const targetTab = heading.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to target tab button and content
        const targetButton = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        }
    });
});

// Learn more and See more links
document.querySelectorAll('.learn-more-link, .see-more-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTab = link.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to target tab button and content
        const targetButton = document.querySelector(`.tab-btn[data-tab="${targetTab}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        }
    });
});

// Showcase Category Filter
const categoryButtons = document.querySelectorAll('.category-btn');
const categoryContents = document.querySelectorAll('[data-category-content]');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetCategory = button.getAttribute('data-category');

        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Hide all category contents
        categoryContents.forEach(content => content.classList.remove('active'));

        // Show target category content
        const targetContent = document.querySelector(`[data-category-content="${targetCategory}"]`);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Music Player Collapse/Expand
const collapseBtn = document.getElementById('collapseBtn');
const musicPlayer = document.getElementById('musicPlayer');

if (collapseBtn && musicPlayer) {
    collapseBtn.addEventListener('click', () => {
        musicPlayer.classList.toggle('collapsed');
    });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to artwork cards
const artworkCards = document.querySelectorAll('.artwork-card');
artworkCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const placeholder = card.querySelector('.artwork-placeholder');
        placeholder.style.background = 'linear-gradient(135deg, rgba(74, 144, 226, 0.3), rgba(58, 79, 122, 0.6))';
    });

    card.addEventListener('mouseleave', (e) => {
        const placeholder = card.querySelector('.artwork-placeholder');
        placeholder.style.background = 'linear-gradient(135deg, rgba(58, 79, 122, 0.6), rgba(28, 37, 65, 0.8))';
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.artwork-card, .about-card, .social-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});
