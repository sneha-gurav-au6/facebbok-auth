import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./userdetail.css";

class UserDetail extends Component {
    handleClick = () => {
        this.props.history.push({ pathname: "/" });
    };
    render() {
        console.log(this.props.history.location.state);
        return (
            <div className="container">
                <h2>Hi, {this.props.history.location.state.name}</h2>
                <img src={this.props.history.location.state.picture} />

                <h5>Email : {this.props.history.location.state.email}</h5>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        );
    }
}

export default withRouter(UserDetail);
