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
        id: "toastId",
        duration: 4000,
        style: {
          whiteSpace: "pre-line",
          maxWidth: "600px",
          lineHeight: "2",
          fontWeight: "bold",
        },
      });
    }
  };
  return { showNotify };
};
