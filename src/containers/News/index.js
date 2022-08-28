import { Box, Grid, Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cards } from "../../components";
import CardSkeleton from "../../components/CardSkeleton";

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePagination = (event, value) => {
    setPage(value);
  };

  const Api = axios.create({
    baseURL: "https://the-lazy-media-api.vercel.app/api/tech/news",
  });

  useEffect(() => {
    setLoading(true);
    const getNewsData = async () => {
      await Api.get("?page=" + page)
        .then((res) => setNews(res.data))
        .catch((err) => console.log(err));
      setLoading(false);
    };
    getNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleButton = (title, key) => {
    navigate(`detail/${title}`);
    localStorage.setItem("ApiKey", `${key}`);
  };

  return (
    <>
      <Grid container spacing={3}>
        {loading &&
          Array(8)
            .fill()
            .map((index) => <CardSkeleton key={index} />)}
        {!loading &&
          news.map((data, index) => (
            <Cards
              key={data}
              title={data.title}
              thumb={data.thumb}
              desc={data.desc}
              author={data.author}
              onClick={() => handleButton(data.title, data.key)}
            />
          ))}
      </Grid>
      <Box sx={{ py: 3, display: "flex", justifyContent: "center" }}>
        <Pagination count={10} color="primary" onChange={handlePagination} />
      </Box>
    </>
  );
}

export default News;
