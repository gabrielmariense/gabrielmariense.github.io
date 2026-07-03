// Tema claro/escuro
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

updateThemeButton();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');

        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('portfolio-theme', currentTheme);

        updateThemeButton();
    });
}

function updateThemeButton() {
    if (!themeToggle) return;

    const isLight = document.body.classList.contains('light-theme');
    themeToggle.textContent = isLight ? '🌙' : '☀';
    themeToggle.setAttribute('aria-label', isLight ? 'Alternar para modo escuro' : 'Alternar para modo claro');
}

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

function closeMobileMenu() {
    if (!navLinks || !menuToggle) return;

    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();

        const isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', closeMobileMenu);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMobileMenu();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 820) closeMobileMenu();
    });
}

// Filtro de projetos
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach((card) => {
            const categories = card.dataset.category;
            const shouldShow = selectedFilter === 'todos' || categories.includes(selectedFilter);

            card.style.display = shouldShow ? 'block' : 'none';
        });
    });
});

// Validação do formulário de contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const formStatus = document.getElementById('formStatus');

        let isValid = true;

        clearErrors();

        if (name.value.trim().length < 3) {
            showError(name, 'Digite um nome com pelo menos 3 caracteres.');
            isValid = false;
        }

        if (!validateEmail(email.value.trim())) {
            showError(email, 'Digite um e-mail válido.');
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, 'Digite uma mensagem com pelo menos 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            formStatus.textContent = 'Mensagem validada com sucesso. Nesta versão inicial, o envio ainda não está conectado a um backend.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            formStatus.textContent = 'Corrija os campos indicados antes de enviar.';
            formStatus.className = 'form-status error';
        }
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    errorMessage.textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    const formStatus = document.getElementById('formStatus');

    errors.forEach((error) => {
        error.textContent = '';
    });

    if (formStatus) {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const downloadDropdown = document.querySelector(".download-dropdown");
const downloadToggle = document.querySelector(".download-toggle");

if (downloadDropdown && downloadToggle) {
    downloadToggle.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = downloadDropdown.classList.toggle("open");
        downloadToggle.setAttribute("aria-expanded", isOpen);
    });

    document.addEventListener("click", function (event) {
        if (!downloadDropdown.contains(event.target)) {
            downloadDropdown.classList.remove("open");
            downloadToggle.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            downloadDropdown.classList.remove("open");
            downloadToggle.setAttribute("aria-expanded", "false");
        }
    });
}