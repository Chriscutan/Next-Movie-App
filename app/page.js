import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const fetchMovies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`
  );

  const res = await fetchMovies.json();

  return (
    <main>
      <div className="max-w-5xl mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {res?.results?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.backdrop_path}
            release_date={movie.release_date}
            vote={movie.vote_average}
          />
        ))}
      </div>
    </main>
  );
}
