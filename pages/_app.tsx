import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { AuthWrapper } from "../components/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <AuthWrapper>
      <Component {...pageProps} />
    </AuthWrapper>
  );
}

export default MyApp;
