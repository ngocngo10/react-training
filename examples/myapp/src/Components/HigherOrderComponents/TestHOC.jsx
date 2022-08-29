import React from "react";
import HOC from "./HOC";

class LikeCount extends React.Component {
  render() {
    return (
      <div>
        {this.props.CountNumber} <br />
        <button onClick={this.props.handleClick}>Like</button>
      </div>
    );
  }
}

const EnhancedLike = HOC(LikeCount, 5);
export default EnhancedLike;
