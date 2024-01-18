import Gif from "./Gif";
import getGifs from "../services/getGifs";
import { useState, useEffect } from "react";

const GifsList = ({ keyword }) => {
    const [gifs, setGifs] = useState([]);

    //Haciendo la petición a la API DE GIPHY
    useEffect(function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} url={url} id={id} />
  ));
};

export default GifsList;
