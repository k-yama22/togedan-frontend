import React from "react";

export const FormLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="bg-gray-500 flex flex-col items-center justify-center min-h-hull md:min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-10 md:px-20 text-center">
          <div className="container mx-auto h-full flex flex-1 justify-center items-center">
            <div className="w-full max-w-2xl">
              <h1 className="bg-green-100">Together Dance</h1>
              <div className="leading-loose">
                <div className="max-w-2xl m-4 p-5 md:p-10 bg-white bg-opacity-25 rounded shadow-xl">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
