import React from 'react'
import "../Styles/UserReviews.css"
import "../Styles/universal.css"
const UserReviews = () => {
  return (
    <>
      <br />
      <h1 className='heading'>Reviews:</h1>
      <div className="user_review_main">
        <img src="/gama_audios/dog.png" alt="female" className='users_identity_img' />
        <div className="text_area">
          <div className="review_stars_class">
            <b>Stars:</b>
            <img src="/gama_audios/star.svg" className="review_stars" />
            <img src="/gama_audios/star.svg" className="review_stars" />
            <img src="/gama_audios/star.svg" className="review_stars" />
            <img src="/gama_audios/star.svg" className="review_stars" />
            <img src="/gama_audios/star.svg" className="review_stars" />
          </div>
          <p><b>Pepper Pots</b></p>
          <p>This is one of the best app to download music.. I loved it and respect for the maker</p>
        </div>
      </div>
    </>
  )
}

export default UserReviews
