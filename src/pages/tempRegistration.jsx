import React from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
// import { Header } from "src/components/Header";
const TempRegistration = () => {
  return (
    <div>
      <Head>
        <title>仮登録完了</title>
      </Head>

      <Layout>
        <div className="bg-gray-100">
          <div className="flex relative text-center">
            <h1 className="text-xl md:text-3xl tracking-wider text-black text-sha uppercase font-bold p-4 self-center z-10 content-center  text-center w-full md:text-4xl">
              仮登録が完了しました
            </h1>
          </div>
          <div className="content">
            <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
              <div className="mr-6">
                <h2 className="text-lg md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
                  仮登録いただきありがとうございます。
                </h2>
                <div className="text-xs md:font-base tracking-tight text-gray-600">
                  お客様のご登録いただいたメールに本登録用確認メールを送信しました。
                  <br />
                  メール内の「アカウントの有効化」のリンクをクリックしてください
                  <br />
                  ご登録いただいたメールアドレスとパスワードにてログインしてください
                  <br />
                  ご不明点は下記メールアドレスにお問い合わせお願いします。
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TempRegistration;
