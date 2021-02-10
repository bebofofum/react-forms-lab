import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.target.value)

    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(!this.state.username || !this.state.password) return
    
    console.log(this.state)
    this.props.handleLogin(this.state)
  

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              onChange={this.handleChange}
              name="username" 
              value={this.state.username}
              type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              onChange={this.handleChange}
              name="password" 
              value={this.state.password}
              type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
