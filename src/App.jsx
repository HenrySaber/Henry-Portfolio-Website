import { useEffect, useState } from 'react';
import cienaLogo from './assets/logos/ciena.svg';
import electionsCanadaLogo from './assets/logos/elections-canada.svg';
import nokiaLogo from './assets/logos/nokia.svg';
import solaceLogo from './assets/logos/solace.svg';
import accessibilityBanner from './assets/projects/accessibility-banner.svg';
import ehotelsVisual from './assets/projects/ehotels.svg';
import randomMlVisual from './assets/projects/ml-random.svg';
import finaiVisual from './assets/projects/finai-visual.svg';

const experience = [
  {
    company: 'Ciena',
    location: 'Ottawa, ON',
    title: 'Software Engineer Intern — QA',
    dates: 'May 2025 - Aug 2025',
    logo: cienaLogo,
    website: 'https://www.ciena.com',
    summary:
      'Built a remote QA automation platform for SSH-driven upgrades with faster validation, dynamic workflows, and Docker-based reliability.',
    stack: ['Flask', 'Paramiko', 'Docker'],
  },
  {
    company: 'Solace',
    location: 'Ottawa, ON',
    title: 'Software Engineer Intern',
    dates: 'Sept 2024 - Dec 2024',
    logo: solaceLogo,
    website: 'https://solace.com',
    summary:
      'Automated QA reporting and broker validation workflows while shipping internal tooling used by the broader test team.',
    stack: ['Python', 'Kafka', 'PubSub+'],
  },
  {
    company: 'Nokia',
    location: 'Ottawa, ON',
    title: 'Software Engineer Intern',
    dates: 'Jan 2024 - May 2024',
    logo: nokiaLogo,
    website: 'https://www.nokia.com',
    summary:
      'Ran end-to-end validation for MPLS resiliency features and worked with development teams to quickly isolate and resolve protocol issues.',
    stack: ['MPLS', 'Networking', 'Automation'],
  },
  {
    company: 'Elections Canada',
    location: 'Gatineau, QC',
    title: 'Software Developer Intern',
    dates: 'May 2023 - Dec 2023',
    logo: electionsCanadaLogo,
    website: 'https://www.elections.ca',
    summary:
      'Built interactive PCF form components and improved reliability through stronger JavaScript error handling and defect tracking.',
    stack: ['TypeScript', 'PCF', 'TFS'],
  },
];

const projects = [
  {
    title: 'FinAI',
    image: finaiVisual,
    imageAlt: 'FinAI portfolio risk management platform',
    description:
      'AI-assisted portfolio risk management platform with real-time analytics, scenario simulation, and ML-powered insights using PCA and KMeans clustering. Built full-stack React + Flask with automated CI/CD pipeline.',
    links: [{ label: 'GitHub', href: 'https://github.com/PortfolioRiskManagement/Portfolio_Risk_Management' }],
    tags: ['Full-Stack', 'ML', 'CI/CD', 'React', 'Flask'],
    className: 'project-card-gradient-1',
  },
  {
    title: 'House Segmentation, Preprocessing Pipeline',
    image: randomMlVisual,
    imageAlt: 'Abstract machine learning themed visual',
    description:
      'Preprocessed aerial data into clean binary masks and consistent train/validation/test sets for segmentation training.',
    tags: ['CV', 'Segmentation', 'Preprocessing'],
    className: 'project-card-gradient-2',
  },
  {
    title: 'Hungry AI',
    artTitle: 'Hungry.ai',
    icon: '🍔',
    description:
      'A bold hackathon-style product page with a clean visual identity and a direct launch path to the Devpost entry.',
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/hungry-ai' }],
    tags: ['Hackathon', 'Product'],
    className: 'project-card-gradient-3',
  },
  {
    title: 'Accessible Test Results',
    image: accessibilityBanner,
    imageAlt: 'Read-me.app style accessibility project banner',
    description:
      'A utility project focused on making test output easier to read and more accessible, with a direct link to the GitHub repository.',
    links: [{ label: 'GitHub', href: 'https://github.com/xsachax/accessible-test-results' }],
    tags: ['Accessibility', 'Testing'],
    className: 'project-card-gradient-4',
  },
  {
    title: 'eHotels',
    image: ehotelsVisual,
    imageAlt: 'Caesars-style hotel skyline at night',
    description: 'A full-stack hotel booking project with search, room browsing, and reservation workflows.',
    links: [{ label: 'GitHub', href: 'https://github.com/HenrySaber/eHotels' }],
    tags: ['Full-Stack', 'SQL', 'Web App'],
    className: 'project-card-gradient-5',
  },
  {
    title: 'MsgMe',
    icon: '🔐',
    description:
      'End-to-end encrypted messaging app built for HackTheHill 2023. Leveraged Gun.js for 256-bit encryption and real-time peer-to-peer messaging. Won top 10 projects with smooth UX and rapid network performance.',
    links: [
      { label: 'GitHub', href: 'https://github.com/HenrySaber/EncryptedMessages' },
      { label: 'Devpost', href: 'https://devpost.com/software/msgme' },
    ],
    tags: ['Hackathon', 'React', 'Gun.js', 'Encryption', 'P2P'],
    className: 'project-card-gradient-6',
  },
];

