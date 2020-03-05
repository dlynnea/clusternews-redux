import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Register extends Component {

    state = {
        name: '',
        username: '',
        password: '',
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        })
    }

    render() {
        return(
            <form onSubmit={event => this.props.handleSignup(event, this.state, this.props.history)}>
            <h4>SIGN UP</h4>
            <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
            <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
            <input className="input-btn" type="submit" />
        </form>
        )
    }
}

export default Register;

// Register.propTypes = {
//     handleSignup: PropTypes.func.isRequired
// }