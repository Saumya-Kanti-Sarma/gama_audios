import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import "../Styles/universal.css"
import "../Styles/Contact.css"


const Contact = () => {
  const [mainVisible, setMainVisible] = useState(true);

  const toggleMainVisibility = (isVisible) => {
    setMainVisible(isVisible);
  };
  return (
    <><nav><Nav toggleMainVisibility={toggleMainVisibility} /></nav>
      {mainVisible && (<main>
        <div className="content">
          <ul>
            <li><b>Gmail: </b>support@gamaaudios.com</li>
            <li><b>Founder: </b> Serean Miles</li>
            <li><b>Founder's email: </b> sereanmiles@gamaaudios.com</li>
            <li></li>
          </ul>
        </div>
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>)}
    </>
  )
}

export default Contact
