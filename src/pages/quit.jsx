import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useDeleteAccount } from "src/hooks/useDeleteAccount";
// import { Header } from "src/components/Header";
const Quit = () => {
  const { deleteAccount } = useDeleteAccount();
  const onClickQuit = () => {
    deleteAccount();
  };

  return (
    <div>
      <Head>
        <title>退会手続き</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-200 p-4">
        {/* <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-black text-sha uppercase font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            退会の手続き
          </h1>
        </div> */}
        <div className="container">
          <div className=" w-full my-4 pl-4 sm:pr-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 truncate text-center">
              退会するにあたって
            </h2>
            <div className="mr-6 flex items-center justify-center">
              <div className="text-2xl tracking-tight text-gray-600  p-10">
                <p className="mt-4">
                  ・踊ろう会の開催をされている場合は退会することができません。
                </p>
                <p className="mt-2 text-lg text-gray-600">
                  {"　 "}
                  開催をキャンセルもしくは終了後に退会手続きをしてください。
                </p>
                <p className="mt-4">
                  ・踊ろう会に参加予約している場合は退会することができません。
                </p>
                <p className="mt-2 text-lg text-gray-600">
                  {"　 "}
                  ご予約をキャンセルもしくは参加終了後に退会手続きをしてください。
                </p>
                <p className="mt-4">
                  ・退会後はアカウントを復元することはできませんのでご注意ください。
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={onClickQuit}
              className="block w-48 text-blue-800 text-md font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline hover:shadow-xs p-3 my-4"
            >
              退会する
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quit;
