import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import "../Styles/universal.css"
const Contact = () => {
  return (
    <>
      <main>
        <nav><Nav /></nav>
        <div className="content">
          contacts
        </div>
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>
    </>
  )
}

export default Contact
