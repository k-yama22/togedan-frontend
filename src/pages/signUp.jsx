import Head from "next/head";
import { useCallback, useState } from "react";
import { useSignUp } from "src/hooks/useSignUp";
import { Footer } from "src/components/Footer";
import { Loading } from "src/components/Loading";
import { Header } from "src/components/Header";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const { signUp, loading } = useSignUp();

  const {
    register,
    handleSubmit,
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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='bg-gray-500 flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <div className='container mx-auto h-full flex flex-1 justify-center items-center'>
            <div className='w-full max-w-md'>
              <h1 className='bg-green-100'>Together Dance</h1>
              <div className='leading-loose'>
                <div className='max-w-md m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl'>
                  <p className='text-white font-medium text-center text-lg font-bold'>
                    ユーザ情報を入力してください
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=''>
                      <label className='block text-sm text-white'>苗字</label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='苗字'
                        {...register("lastName", { required: true })}
                      />
                      {errors.lastName &&
                        errors.lastName.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>名前</label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='名前'
                        {...register("firstName", { required: true })}
                      />
                      {errors.firstName &&
                        errors.firstName.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        苗字（カナ）
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='苗字（カナ）'
                        {...register("lastNameKana", { required: true })}
                      />
                      {errors.lastNameKana &&
                        errors.lastNameKana.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        名前（カナ）
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='名前（カナ）'
                        {...register("firstNameKana", { required: true })}
                      />
                      {errors.firstNameKana &&
                        errors.firstNameKana.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        ユーザーネーム
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='ユーザーネーム'
                        {...register("userName", { required: true })}
                      />
                      {errors.userName &&
                        errors.userName.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        メールアドレス
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='email'
                        placeholder='メールアドレス'
                        {...register("email", { required: true })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span className='text-red-700'>"必須項目です"</span>
                      )}
                    </div>

                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        パスワード
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='password'
                        placeholder='パスワード'
                        {...register("password", { required: true })}
                      />
                      {errors.password &&
                        errors.password.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        生年月日
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='date'
                        placeholder='生年月日'
                        {...register("birthday", { required: true })}
                      />
                      {errors.birthday &&
                        errors.birthday.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        電話番号
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='text'
                        placeholder='電話番号'
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <span className='text-red-700'>"必須項目です"</span>
                      )}
                    </div>
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        アイコン画像
                      </label>
                      <input
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        type='file'
                        placeholder='アイコン画像'
                        accept='image/*'
                        {...register("image", { required: true })}
                        onChange={onChangeImage}
                      />
                      {errors.image && errors.image.type === "required" && (
                        <span className='text-red-700'>"必須項目です"</span>
                      )}
                    </div>
                    {preview ? <img src={preview} alt='preview img' /> : null}
                    <div className='mt-2'>
                      <label className='block  text-sm text-white'>
                        自己紹介
                      </label>
                      <textarea
                        className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                        placeholder='自己紹介'
                        {...register("introduce", { required: true })}
                      ></textarea>
                      {errors.introduce &&
                        errors.introduce.type === "required" && (
                          <span className='text-red-700'>"必須項目です"</span>
                        )}
                    </div>
                    <div className='mt-4 items-center flex justify-between'>
                      <button className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'>
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
