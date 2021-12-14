import React, { memo } from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { Loading } from "src/components/Loading";
import { useTestAuth } from "src/hooks/useTestAuth";
import { LoginForm } from "src/components/organisms/login/LoginForm";

// eslint-disable-next-line react/display-name
const Login = memo(() => {
  const { testLogin, testLoading } = useTestAuth();

  const onClickTestLogin = () => {
    testLogin();
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
                    <LoginForm />

                    <div>
                      <button
                        onClick={onClickTestLogin}
                        className="px-4 py-1 text-white font-light tracking-wider bg-blue-700 hover:bg-blue-600 rounded"
                      >
                        {testLoading ? (
                          <Loading />
                        ) : (
                          <>テストユーザーでログイン</>
                        )}
                      </button>
                    </div>
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
