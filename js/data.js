// Dados principais do site.
// Edite este arquivo para alterar logo, menu, contatos e projetos sem mexer nas páginas HTML.

const SITE_CONFIG = {
    owner: 'Gabriel Tobias Mariense',
    logo: 'Gabriel <span>"GMErebos"</span> Mariense',
    year: '2026',
    navItems: [
        { page: 'inicio', label: 'Início', href: 'index.html' },
        { page: 'sobre', label: 'Sobre', href: 'sobre.html' },
        { page: 'projetos', label: 'Projetos', href: 'projetos.html' },
        { page: 'contato', label: 'Contato', href: 'contato.html' }
    ]
};

const CONTACT_LINKS = [
    {
        label: 'E-mail',
        description: 'gabriel.tobsec@gmail.com',
        href: 'mailto:gabriel.tobsec@gmail.com'
    },
    {
        label: 'LinkedIn',
        description: 'Perfil profissional',
        href: 'https://www.linkedin.com/in/gabrielmariense/'
    },
    {
        label: 'GitHub',
        description: 'Projetos e códigos',
        href: 'https://github.com/gabrielmariense'
    },
    {
        label: 'Hack The Box',
        description: 'Perfil GMErebbos',
        href: 'https://app.hackthebox.com/users/2351567'
    },
    {
        label: 'Boot.dev',
        description: 'Estudos de programação',
        href: 'https://www.boot.dev/u/gabrielmariense'
    }
];

const PROJECTS = [
    {
        title: 'Hash Pipeline Tool',
        status: 'Python | Cybersecurity',
        categories: 'python cybersecurity',
        description: [
            'Ferramenta em Python para análise e quebra de hashes em cadeias não convencionais de transformação e encoding de dados.',
            'Projeto utilizado para estudo prático de hashing, automação de scripts, leitura de arquivos, aplicação de funções encadeadas e comparação de resultados.'
        ],
        links: [
            { label: 'Ver projeto', href: 'https://github.com/gabrielmariense/hash-pipeline-cracker', external: true }
        ]
    },
    {
        title: 'VNC Menu',
        status: 'Python | Automação',
        categories: 'python automacao',
        description: [
            'Ferramenta em Python com interface gráfica para organizar e abrir conexões VNC de forma rápida e padronizada.',
            'O projeto trabalha com gerenciamento de hosts, credenciais, fluxo de suporte técnico e armazenamento seguro utilizando Windows DPAPI.'
        ],
        links: [
            { label: 'Ver projeto', href: 'https://github.com/gabrielmariense/VNC-Menu', external: true }
        ]
    },
    {
        title: 'Labs de Pentest - DESEC Security',
        status: 'Pentest | Labs',
        categories: 'cybersecurity labs',
        description: [
            'Notion com anotações, comandos, evidências e aprendizados práticos de ambientes controlados de Pentest.',
            'O material cobre enumeração web, network, Linux, Windows, Active Directory, exploração e pós-exploração.'
        ],
        links: [
            { label: 'Ver anotações', href: 'https://www.notion.so/gabrieltobiasm/261e0ce28ee0809198c6c75a3a55ff32?v=261e0ce28ee08168a384000cba82faaa', external: true }
        ]
    },
    {
        title: 'Hack The Box e Boot.dev',
        status: 'Labs | Plataformas',
        categories: 'cybersecurity labs',
        description: [
            'Estudos contínuos em plataformas práticas para reforçar fundamentos de segurança, lógica de programação, exploração controlada e desenvolvimento técnico.',
            'Perfis utilizados para acompanhar evolução técnica e prática em cybersecurity e programação.'
        ],
        links: [
            { label: 'Ver perfis', href: 'contato.html', external: false }
        ]
    }
];
