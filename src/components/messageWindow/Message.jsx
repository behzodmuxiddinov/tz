import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next'

const Message = ({ setMsg }) => {
    const hideMsg = () => {
        setMsg(false)
    }
    const {t, i18n} = useTranslation()
  return (
    <div className='w-full flex justify-center items-center fixed z-50 top-0 h-screen uppercase'>
       <div className='w-full relative z-10 h-screen' onClick={() => setMsg(false)}></div>
       <div className='bg-green-800 w-1/4 p-11 fixed flex flex-col justify-between items-center rounded-md'>
        <CloseIcon className='scale-150 cursor-pointer w-4 h-4 bg-white rounded-full mb-4' onClick={hideMsg}/>
        <h1 className='text-2xl text-white text-center'>
            {t("msg")}
        </h1>
       </div>
    </div>
  )
}

export default Message