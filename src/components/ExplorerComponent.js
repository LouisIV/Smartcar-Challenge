import React, { Component } from "react";
import PropTypes from "prop-types";
class ExplorerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { body } = this.props;
    if (!body) {
      return <div />;
    }
    console.log(body);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {body.map((item, i) => {
            return (
              <label>
                {name}
                <input {...item} />
              </label>
            );
          })}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ExplorerComponent;

ExplorerComponent.propTypes = {
  url: PropTypes.string.isRequired,
  //https://www.w3schools.com/tags/ref_httpmethods.asp
  method: PropTypes.oneOf(["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"])
    .isRequired,
  body: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired
};
