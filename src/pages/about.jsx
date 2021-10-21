import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "src/components/Layout";
import { EVENTS_SCREEN } from "src/utils/constants";
import { useTestAuth } from "src/hooks/useTestAuth";
import { Loading } from "src/components/Loading";
const About = () => {
  const { testLogin, testLoading } = useTestAuth();

  const onClickTestLogin = () => {
    testLogin();
  };

  return (
    <div>
      <Head>
        <title>Together Danceについて</title>
      </Head>

      <Layout>
        <main className="w-full">
          <div className="relative ">
            <div className="sliderAx h-4/5">
              <div id="slider-1" className="mx-auto">
                <div className="bg-black">
                  <div className="flex relative text-center">
                    <h1 className="text-2xl sm:text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center content-center absolute text-center w-full md:text-6xl">
                      Together Danceとは
                    </h1>
                    <div className="tracking-wider mx-auto mb-8 sm:mb-4 lg:mb-0 bottom-0 lg:bottom-1/4 absolute w-full self-center content-center">
                      <button
                        onClick={onClickTestLogin}
                        className="py-2 px-4 lg:p-8 text-sm md:text-lg lg:text-3xl text-white bg-purple-700 text-center hover:bg-purple-600 rounded"
                      >
                        {testLoading ? (
                          <Loading />
                        ) : (
                          <>テストユーザーでログイン</>
                        )}
                      </button>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full object-cover h-3/4 block mx-auto sm:block sm:w-full"
                      src="https://source.unsplash.com/z8Tul255kGg/1920x988"
                      alt="Banner"
                      width="1920"
                      height="988"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <div className="sliderAx h-4/5">
              <div id="slider-1" className="mx-auto">
                <div className="bg-black">
                  <div className="flex relative text-center">
                    <div className="text-3xl tracking-wider text-white uppercase font-bold pt-20 md:pt-48 content-center absolute text-center w-full md:text-6xl z-10">
                      好きなダンスを
                      <br />
                      いつでもどこでも誰とでも
                      <p className="text-sm md:text-5xl p-4 md:pt-48 text-white font-semibold opacity-100">
                        TogetherDanceは
                        <div className="font-bold md:py-8">
                          「好きなダンスを色々な人と踊りたい！」
                        </div>
                        という人と
                        <div className="font-bold md:py-8">
                          「振付したダンスを踊ってくれる人を見つけたい！」
                          <br />
                          「完コピする仲間を見つけたい！」
                        </div>
                        という人を結びつけるきっかけを作ります！
                      </p>
                    </div>
                    {/* <div className="opacity-100"> */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full object-cover h-3/4 md:h-1/2 block mx-auto sm:block sm:w-full opacity-30 "
                      src="https://source.unsplash.com/N0g-deioHO4/1920x1920"
                      alt="Banner"
                      width="1920"
                      height="1920"
                    />
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container mx-auto"> */}

          {/* <div className="text-gray-900">
          <div className="grid grid-cols-6 mb-20">
            <div className="col-span-5">
              <h2 className="text-gray-700 leading-10 text-3xl">
                <p className="text-purple-800 font-bold">
                  〜好きなダンスをいつでもどこでも誰とでも〜
                </p>
                TogetherDanceは様々なダンスを楽しみたい！色々な人たちと踊りたい！という人と
                <br />
                自分の好きなダンスを一緒に踊ってくれる人を見つけたい！一緒に好きなアーティストの曲で踊る仲間を見つけたい！という人をマッチングさせるサービスです！
                <br />
                誰でも参加する側にも開催する側にもなることができます！
                <br />
                参加したい人は好きなダンスを踊る会（踊ろう会）を探して好きな会に参加することができます！
                <br />
                開催したい人は主催者として参加者を募り、自由に踊ろう会を開催することができます！
                <br />
                自分で振り付けを考えたダンスをみんなに教えながら一緒に踊るもよし！
                <br />
                同じアーティストが好きな同士を集めてダンスの振りコピを踊るもよし！
                <br />
                いつでもどこでも誰とでも好きなダンスを楽しむ機会を作り出す！
                <br />
                それがTogether Danceというサービスです！
                <br />
                こんな人にぴったり
                <br />
                好きなダンスを気楽に踊る場が欲しい
                <br />
                ダンスを一緒に踊る人が見つけたい
                <br />
                自分で作った振り付けを振り入れしたいけど振り入れできる場がない
                <br />
                ダンスを教えてみたいけどレッスンを開講する機会はがなかなかない
                <br />
                そんな方々に使って欲しいと思っています！ぜひ一度使ってみてください！
                <br />
              </h2>
            </div>
          </div>
        </div> */}
          {/* </div> */}
          <div className="bg-purple-600">
            <div className="container mx-auto">
              <div className="flex py-6 md:py-16 items-center justify-center">
                <div className="text-2xl md:text-4xl text-white ">
                  誰でもイベントを開催できる
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex bg-white">
              <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                  <h2 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl">
                    踊ろう会を開催する
                    {/* <span className="text-indigo-600">気楽に</span> */}
                  </h2>
                  <p className="mt-2 text-base md:text-2xl text-gray-500">
                    誰でも簡単にイベントを開催できます
                    <br />
                    自分で振り付けしたダンスをみんなと踊る会！
                    <br />
                    好きなアーティストのダンスを真似て踊る会！
                    <br />
                    などなど自由な形式でOK！！
                  </p>
                  <div className="m-4 md:mt-12">
                    <Link href="newEvent">
                      <a className="text-lg md:text-3xl text-blue-400 hover:text-blue-500">
                        踊ろう会の開催はこちらから →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2 h-3/4">
                <div className="h-full object-cover">
                  <div className="h-full bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full object-cover block mx-auto sm:block sm:w-full"
                      src="https://source.unsplash.com/Etxf65FaTrs/1920x1088"
                      alt="Banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-600">
            <div className="container mx-auto">
              <div className="flex py-6 md:py-16 items-center ">
                <div className="text-2xl md:text-4xl text-white mx-auto md:ml-auto">
                  いつでも踊ろう会に参加
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex bg-white">
              <div className="hidden md:block w-full md:w-1/2 h-full md:h-3/4">
                <div className="h-full object-cover mx-auto">
                  <div className="h-full bg-black ">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full object-cover block mx-auto sm:block sm:w-full"
                      src="https://source.unsplash.com/Hr6dzqNLzhw/1920x1088"
                      alt="Banner"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                  <h2 className="mt-2 text-3xl font-semibold text-gray-800 md:text-4xl">
                    踊ろう会に自由に参加
                    {/* <span className="text-indigo-600">一緒に</span> */}
                  </h2>
                  <p className="mt-2 text-base md:text-2xl text-gray-500">
                    好きな踊ろう会にいつでも自由に参加可能！
                    <br />
                    好きなダンスが同じ人同士で一緒に踊ったり
                    <br />
                    様々な踊ろう会に気軽に参加して様々ジャンルの経験を積んだり
                    <br />
                    好きなタイミング好きな目的を持ってみんなで楽しくダンシング！！
                  </p>
                  <div className="m-4 md:mt-12">
                    <Link href={EVENTS_SCREEN}>
                      <a className="text-lg md:text-3xl text-blue-400 hover:text-blue-500">
                        踊ろう会の検索はこちらから →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default About;
