import { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import Router from "next/router";
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <Navbar scroll={scroll} />
      <Component setScroll={setScroll} {...pageProps} />
    </>
  );
}

export default MyApp;
