import './globals.css';

export const metadata = {
  title: 'Rick and Morty Characters',
  description: 'Visualización de los 20 primeros personajes de Rick y Morty',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Alejandro Imbachi Escalante</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>© 2024 Rick and Morty trabajo en clase</p>
        </footer>
      </body>
    </html>
  );
}
