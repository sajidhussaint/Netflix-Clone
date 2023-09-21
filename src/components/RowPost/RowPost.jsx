import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { IMAGE_URL, API_KEY } from "../../constants/Constants";
import Modal from "react-modal";
import Youtube from "react-youtube";

//styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
};

const RowPost = ({ title, isSmall, url,poster }) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setMovies(response.data.results);
          console.log(response.data.results);
        } else {
          alert("Empty array");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  

  const opts = {
    height: "480px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length > 0) {
          setUrlId(response.data.results[0].key);
          setIsModalOpen(true);
        } else {
          console.log("No video found for this movie");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">

        {movies.map((value) => {
          return (

            
            <div key={value.id} onClick={() => handleMovie(value.id)}>
              <img
                className={isSmall ? "smallPoster" : "poster"}
                src={poster?`${IMAGE_URL + value.poster_path}`:`${IMAGE_URL + value.backdrop_path}`}
                alt={value.name}
              />
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="YouTube Player"
        style={customStyles}
      >
        <Youtube videoId={urlId} opts={opts} />
        <button className="cls-btn" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default RowPost;
