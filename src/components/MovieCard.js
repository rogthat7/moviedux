import React from "react";
import "../styles.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Switch,
} from "@mui/material";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
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
      style={{ width: "220px", borderRadius: "10px" }}
    >
      <CardMedia
        component="img"
        alt={movie.title}
        image={`images/${movie.image}`}
        title={movie.title}
        onError={handleError}
      />
      <CardContent
        sx={{
          textAlign: "center",
          padding: 0,
          color: "white",
          backgroundColor: "#1F1F1F",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Typography variant="h6" component="div">
          {movie.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <span color="textSecondary">{movie.genre}</span>
          <span
            className={`movie-rating ${getRatingClass(Number(movie.rating))}`}
          >
            {movie.rating}
          </span>
        </Box>
        <Switch
          color="secondary"
          onChange={toggleWatchlist}
          defaultChecked={isWatchlisted}
          name={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
        />
      </CardContent>
    </Card>
  );
}
