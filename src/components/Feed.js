import React from "react";
import PropTypes from "prop-types";

function Feed(props){
  return (
    <React.Fragment>
      <div className="card">
        <div class="card-header">
          <h3>{props.name}</h3>
        </div>
        <div className="card-body">
          <em>{props.content}</em>
        </div>
        <div className="card-footer text-muted">
        <p>{props.time}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Feed.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string
}

export default Feed;