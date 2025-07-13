// Configurações do Portfólio - Isabella Rodrigues
// Personalize este arquivo para adaptar o portfólio às suas necessidades

const PORTFOLIO_CONFIG = {
    // Informações Pessoais
    personal: {
        name: "Isabella Rodrigues",
        title: "Técnica em Edificações",
        subtitle: "Transformando sonhos em estruturas sólidas",
        description: "Especialista em projetos arquitetônicos com foco em sustentabilidade e inovação.",
        location: "Belo Horizonte, MG",
        institution: "CEFET-MG"
    },

    // Informações de Contato
    contact: {
        email: "isabella.rodrigues@email.com",
        location: "Belo Horizonte, Minas Gerais",
        testEmail: "zzzgams@gmail.com" // E-mail para testes
    },

    // Redes Sociais
    social: {
        linkedin: "#",
        instagram: "#",
        github: "#",
        behance: "#" // Para portfólio de projetos
    },

    // Cores do Tema (tons pastéis e rosas)
    colors: {
        primary: "#ff8fa3",
        secondary: "#f4a6cd",
        accent: "#ffb3d1",
        lightPink: "#ffe5ec",
        softPurple: "#e8b4cb",
        mintGreen: "#b8e6b8",
        softBlue: "#b8d4e6",
        cream: "#fff5f5"
    },

    // Projetos do Curso Técnico em Edificações
    projects: [
        {
            title: "Projeto Arquitetônico Residencial",
            description: "Elaboração de plantas baixas, cortes e fachadas de residência unifamiliar com dimensionamento de ambientes e especificação de materiais.",
            tags: ["AutoCAD", "Desenho Técnico"],
            icon: "fa-drafting-compass",
            image: null,
            link: "#"
        },
        {
            title: "Dimensionamento Estrutural",
            description: "Cálculo de cargas, dimensionamento de vigas e pilares, e elaboração de detalhamento estrutural para edificação de pequeno porte.",
            tags: ["Cálculo Estrutural", "Concreto Armado"],
            icon: "fa-calculator",
            image: null,
            link: "#"
        },
        {
            title: "Instalações Elétricas",
            description: "Projeto de instalações elétricas prediais com dimensionamento de circuitos, quadros de distribuição e especificação de materiais.",
            tags: ["Instalações Elétricas", "Dimensionamento"],
            icon: "fa-bolt",
            image: null,
            link: "#"
        },
        {
            title: "Instalações Hidráulicas",
            description: "Projeto de instalações hidráulicas e sanitárias com dimensionamento de tubulações, reservatórios e especificação de materiais.",
            tags: ["Hidráulica", "Saneamento"],
            icon: "fa-tint",
            image: null,
            link: "#"
        },
        {
            title: "Orçamento e Cronograma",
            description: "Elaboração de orçamento detalhado, cronograma de execução e planejamento de obra com análise de custos e prazos.",
            tags: ["Orçamento", "Gestão de Obras"],
            icon: "fa-hard-hat",
            image: null,
            link: "#"
        },
        {
            title: "Sustentabilidade na Construção",
            description: "Projeto com foco em eficiência energética, uso de materiais sustentáveis e tecnologias eco-friendly para edificação.",
            tags: ["Sustentabilidade", "Eficiência Energética"],
            icon: "fa-leaf",
            image: null,
            link: "#"
        }
    ],

    // Certificados
    certificates: [
        {
            title: "Curso Técnico em Edificações",
            issuer: "CEFET-MG - Belo Horizonte",
            year: "Em andamento",
            icon: "fa-graduation-cap",
            link: "#"
        }
    ],

    // Habilidades Técnicas
    skills: [
        {
            name: "Projetos Arquitetônicos",
            description: "Desenvolvimento de plantas e projetos detalhados",
            icon: "fa-drafting-compass"
        },
        {
            name: "Cálculos Estruturais",
            description: "Análise e dimensionamento de estruturas",
            icon: "fa-calculator"
        },
        {
            name: "Gestão de Obras",
            description: "Coordenação e acompanhamento de construções",
            icon: "fa-hard-hat"
        },
        {
            name: "Sustentabilidade",
            description: "Projetos eco-friendly e eficiência energética",
            icon: "fa-leaf"
        }
    ],

    // Configurações de E-mail
    email: {
        service: "formsubmit", // "test", "emailjs", "formspree", "web3forms", "formsubmit", "netlify"
        formsubmit: {
            email: "zzzgams@gmail.com",
            endpoint: "https://formsubmit.co/ajax/zzzgams@gmail.com"
        }
    },

    // Configurações de Animações
    animations: {
        scrollReveal: true,
        parallax: true,
        particles: true,
        typingEffect: true,
        tiltEffect: true,
        confetti: true
    },

    // Configurações de Performance
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        minifyCSS: false, // true para produção
        minifyJS: false   // true para produção
    }
};

