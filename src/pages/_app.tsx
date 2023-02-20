import type { FC } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Toaster } from "react-hot-toast";
import nProgress from "nprogress";
import type { EmotionCache } from "@emotion/cache";
import "../../styles/global.css";
import { createEmotionCache } from "src/utils/create-emotion-cache";
import { CacheProvider } from "@emotion/react";

type EnhancedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const clientSideEmotionCache = createEmotionCache();

const App: FC<EnhancedAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Toaster position="top-center" />
      <Head>
        <title>All Your Video Hosted</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </CacheProvider>
  );
};

export default App;
