import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <Head>
        <title>Together Danceについて</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="w-full">
        <div className="relative ">
          <div className="sliderAx h-4/5">
            <div id="slider-1" className="mx-auto">
              <div className="bg-black">
                <div className="flex relative text-center">
                  <h1 className="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center content-center absolute text-center w-full md:text-6xl">
                    Together Danceとは
                  </h1>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full object-cover h-3/4 block mx-auto sm:block sm:w-full"
                    src="https://source.unsplash.com/z8Tul255kGg/1920x588"
                    alt="Banner"
                    width="1920"
                    height="588"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-center text-black-800 py-6 text-5xl mt-4 ">
            サービスについて
          </h1>
          <div className="text-gray-900">
            <div className="grid grid-cols-6 mb-20">
              <div className="col-span-5">
                <h2 className="text-gray-700 leading-10 text-3xl">
                  好きなダンスを気楽にみんなで踊ろうよ
                  <br />
                  そんなメッセージを込めてサービスを開発しました
                  <br />
                  ダンスの集まりをいつでも誰でも誰とでも踊ることができます
                  <br />
                  こんな人にぴったり ダンスを一緒に踊る人が見つからない
                  <br />
                  好きなダンスを気楽に踊る場が欲しい
                  <br />
                  作った振りを振り入れしたいけど振り入れできる場がない
                  <br />
                  ダンスを教えてみたいけどレッスンを開講する機会はがなかなかない
                  <br />
                  そんな方々に使って欲しいと思っています
                  <br />
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-600">
          <div className="container mx-auto">
            <div className="flex py-16 items-center ">
              <div className="text-4xl text-white">
                誰でもイベントを開催できる
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex bg-white">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                  踊ろう会を開催する
                  <span className="text-indigo-600">気楽に</span>
                </h2>
                <p className="mt-2 text-2xl text-gray-500">
                  誰でも簡単にイベントを開催することができます
                  <br />
                  自分で振り付けしたものをみんなに振り入れして踊る！
                  <br />
                  好きなアーティストのダンスを真似て踊る！
                  <br />
                  などなど自由な形式でOK！！
                </p>
                <div className="mt-12">
                  <Link href="newEvent">
                    <a className="text-3xl text-blue-400 hover:text-blue-500">
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
            <div className="flex py-16 items-center ">
              <div className="text-4xl text-white ml-auto">
                いつでも踊ろう会に参加
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex bg-white">
            <div className="hidden lg:block lg:w-1/2 h-3/4">
              <div className="h-full object-cover">
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
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                  好きなダンスをいつでもどこでもだれとでも
                  <span className="text-indigo-600">一緒に</span>
                </h2>
                <p className="mt-2 text-2xl text-gray-500">
                  好きな踊ろう会にいつでも自由に参加可能！
                  <br />
                  好きなダンスが同じ人同士で一緒に踊ったり
                  <br />
                  様々な踊ろう会に気軽に参加して様々ジャンルの経験を積んだり
                  <br />
                  好きなタイミング好きな目的を持ってみんなで楽しくダンシング！！
                </p>
                <div className="mt-12">
                  <Link href="/events">
                    <a className="text-3xl text-blue-400 hover:text-blue-500">
                      踊ろう会の検索はこちらから →
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
