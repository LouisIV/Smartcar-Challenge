import React, { Component } from "react";
import PropTypes from "prop-types";
class ExplorerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayErrors: false,
      url: props.url || "Missing URL",
      method: props.method || "MISSING METHOD",
      body: props.body || null,
      form: {} // Storing all of the inputs in one value for simplicity
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // Would cause a page reload
    event.preventDefault();

    // Check the form for errors
    if (!event.currentTarget.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });

    // Handle the request
    fetch(this.state.url, {
      method: this.state.method,
      body: this.state.body
        ? JSON.stringify({
            ...this.state.form
          })
        : undefined,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        let jsonString = JSON.stringify(response, null, 2);
        this.setState({ response: jsonString });
        console.log("Success:", jsonString);
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    const { url, method, body, form, response, displayErrors } = this.state;
    return (
      <div className="explorer">
        <div>
          <h3 className="sub-title red-text">{method}</h3>
          <h3 className="sub-title">Base URL</h3>
          <span className="url secondary-text">{url}</span>
        </div>
        <div className="section">
          {body ? <h3 className="sub-title">Body</h3> : null}
        </div>
        {/* We add the noValidate tag to prevent a browser tooltip from showing up */}
        <form
          onSubmit={this.handleSubmit}
          className={displayErrors ? "form displayErrors" : "form"}
          noValidate
        >
          {body
            ? body.map((item, i, arr) => {
                {
                  /* Grab the specific fields we need from `item` */
                }
                const { name, pattern, required } = item;
                let formattedName = name.replace("-", " ");
                {
                  /* Make the last item a different class */
                }
                const className =
                  i == arr.length ? "form-item last-form-item" : "form-item";

                return (
                  <div className={className} key={name + i}>
                    <label className="form-label">
                      {formattedName}
                      <span className="red-text">{required ? "*" : null}</span>
                    </label>
                    <div className="input-box">
                      <input
                        className="form-input"
                        // Pass all of the fields except for `name`
                        {...item}
                        id={name}
                        // Setup the onChange event to keep the values in state
                        onChange={event => {
                          this.setState({
                            form: { ...form, [name]: event.target.value }
                          });
                        }}
                      />
                      {/* If there is a pattern in this field we should let the developer know */}
                      {pattern ? (
                        <span className="pattern secondary-text">
                          {pattern}
                        </span>
                      ) : null}
                    </div>
                  </div>
                );
              })
            : null}
          {/* Submit button */}
          <div className={"action-buttons"}>
            <button id="submit" className="action-button last-action-button">
              Send Request
            </button>
          </div>
        </form>
        <div className="section">
          <h3 className="sub-title">Response</h3>
        </div>
        {/* Area to display the response in */}
        <textarea
          className="server-response-area"
          ref={ref => {
            this.responseArea = ref;
          }}
          value={response}
          readOnly
        />
        {/* Button for copying the JSON response to the clipboard */}
        <div className={"action-buttons"}>
          <button
            className="action-button"
            onClick={() => {
              // Select the textarea
              this.responseArea.focus();
              this.responseArea.select();
              try {
                document.execCommand("copy");
              } catch (error) {
                console.log("failed to copy");
              }
            }}
          >
            Copy
          </button>
          <button
            className="action-button last-action-button"
            onClick={() => {
              this.setState({ response: "" });
            }}
          >
            Clear
          </button>
        </div>
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
  )
};
