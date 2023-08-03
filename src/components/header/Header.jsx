import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import i18n from '../i18next'

const Header = ({ setModal, toggle, setToggle }) => {
  const { t } = useTranslation()
  const change = (e) => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <header className="w-full flex justify-between py-10 px-6 border-black border-b-2 sm:flex-col">
        <div className='hidden w-[5%] h-[40px] lg:flex flex-col justify-center relative overflow-hidden z-40' onClick={() => setToggle(!toggle)}>
          <span className="w-full h-[4px] rounded-md -translate-y-[15px] bg-white absolute" ></span>
          <span className="w-full rounded-md h-[4px] bg-white absolute"></span>
          <span className="w-full rounded-md h-[4px] translate-y-[15px] bg-white absolute"></span>
        </div>
        <Link to={'/'} className='uppercase text-3xl font-bold w-max '>webline</Link>
        <div className='w-1/2 flex flex-wrap justify-start items-center font-semibold lg:hidden'>
          <Link to={'/'} className='uppercase mr-4'>{t("home")}</Link>
          <Link to={'/services'} className='uppercase mr-4'>{t("services")}</Link>
          <Link to={'/company'} className='uppercase mr-4'>{t("company")}</Link>
          <Link to={"/articles"} className='uppercase mr-4'>{t("articles")}</Link>
          <Link to={"/portfolio"} className='uppercase mr-4'>{t("portfolio")}</Link>
          <Link to={"/contacts"} className='uppercase'>{t("contacts")}</Link>
        </div>
        <button className='m-0 px-4 py-3 bg-green-800 font-bold rounded-md text-white flex justify-center items-center uppercase' onClick={() => {
          setModal(true)
        }}>
            {t("connect")}
        </button>
        <select value={i18n.lng} onChange={change} className='uppercase bg-transparent cursor-pointer font-bold'>
          <option>eng</option>
          <option>uz</option>
          <option>ru</option>
        </select>
      </header>
  )
}

export default Header