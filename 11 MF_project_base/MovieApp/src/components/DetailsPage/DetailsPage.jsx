import React, { Suspense } from "react";
import "./DetailsPage.scss";
import { useLocation, useHistory } from "react-router-dom";

const DetailsContent = React.lazy(() => import("detail/DetailsContent"));

const DetailsPage = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="title">
        <DetailsContent location={location} history={history}></DetailsContent>
      </div>
    </Suspense>
  );
};

export default DetailsPage;
