import { AppProps } from "next/app";
import { UserProvider } from "../context/UserID";

function Application({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default Application;
