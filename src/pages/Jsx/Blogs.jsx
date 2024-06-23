import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import "../Styles/universal.css"
const Blogs = () => {
  return (
    <>
      <main>
        <nav><Nav /></nav>
        <div className="content">
          Blogs
        </div>
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>
    </>
  )
}

export default Blogs
