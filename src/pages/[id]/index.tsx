import MuxVideo from "@mux/mux-video-react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/widgets/MainLayout";

const GenericPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [videoInfo, setVideoInfo] = useState<any>({});

  useEffect(() => {
    (async () => {
      const resData = await axios.get("https://salesvids.applikuapp.com/api/get_single_video/" + id)
      setVideoInfo(resData.data);
    })();
  }, [id]);

  return videoInfo['vid-exists'] ? (
    <div className='bg-black'>    <>
      <Head>
        <title>Video</title>
      </Head>
      <div className="">
        <MuxVideo
          style={{ maxWidth: "100%" }}
          playbackId={videoInfo["playback-id"]}
          metadata={{
            video_id: "video-id-123456",
            video_title: "video.title",
            viewer_user_id: "video.user_id",
          }}
          streamType="on-demand"
          controls
        />
      </div>
    </>
      <div>
        <div>
          {/* <div className='bg-gray-200'>Video for </div>
        <div className='bg-gray-200'>Tom Sallic </div> */}
        </div>
        {/* <div className='bg-gray-200'><button> Buy Now </button></div> */}
      </div>
    </div>) : (

    <div>    <>
    </></div>
  );

};

GenericPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default GenericPage;
