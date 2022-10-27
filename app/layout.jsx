import './globals.css';
import Navigation from '../components/ui/Navigation';
// import Footer from '../components/ui/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next 13 App</title>
        <meta name="description" content="NextJs 13 App" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
