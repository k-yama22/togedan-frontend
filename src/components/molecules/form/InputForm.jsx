import { DefaultInput } from "src/components/atoms/input/DefaultInput";
import { DefaultLabel } from "src/components/atoms/label/DefaultLabel";

export const InputForm = (props) => {
  const { children, type, id, placeholder, arial, register, htmlFor } = props;
  return (
    <>
      <DefaultLabel htmlFor={htmlFor}>{children}</DefaultLabel>
      <DefaultInput
        type={type}
        id={id}
        placeholder={placeholder}
        arial-label={arial}
        register={register}
      />
    </>
  );
};
