import CardList from "../cardDetails/cardList";
import React, { useState } from "react";
import "../card/card.css";

const birthdayList = [
  {
    id: 1,
    name: "Anubhav Singh",
    age: 25,
    image_url:
      "https://i.pinimg.com/280x280_RS/14/56/7b/14567b19cc8f4d735860b4d62ae41452.jpg",
  },
  {
    id: 2,
    name: "Bertie Yates",
    age: 22,
    image_url:
      "https://i.pinimg.com/originals/d4/8c/1e/d48c1ec40edc6251e4c82148eb937a3e.jpg",
  },
  {
    id: 3,
    name: "Hester Hogan",
    age: 21,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSml2Uhy0kAWL4q4TJIlkqon1nVjMvYGP7TwsyBYFFjt3q6SKhsaLWRjT1lVFmiAydfe0&usqp=CAU",
  },
  {
    id: 4,
    name: "Lola Gardner",
    age: 38,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Po2q__kIxqsx-6_LVbElz8FisKG9Jxazjg&usqp=CAU",
  },
  {
    id: 5,
    name: "Sean Walsh",
    age: 51,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomdp51J_4z_NJcRFbbJ6KtWKEfyy5Z_wGVA&usqp=CAU",
  },
];

function Card() {
  const [person, setPerson] = useState(birthdayList);
  // const { birthdayList } = person;

  return (
    <div className="container">
      <div className="birthday-remainder-card-container">
        <h1>{person.length} birthdays today</h1>
        <ul className="list-container">
          {person.map((eachItem) => (
            <CardList birthdayList={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <button type="button" className="btn" onClick={() => setPerson([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Card;
