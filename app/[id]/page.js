import CompanyCard from "@/components/CompanyCard";
import GenreCard from "@/components/GenreCard";
import Image from "next/image";
import Link from "next/link";

async function MoviePage({ params: { id } }) {
  const image_path = "https://image.tmdb.org/t/p/original";
  const movieData = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const res = await movieData.json();
  return (
    <div className="max-w-5xl mx-auto mt-5 p-3">
      <Image
        src={image_path + res.backdrop_path}
        height={300}
        width={1000}
        className="object-contain rounded-lg mx-auto"
      />
      <h2 className="text-4xl font-bold mt-2">{res.original_title}</h2>
      <div className="flex items-center flex-wrap mt-3">
        {res.genres.map((genre) => (
          <GenreCard key={genre.id} genreType={genre.name} />
        ))}
      </div>

      <p className="mt-2">{res.overview}</p>

      <p className="bg-green-400 inline-block py-2 px-3 rounded-lg mt-2">
        Popularity: {res.popularity}
      </p>

      <p className="text-xl font-bold mt-3">Production Companies</p>
      <div className="flex items-center justify-evenly m-4 overflow-x-auto">
        {res.production_companies.map((company) => (
          <CompanyCard
            key={company.id}
            logo={company.logo_path}
            name={company.name}
            country={company.origin_country}
          />
        ))}
      </div>

      <p>Runtime: {res.runtime} minutes</p>
      <p className="bg-green-400 inline-block py-2 px-3 rounded-lg mt-3">
        {res.status}
      </p>
      <p className="mt-3">Release Date: {res.release_date}</p>
      <div className="flex items-center space-x-3 mt-3 mb-5">
        <p>Vote Average: {res.vote_average}</p>
        <p>Vote Count: {res.vote_count}</p>
      </div>

      <Link
        href={res.homepage}
        className="bg-green-400 py-2 px-4 text-sm font-semibold mt-3 rounded-lg"
      >
        Know More
      </Link>
    </div>
  );
}

export default MoviePage;
