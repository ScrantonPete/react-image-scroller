import React from "react";
import PropTypes from "prop-types";

const Card = ({ ad }) => {
  const { index, picture } = ad;
  return (
    <div id={`card-${index}`} className="card">
      <img src={process.env.PUBLIC_URL + "/assets/" + picture} alt="" />
      <div className="details">
        <span className="index">{index + 1}</span>
        <p> Your Ad Here!</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  ad: PropTypes.object.isRequired
};

export default Card;
