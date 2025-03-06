import PropTypes from "prop-types";

function Movie({ movieImage, title, summary, genres }) {
  return (
    <div>
      <img src={movieImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary ? summary : "There is no summary! 🥲"}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
