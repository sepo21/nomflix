import React from "react";
import { Route, withRouter, Link } from "react-router-dom";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Videos from "Components/Videos";
import Productions from "Components/Productions";
import Seasons from "Components/Seasons";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;
const BlankLink = styled.a`
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  top: -6px;
  width: 40px;
  height: 30px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;
const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const Tab = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "#1abc9c" : "white")};
  color: ${(props) => (props.active ? "white" : "#1abc9c")};
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, loading, error }) =>
    loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Nomflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.runtime ? result.runtime : result.episode_run_time[0]}{" "}
                min
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
              <Divider>•</Divider>
              {result.imdb_id && (
                <Item>
                  <BlankLink
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="blank"
                  >
                    <Image src={require("../../assets/IMDb-icon.png")} />
                  </BlankLink>
                </Item>
              )}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <InsideMenu>
              <List>
                <Tab active={pathname === `/movie/${result.id}/videos`}>
                  <Link to={`/movie/${result.id}/videos`}>Videos</Link>
                </Tab>
                <Tab active={pathname === `/movie/${result.id}/productions`}>
                  <Link to={`/movie/${result.id}/productions`}>
                    Productions
                  </Link>
                </Tab>
                <Tab active={pathname === `/show/${result.id}/seasons`}>
                  <Link to={`/show/${result.id}/seasons`}>Seasons</Link>
                </Tab>
              </List>
            </InsideMenu>
            <Route
              path="/movie/:id/videos"
              render={() => <Videos result={result} />}
            />
            <Route
              path="/movie/:id/productions"
              render={() => <Productions result={result} />}
            />
            <Route
              path="/show/:id/seasons"
              render={() => <Seasons result={result} />}
            />
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default DetailPresenter;
