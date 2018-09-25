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
      return null;
    }
    console.log(body);
    return (
      <form onSubmit={this.handleSubmit}>
        {body.map((item, i) => {
          const {
            name,
            type,
            disabled,
            max,
            maxLength,
            min,
            placeholder,
            pattern,
            readOnly,
            required,
            size,
            step,
            value
          } = item;
          return (
            <label>
              {name}
              <input
                type={type}
                disabled={disabled || undefined}
                max={max || undefined}
                maxLength={maxLength || undefined}
                min={min || undefined}
                placeholder={placeholder || undefined}
                pattern={pattern || undefined}
                readOnly={readOnly || undefined}
                required={required || undefined}
                size={size || undefined}
                step={step || undefined}
                value={value || undefined}
              />
            </label>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
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
