import React, { memo } from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { Loading } from "src/components/Loading";
import { useTestAuth } from "src/hooks/useTestAuth";
import { LoginForm } from "src/components/organisms/login/LoginForm";
import { FormLayout } from "src/components/Layout/FormLayout";

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
        <FormLayout>
          <p className="text-white font-medium text-center text-lg font-bold">
            LOGIN
          </p>
          <LoginForm />

          <div>
            <button
              onClick={onClickTestLogin}
              className="px-4 py-1 text-white font-light tracking-wider bg-blue-700 hover:bg-blue-600 rounded"
            >
              {testLoading ? <Loading /> : <>テストユーザーでログイン</>}
            </button>
          </div>
        </FormLayout>
      </Layout>
    </>
  );
});

export default Login;
