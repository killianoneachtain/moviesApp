import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from '../components/reviewForm'

const ReviewFormPage = props => {

  return (
    <html>
    <head>
      <title>Add Moview Review</title>
    </head>
    <body>
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
      </body>
      </html>
  );
};
export default ReviewFormPage;