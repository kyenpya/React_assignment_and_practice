import { useState } from "react";
import {FaTimes} from "react-icons/fa"

// displays the cards
function ReviewItem({ review, deleteReview}) {



  return (
    <>
      <div className="card">
        <div className="num-display">{review.rating}</div>
        <div className="text-display">{review.text}</div>
        <button className="close" onClick={()=> deleteReview(review.id)}>
          <FaTimes/>
        </button>
      </div>
    </>
  );
}
export default ReviewItem;
