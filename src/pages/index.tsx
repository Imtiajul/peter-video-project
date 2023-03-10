import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "src/components/widgets/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="relative overflow-hidden">
        <header className="relative">
          <div className="bg-gray-900 pt-6">
            <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    {/* <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto sm:h-10" /> */}
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button type="button" className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a href="#" className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700">Upload Video</a>
              </div>
            </nav>
          </div>

          <div className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
            <div className="overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
                </div>
                <div className="-mr-2">
                  <button type="button" className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1 px-2">
                  <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>

                  <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>

                  <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>

                  <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <div className="mt-6 px-5">
                  <a href="#" className="block w-full rounded-md bg-indigo-600 py-3 px-4 text-center font-medium text-white shadow hover:bg-indigo-700">Upload Your Video</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">

                    </div>
                    <h1
                      className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
                    >
                      All your videos hosted.
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Reliable hosting for your videos</p>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">(12/12/22: Due to high server costs, we are pausing all video upload atm)</p>


                    <div className="mt-10 sm:mt-12">
                      <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button type="submit" className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900">Upload Video</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                    <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>


    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
