// KISRA Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initNavigation();
    initEventFilters();
    initButtonHandlers();
    
    // Set initial page
    showPage('home');
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const footerLinks = document.querySelectorAll('.footer-section a[data-page]');
    const heroButtons = document.querySelectorAll('.hero-buttons button[data-page]');
    
    // Add click handlers to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
                updateActiveNavLink(this);
            }
        });
    });
    
    // Add click handlers to footer links
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
                updateActiveNavLink(document.querySelector(`.nav-link[data-page="${page}"]`));
            }
        });
    });
    
    // Add click handlers to hero buttons
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
                updateActiveNavLink(document.querySelector(`.nav-link[data-page="${page}"]`));
            }
        });
    });
}

// Show specific page and update breadcrumb
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update breadcrumb
    updateBreadcrumb(pageId);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Update breadcrumb text
function updateBreadcrumb(pageId) {
    const breadcrumbText = document.getElementById('breadcrumb-text');
    const pageNames = {
        'home': 'Home',
        'about': 'About Us',
        'programs': 'Programs',
        'partners': 'Partners',
        'events': 'Events',
        'get-involved': 'Get Involved',
        'contact': 'Contact'
    };
    
    if (breadcrumbText && pageNames[pageId]) {
        breadcrumbText.textContent = pageNames[pageId];
    }
}

// Event filtering functionality
function initEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter events
            filterEvents(filter);
        });
    });
}

// Filter events based on category
function filterEvents(category) {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
    
    // Add animation effect
    setTimeout(() => {
        const visibleCards = document.querySelectorAll('.event-card:not(.hidden)');
        visibleCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Initialize button handlers
function initButtonHandlers() {
    // Learn More buttons
    const learnMoreButtons = document.querySelectorAll('.btn--outline');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showAlert('Learn More', 'This would typically link to detailed partner information or open a modal with more details.');
        });
    });
    
    // Register Now buttons
    const registerButtons = document.querySelectorAll('.btn--primary');
    registerButtons.forEach(button => {
        if (button.textContent.trim() === 'Register Now') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showAlert('Registration', 'This would typically open a registration form or redirect to an event registration page.');
            });
        }
    });
    
    // Learn More links in events
    const learnMoreLinks = document.querySelectorAll('.learn-more-link');
    learnMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showAlert('Event Details', 'This would typically show detailed event information or redirect to a dedicated event page.');
        });
    });
}

// Utility function to show alerts (in a real app, this would be a modal)
function showAlert(title, message) {
    alert(`${title}\n\n${message}`);
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add loading animation for page transitions
function addLoadingEffect() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transition = 'opacity 0.3s ease-in-out';
    });
}

// Initialize hover effects for cards
function initCardEffects() {
    const cards = document.querySelectorAll('.partner-card, .event-card, .heal-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Search functionality (for future enhancement)
function initSearch() {
    // This could be expanded to include search functionality
    // across partners and events
}

// Mobile menu toggle (if needed for smaller screens)
function initMobileMenu() {
    // This could be expanded for mobile hamburger menu functionality
    // if the navigation becomes too crowded on mobile devices
}

// Analytics tracking (placeholder for future implementation)
function trackPageView(pageName) {
    // This would integrate with analytics services
    console.log(`Page view tracked: ${pageName}`);
}

// Form validation (for future contact forms)
function validateForm(formElement) {
    // This would handle form validation for contact or registration forms
    return true;
}

// Accessibility enhancements
function initAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Ensure proper tab order and focus management
            const focusableElements = document.querySelectorAll(
                'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            // Additional keyboard navigation logic can be added here
        }
    });
    
    // Add ARIA labels and descriptions where needed
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addLoadingEffect();
    initCardEffects();
    initAccessibility();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        showPage(event.state.page);
        updateActiveNavLink(document.querySelector(`.nav-link[data-page="${event.state.page}"]`));
    }
});

// Add page state to browser history
function addToHistory(pageId) {
    const state = { page: pageId };
    const title = `KISRA - ${pageId.charAt(0).toUpperCase() + pageId.slice(1)}`;
    const url = `#${pageId}`;
    
    history.pushState(state, title, url);
}

// Enhanced showPage function with history management
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    addToHistory(pageId);
    trackPageView(pageId);
};

// Initialize page based on URL hash
function initPageFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'about', 'programs', 'partners', 'events', 'get-involved', 'contact'].includes(hash)) {
        showPage(hash);
        updateActiveNavLink(document.querySelector(`.nav-link[data-page="${hash}"]`));
    } else {
        showPage('home');
    }
}

// Call on page load
window.addEventListener('load', initPageFromHash);