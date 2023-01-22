import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ videos, name }) => {
  if (!videos.length) return "Loading...";
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{name}</span> exercise videos
      </Typography>
      <Stack
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "50px" } }}
      >
        {videos?.slice(1, 7).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000" className="channel-title">
                {item.video.title}
              </Typography>
              <Typography variant="h5" color="#000" className="channel-name">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
export default ExerciseVideos;
