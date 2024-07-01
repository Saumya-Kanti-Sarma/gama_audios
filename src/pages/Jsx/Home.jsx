import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import "../Styles/universal.css";
import "../Styles/Home.css";
import HomeMain from '../Fragments/HomeMain';
import DownloadExp from '../Fragments/DownloadExp';
import ReviewArea from '../Fragments/ReviewArea';
import UserReviews from '../Fragments/UserReviews';
const Home = () => {
  const [mainVisible, setMainVisible] = useState(true);

  const toggleMainVisibility = (isVisible) => {
    setMainVisible(isVisible);
  };

  return (
    <>
      <nav><Nav toggleMainVisibility={toggleMainVisibility} /></nav>
      {mainVisible && (
        <main>
          <div className="content home-content">
            <div className="content-area main_content">
              <HomeMain />
            </div>
            <div className="content-area how_to_use">
              <DownloadExp />
              <br />
              <div>
                <div className="review_area">
                  <ReviewArea />
                </div>
              </div>
            </div>
          </div>
          <UserReviews />
          <br />
          <br />
          <footer style={{ backgroundColor: "blueviolet" }}><Footer /></footer>
        </main>
      )}
    </>
  );
}

export default Home;