function App() {
  const [isFrench, setIsFrench] = useState(false);

  const navText = isFrench
    ? {
      about: 'A propos',
      projects: 'Projets',
      contact: 'Contact',
      resume: 'CV',
      toggle: 'EN',
      eyebrow_hero: 'Étudiant en Génie Logiciel · Constructeur Full-Stack',
      hero_greeting: 'Hey, je suis Henry.',
      hero_description: 'Je crée des expériences web réfléchies, des systèmes propres et des projets qui résolvent des problèmes réels. Ce site rassemble mon CV, mes travaux récents et les projets dont je suis le plus fier.',
      view_projects: 'Voir les Projets',
      get_in_touch: 'Me Contacter',
      resume_website: 'Site de curriculum vitae',
      about_title: 'A propos',
      about_subtitle: 'Un constructeur concentré avec un souci de la présentation.',
      about_p1: 'Je suis étudiant en génie logiciel à l\'Université d\'Ottawa, et j\'aime créer des produits pratiques, polis et faciles à utiliser. Mon travail va de l\'automatisation CI/CD et des flux de travail Docker aux outils UI accessibles et aux petites applications créatives.',
      about_p2: 'Je m\'intéresse particulièrement au développement full-stack, aux pipelines de déploiement et à la création d\'interfaces qui semblent nettes sans sacrifier l\'utilisabilité.',
      experience_title: 'Expérience',
      experience_subtitle: 'Rôles sélectionnés.',
      experience_hover: 'Survolez chaque carte d\'entreprise pour un aperçu rapide.',
      visit_site: 'Visiter le site',
      projects_title: 'Projets',
      projects_subtitle: 'Travail sélectionné.',
      projects_hover: 'Un mélange de pipelines de déploiement, d\'accessibilité et de prototypes d\'applications.',
      contact_title: 'Contact',
      contact_subtitle: 'Créons quelque chose d\'utile.',
      contact_description: 'Vous avez un projet en tête? Envie de collaborer? Écrivez-moi — j\'adorerais vous entendre.',
      email_me: 'M\'envoyer un e-mail',
      top: 'Haut',
    }
    : {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
      toggle: 'FR',
      eyebrow_hero: 'Software Engineering Student · Full-Stack Builder',
      hero_greeting: 'Hey, I\'m Henry.',
      hero_description: 'I build thoughtful web experiences, clean systems, and projects that solve real problems. This site brings together my resume, recent work, and the projects I\'m most proud of.',
      view_projects: 'View Projects',
      get_in_touch: 'Get in Touch',
      resume_website: 'Resume website',
      about_title: 'About',
      about_subtitle: 'A focused builder with an eye for presentation.',
      about_p1: 'I\'m a software engineering student at the University of Ottawa, and I like building products that are practical, polished, and easy to use. My work ranges from CI/CD automation and Docker workflows to accessible UI tools and small creative apps.',
      about_p2: 'I\'m especially interested in full-stack development, deployment pipelines, and building interfaces that feel sharp without sacrificing usability.',
      experience_title: 'Experience',
      experience_subtitle: 'Selected roles.',
      experience_hover: 'Hover each company card for a quick snapshot.',
      visit_site: 'Visit site',
      projects_title: 'Projects',
      projects_subtitle: 'Selected work.',
      projects_hover: 'A mix of deployment pipelines, accessibility, and app prototypes.',
      contact_title: 'Contact',
      contact_subtitle: 'Let\'s build something useful.',
      contact_description: 'Have a project in mind? Want to collaborate? Drop me a line — I\'d love to hear from you.',
      email_me: 'Email Me',
      top: 'Top',
    };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);



  return (
    <div className="page-shell" lang={isFrench ? 'fr' : 'en'}>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Henry Saber home">
          <span className="brand-mark">H</span>
          <span className="brand-text">Henry Saber</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#about">{navText.about}</a>
          <a href="#projects">{navText.projects}</a>
          <a href="#contact">{navText.contact}</a>
          <a
            href="https://drive.google.com/file/d/116DdGiJI4j1x98wTCRJroqQ5P6Usv9dG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume in Google Docs"
          >
            {navText.resume}
          </a>
          <button
            type="button"
            className="topnav-lang-toggle"
            onClick={() => setIsFrench((prev) => !prev)}
            aria-label={isFrench ? 'Switch language to English' : 'Passer en francais'}
          >
            {navText.toggle}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">{navText.eyebrow_hero}</p>
            <h1>{navText.hero_greeting}</h1>
            <p className="hero-text">
              {navText.hero_description}
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                {navText.view_projects}
              </a>
              <a className="button button-secondary" href="#contact">
                {navText.get_in_touch}
              </a>
            </div>
          </div>

          <div className="hero-card reveal">
            <div className="hero-card-top">
              <button
                type="button"
                className="dot-control dot dot-pink"
                aria-label="Close window preview"
              ></button>
              <button
                type="button"
                className="dot-control dot dot-orange"
                aria-label="Minimize window preview"
              ></button>
              <button
                type="button"
                className="dot-control dot dot-blue"
                aria-label="Expand window preview"
              ></button>
            </div>
            <div className="hero-badge">{navText.resume_website}</div>
            <div className="hero-visual">
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>
              <div className="orb orb-three"></div>
              <div className="portrait-card">
                <span className="portrait-initials">HS</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section about reveal" id="about">
          <div className="section-heading">
            <p className="eyebrow">{navText.about_title}</p>
            <h2>{navText.about_subtitle}</h2>
          </div>
          <div className="about-grid">
            <article className="panel intro-panel">
              <p>
                {navText.about_p1}
              </p>
              <p>
                {navText.about_p2}
              </p>
            </article>
            <article className="panel stats-panel">
              <div>
                <span className="stat-value">4+</span>
                <span className="stat-label">featured projects</span>
              </div>
              <div>
                <span className="stat-value">CI/CD</span>
                <span className="stat-label">Docker-first workflow</span>
              </div>
              <div>
                <span className="stat-value">Web</span>
                <span className="stat-label">front-end focused work</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section experience reveal" id="experience">
          <div className="section-heading center">
            <p className="eyebrow">{navText.experience_title}</p>
            <h2>{navText.experience_subtitle}</h2>
            <p className="section-subtitle">{navText.experience_hover}</p>
          </div>

          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card" key={item.company}>
                <div className="experience-brand-stage">
                  <img className="experience-logo" src={item.logo} alt={`${item.company} logo`} loading="lazy" />
                </div>

                <div className="experience-overlay">
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.title}</p>
                  <p className="experience-summary">{item.summary}</p>
                </div>

                <div className="experience-footer">
                  <a className="experience-link" href={item.website} target="_blank" rel="noreferrer" aria-label={`Visit ${item.company} website`}>
                    {navText.visit_site}
                  </a>
                  <div className="experience-tech-list">
                    {item.stack.map((tech) => (
                      <span className="experience-tech" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience-meta">
                  <span>{item.location}</span>
                  <span>{item.dates}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects reveal" id="projects">
          <div className="section-heading center">
            <p className="eyebrow">{navText.projects_title}</p>
            <h2>{navText.projects_subtitle}</h2>
            <p className="section-subtitle">{navText.projects_hover}</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.title}>
                <div className={`project-art ${project.className === 'project-card-gradient-1' ? 'project-art-ml' : ''} ${project.className === 'project-card-gradient-2' ? 'project-art-hungry' : ''} ${project.className === 'project-card-gradient-3' ? 'project-art-accessible' : ''} ${project.className === 'project-card-gradient-4' ? 'project-art-threadme' : ''}`}>
                  {project.image ? <img className="project-art-image" src={project.image} alt={project.imageAlt || `${project.title} visual`} loading="lazy" /> : null}
                  {project.label ? <div className="project-art-label">{project.label}</div> : null}
                  {project.badge ? <div className="project-art-badge">{project.badge}</div> : null}
                  {project.icon ? <div className="project-art-icon">{project.icon}</div> : null}
                  {project.artTitle ? (
                    <div className={`project-art-title ${project.title === 'Accessible Test Results' ? 'compact' : ''}`}>
                      {project.artTitle}
                    </div>
                  ) : null}
                  {project.art ? <div className="project-art-text">{project.art}</div> : null}
                  {project.subtitle ? <div className="project-art-text">{project.subtitle}</div> : null}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.details ? (
                    <ul className="project-details">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="project-links">
                    {project.links?.map((link) => (
                      <a className="project-link" href={link.href} key={link.label} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact reveal" id="contact">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">{navText.contact_title}</p>
              <h2>{navText.contact_subtitle}</h2>
              <p>
                {navText.contact_description}
              </p>
            </div>
            <div className="contact-actions">
              <a className="button" href="mailto:henry.saber026@gmail.com">
                {navText.email_me}
              </a>
              <a className="button button-secondary" href="#home">
                {navText.top}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;