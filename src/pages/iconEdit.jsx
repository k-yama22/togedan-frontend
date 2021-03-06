import React from "react";
import Head from "next/head";
import { Layout } from "src/components/Layout";
import { useEffect, useState } from "react";
import { useUserChange } from "src/hooks/useUserChange";
import { Loading } from "src/components/Loading";
import { useForm } from "react-hook-form";
import { useMyUserInfo } from "src/hooks/useMyUserInfo";
import { FormLayout } from "src/components/Layout/FormLayout";

const IconEdit = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const { getMyUserInfo, myUserInfo } = useMyUserInfo();

  const { userChange, loading } = useUserChange();

  const { handleSubmit } = useForm();

  // フォームデータを作成
  const createFormData = () => {
    const formData = new FormData();

    // imageはstateから取得
    formData.append("image", image);
    return formData;
  };

  const onChangeImage = (e) => {
    const iconFile = e.target.files[0];
    if (iconFile) {
      setImage(iconFile);
      setPreview(window.URL.createObjectURL(iconFile));
    } else {
      setImage("");
      setPreview("");
    }
  };

  const onSubmit = (data) => {
    const editData = createFormData(data);
    userChange(editData);
  };

  useEffect(() => {
    getMyUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setImage(myUserInfo.image);
    setPreview(myUserInfo.image?.url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myUserInfo]);

  return (
    <>
      <Head>
        <title>アイコン変更画面</title>
      </Head>

      <Layout>
        {/* <div className="bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-10 md:px-20 text-center">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
              <div className="w-full max-w-2xl">
                <h1 className="bg-green-100">Together Dance</h1>
                <div className="leading-loose">
                  <div className="max-w-2xl m-4 p-8 bg-white bg-opacity-25 rounded shadow-xl mx-auto"> */}
        <FormLayout>
          <p className="text-white font-medium text-center text-lg font-bold">
            アイコン画像を選択してください
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="m-2">
              <div className="rounded-lg mx-auto">
                <div className="mx-auto p-4">
                  {preview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="mx-auto object-cover lg:h-48 lg:w-48 rounded-2xl h-48 w-48"
                      src={preview}
                      alt="preview img"
                      width="256"
                      height="256"
                    />
                  ) : null}
                </div>
                <label className="cursor-pointer mt-12">
                  <div className="mt-2 text-base leading-normal px-4 py-2 bg-teal-400 text-white text-sm rounded-full">
                    画像を選択する
                  </div>
                  <input
                    id="image"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    placeholder="アイコン画像"
                    onChange={onChangeImage}
                  />
                </label>
              </div>
            </div>
            <div className="mt-4 items-center flex justify-between">
              <button className="w-48 px-4 py-1 flex items-center justify-center text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded mx-auto">
                {loading ? <Loading /> : <>変更</>}
              </button>
            </div>
          </form>
        </FormLayout>
        {/* </div>
                </div>
              </div>
            </div>
          </main>
        </div> */}
      </Layout>
    </>
  );
};

export default IconEdit;
