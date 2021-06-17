import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "src/hooks/useAuth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    login(email, password);
  };

  return (
    <div className='bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>ログイン画面</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='container mx-auto h-full flex flex-1 justify-center items-center'>
          <div className='w-full max-w-md'>
            <h1 className='bg-green-100'>Together Dance</h1>
            <div className='leading-loose'>
              <div className='max-w-md m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl'>
                <p className='text-white font-medium text-center text-lg font-bold'>
                  LOGIN
                </p>
                <div className=''>
                  <label className='block text-sm text-white' for='email'>
                    メールアドレス
                  </label>
                  <input
                    className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                    type='email'
                    id='email'
                    placeholder='メールアドレス'
                    aria-label='email'
                    required
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                <div className='mt-2'>
                  <label className='block  text-sm text-white'>
                    パスワード
                  </label>
                  <input
                    className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                    type='password'
                    id='password'
                    placeholder='パスワード'
                    arial-label='password'
                    required
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>

                <div className='mt-4 items-center flex justify-between'>
                  <button
                    className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'
                    onClick={onClickLogin}
                  >
                    ログイン
                  </button>
                  <Link href='#'>
                    <a className='inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400'>
                      パスワードを忘れた方はこちら
                    </a>
                  </Link>
                </div>
                <div className='text-center'>
                  <Link href='#'>
                    <a className='inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400'>
                      新規登録はこちら
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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

export default Login;
