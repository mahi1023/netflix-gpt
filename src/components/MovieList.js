import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  console.log(movies);
  return (
    <div className="px-6">
        {/*Here we have used overflow-x-scroll to scroll all the images */}
        <h2 className=" text-3xl py-4 text-white">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((obj) => {
            return <MovieCard key={obj.id} posterPath={obj.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
