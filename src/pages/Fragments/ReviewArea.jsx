import React, { useState, useEffect } from 'react';
import "../Styles/Home.css";
import { toast } from 'react-hot-toast';

const ReviewArea = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [reviewData, setReviewData] = useState({
    stars: "",
    review: "",
    name: ""
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { review, name } = reviewData;
    setIsButtonDisabled(!(review && name));
  }, [reviewData]);

  function changeColour(index) {
    setActiveIndex(index);
    setReviewData(prevData => ({ ...prevData, stars: index + 1 }));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setReviewData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(reviewData);
    toast.success(`Thanks ${reviewData.name} We are Blessed to have your feedback..`);
  }

  return (
    <>
      <h1>Your reviews matter!</h1>
      <div>
        <p style={{ marginRight: "20px" }}>Stars:</p>
        {[0, 1, 2, 3, 4].map((pass, index) => (
          <img
            key={index}
            src='/gama_audios/star.svg'
            onClick={() => changeColour(index)}
            style={{ filter: `grayscale(${index <= activeIndex ? 0 : '100%'})` }}
            alt="star"
          />
        ))}
      </div>
      <br />
      <div className='review_content'>
        <textarea
          name="review"
          id="review"
          placeholder='Give us feedback or comment on your experience...'
          value={reviewData.review}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className='review_name'>
        <textarea
          required
          name="name"
          id="name"
          placeholder='Your name here...'
          value={reviewData.name}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="radio_buttons">
        <input type="radio" name="male" id="male" />Male
        <input type="radio" name="male" id="male" />Female
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <input
          type="submit"
          onClick={handleSubmit}
          style={{ width: "100px", height: "30px" }}
          disabled={isButtonDisabled}
        />
      </div>
    </>
  );
}

export default ReviewArea;
