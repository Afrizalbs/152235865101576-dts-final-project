import { Divider, Grid, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailSkeleton from "./DetailSkeleton";

function DetailNews() {
  const [newsDetail, setNewsDetail] = useState([]);
  const [newsContent, setNewsContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const SavedKey = localStorage.getItem("ApiKey");

  const Api = axios.create({
    baseURL: "https://the-lazy-media-api.vercel.app/api/detail/",
  });

  useEffect(() => {
    setLoading(true);
    const getDetailNews = async () => {
      const res = await Api.get(SavedKey);
      // .then((res) => setNewsDetail(res.data.results))
      // .catch((err) => console.log(err));
      setNewsDetail(res.data.results);
      setNewsContent(res.data.results.content);
      setLoading(false);
      console.log(res.data.results.content);
    };

    getDetailNews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SavedKey]);

  return (
    <>
      <Grid>
        <Typography variant="h6" gutterBottom>
          {id}
        </Typography>
        <Divider />
        {loading && <DetailSkeleton />}
        {!loading && (
          <Typography
            sx={{
              mb: 4,
            }}
          >
            {newsDetail.date} by {newsDetail.author}
          </Typography>
        )}
        {newsContent?.map((item) => (
          <Typography
            sx={{
              textAlign: "justify",
              mt: 1,
            }}
          >
            {item}
          </Typography>
        ))}
      </Grid>
    </>
  );
}

export default DetailNews;
