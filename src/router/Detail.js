import React from "react";
import "./Detail.css";
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const { year, title, summary, poster, genres } = location.state;
    const bgImgae = {
      backgroundImage: `url(${poster})`,
    };
    if (location.state) {
      return (
        <div className="movie__container" style={bgImgae}>
          <div className="movie__info">
            <h2>{title}</h2>
            <p>{year}</p>
            <span>{summary}</span>
            <ul className="movie__genres">
              [ Genre ]
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
