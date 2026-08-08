import './globals.css';

export const metadata = {
  metadataBase: new URL('https://aiusmandevops.shop'),
  title: {
    default: 'Muhammad Usman | DevOps Engineer',
    template: '%s | Muhammad Usman',
  },
  description: 'Muhammad Usman is a DevOps Engineer with 3+ years of experience in AWS, Azure, Kubernetes, Docker, Terraform and CI/CD automation. Available worldwide for remote DevOps, cloud infrastructure and site reliability engineering work.',
  keywords: [
    'Muhammad Usman',
    'DevOps Engineer',
    'AWS DevOps Engineer',
    'Azure DevOps Engineer',
    'Kubernetes Engineer',
    'CI/CD Automation',
    'Cloud Infrastructure Engineer',
    'Site Reliability Engineer',
    'Docker Kubernetes Terraform',
    'Remote DevOps Engineer',
  ],
  authors: [{ name: 'Muhammad Usman', url: 'https://aiusmandevops.shop' }],
  creator: 'Muhammad Usman',
  alternates: {
    canonical: 'https://aiusmandevops.shop',
  },
  openGraph: {
    title: 'Muhammad Usman | DevOps Engineer',
    description: 'DevOps Engineer specializing in AWS, Azure, Kubernetes, Docker, Terraform and CI/CD automation. Open to worldwide remote opportunities.',
    url: 'https://aiusmandevops.shop',
    siteName: 'Muhammad Usman - DevOps Engineer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usman | DevOps Engineer',
    description: 'DevOps Engineer specializing in AWS, Azure, Kubernetes, Docker, Terraform and CI/CD automation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
