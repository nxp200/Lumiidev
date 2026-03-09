// Shared navigation component
function loadNavigation(activePage) {
    const navHTML = `
    <nav class="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <a href="/" class="logo">
                    <span class="logo-icon">⚡</span>
                    <span class="logo-text">Lumiidev</span>
                </a>
                <div class="nav-menu" id="navMenu">
                    <a href="/" class="nav-link ${activePage === 'index' ? 'active' : ''}">Home</a>
                    <a href="services.html" class="nav-link ${activePage === 'services' ? 'active' : ''}">Services</a>
                    <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
                    <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
                </div>
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Initialize mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}
