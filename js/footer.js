function renderFooter() {
    const footerContainer = document.getElementById('site-footer');

    if (!footerContainer || typeof SITE_CONFIG === 'undefined') return;

    footerContainer.innerHTML = `
        <footer class="site-footer">
            <p>&copy; ${SITE_CONFIG.year} ${SITE_CONFIG.owner}. Todos os direitos reservados.</p>
        </footer>
    `;
}

renderFooter();
