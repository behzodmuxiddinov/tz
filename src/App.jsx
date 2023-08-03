import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomePage from './components/pages/HomePage'
import Header from './components/header/Header'
import Modal from './components/modal/Modal'
import Footer from './components/footer/Footer'
import Message from './components/messageWindow/Message'
import Sidebar from './components/sidebar/Sidebar'
import Services from './components/pages/Services'
import Portfolio from './components/pages/Portfolio'
import Contacts from './components/pages/Contacts'
import Company from './components/pages/Company'
import Articles from './components/pages/Articles'

function App() {
  const [modal, setModal] = useState(false)
  const [msg, setMsg] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState('')
  const [message, setMessage] = useState('')
  const [toggle, setToggle] = useState(false)

  const saveData = (e) => {
    e.preventDefault()
    let data = []
    let infos = {
        userName : name,
        userPhone : phone,
        userEmail : email,
        userPurpose : purpose,
        userMessage : message
    }
    data.push(infos)
    localStorage.setItem('userData', JSON.stringify(data))
    setModal(false)
    setMsg(true)
  }

  return (
    <>
      {modal && <Modal 
        setModal={setModal} 
        setMsg={setMsg} 
        name={name} 
        setName={setName} 
        phone={phone} 
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        purpose={purpose}
        setPurpose={setPurpose}
        saveData={saveData}
      />}
      {msg && <Message  setMsg={setMsg}/>}
      {toggle && <Sidebar toggle={toggle} setToggle={setToggle}/>}
      <div className={`w-full flex flex-col items-center  bg-gradient-to-r from-indigo-800 ${modal | msg | toggle ? 'blur-sm h-screen overflow-hidden' : ''}`}>
        <Header setModal={setModal} modal={modal} msg={msg} toggle={toggle} setToggle={setToggle}/>
        <Routes>
          <Route index element={<HomePage 
            setModal={setModal} 
            msg={msg} 
            name={name} 
            setName={setName} 
            phone={phone} 
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            purpose={purpose}
            setPurpose={setPurpose}
            message={message}
            setMessage={setMessage}
            saveData={saveData}
          />}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/articles" element={<Articles/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/company" element={<Company/>}></Route>
        </Routes>
        <Footer modal={modal} msg={msg} />
      </div>
    </>
  )
}

export default App
