import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Loading } from "src/components/Loading";
import { Header } from "src/components/Header";
import { useForm } from "react-hook-form";
import { usePassForget } from "src/hooks/usePassForget";
import { PASS_RESET_REDIRECT_URL } from "src/hooks/constants";

const PassForget = () => {
  const { passForget, loading } = usePassForget();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // フォームデータを作成
  const createFormData = (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("redirect_url", PASS_RESET_REDIRECT_URL);
    return formData;
  };
  const onSubmit = (data) => {
    const passForgetData = createFormData(data);
    passForget(passForgetData);
    console.log(PASS_RESET_REDIRECT_URL);
    console.log(passForgetData);
  };

  return (
    <>
      <Head>
        <title>パスワードリセット</title>
      </Head>

      <Header />

      <div className="bg-gray-500 flex flex-col items-center justify-center min-h-hull md:min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-10 md:px-20 text-center">
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-2xl">
              <h1 className="bg-green-100">Together Dance</h1>
              <div className="leading-loose">
                <div className="max-w-2xl m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl mx-auto">
                  <p className="text-white font-medium text-center text-md md:text-lg font-bold">
                    メールアドレスを入力してください
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="email"
                      >
                        メールアドレス
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="email"
                        type="email"
                        placeholder="メールアドレス"
                        {...register("email", { required: true })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span className="text-red-700">必須項目です</span>
                      )}
                    </div>

                    <div className="mt-4 items-center flex justify-between">
                      <button className="w-48 px-4 py-1 flex items-center justify-center text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded m-auto">
                        {loading ? <Loading /> : <>リセット</>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PassForget;
