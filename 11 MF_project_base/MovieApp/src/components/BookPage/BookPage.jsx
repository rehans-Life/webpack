import React, { Suspense } from "react";
import "./BookPage.scss";

const SeatSelectionContent = React.lazy(() =>
  import("selection/SeatSelectionContent")
);

const BookPage = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="title">
        <SeatSelectionContent></SeatSelectionContent>
      </div>
    </Suspense>
  );
};

export default BookPage;
