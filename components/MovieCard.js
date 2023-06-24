"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

function MovieCard({ id, title, poster_path, release_date, vote }) {
  const image_path = "https://image.tmdb.org/t/p/original";
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${id}`)}
      className="max-w-[200px] bg-white rounded-lg space-y-3 text-black p-3 cursor-pointer hover:scale-95 transition-transform duration-200 ease-out mb-5"
    >
      <Image
        src={image_path + poster_path}
        width={250}
        height={150}
        className="object-contain rounded-lg"
      />
      <h3 className="text-sm font-semibold">Name: {title}</h3>
      <p className="text-xs">Release Date: {release_date}</p>
      <p className="bg-green-400 inline-block py-2 px-4 rounded-lg text-sm">
        Ratings: {vote}
      </p>
    </div>
  );
}

export default MovieCard;
