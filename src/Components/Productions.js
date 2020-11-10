import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

const Production = ({ result }) => (
  <Container>
    <Title>Production Companies</Title>
    <List>
      {result.production_companies &&
        result.production_companies.map((company) => (
          <Item key={company.id}>{company.name}</Item>
        ))}
    </List>
    <Title>Production Countries</Title>
    <List>
      {result.production_countries &&
        result.production_countries.map((country) => (
          <Item key={country.name}>{country.name}</Item>
        ))}
    </List>
  </Container>
);

Production.prototype = {
  result: PropTypes.object,
};
export default Production;
