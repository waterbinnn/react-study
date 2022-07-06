import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); //id값 정보 알게해줌
  const getMovie = async () => {
    const json = (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (

    <h1>

  </h1>
    ) 
}

export default Detail;
