import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaQuoteRight } from "react-icons/fa";
import "../review/review.css";

// const obj = {
//   id: 2,
//   name: "anna johnson",
//   job: "web designer",
//   image:
//     "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//   text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
// };

const Review = ({ data }) => {
  const dataLength = data.length;
  const [track, setTrack] = useState(0);
  // console.log(track);
  const [reviewData, setReviewData] = useState(data[track]);

  const previousTrack = () => {
    if (track === 0) {
      setTrack(dataLength - 1);
      setReviewData(data[dataLength - 1]);
    } else {
      setTrack(track - 1);
      setReviewData(data[track - 1]);
    }
  };

  const nextTrack = () => {
    if (track === dataLength - 1) {
      setTrack(0);
      // console.log(data[track]);
      setReviewData(data[0]);
    } else {
      setTrack(track + 1);
      setReviewData(data[track + 1]);
    }
  };

  const randomChoice = () => {
    let randomIndex = Math.floor(Math.random() * dataLength);
    // console.log(randomIndex);
    setReviewData(data[randomIndex]);
  };

  // useEffect(() => {
  //   setTrack(0);
  // }, []);

  return (
    <div className="container">
      <div className="sub__container">
        <div className="image__container">
          <div className="back__circle"></div>
          <div className="quote__container">
            <img src={reviewData.image} alt="" />
            <div className="quote">
              <FaQuoteRight />
            </div>
          </div>
        </div>
        <h3>{reviewData.name}</h3>
        <h4>{reviewData.job}</h4>
        <p>{reviewData.text}</p>

        <div className="navigation__btn">
          <button className="prev" onClick={previousTrack}>
            <FcPrevious />
          </button>
          <button className="next" onClick={nextTrack}>
            <FcNext />
          </button>
        </div>

        <div className="surprise__btn">
          <button className="surprise__me" onClick={randomChoice}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
