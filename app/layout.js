import './globals.css';

export const metadata = {
  title: 'Muhammad Usman | DevOps Engineer',
  description: 'Portfolio of Muhammad Usman, a DevOps Engineer specializing in AWS, Azure, Kubernetes, Docker, Terraform and CI/CD automation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
