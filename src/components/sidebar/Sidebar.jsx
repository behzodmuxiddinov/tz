import React from 'react'
import {useTranslation} from 'react-i18next'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ toggle, setToggle }) => {
    const {t, i18n} = useTranslation()
  return (
    <div className={`${toggle ? " absolute z-50 w-full bg-transparent h-screen animate__animated animate__fadeInLeft" : 'animate__animated animate__fadeOutLeft'}`}>
        
        <div className='bg-blue-900 flex flex-col items-end justify-around h-screen w-1/2 text-start text-2xl text-white border-white px-5 py-11' onClick={() => setToggle(false)}>
        <CloseIcon className='scale-150 '/>
        <Link to={'/'} className='uppercase w-full border-b-4  '>{t("home")}</Link>
        <Link to={'/services'} className='uppercase w-full  border-b-4 '>{t("services")}</Link>
        <Link to={'/company'} className='uppercase w-full  border-b-4'>{t("company")}</Link>
        <Link to={"/articles"} className='uppercase w-full border-b-4'>{t("articles")}</Link>
        <Link to={"/portfolio"} className='uppercase w-full  border-b-4'>{t("portfolio")}</Link>
        <Link to={"/contacts"} className='uppercase w-full border-b-4'>{t("contacts")}</Link>
        </div>
    </div>
  )
}

export default Sidebar