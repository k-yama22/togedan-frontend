import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Together Dance</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-gray-300'>
        <div className='border-solid border-4 border-gray-600 hover:text-grey-dark'>
          <Link href='/login'>
            <a>ログインはこちらから</a>
          </Link>
        </div>
      </header>

      <div className='bg-black'>
        <div className='flex relative text-center'>
          <h1 className='text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl'>
            ようこそ！！Together Danceへ
          </h1>
          <img
            className='w-full object-cover h-3/4 block mx-auto  sm:block sm:w-full'
            src='https://source.unsplash.com/FC4z3l4sUYc/1920x588'
            alt='Banner'
            width='1920'
            height='588'
          />
        </div>
      </div>
      <div className='content'>
        <div className='flex items-center justify-between w-full my-4 pl-4 sm:pr-4'>
          <div className='mr-6'>
            <h2 className='text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate'>
              ホーム画面
            </h2>
            <div className='font-base tracking-tight text-gray-600'>モック</div>
          </div>
        </div>
      </div>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  );
};

export default Home;
