// import { GrAdd, GrSubtract } from "react-icons/gr";
import React, { useState } from "react";
import "../accordion/Accordion.css";

const Accordion = ({ data }) => {
  const { question, answer } = data;
  const [expand, setExpand] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion__content">
        <h3>{question}</h3>
        <div onClick={() => setExpand(!expand)} className="button">
          {expand ? <p className="para">&#8211;</p> : <p className="para">+</p>}
        </div>
      </div>
      {expand && <p className="accordion__para">{answer}</p>}
    </div>
  );
};

export default Accordion;
