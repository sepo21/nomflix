import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Image = styled.div`
  width: 100%;
  height: 168px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  transition: opacity 0.1s linear;
`;
const Rating = styled.div`
  opacity: 0;
  right: 5px;
  bottom: 5px;
  position: absolute;
`;
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.div``;
const Year = styled.div`
  margin-top: 5px;
  font-size: 12px;
  opacity: 0.4;
`;

const Poster = ({ id, title, imageUrl, year, rating, isMovie = true }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>

      <Title>
        <span>
          {title.length > 14 ? title.substring(0, 14) + "..." : title}
        </span>
      </Title>
      <Year>
        <span>{year}</span>
      </Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string.isRequired,
  isMovie: PropTypes.bool,
};

export default Poster;
