function CompanyCard({ logo, name, country }) {
  const image_path = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <img
        src={image_path + logo}
        alt="logo"
        className="h-36 w-36 bg-white object-contain rounded-lg"
      />
      <div className="flex items-center space-x-3 text-sm">
        <p>{name}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default CompanyCard;
