import React from "react";


function CardList(props) {
  console.log(props);
  const { birthdayList } = props;
  const { name, age, image_url } = birthdayList;
  return (
    <li className="birthday-list">
      <img src={image_url} alt="person dp" className="birthday-list-image" />
      <div className="list-details">
        <h4>{name}</h4>
        <p>
          <span>{age}</span> years
        </p>
      </div>
    </li>
  );
}

export default CardList;
