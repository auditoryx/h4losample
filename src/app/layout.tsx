import '../styles/globals.css';

export const metadata = {
  title: 'H4LO®',
  description: 'Elevated essentials for visionaries.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
