import Head from "next/head";
import Link from "next/link";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
const About = () => {
  return (
    <div>
      <Head>
        <title>Together Danceについて</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='bg-gray-200 '>
        <div className='flex relative text-center'>
          <h1 className='text-3xl tracking-wider text-black text-sha uppercase font-bold p-4 self-center z-10 content-center  text-center w-full md:text-4xl'>
            ダンスの楽しさを同じ空間で！！
          </h1>
        </div>
        <div className='content'>
          <div className='flex items-center justify-between w-full my-4 pl-4 sm:pr-4'>
            <div className='mr-6'>
              <h2 className='text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate'>
                Together Danceとは！！
              </h2>
              <div className='font-base tracking-tight text-gray-600'>
                踊りたいダンスをみんなで踊ろう！！
                <br />
                自分で作ったダンスを誰かと一緒に踊りたい！！
                <br />
                好きなダンスグループのダンスを好きな人たちと踊りたい！！
                <br />
                そんなときにトゥゲダンでTogetherDance!!
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
