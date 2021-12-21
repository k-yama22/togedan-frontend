import React from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { Loading } from "src/components/Loading";
import { useForm } from "react-hook-form";
import { usePassReset } from "src/hooks/usePassReset";
import { FormLayout } from "src/components/Layout/FormLayout";

//サーバーサイドレンダリング
export async function getServerSideProps(context) {
  //クエリパラメータのID取得
  const accessToken = context.query["access-token"];
  const client = context.query["client"];
  const uid = context.query["uid"];

  return {
    props: {
      accessToken: accessToken,
      client: client,
      uid: uid,
    },
  };
}

const PassReset = (props) => {
  const { accessToken, client, uid } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { passReset, loading } = usePassReset();

  const onSubmit = (data) => {
    passReset(data, accessToken, client, uid);
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>パスワード変更画面</title>
      </Head>

      <Layout>
        <FormLayout>
          {/* <div className="bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-10 md:px-20 text-center">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
              <div className="w-full max-w-md">
                <h1 className="bg-green-100">Together Dance</h1>
                <div className="leading-loose">
                  <div className="max-w-md m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"> */}
          <p className="text-white font-medium text-center text-md md:text-lg font-bold">
            パスワードを入力してください
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
              <label
                className="block text-xs md:text-sm text-white"
                htmlFor="password"
              >
                新しいパスワード
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                id="password"
                type="password"
                placeholder="新しいパスワード"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="text-red-700">必須項目です</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-700">
                  8文字以上で入力してください
                </span>
              )}
            </div>
            <div className="mt-2">
              <label
                className="block text-xs md:text-sm text-white"
                htmlFor="confirmPassword"
              >
                確認用パスワード
              </label>
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                id="confirmPassword"
                type="password"
                placeholder="確認用パスワード"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <span className="text-red-700">必須項目です</span>
                )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === "minLength" && (
                  <span className="text-red-700">
                    8文字以上で入力してください
                  </span>
                )}
            </div>

            <div className="mt-4 items-center flex justify-between">
              <button className="w-48 px-4 py-1 flex items-center justify-center text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded mx-auto">
                {loading ? <Loading /> : <>変更</>}
              </button>
            </div>
          </form>
          {/* </div>
                </div>
              </div>
            </div>
          </main>
        </div> */}
        </FormLayout>
      </Layout>
    </>
  );
};

export default PassReset;
