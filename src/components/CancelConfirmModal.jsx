import React, { useState } from "react";

export const CancelConfirmModal = (props) => {
  const { id, buttonMessage, eventName, onClick } = props;
  const [showModal, setShowModal] = useState(false);
  const [modalId, setSModalId] = useState();

  return (
    <>
      <button
        className="bg-red-500 text-white active:bg-red-600 h-14 font-bold text-xs md:text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none md:mr-1 md:mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          setShowModal(true);
          setSModalId(id);
        }}
      >
        {buttonMessage}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-red-200 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl text-gray-700 font-semibold">
                    削除確認
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-20 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-black-500 text-lg leading-relaxed">
                    ■{eventName}
                    <br />
                    <br />
                    上記の内容を削除しますがよろしいですか？
                    <br />
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    閉じる
                  </button>
                  <button
                    className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      onClick(modalId);
                      setShowModal(false);
                    }}
                  >
                    削除
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CancelConfirmModal;
