import ReviewItem from "./layout/ReviewItem";

// loops through the items to be displayed from the review-data, on the card, using the map method
function ReviewList({ reviews, deleteReview }) {
 

  if (!reviews || reviews.length === 0) {
    return (
      <div className="container">
        <p>No reviews yet!</p>
      </div>
    );
  }

  return (
    <>
      <div>
        {reviews.map((item) => (
          <div key={item.id}>
            <ReviewItem review={item} deleteReview={deleteReview}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewList;
