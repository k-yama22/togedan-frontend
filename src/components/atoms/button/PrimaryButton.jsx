export const PrimaryButton = (props) => {
  const { children, onClick, eventId } = props;
  return (
    <button
      className="flex mr-auto h-14 md:h-14 text-xs md:text-sm text-white font-bold items-center justify-center bg-teal-500 border-0 py-3 px-4 focus:outline-none hover:bg-teal-600 rounded"
      onClick={() => onClick(eventId)}
    >
      {children}
    </button>
  );
};
