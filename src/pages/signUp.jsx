import React from "react";
import Head from "next/head";
import { useCallback, useState } from "react";
import { useSignUp } from "src/hooks/useSignUp";
import { Footer } from "src/components/Footer";
import { Loading } from "src/components/Loading";
import { Header } from "src/components/Header";
import { useForm } from "react-hook-form";
import { DatePicker } from "src/components/DatePicker";
import { CONFIRM_SUCCESS_URL, USER_STATUS_VALID } from "src/hooks/constants";

const SignUp = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const { signUp, loading } = useSignUp();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onChangeImage = useCallback((e) => {
    const iconFile = e.target.files[0];
    setImage(iconFile);
    setPreview(window.URL.createObjectURL(iconFile));
  }, []);

  // フォームデータを作成
  const createFormData = (data) => {
    const formData = new FormData();

    formData.append("last_name", data.lastName);
    formData.append("first_name", data.firstName);
    formData.append("last_name_kana", data.lastNameKana);
    formData.append("first_name_kana", data.firstNameKana);
    formData.append("user_name", data.userName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("birthday", data.birthday);
    formData.append("phone", data.phone);
    formData.append("introduce", data.introduce);
    formData.append("user_sts", USER_STATUS_VALID);
    formData.append("confirm_success_url", CONFIRM_SUCCESS_URL);

    // imageはstateから取得
    formData.append("image", image);
    return formData;
  };
  const onSubmit = (data) => {
    const signUpData = createFormData(data);
    signUp(signUpData);
  };

  return (
    <>
      <Head>
        <title>ユーザ新規登録画面</title>
      </Head>

      <Header />

      <div className="bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-10 md:px-20 text-center">
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-2xl">
              <h1 className="bg-green-100">Together Dance</h1>
              <div className="leading-loose">
                <div className="max-w-2xl m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl mx-auto">
                  <p className="text-white font-medium text-center text-md md:text-lg font-bold">
                    ユーザ情報を入力してください
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                      <div className="md:grid md:grid-cols-2">
                        <div className="m-2">
                          <label
                            className="block text-xs md:text-sm text-white"
                            htmlFor="lastName"
                          >
                            苗字<span className="text-red-700">*</span>
                          </label>
                          <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                            id="lastName"
                            type="text"
                            placeholder="苗字"
                            {...register("lastName", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                          {errors.lastName &&
                            errors.lastName.type === "required" && (
                              <span className="text-red-700">必須項目です</span>
                            )}
                          {errors.lastName &&
                            errors.lastName.type === "maxLength" && (
                              <span className="text-red-700">
                                20文字以下で入力してください
                              </span>
                            )}
                        </div>
                        <div className="m-2">
                          <label
                            className="block text-xs md:text-sm text-white"
                            htmlFor="firstName"
                          >
                            名前<span className="text-red-700">*</span>
                          </label>
                          <input
                            className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                            id="firstName"
                            type="text"
                            placeholder="名前"
                            {...register("firstName", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                          {errors.firstName &&
                            errors.firstName.type === "required" && (
                              <span className="text-red-700">必須項目です</span>
                            )}
                          {errors.firstName &&
                            errors.firstName.type === "maxLength" && (
                              <span className="text-red-700">
                                20文字以下で入力してください
                              </span>
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="md:grid md:grid-cols-2">
                      <div className="m-2">
                        <label
                          className="block text-xs md:text-sm text-white"
                          htmlFor="lastNameKana"
                        >
                          苗字（カナ）<span className="text-red-700">*</span>
                        </label>
                        <input
                          className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="lastNameKana"
                          type="text"
                          placeholder="苗字（カナ）"
                          {...register("lastNameKana", {
                            required: true,
                            maxLength: 40,
                          })}
                        />
                        {errors.lastNameKana &&
                          errors.lastNameKana.type === "required" && (
                            <span className="text-red-700">必須項目です</span>
                          )}
                        {errors.lastNameKana &&
                          errors.lastNameKana.type === "maxLength" && (
                            <span className="text-red-700">
                              40文字以下で入力してください
                            </span>
                          )}
                      </div>
                      <div className="m-2">
                        <label
                          className="block text-xs md:text-sm text-white"
                          htmlFor="firstNameKana"
                        >
                          名前（カナ）<span className="text-red-700">*</span>
                        </label>
                        <input
                          className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                          id="firstNameKana"
                          type="text"
                          placeholder="名前（カナ）"
                          {...register("firstNameKana", {
                            required: true,
                            maxLength: 40,
                          })}
                        />
                        {errors.firstNameKana &&
                          errors.firstNameKana.type === "required" && (
                            <span className="text-red-700">必須項目です</span>
                          )}
                        {errors.firstNameKana &&
                          errors.firstNameKana.type === "maxLength" && (
                            <span className="text-red-700">
                              40文字以下で入力してください
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="userName"
                      >
                        ユーザーネーム<span className="text-red-700">*</span>
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="userName"
                        type="text"
                        placeholder="ユーザーネーム"
                        {...register("userName", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                      {errors.userName &&
                        errors.userName.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                      {errors.userName &&
                        errors.userName.type === "maxLength" && (
                          <span className="text-red-700">
                            20文字以下で入力してください
                          </span>
                        )}
                    </div>
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="email"
                      >
                        メールアドレス<span className="text-red-700">*</span>
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

                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="password"
                      >
                        パスワード<span className="text-red-700">*</span>
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="password"
                        type="password"
                        placeholder="パスワード"
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
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="birthday"
                      >
                        生年月日<span className="text-red-700">*</span>
                        <DatePicker
                          // label="datetime"
                          name="birthday"
                          control={control}
                          placeholderText="生年月日"
                          openToDate={new Date("1990/01/01")}
                          {...register("birthday", { required: true })}
                        />
                      </label>
                      {/* <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="birthday"
                        type="date"
                        min="1900-01-01"
                        max="2100-12-31"
                        placeholder="生年月日"
                        {...register("birthday", { required: true })}
                      /> */}
                      {errors.birthday &&
                        errors.birthday.type === "required" && (
                          <span className="text-red-700">必須項目です</span>
                        )}
                    </div>
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="phone"
                      >
                        電話番号<span className="text-red-700">*</span>
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="phone"
                        type="text"
                        placeholder="電話番号"
                        {...register("phone", {
                          required: true,
                          maxLength: 11,
                        })}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <span className="text-red-700">必須項目です</span>
                      )}
                      {errors.phone && errors.phone.type === "maxLength" && (
                        <span className="text-red-700">
                          11文字以下で入力してください
                        </span>
                      )}
                    </div>
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="image"
                      >
                        アイコン画像
                      </label>
                      <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="image"
                        type="file"
                        placeholder="アイコン画像"
                        accept="image/*"
                        onChange={onChangeImage}
                      />
                    </div>
                    {preview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={preview}
                        className="mx-auto object-cover lg:h-48 lg:w-48 rounded-2xl h-48 w-48"
                        alt="preview img"
                      />
                    ) : null}
                    <div className="m-2">
                      <label
                        className="block text-xs md:text-sm text-white"
                        htmlFor="introduce"
                      >
                        自己紹介
                      </label>
                      <textarea
                        className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                        id="introduce"
                        rows="8"
                        wrap="hard"
                        placeholder="自己紹介"
                        {...register("introduce", {
                          required: false,
                          maxLength: 255,
                        })}
                      ></textarea>
                      {errors.introduce &&
                        errors.introduce.type === "maxLength" && (
                          <span className="text-red-700">
                            255文字以下で入力してください
                          </span>
                        )}
                    </div>
                    <div className="mt-4 items-center flex justify-between">
                      <button className="w-48 px-4 py-1 flex items-center justify-center text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded mx-auto">
                        {loading ? <Loading /> : <>登録</>}
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

export default SignUp;
