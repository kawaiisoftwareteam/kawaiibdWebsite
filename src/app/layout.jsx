import '../index.css';
import '../App.css';

export const metadata = {
  title: 'Kawaii Group | Japan-Bangladesh Joint Venture',
  description: 'Kawaii Group Bangladesh — creating opportunities through innovation, education, and strategic partnerships between Japan and Bangladesh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
