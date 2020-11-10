import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "./Section";
import Poster from "./Poster";

const Container = styled.div`
  margin-top: 30px;
`;
const Title = styled.span`
  font-size: 17px;
`;
const List = styled.ul`
  color: white;
  margin-bottom: 50px;
`;

const Item = styled.li`
  margin-top: 10px;
`;

const Seasons = ({ result }) => (
  <Section title="Seasons">
    {result.seasons &&
      result.seasons.map((season) => (
        <Poster
          key={season.id}
          id={season.id}
          title={season.name}
          imageUrl={season.poster_path}
          year={season.air_date.substring(0, 4)}
        />
      ))}
  </Section>
);

Seasons.prototype = {
  result: PropTypes.object,
};
export default Seasons;
