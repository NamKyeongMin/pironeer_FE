import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieToFind, SetMovieToFind] = useState("");
  const { id } = useParams();
  async function getMovie() {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    SetMovieToFind(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
    console.log(movieToFind);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading Movie Info...</h1>
      ) : (
        <div>
          <h1>🎬 Movie Info 🍿</h1>
          <div>
            <Movie
              key={movieToFind.id}
              id={movieToFind.id}
              movieImage={movieToFind.large_cover_image}
              title={movieToFind.title}
              summary={movieToFind.summary}
              genres={movieToFind.genres}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
