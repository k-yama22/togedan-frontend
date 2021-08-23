import React from "react";
import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useHoldUserInfo } from "src/hooks/useHoldUserInfo";

export async function getServerSideProps(context) {
  //クエリパラメータのID取得
  const id = context.query.id;

  return {
    props: {
      id: id,
    },
  };
}

const HoldUser = (props) => {
  const { getHoldUserInfo, holdUserInfo } = useHoldUserInfo();

  useEffect(() => {
    getHoldUserInfo(props.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>Together Dance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-600">
        <div className="flex relative text-center">
          <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
            開催者情報
          </h1>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400 h-full">
                <div className="image overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-auto w-full mx-auto "
                    src={holdUserInfo.image?.url}
                    alt="アイコン画像"
                  />
                </div>

                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {holdUserInfo.last_name} {holdUserInfo.first_name}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  自己紹介
                </h3>

                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>会員状態</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        有効会員
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>ユーザーネーム</span>
                    <span className="ml-auto">{holdUserInfo.user_name}</span>
                  </li>
                </ul>
              </div>
              <div className="my-4"></div>
            </div>
            {/* 右側部分 */}
            <div className="w-full md:w-9/12 mx-2 ">
              {/* ユーザー情報の項目 */}
              <div className="bg-white p-3 shadow-sm rounded-sm h-full">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span className="text-green-500">
                    <svg
                      className="h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 2 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide text-2xl m-2">
                    ユーザー情報
                  </span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-lg">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        苗字（カナ）
                      </div>
                      <div className="px-4 py-2">
                        {holdUserInfo.last_name_kana}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        名前（カナ）
                      </div>
                      <div className="px-4 py-2">
                        {holdUserInfo.first_name_kana}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">苗字</div>
                      <div className="px-4 py-2">{holdUserInfo.last_name}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">名前</div>
                      <div className="px-4 py-2">{holdUserInfo.first_name}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        ユーザーネーム
                      </div>
                      <div className="px-4 py-2">{holdUserInfo.user_name}</div>
                    </div>
                  </div>
                  <div className="mx-4 my-2">
                    <h3 className="text-gray-600 text-lg font-semibold leading-6 ">
                      自己紹介
                    </h3>
                    <p className="px-4 py-4 text-lg text-gray-700 hover:text-gray-600 leading-7 whitespace-pre-line h-72 w-full overflow-auto ">
                      {holdUserInfo.introduce}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HoldUser;
