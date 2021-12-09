export const DefaultLabel = (props) => {
  const { htmlFor, children } = props;
  return (
    <label className="block text-sm text-white" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
