import React from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosList = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {videosList}
    </Grid>
  );
};

export default VideoList;
//
