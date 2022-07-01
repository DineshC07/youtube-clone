import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  useEffect(() => {
    handleSubmit("react js");
  }, []);

  const handleSubmit = async (inputval) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyBdZWXh2PsFtJu1u13waItXLXBnFMRJVf0",
        q: inputval,
      },
    });
    setSelectedVideo(response.data.items[0]);
    setVideos(response.data.items);
  };

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
