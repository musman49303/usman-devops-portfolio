import Reveal from './components/Reveal';
import TiltCard from './components/TiltCard';

const experience = [
  {
    role: 'DevOps Engineer',
    company: 'Waxon IT Solution',
    period: '10/2025 - Present',
    points: [
      'Designed and implemented a CI/CD pipeline using GitHub Actions for web applications and game services, automating build, test, security scanning, and deployment across Dev, QA, Staging and Production.',
      'Built environment-specific deployment workflows with reusable GitHub Actions and secrets management for secure, consistent releases of live game and web platforms.',
      'Integrated AWS RDS (PostgreSQL) with automated schema migrations, version control, backup validation and rollback strategies.',
      'Implemented Amazon S3 for game assets, web static content, and automated artifact storage and versioning within CI/CD workflows.',
      'Integrated PlayFab services for player authentication, profiles, leaderboards, achievements and live game configuration.',
      'Containerized web and game backend services with Docker, automating image builds and publishing to ECR and GHCR.',
      'Deployed containerized workloads to Kubernetes (EKS/AKS) using Helm, blue-green and rolling update strategies, with automated health checks and rollback on failure.',
      'Implemented Infrastructure as Code with Terraform, provisioning RDS PostgreSQL, S3 buckets, networking (VPC, subnets, security groups) and Kubernetes clusters.',
      'Integrated static code analysis, dependency vulnerability scanning (Snyk/Trivy) and secrets scanning into the CI/CD pipeline.',
      'Enabled observability and live-ops monitoring using Prometheus, Grafana, CloudWatch, Azure Monitor and a centralized ELK Stack.',
      'Implemented feature flagging and remote configuration workflows to safely release new game features without redeployment.',
      'Designed pipelines supporting high availability and scalability during live events and traffic spikes, collaborating closely with game developers, backend engineers and QA teams.',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'United Software & Technologies International',
    period: '01/2024 - 09/2025',
    points: [
      'Designed and maintained CI/CD pipelines using Azure DevOps for fast and reliable deployments.',
      'Containerized applications using Docker and managed them through Kubernetes.',
      'Deployed and managed Node.js, Next.js and .NET applications in production, backed by SQL Server and PostgreSQL databases.',
      'Managed physical data center infrastructure, including physical web, application and database servers.',
      'Administered Fortinet firewalls and FortiAnalyzer for network security, traffic monitoring and log analysis.',
      'Monitored on-premise data centers using Prometheus and Grafana, applying cloud-based monitoring strategies.',
      'Collaborated closely with development teams to roll out releases smoothly and handle infrastructure-level updates.',
      'Integrated version control with deployment processes for better visibility and rollback capabilities.',
    ],
  },
  {
    role: 'System Administrator',
    company: 'United Software & Technologies International',
    period: '02/2023 - 01/2024',
    points: [
      'Managed data backup solutions using Network Attached Storage (NAS), ensuring data integrity and availability.',
      'Implemented backup schedules and retention policies, conducting regular backups and data recovery tests.',
      'Coordinated and executed release updates on live servers, minimizing downtime and ensuring seamless transitions.',
      'Monitored data center infrastructure including servers, storage and networking equipment for optimal performance.',
      'Utilized Nagios and Zabbix to proactively identify and address issues, minimizing downtime and maximizing uptime.',
      'Documented system configurations, procedures and troubleshooting steps to ensure consistency and knowledge transfer.',
    ],
  },
  {
    role: 'Intern',
    company: 'Northbay Solutions',
    period: '09/2022 - 12/2022',
    points: [
      'Gained hands-on experience with EC2, VPC, CloudWatch, CloudTrail, DynamoDB, Site-to-Site VPN, RDS, CloudFront and Route 53.',
      'Defined cloud architecture for both hybrid and non-hybrid cloud solutions.',
      'Applied a sound understanding of standard networking protocols, virtual networks and load balancing.',
      'Provided solution designs to meet system strategies, capabilities and technologies for current and future business requirements.',
    ],
  },
];

const skillGroups = [
  { category: 'Cloud Platforms', items: ['AWS', 'Azure'] },
  { category: 'DevOps & Automation', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
  { category: 'Application Deployment', items: ['Node.js', 'Next.js', '.NET', 'SQL Server', 'PostgreSQL'] },
  { category: 'Data Center & Physical Infrastructure', items: ['Physical Web Servers', 'Application Servers', 'Database Servers', 'Rack Configuration'] },
  { category: 'Network Security', items: ['Fortinet Firewall', 'FortiAnalyzer', 'IAM', 'SSH', 'Firewalls'] },
  { category: 'Monitoring & Logging', items: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Stack'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Backup & Recovery'] },
  { category: 'OS & Scripting', items: ['Linux (Ubuntu)', 'Windows Server', 'Python (basic)'] },
  { category: 'Networking', items: ['VPN', 'DNS', 'Load Balancers'] },
];

const certifications = [
  'Microsoft Certified: Azure Developer Associate (AZ-204)',
  'Microsoft Certified: DevOps Engineer Expert (AZ-400)',
];

const projects = [
  {
    title: 'Centralized Data Center Setup',
    description: 'Built centralized physical infrastructure including rack-mounted servers, secure access controls and backup systems, ensuring high availability and streamlined hardware management.',
  },
  {
    title: 'Monitoring Stack Deployment',
    description: 'Set up and maintained a full monitoring solution using Prometheus and Grafana for real-time tracking of on-premises infrastructure, with alerts and dashboards to proactively identify issues.',
  },
  {
    title: 'Cloud Migration Support',
    description: 'Contributed to migrating applications and services from on-premises servers to AWS using EC2, S3 and IAM, ensuring a secure and seamless transition with minimal downtime.',
  },
];

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Usman',
  jobTitle: 'DevOps Engineer',
  url: 'https://aiusmandevops.shop',
  email: 'mailto:m.usman49303@gmail.com',
  telephone: '+923407136303',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://linkedin.com/in/muhammad-usman-devops-engineer',
    'https://github.com/musman49303',
  ],
  knowsAbout: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'DevOps', 'Site Reliability Engineering', 'Fortinet Firewall', 'Node.js', 'Next.js', '.NET', 'SQL Server', 'PostgreSQL'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Muhammad Usman - DevOps Engineer',
  url: 'https://aiusmandevops.shop',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <nav className="nav">
        <div className="nav-inner">
          <span className="logo">Muhammad Usman</span>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-3d hero-3d-a" aria-hidden="true">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
        <div className="hero-3d hero-3d-b" aria-hidden="true">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
        <div className="container">
          <p className="hero-eyebrow">DevOps Engineer</p>
          <h1>Muhammad Usman</h1>
          <p className="role">Cloud Infrastructure - CI/CD Automation - Kubernetes - Site Reliability</p>
          <div className="hero-contact">
            <span>Lahore, Pakistan</span>
            <span>m.usman49303@gmail.com</span>
            <span>+92 340 7136303</span>
            <a href="https://wa.me/923407136303" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://github.com/musman49303" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/muhammad-usman-devops-engineer" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            <a className="btn btn-secondary" href="#experience">View experience</a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <Reveal>
            <p className="section-title">About</p>
            <h2 className="section-heading">Profile</h2>
            <p className="about-text">
              Skilled DevOps Engineer with 3+ years of experience in cloud solutions, data center management and DevOps tooling. Strong background in AWS, Azure, Docker, Kubernetes and system monitoring, with a proven track record of managing infrastructure, improving deployment processes and strengthening system security and performance. Experienced in physical data center operations, including physical web, application and database servers, as well as network security using Fortinet Firewall and FortiAnalyzer, and deploying Node.js, Next.js and .NET applications backed by SQL Server and PostgreSQL.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <Reveal>
            <p className="section-title">Career</p>
            <h2 className="section-heading">Professional Experience</h2>
          </Reveal>
          <div className="timeline">
            {experience.map((job) => (
              <Reveal key={job.company + job.period}>
                <TiltCard className="timeline-item">
                  <div className="timeline-head">
                    <div>
                      <div className="timeline-role">{job.role}</div>
                      <div className="timeline-company">{job.company}</div>
                    </div>
                    <div className="timeline-period">{job.period}</div>
                  </div>
                  <ul>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <Reveal>
            <p className="section-title">Toolbox</p>
            <h2 className="section-heading">Skills</h2>
          </Reveal>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <Reveal key={group.category}>
                <TiltCard className="skill-card">
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>{item}</span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="container">
          <Reveal>
            <p className="section-title">Credentials</p>
            <h2 className="section-heading">Certifications & Education</h2>
          </Reveal>
          <div className="cards-2">
            <Reveal>
              <TiltCard className="info-card">
                <h3>Certifications</h3>
                {certifications.map((cert) => (
                  <p key={cert}>{cert}</p>
                ))}
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="info-card">
                <h3>Education</h3>
                <p><strong>BS in Computer Science</strong></p>
                <p>The Islamia University Bahawalpur</p>
                <p>02/2018 - 02/2022, CGPA 3.63</p>
                <p>Bahawalpur, Pakistan</p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <Reveal>
            <p className="section-title">Highlights</p>
            <h2 className="section-heading">Projects</h2>
          </Reveal>
          <div className="projects-grid">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <TiltCard className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <Reveal>
            <p className="section-title">Get in touch</p>
            <h2 className="section-heading">Contact</h2>
          </Reveal>
          <div className="contact-grid">
            <Reveal>
              <TiltCard className="contact-card">
                <div className="label">Email</div>
                <div className="value">m.usman49303@gmail.com</div>
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="contact-card">
                <div className="label">Phone</div>
                <div className="value">+92 340 7136303</div>
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="contact-card">
                <div className="label">WhatsApp</div>
                <div className="value"><a href="https://wa.me/923407136303" target="_blank" rel="noreferrer">Chat Now</a></div>
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="contact-card">
                <div className="label">GitHub</div>
                <div className="value"><a href="https://github.com/musman49303" target="_blank" rel="noreferrer">musman49303</a></div>
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="contact-card">
                <div className="label">Location</div>
                <div className="value">Lahore, Pakistan</div>
              </TiltCard>
            </Reveal>
            <Reveal>
              <TiltCard className="contact-card">
                <div className="label">LinkedIn</div>
                <div className="value"><a href="https://linkedin.com/in/muhammad-usman-devops-engineer" target="_blank" rel="noreferrer">Profile</a></div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          (c) {new Date().getFullYear()} Muhammad Usman. Built with Next.js, deployed on Vercel.
        </div>
      </footer>
    </>
  );
}
