import React from "react";
import "../styles.css";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function MovieCard({ movie }) {
  const handleError = (e) => {
    e.target.src = "images/default.png";
  };
  const getRatingClass = (rating) => {
    switch (true) {
      case rating > 8.5:
        return "very-good";
      case rating > 7.5 && rating <= 8.5:
        return "good";
      case rating > 6.5 && rating <= 7.5:
        return "average";
      case rating <= 6.5:
        return "bad";
      default:
        return "not-rated";
    }
  };
  return (
    <Card
      className="movie-card"
      style={{ height: "340px", width: "220px", backgroundColor: "#f5f5f5" }}
    >
      <CardMedia
        component="img"
        alt={movie.title}
        image={`images/${movie.image}`}
        title={movie.title}
        onError={handleError}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Genre: {movie.genre}
        </Typography>
        <Typography className={`movie-rating`} variant="body2">
          Rating:{" "}
          <span
            className={`movie-rating ${getRatingClass(Number(movie.rating))}`}
          >
            {movie.rating}
          </span>{" "}
          / 10
        </Typography>
      </CardContent>
    </Card>
  );
}
