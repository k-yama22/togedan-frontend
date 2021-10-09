import React, { memo } from "react";
import Head from "next/head";
import Link from "next/link";
import { Layout } from "src/components/Layout";
import { useAuth } from "src/hooks/useAuth";
import { Loading } from "src/components/Loading";
import { useForm } from "react-hook-form";
import { PASS_FORGET_SCREEN, SIGN_UP_SCREEN } from "src/utils/constants";

// eslint-disable-next-line react/display-name
const Login = memo(() => {
  const { login, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <Head>
        <title>ログイン画面</title>
      </Head>

      <Layout>
        <div className="bg-gray-500 flex flex-col items-center justify-center min-h-hull md:min-h-screen py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-10 md:px-20 text-center">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
              <div className="w-full max-w-md">
                <h1 className="bg-green-100">Together Dance</h1>
                <div className="leading-loose">
                  <div className="max-w-md m-4 p-5 md:p-10 bg-white bg-opacity-25 rounded shadow-xl">
                    <p className="text-white font-medium text-center text-lg font-bold">
                      LOGIN
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="">
                        <label
                          className="block text-sm text-white"
                          htmlFor="email"
                        >
                          メールアドレス
                        </label>
                        <input
                          className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          type="email"
                          id="email"
                          placeholder="メールアドレス"
                          aria-label="email"
                          {...register("email", { required: true })}
                        />
                        {errors.email && errors.email.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-sm text-white"
                          htmlFor="password"
                        >
                          パスワード
                        </label>
                        <input
                          className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          type="password"
                          id="password"
                          placeholder="パスワード"
                          arial-label="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                        />
                        {errors.password &&
                          errors.password.type === "required" && (
                            <span className="text-red-700">必須項目です</span>
                          )}
                        {errors.password &&
                          errors.password.type === "minLength" && (
                            <span className="text-red-700">
                              8文字以上で入力してください
                            </span>
                          )}
                      </div>

                      <div className="mt-4 items-center md:flex md:justify-between text-sm">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
                          {loading ? <Loading /> : <>ログイン</>}
                        </button>
                        <Link href={PASS_FORGET_SCREEN}>
                          <a className="mt-4 md:mt-0 block md:inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400">
                            パスワードを忘れた方はこちら
                          </a>
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link href={SIGN_UP_SCREEN}>
                          <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                            新規登録はこちら
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
});

export default Login;
