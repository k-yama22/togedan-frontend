export const DefaultTitle = (props) => {
  const { children } = props;
  return (
    <div className="bg-gray-600">
      <div className="flex relative text-center">
        <h1 className="text-3xl tracking-wider text-white text-sha font-bold p-4 self-center z-10 content-center text-center w-full md:text-4xl">
          {children}
        </h1>
      </div>
    </div>
  );
};
