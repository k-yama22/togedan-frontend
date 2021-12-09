export const DefaultInput = (props) => {
  const { type, id, placeholder, arial, register } = props;
  return (
    <input
      className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
      type={type}
      id={id}
      placeholder={placeholder}
      arial-label={arial}
      {...register}
    />
  );
};
