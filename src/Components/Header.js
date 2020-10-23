import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled("ul")`
  display: flex;
`;
const Item = styled("li")`
  text-decoration: none;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default () => (
  <List>
    <Item>
      <SLink to="/">Movies</SLink>
    </Item>
    <Item>
      <SLink to="/tv">TV Shows</SLink>
    </Item>
    <Item>
      <SLink to="/search">Search</SLink>
    </Item>
  </List>
);
