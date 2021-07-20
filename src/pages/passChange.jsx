import React from "react";
import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useState } from "react";

import { Loading } from "src/components/Loading";
import { usePassChange } from "src/hooks/usePassChange";

const UserEdit = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { passChange, loading } = usePassChange();

  const onChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onClickPassChange = () => {
    passChange(currentPassword, password, confirmPassword);
  };

  return (
    <>
      <Head>
        <title>パスワード変更画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-md">
              <h1 className="bg-green-100">Together Dance</h1>
              <div className="leading-loose">
                <div className="max-w-md m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                  <p className="text-white font-medium text-center text-lg font-bold">
                    パスワードを入力してください
                  </p>
                  <div className="">
                    <label
                      className="block text-sm text-white"
                      htmlFor="currentPassword"
                    >
                      現在のパスワード
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      id="currentPassword"
                      type="password"
                      placeholder="現在のパスワード"
                      required
                      value={currentPassword}
                      onChange={onChangeCurrentPassword}
                    />
                  </div>
                  <div className="">
                    <label
                      className="block text-sm text-white"
                      htmlFor="password"
                    >
                      新しいパスワード
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      id="password"
                      type="password"
                      placeholder="新しいパスワード"
                      required
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className="block text-sm text-white"
                      htmlFor="confirmPassword"
                    >
                      確認用パスワード
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      id="confirmPassword"
                      type="password"
                      placeholder="確認用パスワード"
                      required
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                    />
                  </div>

                  <div className="mt-4 items-center flex justify-between">
                    <button
                      className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                      onClick={onClickPassChange}
                    >
                      {loading ? <Loading /> : <>変更</>}
                    </button>
                  </div>
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

export default UserEdit;
