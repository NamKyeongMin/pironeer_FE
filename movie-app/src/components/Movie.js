import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // a 태그 대신 사용하여, (불필요한) 전체 페이지의 리로딩을 막음
import styles from "../styles/Home.module.css";

function Movie({ id, movieImage, title, summary, genres }) {
  const message = summary ? summary : "There is no summary yet. 🥲";
  return (
    <div className={styles.movieContainer}>
      <img className={styles.poster} src={movieImage} alt={title} />
      <div>
        <h2 className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.contents}>
          <span className={styles.infoOptions}>Summary:</span>{" "}
          {message.length > 235 ? `${message.slice(0, 235)}...` : message}
        </p>
        <p className={styles.infoOptions}>Genres:</p>
        <ul className={styles.contents}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
