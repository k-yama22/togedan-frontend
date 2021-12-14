import { useForm } from "react-hook-form";
import Link from "next/link";
import { DefaultButton } from "src/components/atoms/button/DefaultButton";
// import { DefaultInput } from "src/components/atoms/input/DefaultInput";
// import { DefaultLabel } from "src/components/atoms/label/DefaultLabel";
import { InputForm } from "src/components/molecules/form/InputForm";
import { useAuth } from "src/hooks/useAuth";
import { PASS_FORGET_SCREEN, SIGN_UP_SCREEN } from "src/utils/constants";

export const LoginForm = () => {
  // const { children, type, id, placeholder, arial, htmlFor } = props;

  const { login, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <InputForm
            type={"email"}
            id={"email"}
            placeholder={"メールアドレス"}
            arial={"email"}
            register={{
              ...register("email", {
                required: true,
              }),
            }}
            htmlFor={"email"}
          >
            メールアドレス
          </InputForm>
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-700">必須項目です</span>
          )}
        </div>
        <div className="mt-2">
          <InputForm
            type={"password"}
            id={"password"}
            placeholder={"パスワード"}
            arial={"password"}
            register={{
              ...register("password", {
                required: true,
                minLength: 8,
              }),
            }}
            htmlFor={"password"}
          >
            パスワード
          </InputForm>
          {errors.password && errors.password.type === "required" && (
            <span className="text-red-700">必須項目です</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-red-700">8文字以上で入力してください</span>
          )}
        </div>

        <div className="mt-4 items-center md:flex md:justify-between text-sm">
          <DefaultButton loading={loading}>ログイン</DefaultButton>
          <Link href={PASS_FORGET_SCREEN}>
            <a className="mt-4 md:mt-0 block md:inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400">
              パスワードを忘れた方はこちら
            </a>
          </Link>
        </div>
        <div className="text-center">
          <Link href={SIGN_UP_SCREEN}>
            <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
              新規登録はこちら
            </a>
          </Link>
        </div>
      </form>
    </>
  );
};
