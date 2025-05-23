import React, { useState, useEffect } from "react";
import { Grid, Input, Box } from "@mui/material";
import "../styles.css";
import MovieCard from "./MovieCard";
export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Input
        type="text"
        value={search}
        placeholder="Its time for popcorn, find your next movie here!"
        style={{
          backgroundColor: "white",
          marginBottom: "20px",
          borderRadius: "24px",
          padding: "10px 20px",
          width: "100%",
          maxWidth: "600px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
        }}
        endAdornment={
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a7 7 0 015.657 11.314l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>
          </Box>
        }
        onChange={handleSearch}
      />
      <Grid
        sx={{ marginBottom: 10 }}
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        display={"flex"}
      >
        {filteredMovies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} key={movie.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
