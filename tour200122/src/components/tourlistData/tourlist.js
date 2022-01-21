import React, { useState } from "react";
import "../tourlistData/tourlist.css";

const Tourlist = ({ tour, deleteTourinList }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, info, image, price, name } = tour;
  // const expandText = () => {
  //   if (readMore) {
  //     setReadMore(false);
  //   } else {
  //     setReadMore(true);
  //   }
  // };

  return (
    <div className="list-container">
      <img src={image} alt="Paris Tour" />
      <div className="info__container">
        <div className="heading__price">
          <h4>{name}</h4>
          <p>&#8377;{price}</p>
        </div>
        <div className="place__description">
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="hide__seek__btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Show less" : "Read more"}
            </button>
          </p>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={() => deleteTourinList(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tourlist;
