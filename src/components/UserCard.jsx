import { memo } from "react";

export const UserCard = memo((props) => {
  const {
    id,
    userName,
    lastName,
    firstName,
    email,
    buttonMessage,
    subButtonMessage,
    onClick,
  } = props;
  return (
    <div className='flex flex-col'>
      <div className='bg-white shadow-md  rounded-3xl p-4'>
        <div className='flex-none lg:flex'>
          <div className=' h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3'>
            <img
              src='https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80'
              alt='Just a flower'
              className=' w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl'
            />
          </div>
          <div className='flex-auto ml-3 justify-evenly py-2'>
            <div className='flex flex-wrap '>
              <div className='w-full flex-none text-xs text-blue-700 font-medium '>
                {userName}
              </div>
              <h2 className='flex-auto text-lg font-medium'>
                {lastName} {firstName}
              </h2>
            </div>
            <p className='mt-3'></p>
            <div className='flex py-4  text-sm text-gray-600'>
              <div className='flex-1 inline-flex items-center'>
                <p className=''>{email}</p>
              </div>
              <div className='flex-1 inline-flex items-center'>
                <p className=''>2021年6月25日 17:00〜</p>
              </div>
            </div>
            <div className='flex p-4 pb-2 border-t border-gray-200 '></div>
            <div className='flex space-x-3 text-sm font-medium'>
              <div className='flex-auto flex space-x-3'>
                <button className='mb-2 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 '>
                  <span>{subButtonMessage}</span>
                </button>
              </div>
              <button
                className='mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800'
                type='button'
                aria-label='like'
                onClick={() => onClick(id)}
              >
                {buttonMessage}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
