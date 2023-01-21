import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/widgets/MainLayout";
import MuxVideo from "@mux/mux-video-react";
import { useEffect, useState } from "react";
import axios from "axios";

const GenericPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [videoInfo, setVideoInfo] = useState<any>({});
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  let myVideo;

  useEffect(() => {
    (async () => {
      const resData = await axios.get("https://salesvids.applikuapp.com/api/get_single_video/" + id)
      setVideoInfo(resData.data);
    })();
  }, [id]);

  const play = () => {
    setIsVideoOn(true);
    myVideo = document.querySelector('#video-id-123456');
    myVideo?.addEventListener('loaded', function () {
      console.log('Loadede');

    })
    if (myVideo) {
      myVideo.play();
      myVideo.addEventListener('ended', function () {
        setIsEnded(true);
      });
      myVideo.onplaying = function () {
        setIsEnded(false);
      };
    }
  }

  return videoInfo['vid-exists'] ? (
    <div className='bg-black min-h-screen bg-[#111827] sm:p-12'>    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex items-center flex-col">

        <div className="relative inline-block md:w-2/3 md:basis-2/3 w-full">
          <div className="relative">
            <MuxVideo
              className="flex-auto  md:pr-8 content-center"
              style={{ height: "100%", maxWidth: "100%" }}
              playbackId={videoInfo["playback-id"]}
              id="video-id-123456"
              metadata={{
                video_id: "video-id-123456",
                video_title: "video.title",
                viewer_user_id: "video.user_id",
              }}
              streamType="on-demand"
              controls
            />
            <div onClick={play} className={`absolute cursor-pointer inset-0 m-auto w-max h-max ${isVideoOn ? 'hidden' : 'block'}`} >
              <svg fill="#ef4444" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>

            </div>

            <div className={`absolute inset-0 flex-col m-auto bg-[#000000de] flex items-center justify-center  ${isEnded ? 'block' : 'hidden'}`}>
              <div className="text-[#fff] text-center">
                <p className="text-4xl font-bold ">Video for @tom_salic</p>
                <p className="text-lg font-light">Created by <span className="font-bold ">{'Daniel Fazio (Cold Email Wizard)'}</span> </p>

                <button className="rounded-lg text-lg bg-[#ef4444] mt-8 font-semibold py-2 px-4">
                  200-300 appointments per month system
                </button>

              </div>
              <button onClick={play} className="bg-[#ffffff25] rounded-lg mt-12 text-[#fff] px-4 py-2">
                Watch Again
              </button>
            </div>


          </div>

          <div className="mt-12 w-[100%]">
            <div className="flex justify-between">
              <section className=" text-[#fff]">
                <p className="text-3xl text-[#fff]">Video for @tom_salic</p>
                <p className="text-gray-400">Created by Daniel Fazio (Cold Email Wizard)</p>
              </section>
              <section className="">
                <section className="p-4 bg-[#ef4444] cursor-pointer font-semibold  rounded-md text-[#fff]">
                  200-300 appointments per month system
                </section>
              </section>
            </div>
          </div>

        </div>
      </div>

    </>

    </div>) : (

    <div>    <>
      vid does not exist
    </></div>
  );

};

GenericPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default GenericPage;
