import { DefaultInput } from "src/components/atoms/input/DefaultInput";
import { DefaultLabel } from "src/components/atoms/label/DefaultLabel";

export const RequiredInputForm = (props) => {
  const { children, type, id, placeholder, arial, register, htmlFor } = props;
  return (
    <>
      <DefaultLabel htmlFor={htmlFor}>
        {children}
        <span className="text-red-700">*</span>
      </DefaultLabel>
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
