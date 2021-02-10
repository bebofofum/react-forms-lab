import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          onChange={this.handleChange}
          value={this.state.message}
          id="message" />
          {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
