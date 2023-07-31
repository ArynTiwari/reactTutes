import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const totalStars = 5;
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const handleClick = (selectedRating) => {
    if (selectedRating === rating) {
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <>
      <div className="flex" onMouseLeave={handleMouseLeave}>
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index)}
            style={{
              cursor: "pointer",
              marginRight: "5px",
              color:
                (hover !== null && index <= hover) || index < rating
                  ? "#ffc107"
                  : "#e4e5e9",
            }}
          />
        ))}
      </div>
      <div>
        {rating !== 0
          ? `You've rated this ${rating} stars.`
          : "Please rate this."}
      </div>
    </>
  );
};

export default StarRating;
