import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class DetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    const numberedId = Number(id);
    if (isNaN(numberedId)) {
      return push("/");
    }
    const isMovie = pathname.includes("/movie/");
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(id));
      } else ({ data: result } = await tvApi.showDetail(id));
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
