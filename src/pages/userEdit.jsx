import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
import { useUserChange } from "src/hooks/useUserChange";
import { Loading } from "src/components/Loading";

const UserEdit = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameKana, setLastNameKana] = useState("");
  const [firstNameKana, setFirstNameKana] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState({});
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [introduce, setIntroduce] = useState("");

  const { userChange, loading } = useUserChange();

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangeLastNameKana = (e) => {
    setLastNameKana(e.target.value);
  };
  const onChangeFirstNameKana = (e) => {
    setFirstNameKana(e.target.value);
  };
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeIntroduce = (e) => {
    setIntroduce(e.target.value);
  };

  const onClickUserChange = () => {
    userChange(
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      userName,
      email,
      birthday,
      phone,
      image,
      introduce
    );
  };

  useEffect(() => {
    const defaultValue = JSON.parse(localStorage.getItem("loginUser"));
    setLastName(defaultValue.lastName);
    setFirstName(defaultValue.firstName);
    setLastNameKana(defaultValue.lastNameKana);
    setFirstNameKana(defaultValue.firstNameKana);
    setUserName(defaultValue.userName);
    setEmail(defaultValue.email);
    setBirthday(defaultValue.birthday);
    setPhone(defaultValue.phone);
    setImage(defaultValue.image);
    setIntroduce(defaultValue.introduce);
  }, []);

  return (
    <>
      <Head>
        <title>ユーザ情報変更画面</title>
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
                  <div className=''>
                    <label className='block text-sm text-white'>苗字</label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='苗字'
                      required
                      value={lastName}
                      onChange={onChangeLastName}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>名前</label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='名前'
                      required
                      value={firstName}
                      onChange={onChangeFirstName}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      苗字（カナ）
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='苗字（カナ）'
                      required
                      value={lastNameKana}
                      onChange={onChangeLastNameKana}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      名前（カナ）
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='名前（カナ）'
                      required
                      value={firstNameKana}
                      onChange={onChangeFirstNameKana}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      ユーザーネーム
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='ユーザーネーム'
                      required
                      value={userName}
                      onChange={onChangeUserName}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      メールアドレス
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='email'
                      placeholder='メールアドレス'
                      required
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </div>

                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      生年月日
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='date'
                      placeholder='生年月日'
                      required
                      value={birthday}
                      onChange={onChangeBirthday}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      電話番号
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='電話番号'
                      required
                      value={phone}
                      onChange={onChangePhone}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      アイコン画像
                    </label>
                    <input
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      type='text'
                      placeholder='アイコン画像'
                      value={image}
                      onChange={onChangeImage}
                    />
                  </div>
                  <div className='mt-2'>
                    <label className='block  text-sm text-white'>
                      自己紹介
                    </label>
                    <textarea
                      className='w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white'
                      placeholder='自己紹介'
                      value={introduce}
                      onChange={onChangeIntroduce}
                    ></textarea>
                  </div>
                  <div className='mt-4 items-center flex justify-between'>
                    <button
                      className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'
                      onClick={onClickUserChange}
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
