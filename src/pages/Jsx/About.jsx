import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import "../Styles/universal.css"
import "../Styles/About.css"


const About = () => {
  const [mainVisible, setMainVisible] = useState(true);

  const toggleMainVisibility = (isVisible) => {
    setMainVisible(isVisible);
  };
  return (
    <><nav><Nav toggleMainVisibility={toggleMainVisibility} /></nav>
      {mainVisible && (<main>
        <div className="content">

          <div className="about_contents">
            <div>
              <h1 className="about_headigs">
                About Gama Audios
              </h1>
              <p>Welcome to Gama Audios! We are a young and dynamic startup, dedicated to creating accessible tools and resources for searching, watching, and saving data from various social media platforms. Founded in July 2024, we started our journey from a small, cozy workspace nestled in the hills of Northeast India.
              </p>
              <br />
              <h1 className="about_headigs">Our Mission and Current Stage</h1>
              <p>Currently, Gama Audios is in its beta stage, and we are excited to offer a limited range of services, including our powerful search APIs and video downloading tools. As we continue to develop and expand, we invite you to explore and use our website extensively to help us test and improve our offerings.
              </p>
            </div>

            <div>
              <h1 className="about_headigs">Engage with Us
              </h1>
              <p><b>Blogs: </b>Visit our for daily interactive blogs where we share updates, insights, and stories related to our journey and technology.
              </p>
              <p><b>Social Medias: </b>Connect with us on our Youtube, Instagram and twitter for our updates..
              </p>
              <p>We appreciate your support and look forward to growing with you. Thank you for being part of our journey!
              </p>
            </div>
            <div>
              <h1 className="about_headigs">Privacy Protection</h1>
              <p><b>Gama Audios</b> is committed to providing a secure and reliable method for downloading MP3s. While we strive to ensure the highest level of security, it’s important to recognize that no internet service can guarantee complete safety. We take numerous measures to protect your data.
              </p>
              <p><b>Data Protection Measures:</b></p>
              <p>1. <b>Secure APIs:</b> We use a combination of our proprietary search API and a trusted third-party API for downloading music. This allows us to efficiently deliver content while maintaining robust security standards.
              </p>
              <p>2. <b>Your Data is Safe:</b>Your personal data is fully protected on our end. We do not save, share, or sell your information to any third parties. Our systems are designed to respect your privacy and ensure that your data remains confidential.
              </p>
              <p>3. <b>Third-Party API:</b> The third-party API we use for downloading music is subject to its own privacy and security policies. You can learn more about their practices by visiting their privacy policy page</p>
            </div>
            <div>
              <h1>Liability Notice:</h1>
              <p>Gama Audios takes all possible steps to secure your data while using our service. However, we are not responsible for any data breaches or leaks that occur outside our direct control, such as those caused by user actions or external factors beyond our influence.

                We highly recommend you review and understand the privacy practices of any third-party services linked to our platform.</p>
            </div>
          </div>

        </div>
        <div className="logos">
          <img src="/gama_audios/insta.svg" alt="" /><img src="/gama_audios/youtube.svg" alt="" /><img src="/gama_audios/github.svg" alt="" />
        </div>
        <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
      </main>)}
    </>
  )
}

export default About