// Função para aplicar configurações
function applyConfig() {
    // Aplicar informações pessoais
    document.querySelector('.gradient-text').textContent = PORTFOLIO_CONFIG.personal.name;
    document.querySelector('.hero-subtitle').textContent = PORTFOLIO_CONFIG.personal.title;
    document.querySelector('.hero-description').textContent = PORTFOLIO_CONFIG.personal.description;
    
    // Aplicar informações de contato
    const contactCards = document.querySelectorAll('.contact-card p');
    if (contactCards.length >= 2) {
        contactCards[0].textContent = PORTFOLIO_CONFIG.contact.email;
        contactCards[1].textContent = PORTFOLIO_CONFIG.contact.location;
    }
    
    // Aplicar links das redes sociais
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks[0].href = PORTFOLIO_CONFIG.social.linkedin;
    socialLinks[1].href = PORTFOLIO_CONFIG.social.instagram;
    socialLinks[2].href = PORTFOLIO_CONFIG.social.github;
}

// Função para gerar projetos dinamicamente
function generateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    PORTFOLIO_CONFIG.projects.forEach(project => {
        const projectCard = `
            <div class="project-card reveal">
                <div class="project-image">
                    ${project.image ? 
                        `<img src="${project.image}" alt="${project.title}">` : 
                        `<i class="fas ${project.icon}"></i>`
                    }
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

// Função para gerar certificados dinamicamente
function generateCertificates() {
    const certificatesGrid = document.querySelector('.certificates-grid');
    if (!certificatesGrid) return;
    
    certificatesGrid.innerHTML = '';
    
    PORTFOLIO_CONFIG.certificates.forEach(cert => {
        const certificateCard = `
            <div class="certificate-card reveal">
                <div class="certificate-icon">
                    <i class="fas ${cert.icon}"></i>
                </div>
                <div class="certificate-content">
                    <h3>${cert.title}</h3>
                    <p>${cert.issuer}</p>
                    <span class="certificate-date">${cert.year}</span>
                </div>
            </div>
        `;
        certificatesGrid.innerHTML += certificateCard;
    });
}

// Função para gerar habilidades dinamicamente
function generateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    PORTFOLIO_CONFIG.skills.forEach(skill => {
        const skillCard = `
            <div class="skill-card reveal">
                <i class="fas ${skill.icon}"></i>
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
            </div>
        `;
        skillsGrid.innerHTML += skillCard;
    });
}

// Função para configurar e-mail
function configureEmail() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    switch (PORTFOLIO_CONFIG.email.service) {
        case 'emailjs':
            // Configurar EmailJS
            contactForm.setAttribute('data-emailjs', 'true');
            break;
        case 'formspree':
            // Configurar Formspree
            contactForm.action = `https://formspree.io/f/${PORTFOLIO_CONFIG.email.formspree.formId}`;
            contactForm.method = 'POST';
            break;
        case 'netlify':
            // Configurar Netlify Forms
            contactForm.setAttribute('data-netlify', 'true');
            contactForm.setAttribute('name', 'contact');
            break;
        default:
            // Configuração de teste
            break;
    }
}

// Inicializar configurações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    generateProjects();
    generateCertificates();
    generateSkills();
    configureEmail();
});

// Exportar configurações para uso global
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG; 