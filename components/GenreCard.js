function GenreCard({ genreType }) {
  return (
    <div className="bg-white inline-block rounded-full py-2 px-3 text-sm font-semibold text-black mr-2 hover:scale-110 transition-all duration-200 ease-out cursor-pointer">
      <p>{genreType}</p>
    </div>
  );
}

export default GenreCard;
