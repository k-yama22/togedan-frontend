import React from "react";
import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
