import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import "../Styles/universal.css"
const About = () => {
  const [mainVisible, setMainVisible] = useState(true);

  const toggleMainVisibility = (isVisible) => {
    setMainVisible(isVisible);
  };
  return (
    <><nav><Nav toggleMainVisibility={toggleMainVisibility} /></nav>
      {mainVisible && (<main>
        <div className="content">
          About
        </div>
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>)}
    </>
  )
}

export default About
