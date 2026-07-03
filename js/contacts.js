function renderContactLinks() {
    const contactLinks = document.getElementById('contactLinks');

    if (!contactLinks || typeof CONTACT_LINKS === 'undefined') return;

    contactLinks.innerHTML = CONTACT_LINKS.map((contact) => {
        const isExternal = contact.href.startsWith('http');
        const externalAttrs = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

        return `
            <a href="${contact.href}"${externalAttrs} class="contact-link-card">
                <span class="contact-link-title">${contact.label}</span>
                <span class="contact-link-desc">${contact.description}</span>
            </a>
        `;
    }).join('');
}

renderContactLinks();
