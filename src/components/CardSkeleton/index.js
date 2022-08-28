import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";

function CardSkeleton() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

        <CardContent>
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardSkeleton;
