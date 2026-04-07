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
    }
    : {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
      toggle: 'FR',
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
          <a href="/HenrySaber-Resume.pdf" download="HenrySaber-Resume.pdf" aria-label="Download resume">
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
            <p className="eyebrow">Software Engineering Student · Full-Stack Builder</p>
            <h1>Hey, I&apos;m Henry.</h1>
            <p className="hero-text">
              I build thoughtful web experiences, clean systems, and projects that solve real problems.
              This site brings together my resume, recent work, and the projects I’m most proud of.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="#contact">
                Get in Touch
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
            <div className="hero-badge">Resume website</div>
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
            <p className="eyebrow">About</p>
            <h2>A focused builder with an eye for presentation.</h2>
          </div>
          <div className="about-grid">
            <article className="panel intro-panel">
              <p>
                I’m a software engineering student at the University of Ottawa, and I like building products that are practical, polished, and easy to use. My work ranges from CI/CD automation and Docker workflows to accessible UI tools and small creative apps.
              </p>
              <p>
                I’m especially interested in full-stack development, deployment pipelines, and building interfaces that feel sharp without sacrificing usability.
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
            <p className="eyebrow">Experience</p>
            <h2>Selected roles.</h2>
            <p className="section-subtitle">Hover each company card for a quick snapshot.</p>
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
                    Visit site
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
            <p className="eyebrow">Projects</p>
            <h2>Selected work.</h2>
            <p className="section-subtitle">A mix of deployment pipelines, accessibility, and app prototypes.</p>
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
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something useful.</h2>
              <p>
                If you want the site adjusted to match your resume exactly, send the ReadMe link and I’ll wire it in.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button" href="mailto:henry@example.com">
                Email Me
              </a>
              <a className="button button-secondary" href="#home">
                Top
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;