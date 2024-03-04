import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import ReviewList from "./components/ReviewList";
import data from "./data/review-data";
import ReviewStats from "./components/ReviewStats";
import ReviewForm from "./components/ReviewForm";

// we create our global state here in the app.jsx as it is the muster point for all components

function App() {
  const [review, setReview] = useState(data);

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header text="Review Application" msg="Will this work?" />

      <ReviewForm />

      <div className="container">
        <ReviewStats reviews={review} />

        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>
    </>
  );
}

export default App;
