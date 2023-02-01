import MuxVideo from "@mux/mux-video-react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { MainLayout } from "../../components/widgets/MainLayout";

const GenericPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [videoInfo, setVideoInfo] = useState<any>({});
  const [isPlay, setIsPlay] = useState(false)
  const [isEnd, setIsEnd] = useState(false)
  const playbackId = videoInfo['playback-id'];
  const name = videoInfo['name'];
  const creator_name = videoInfo['creator-name'];

  const videoRef = useRef<any>()
  useEffect(() => {
    (async () => {
      const resData = await axios.get("https://salesvids.applikuapp.com/api/get_single_video/" + id)
      setVideoInfo(resData.data);
    })();
  }, [id]);

  const handlePlayVideo = () => {
    if (isPlay === false) {
      videoRef.current.play()
    }
    else {
      videoRef.current.pause()
    }
  }
  const handleReplay = () => {
    videoRef.current.pause()
    videoRef.current.currentTime = '0'
    videoRef.current.play()
  }

  return videoInfo['vid-exists'] ? (
    <div className='bg-gray-900 text-white h-screen m-auto'>
      <Head>
        <title>Video</title>
      </Head>
      <div className="min-h-screen">
        <div className="page-container mx-auto flex flex-col md:flex-row items-center content-start">
          <div className="flex-auto md:w-2/3 md:basis-2/3 w-full md:pr-8">
            <div className="relative bg-black sm:rounded-md sm:shadow-md group aspect-video">
              <div >
                <MuxVideo
                  ref={videoRef}
                  className='cursor-pointer w-full'
                  playbackId={videoInfo["playback-id"]}
                  metadata={{
                    video_id: "video-id-123456",
                    video_title: "video.title",
                    viewer_user_id: "video.user_id",
                  }}
                  streamType="on-demand"
                  preload='auto'
                  onPlaying={() => setIsPlay(true)}
                  onEnded={() => setIsEnd(true)}
                  onPause={() => setIsPlay(false)}
                  onPlay={() => setIsEnd(false)}
                  controls
                />

              </div>
              {/* Modal Video */}
              {
                isEnd && (
                  <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 sm:p-8 md:p-12 lg:p-16 transition transform duration-200 `}>

                    <div className="flex sm:flex-1">
                      <div className="m-auto flex flex-col items-center">
                        <h1 className="text-2xl sm:text-3xl font-bold">Video for @tom_salic</h1>
                        <h2 className="mt-2 text-gray-200">Created by
                          <strong>Daniel Fazio (Cold Email Wizard)
                          </strong>
                        </h2>
                        <a href="https://www.ClientAscension.com" target="_blank" className="mt-6 md:mt-8 rounded-md font-bold py-3 px-4 shadow-md flex items-center justify-center bg-red-500 transition hover:bg-red-400 active:bg-red-600 focus:outline-none focus-visible:ring-2 ring-red-500 ring-opacity-40" rel="noreferrer">
                          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="w-6 h-6 mr-3">
                            <g fill="none">
                              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              </path>
                            </g>
                          </svg> 200-300 appointments per month system</a>
                      </div>
                    </div>

                    <button className="mt-6 flex items-center font-semibold py-2 px-3 rounded-md bg-white bg-opacity-20 text-white text-opacity-90 transition hover:text-opacity-100 hover:bg-opacity-30 active:bg-opacity-20 focus:outline-none focus-visible:ring-2 ring-white ring-opacity-10" onClick={handleReplay}>
                      <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="mr-3 w-6 h-6">
                        <g fill="none">
                          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg> Watch again
                    </button>

                  </div>
                )
              }
              {
                (!isPlay && !isEnd) && (
                  <div className="absolute inset-0 cursor-pointer flex flex-col content-center transition transform duration-200">
                    <div className="m-auto sm:w-24 sm:h-24 w-20 h-20 bg-red-500 rounded-full shadow-lg transform group-hover:scale-105 transition" onClick={handlePlayVideo}>
                      <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="m-auto sm:w-24 sm:h-24 w-20 h-20">
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z" fill="currentColor" />

                      </svg>
                    </div>
                  </div>
                )
              }
              {/* Modal Video */}
            </div>
            {/* Bottom Button*/}
            <div className="mx-auto flex flex-col sm:flex-row items-center justify-between mt-10 gap-x-2 gap-y-8 px-4 sm:px-0">
              {/*  */}
              <div className="flex-1 w-full">
                <div className="text-2xl font-bold">Video for {name}
                </div>
                <div className="mt-1 text-gray-400">Created by
                  <strong>
                    {creator_name}
                  </strong>
                </div>
              </div>
              <div className="flex-1 sm:mt-0 flex justify-end items-center">
                <a href={playbackId} target="_blank" className={`rounded-md font-bold py-3 px-4 shadow-md transition focus:outline-none focus-visible:ring-2 ring-red-500 ring-opacity-40 ${isEnd ? 'bg-gray-500 hover:bg-gray-400 active:bg-gray-600 ring-gray-500' : 'bg-red-500 hover:bg-red-400 active:bg-red-600 ring-red-500'}`} rel="noreferrer">
                  <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="w-6 h-6 mr-3">
                    <g fill="none">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      </path>
                    </g>
                  </svg> 200-300 appointments per month system</a>
              </div>
            </div>
            {/* Bottom Button*/}
          </div>
        </div>
      </div >

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
