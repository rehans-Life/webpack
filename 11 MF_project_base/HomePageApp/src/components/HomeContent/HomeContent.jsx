import React, { Suspense, useEffect, useState } from "react";
import { RoutingContext } from "../../Contexts.js";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";
const MovieCard = React.lazy(() => import("component/MovieCard"));

const dummyItem = [{ name: "Dummy Movie" }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5555/movies");
      const data = await res.json();

      setMovies(data);
    })();
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const RenderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <MovieCard title={item.name} {...item} />
        </div>
      );
    });

    return items;
  };

  return (
    <RoutingContext.Provider value={props.routing}>
      <div className="home-content-container">
        <QuickBooking></QuickBooking>
        <div className="movies-container">
          <Suspense fallback={<div>Loading...</div>}>
            <RenderMovieList />
          </Suspense>
        </div>
      </div>
    </RoutingContext.Provider>
  );
};

export default HomeContent;
