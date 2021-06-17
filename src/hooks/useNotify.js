import toast from "react-hot-toast";

export const useNotify = () => {
  const showNotify = (props) => {
    const { title, status } = props;
    if (status === "success") {
      toast.success(title, {
        duration: 4000,
      });
    } else if (status === "error") {
      toast.error(title, {
        duration: 4000,
      });
    }
  };
  return { showNotify };
};
