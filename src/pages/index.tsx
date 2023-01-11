import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { MainLayout } from "src/components/widgets/MainLayout";
import MuxVideo from "@mux/mux-video-react";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [videoInfo, setVideoInfo] = useState<any>({});

  useEffect(() => {
    (function () {
      axios
        .get("https://salesvids.applikuapp.com/api/get_single_video")
        .then((resData) => {
          setVideoInfo(resData);
        });
    })();
  }, []);

  console.log("videoInfo", videoInfo);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MuxVideo
        style={{ height: "100%", maxWidth: "100%" }}
        playbackId={videoInfo["playback-id"]}
        metadata={{
          video_id: "video-id-123456",
          video_title: "video.title",
          viewer_user_id: "video.user_id",
        }}
        streamType="on-demand"
        controls
      />
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
