import React from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import Poster from "./Poster";

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
