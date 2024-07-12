import React, { Suspense } from "react";
import "./Homepage.scss";
import { useHistory, useLocation } from "react-router-dom";

const HomeContent = React.lazy(() => import("home/HomePage"));

const Homepage = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Suspense fallback={<>Loading..</>}>
      <div className="title">
        <HomeContent
          routing={{
            history,
            location,
          }}
          movieClicked={(item) => {
            console.log(item);
            history.push(`/details/${item.id}`);
          }}
        ></HomeContent>
      </div>
    </Suspense>
  );
};

export default Homepage;
