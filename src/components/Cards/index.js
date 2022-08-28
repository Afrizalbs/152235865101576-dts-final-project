import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Cards({ title, desc, thumb, author, onClick }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={thumb} height="170" image={thumb} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
            }}
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{author}</Button>
          <Button variant="outlined" size="small" onClick={onClick}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
