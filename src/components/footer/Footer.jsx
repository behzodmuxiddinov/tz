import React from 'react'
import { useTranslation } from "react-i18next"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from 'react-router-dom'

const Footer = () => {

    const { t, i18n } = useTranslation()

  return (
    <div className="w-full bg-black text-white px-10 py-[50px] flex justify-between lg:flex-col lg:items-center">
        <div className='flex flex-col justify-between items-start w-1/4 lg:w-[80%] lg:items-center'>
            <h1 onClick={() => location.reload()} className='text-2xl font-bold cursor-pointer mb-3 lg:w-[30%] lg:text-center'>Webline</h1>
            <h2 className='w-full break-words lg:text-center'>
                {t("doing")}
            </h2>
            <div className='flex w-1/2 justify-between items-center mt-3 lg:my-11 lg:justify-between lg:w-[40%]'>
                <Link to="https://www.instagram.com/webline.uz/" className='p-2 bg-gray-700 rounded-full flex justify-center items-center'>
                    <InstagramIcon/>
                </Link>
                <Link to="https://www.facebook.com/webline.one" className='p-2 bg-gray-700 rounded-full flex justify-center items-center'>
                    <FacebookIcon/>
                </Link>
                <Link to="https://t.me/weblineuz" className='p-2 bg-gray-700 rounded-full flex justify-center items-center'>
                    <TelegramIcon/>
                </Link>
            </div>
        </div>
        <div className='w-1/5 flex flex-col justify-center items-start lg:items-center lg:w-[50%]'>
            <div className='flex items-center'>
                <span className='mr-2'><LocationOnIcon/></span>
                <h3 className='uppercase'>
                    {t("location")}    
                </h3> 
            </div>
            <div className='flex mt-3 items-center'>
                <span><SmartphoneIcon/></span>
                <h3 className='ml-2'>+998 [97] 155-84-94 <br /> +998[95] 177-84-94</h3>
            </div>
            <div className='flex mt-3'>
                <span><MarkunreadIcon/></span>
                <Link to="info@webline.uz" className='uppercase ml-2'>info@webline.uz</Link>
            </div>
        </div>
        <div className='w-1/3 flex flex-col justify-between items-end pr-3 lg:my-9 lg:items-center  lg:w-2/3'>
            <div className='flex flex-col w-max uppercase items-end lg:items-center lg:mb-8'>
                <Link to={t("privacy")}>
                {t("privacy")}
                </Link>
                <span className='scale-150 mt-5 cursor-pointer' onClick={() => window. scrollTo({ top: 0, left: 0})}><ArrowCircleUpIcon/></span>
            </div>
            <h2 className='lg:text-center'>Copyright © 2010-2023 Webline/ All rights reserved.</h2>
        </div>
    </div>
  )
}

export default Footer