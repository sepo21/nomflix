import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;
const Video = styled.iframe`
  margin-left: 30px;
`;

const Videos = ({ result }) => (
  <Container>
    {result.videos.results &&
      result.videos.results.map((video) => (
        <Video
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          width="560"
          height="315"
        />
      ))}
  </Container>
);

Videos.prototype = {
  result: PropTypes.object,
};
export default Videos;
