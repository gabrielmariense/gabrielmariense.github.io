function renderProjects() {
    const projectsList = document.getElementById('projectsList');

    if (!projectsList || typeof PROJECTS === 'undefined') return;

    projectsList.innerHTML = PROJECTS.map((project) => {
        const paragraphs = project.description.map((text) => `<p>${text}</p>`).join('');
        const links = project.links.map((link) => {
            const externalAttrs = link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
            return `<a href="${link.href}"${externalAttrs} class="card-link">${link.label}</a>`;
        }).join('');

        return `
            <article class="card project-card" data-category="${project.categories}">
                <span class="project-status">${project.status}</span>
                <h2>${project.title}</h2>
                ${paragraphs}
                ${links}
            </article>
        `;
    }).join('');
}

renderProjects();
