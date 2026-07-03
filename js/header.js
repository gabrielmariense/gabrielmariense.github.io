function renderHeader() {
    const headerContainer = document.getElementById('site-header');

    if (!headerContainer || typeof SITE_CONFIG === 'undefined') return;

    const currentPage = document.body.dataset.page || 'inicio';

    const navLinks = SITE_CONFIG.navItems.map((item) => {
        const activeClass = item.page === currentPage ? ' class="active"' : '';
        return `<li><a href="${item.href}"${activeClass}>${item.label}</a></li>`;
    }).join('');

    headerContainer.innerHTML = `
        <header class="site-header">
            <nav class="navbar" aria-label="Menu principal">
                <a href="index.html" class="logo">${SITE_CONFIG.logo}</a>

                <ul class="nav-links" id="navLinks">
                    ${navLinks}
                </ul>

                <div class="nav-actions">
                    <button class="theme-toggle" id="themeToggle" type="button" aria-label="Alternar tema" title="Alternar tema">☀</button>

                    <button class="menu-toggle" id="menuToggle" type="button" aria-label="Abrir menu" aria-expanded="false" title="Abrir menu">
                        <svg class="menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    `;
}

renderHeader();