import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // a 태그 대신 사용하여, (불필요한) 전체 페이지의 리로딩을 막음

function Movie({ id, movieImage, title, summary, genres }) {
  return (
    <div>
      <img src={movieImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
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
  id: PropTypes.number.isRequired,
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
