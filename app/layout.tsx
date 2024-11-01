import Footer from "@/src/components/main-footer/Footer";
import MainHeader from "@/src/components/main-header/Header";
import '../src/styles/globals.css';

type Props = {
    children: React.ReactNode;
}

const appContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };
  
  const mainContentStyle: React.CSSProperties = {
    paddingTop: '60px',
    paddingBottom: '40px', 
    flex: '1',
  };
  

export default function RootLayout({ children }: Props) {
    return (
        <html lang="pt-br">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div style={appContainerStyle}>
                    <MainHeader />
                        <main style={mainContentStyle}>
                            { children }
                        </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}