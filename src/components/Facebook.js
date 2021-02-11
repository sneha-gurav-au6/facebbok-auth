import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { withRouter } from "react-router-dom";

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: "",
    };

    responseFacebook = (response) => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });
        var newObj = this.state;
        var name = newObj.name.replace(/ +/g, "");

        this.props.history.push({ pathname: `/${name}`, state: newObj });
    };

    render() {
        return (
            <div>
                <div>
                    <h2>Facebook Authentication</h2>{" "}
                    <FacebookLogin
                        appId="245573583828238"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Facebook);
