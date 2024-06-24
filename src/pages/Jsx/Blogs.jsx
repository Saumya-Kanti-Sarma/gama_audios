import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import "../Styles/universal.css"
const Blogs = () => {
  const [mainVisible, setMainVisible] = useState(true);

  const toggleMainVisibility = (isVisible) => {
    setMainVisible(isVisible);
  };
  return (
    <><nav><Nav toggleMainVisibility={toggleMainVisibility} /></nav>
      {mainVisible && (<main>
        <div className="content">
          Blogs
        </div>
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>)}
    </>
  )
}

export default Blogs
