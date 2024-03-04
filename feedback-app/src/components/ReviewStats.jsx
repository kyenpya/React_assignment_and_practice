import React from "react";

function ReviewStats({reviews}) {
  let average = reviews.reduce((acc, cur) => {
    return acc + cur.rating}, 0)/reviews.length

    average = average.toFixed(1)

  return (
    <div className="review-stats">
      <p>{reviews.length} Reviews</p>

      <p>{isNaN(average) ? 0: average}</p>
    </div>
  );
}

export default ReviewStats;
