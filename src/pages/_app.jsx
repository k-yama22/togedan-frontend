import "tailwindcss/tailwind.css";
import "src/styles/global.css";
import { Toaster } from "react-hot-toast";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default MyApp;
