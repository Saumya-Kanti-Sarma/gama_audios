import React, { useEffect, useState } from 'react'
import "../Styles/UserReviews.css"
import "../Styles/universal.css"
import axios from 'axios'


const UserReviews = () => {

  //Showing reviews 
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await axios.get("https://gamaaudios-mongo-server.onrender.com/api/comment");
        setUserData(response.data);
        // await console.log(response.data);
      } catch (error) {
        console.error("Error fetching user reviews:", error);
      }
    };
    fetchUserReviews();
  }, []);

  return (
    <>
      <br />
      <h1 className='heading'>Reviews:</h1>
      {userData && userData.length > 0 ? (
        userData.map((item, index) => (
          <div className="user_review_main" key={index}>
            <img src={item.male ? "/gama_audios/dog.png" : "/gama_audios/cat.png"} alt="identity" className='users_identity_img' />
            <div className="text_area">
              <div className="review_stars_class">
                <b>Stars:</b>
                {[...Array(item.stars)].map((_, i) => (
                  <img src="/gama_audios/star.svg" className="review_stars" key={i} />
                ))}
              </div>
              <p><b>{item.name}</b></p>
              <p>{item.review}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </>
  );
};

export default UserReviews
