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
      <Head>
        <title>Brick</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Toaster position="top-center" />
      {getLayout(<Component {...pageProps} />)}
    </CacheProvider>
  );
};

export default App;
