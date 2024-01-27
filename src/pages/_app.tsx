import Layout from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <Layout>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Component {...pageProps} />{" "}
      </SnackbarProvider>
    </Layout>
    // </AuthProvider>
  );
}
