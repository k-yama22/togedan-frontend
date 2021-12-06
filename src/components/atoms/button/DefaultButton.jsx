import { Loading } from "src/components/Loading";

export const DefaultButton = (props) => {
  const { children, loading } = props;
  return (
    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">
      {loading ? <Loading /> : <>{children}</>}
    </button>
  );
};
