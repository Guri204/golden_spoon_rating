import React, { useState } from 'react';
import Star from '../components/Star';

const messages = ["Very Bad", "Bad", "Okay", "Good", "Excellent"];

function StarRating() {
  const [selectedStars, setSelectedStars] = useState(0);
  const ratingStar = [0,1,2,3,4];

  return (
    <div>
      <div className="star-container">
        {ratingStar.map((index) => (
          <Star
            key={index}
            selected={index < selectedStars}
            onClick={() => setSelectedStars(index + 1)}
          />
        ))}
      </div>
      <h2 className="star-message">
        {selectedStars > 0 ? messages[selectedStars - 1] : "Rate Us"}
      </h2>
    </div>
  );
}

export default StarRating;
