import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { Cards } from "../../components";
import CardSkeleton from "../../components/CardSkeleton";
import { useNavigate } from "react-router-dom";

function Console() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getNewsData = async () => {
      await axios
        .get(
          "https://the-lazy-media-api.vercel.app/api/games/console-game?page=1"
        )
        .then((res) => setNews(res.data))
        .catch((err) => console.log(err));

      setLoading(false);
    };
    getNewsData();
  }, []);

  const handleButton = (title, key) => {
    navigate(`/detail/${title}`);
    localStorage.setItem("ApiKey", `${key}`);
  };

  return (
    <Grid container spacing={3}>
      {loading &&
        Array(8)
          .fill()
          .map((index) => <CardSkeleton key={index} />)}
      {!loading &&
        news.map((data, index) => (
          <Cards
            key={index}
            title={data.title}
            thumb={data.thumb}
            desc={data.desc}
            author={data.author}
            onClick={() => handleButton(data.title, data.key)}
          />
        ))}
    </Grid>
  );
}

export default Console;
