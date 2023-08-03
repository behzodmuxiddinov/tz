import React from 'react'
import { Link } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from 'react-i18next';

const HomePage = ({ setModal, name, setName, phone, setPhone, email, setEmail, purpose, setPurpose, message, setMessage,saveData }) => {

  const { t } = useTranslation()
  return (
    <div className="w-full  pt-5 flex flex-col">
      <div className='w-1/2 flex flex-col justify-between items-start px-11 mb-11'>
        <h3 className='font-bold uppercase'>{t("welcome")}</h3>
        <h1 className='font-bold text-6xl uppercase w-full leading-relaxed lg:text-3xl lg:mb-2'>
          {t("develop")}
        </h1>
        <div className='w-full flex justify-start lg:flex-col lg:justify-between lg:min-h-[150px]'>
          <button className='bg-green-600 mr-5 flex justify-center items-center px-5 py-4 uppercase font-normal rounded-md cursor-pointer lg:mb-2' onClick={() => setModal(true)} >
          {t("conditions")}
          </button>
          <Link to={"/portfolio"} className="flex justify-center items-center px-5 py-4 uppercase font-normal rounded-md cursor-pointer border-2 border-green-500">
          {t("seeportfolio")}
          </Link>
        </div>
      </div>
      <div className='w-full bg-[url("../../../public/bg_prod.webp")] flex flex-col px-11 pb-[100px] pt-[50px] mt-7'>
        <h1 className='text-5xl font-normal max-w-3xl mb-9'>
          {t("help")}
        </h1>
        {/* <div className='w-full flex flex-wrap justify-between'>
          {t("purposes",{ returnObjects: true })?.map((item) => (
            <Link to={`/${item}`} key={item} className='w-1/5 px-5 py-16 relative box-border bg-white rounded-md grid justify-items-stretch items-end text-center break-words mt-5 mr-4 uppercase hover:scale-105 duration-500 font-semibold hover:bg-blue-900 hover:text-white lg:w-[45%]'>
              {item.replace(/-/g, ' ')}
              <h3 className='absolute bottom-3 right-3 flex justify-self-end text-gray-600 h-max text-2xl opacity-25'>{`${t("purposes",{ returnObjects: true })?.indexOf(item) > 8 ? '' : '0'}${t("purposes",{ returnObjects: true })?.indexOf(item)+1}`}</h3>
            </Link>
          ))}
        </div> */}
      </div>
      <div className='w-full bg-gray-700 flex px-11 py-[100px] justify-around lg:flex-col'>
        <div className='w-1/2 flex flex-col justify-between items-center border-4 border-green-700 p-11 rounded-md relative lg:w-full'>
          <div className='flex flex-col '>
            <h1 className='text-white font-bold text-5xl uppercase'>
              {t("who")}
            </h1>
            <h3 className='text-green-700 font-bold mt-3'>
              {t("we")}
            </h3>
            <h3 className='text-white font-bold mt-3'>
              {t("wedo")}
            </h3>
          </div>
          <div className='flex flex-col'>
              <h3 className='text-green-700 font-bold mt-3 text-2xl'>
                {t("principle")}
              </h3>
              <h3 className='text-white font-bold mt-3'>
                {t("level")}
              </h3>  
          </div>
          <div className='w-max p-2 bg-gray-700 absolute -bottom-7 right-5'>
            <button className='bg-green-600 flex  justify-center items-center px-5 py-4 uppercase font-normal rounded-md cursor-pointer' onClick={() => setModal(true)} >
              {t("conditions")}
            </button>
          </div>
        </div>
        <div className='flex flex-wrap justify-around items-stretch w-[40%] px-11 lg:w-full lg:mt-7'>
          <div className='max-w-[220px] flex flex-col'>
            <h1 className='text-8xl bg-clip-text bg-gradient-to-r from-black to-white text-transparent font-semibold'>12+</h1>
            <h2 className='text-2xl text-white'>
              {t("success")}
            </h2>
          </div>
          <div className='max-w-[220px] flex flex-col'>
            <h1 className='text-8xl bg-clip-text bg-gradient-to-r from-black to-white text-transparent font-semibold'>150+</h1>
            <h2 className='text-2xl text-white'>
              {t("completed")}
            </h2>
          </div>
          <div className='max-w-[220px] flex flex-col'>
            <h1 className='text-8xl bg-clip-text bg-gradient-to-r from-black to-white text-transparent font-semibold'>250+</h1>
            <h2 className='text-2xl text-white'>
              {t("satisfied")}
            </h2>
          </div>
          <div className='relative max-w-[300px] flex justify-center items-center bg-lime-500 px-5 py-4 mt-4 rounded-md text-2xl font-semibold'>
            {t("challenging")}
            <img src="../../../public/ar_text.svg" alt="" className='absolute -top-4 left-0'/>
          </div>
        </div>
      </div>
      <div className='w-full flex py-11 px-9 justify-around lg:flex-col '>
        <img src="../../../public/foto.webp" alt="" />
        <div className='flex flex-col justify-between w-1/3 lg:w-full'>
          <h1 className='text-5xl font-bold'>
            {t("why")}
          </h1>
          <ul className='w-full px-11 lg:mt-8'>
            <li className="list-none relative mb-3 w-full ">
              <div className='absolute -left-10 w-fit h-fit p-0.5 rounded-full top-1 scale-95 text-white bg-black'><CheckIcon/></div>
              <h2 className="text-2xl font-semibold w-full">
                {t("projects")}
              </h2>
              <h3 className='mt-3'>
                {t("forget")}
              </h3>
            </li>
            <li className="list-none relative mb-3">
              <div className='absolute -left-10 w-fit h-fit p-0.5 rounded-full top-1 scale-95 text-white bg-black'><CheckIcon/></div>
              <h2 className="text-2xl font-semibold">
                {t("support")}
              </h2>
              <h3 className='mt-3'>
                {t("managing")}
              </h3>
            </li>
            <li className="list-none relative">
              <div className='absolute -left-10 w-fit h-fit p-0.5 rounded-full top-1 scale-95 text-white bg-black'><CheckIcon/></div>
              <h2 className="text-2xl font-semibold">
                {t("guarantee")}
              </h2>
              <h3 className='mt-3'>
                {t("contract")}
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <div className=' w-full bg-[url("../../../public/bg_prod.webp")] flex justify-center items-center pb-[50px]  mt-7'>
        <div className='relative w-1/2 lg:w-full'>
          <h2 className='absolute z-30 left-[60%] top-5 font-bold text-4xl uppercase min-w-[400px] lg:left-6'>
            {t("start")}
          </h2>
          <span className='absolute z-30 left-[50%] w-1 bg-white h-full top-0 lg:hidden'></span>
          <ul className='w-full min-h-[800px]'>
            <li className='absolute left-0 top-[10%]  w-1/3 px-5 py-16 box-border bg-white rounded-md grid justify-items-stretch  text-center break-words  uppercase hover:bg-green-500 hover:text-white duration-500 font-semibold list-none'>
              {t("request")}
            </li>
            <li className='absolute top-[25%] right-0 w-1/3 px-5 py-16 box-border bg-white hover:text-white rounded-md grid justify-items-stretch items-end text-center break-words  uppercase hover:bg-green-500 duration-500 font-semibold list-none lg:top-[10%]'>
              {t("manager")}
            </li>
            <li className='absolute left-0 top-[40%]  w-1/3 px-5 py-16  box-border bg-white hover:text-white rounded-md grid justify-items-stretch items-end text-center break-words  uppercase hover:bg-green-500 duration-500 font-semibold list-none lg:top-[35%]'>
              {t("wedevelop")}
            </li>
            <li className='w-1/3 px-5 py-16 absolute right-0 top-[55%]  box-border bg-white hover:text-white rounded-md grid justify-items-stretch items-end text-center break-words  uppercase hover:bg-green-500 duration-500 font-semibold list-none lg:top-[35%]'>
              {t("team")}
            </li>
            <li className='w-1/3 px-5 py-16 absolute top-[70%] left-0 box-border bg-white hover:text-white rounded-md grid justify-items-stretch items-end text-center break-words  uppercase hover:bg-green-500 duration-500 font-semibold list-none lg:top-[60%]'>
              {t("enjoy")}
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full relative bg-gray-900 min-h-[550px] flex flex-col items-center justify-around lg:min-h-[1000px]'>
        <div className='w-1/3 absolute text-white top-[50px] left-[10%] lg:relative  lg:w-2/3 lg:left-0'>
          <h1 className='font-bold text-4xl text-center'>{t("lets")}</h1>
          <h3 className='font-semibold mt-5'>{t("wishes")}</h3>
        </div>
        <form className='w-[40%]  bg-green-600 text-green-900 px-5 py-8 flex flex-col items-center rounded-md absolute -top-[15%] right-[70px] lg:relative lg:left-0 lg:w-[80%] '>
                <h1 className='text-2xl text-black text-center w-[70%] mb-7 font-bold uppercase '>{t("questions")}</h1>
                <div className='flex w-full justify-between'>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={t("namePlaceholder")} className='w-[49%] py-4 border-green-900 px-3 rounded-md border-2 text-2xl font-semibold mb-3'/>
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t("phonePlaceholder")} className='border-green-900 w-[49%] py-4 px-3 rounded-md border-2  text-2xl font-semibold mb-3' />
                </div>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("emailPlaceholder")} className='w-full py-4 px-3 border-green-900 rounded-md border-2  text-2xl font-semibold mb-3' />
                <select name="" id=""  onChange={(e) => {setPurpose(e.target.value)}} className='w-full py-4 px-3 rounded-md border-2 text-2xl font-semibold mb-3 border-green-900'>
                    {t("purposes",{ returnObjects: true })?.map((item) => (
                        <option key={item} value={item}>{item.replace(/-/g, ' ')}</option>
                    ))}
                </select>
                <textarea onChange={(e) => setMessage(e.target.value)} type="text" className='uppercase w-full py-5  px-3 rounded-md border-2 border-green-700 text-2xl align-baseline text-start  font-semibold mb-3 min-h-[150px]' placeholder={t("ideas")} />
                <button onClick={saveData} className={`m-0 px-4 py-3 bg-green-500 font-bold rounded-md text-white flex justify-center items-center uppercase ${name == '' | phone == '' | email == '' | purpose == '' | message == '' ? 'opacity-50' : ''} `} disabled={name == '' | phone == '' | email == '' | purpose == '' | message == '' ? true : false}>
                    {t("submit")}
                </button>
            </form>
      </div>
    </div>
  )
}

export default HomePage