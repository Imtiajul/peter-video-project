import MuxVideo from "@mux/mux-video-react";
import axios from 'axios';
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

  const videoRef = useRef(null)

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
  console.log(videoRef)
  const handleReplay = () => {
    videoRef.current.pause()
    videoRef.current.currentTime = '0'
    videoRef.current.play()
  }

  return (
    <div className='bg-black h-screen m-auto'>
      <Head>
        <title>Video</title>
      </Head>
      <div className="w-full box-border">
        <div className="w-full">
          <span>
            <div className="flex flex-col relative w-full m-auto">
              <div className="flex flex-col w-full h-full items-center">
                <div className="relative w-full h-full block ">
                  <div className="relative flex flex-col items-center w-full">
                    <div className={`z-[999] bg-black/75 h-full md:w-2/3 w-full m-auto absolute ${isEnd ? '' : 'hidden'}`}>
                      <div className="relative bottom-[initial] left-[initial] flex flex-col h-[380px] justify-center items-center w-full m-auto" style={{ WebkitBoxPack: 'center', WebkitBoxPack: 'center' }}>
                        <div className=" max-h-full min-h-0 overflow-auto py-2 transition-all w-full flex flex-row justify-center">
                          <p className='text-center text-white font-medium text-lg px-2'>Video for </p>
                          <p className='text-center text-white font-medium text-lg px-2'>Tom Sallic </p>
                        </div>
                        <p className='text-center text-white font-medium text-lg w-1/3 bg-red-500 '>Created By Name Here </p>

                        <button aria-label="Play" title="Play" className='cursor-pointer px-4 text-white font-medium text-base bg-gray-400/25 mt-16 rounded-lg' type='button' onClick={handleReplay}>
                          Watch Again
                        </button>
                      </div>
                    </div>
                    <MuxVideo
                      ref={videoRef}
                      className='cursor-pointer md:w-1/2 w-full'
                      playbackId='uNbxnGLKJ00yfbijDO8COxTOyVKT01xpxW'
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
                    <div className="w-[48px] h-[48px] absolute sm:bottom-1/2 bottom-[45%] left-auto  transition-all cursor-pointer">
                      <button aria-label="Play" title="Play" className='w-full' type='button' onClick={handlePlayVideo}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="4 4 16 16" className={`lg:transform-none scale-50 md:scale-75 ${isPlay ? 'opacity-0' : ''}`} >
                          <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                      </button>
                    </div>



                  </div>
                </div>

              </div>
            </div>
          </span>
        </div>
      </div >
      <div className='flex justify-between items-stretch gap-9 m-9'>
        <div className='w-1/2 flex flex-row justify-evenly'>
          <div className='bg-gray-200 text-center w-1/3'>Video for </div>
          <div className='bg-gray-200 text-center w-1/3'>Tom Sallic </div>
        </div>
        <div className='bg-gray-200 text-center w-1/2'><button> Buy Now </button></div>
      </div>
    </div >
  );

};




GenericPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default GenericPage;
