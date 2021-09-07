import React from "react";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <React.Fragment>
      <div class="card text-center border-info">
      <div class="card-body">
        <h5 class="card-title">
          {props.name}
        </h5>
        <em>{props.online}</em>
        <a href="#" class="btn btn-primary">Add Friend</a>
        <a href="#" class="btn btn-danger">Stop Suggesting</a>
      </div>
      </div>
    </React.Fragment>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  online: PropTypes.bool,
};

export default Contact;