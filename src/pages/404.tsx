import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Error: Not Found</title>
      </Head>
      <div className="flex flex-col bg-white items-center flex-grow p-[30px] md:p-[60px] xl:p-[100px]">
        <h1 className="text-[#333333] text-[25px] md:text-[30px] font-medium mb-4">
          404: The page you are looking for isn’t here
        </h1>
        <p className="text-secondary text-sm mb-8">
          {" "}
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation.
        </p>
        <Link passHref href="/">
          <a className="text-white bg-primary sm:text-sm md:text-[18px] py-3 px-6 md:py-5 md:px-10 rounded-md">
            Back to Home
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
