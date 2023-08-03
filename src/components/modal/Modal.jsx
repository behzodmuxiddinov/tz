import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Modal = ({ setModal, name, setName, phone, setPhone, email, setEmail, purpose, setPurpose, saveData }) => {

    const {t, i18n} = useTranslation()
    
    

    
    
  return (
    <div className='w-full  flex justify-center items-center fixed z-50 top-0 py-11 h-screen animate__animated animate__backInDown' >
        <div className='w-full relative z-10 h-screen' onClick={() => setModal(false)}></div>
        <div className='w-1/3 px-5 py-4 flex flex-col items-center justify-between bg-white fixed z-50 top-10 rounded-md'>
            <h1 className='mb-5 w-full text-2xl font-bold text-center break-words'>
                {t("contactyou")}
            </h1>
            <form className='w-full bg-white px-5 py-8 flex flex-col items-center rounded-md'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} className='w-full py-4 px-3 rounded-md border-2 border-black text-2xl font-semibold mb-3' />
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("phonePlaceholder")} className='w-full py-4 px-3 rounded-md border-2 border-black text-2xl font-semibold mb-3' />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("emailPlaceholder")} className='w-full py-4 px-3 rounded-md border-2 border-black text-2xl font-semibold mb-3' />
                <select name="" id=""  onChange={(e) => {setPurpose(e.target.value)}} className='w-full py-4 px-3 rounded-md border-2 border-black text-2xl font-semibold mb-3'>
                    {t("purposes",{ returnObjects: true })?.map((item) => (
                        <option key={item} value={item}>{item.replace(/-/g, ' ')}</option>
                    ))}
                </select>
                <button onClick={saveData} className={`m-0 px-4 py-3 bg-green-500 font-bold rounded-md text-white flex justify-center items-center uppercase ${name == '' | phone == '' | email == '' | purpose == '' ? 'opacity-50' : ''} `} disabled={name == '' | phone == '' | email == '' | purpose == '' ? true : false}>
                    {t("submit")}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Modal