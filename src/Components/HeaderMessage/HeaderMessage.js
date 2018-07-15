import React, { Component } from "react";
import "./HeaderMessage.css";

class HeaderMessage extends Component {
    state = {
        message: "",
        animating: false
    }

    componentReceivesProps({ score, highScore}) {
        const newState = { animating: true };
        if (score === 0 && highScore === 0) {
            newState.message = "";
        } else if (score === 0 && highScore > 0) {
            newState.message = "Wrong";
        } else {
            newState.message = "Right";
        }
        this.setState(newState, () =>
        setTimeout(() => this.setState({ animating: false}), 500)
    
        );
    }

    renderMessage = () => {
        switch (this.state.HeaderMessage) {
            case "Right":
                return "You made the right guess!"
            case "Wrong":
                return "You made the wrong guess!"
            default:
                return "Please click on an image to start the game!"
        }
    };

    render() {
        return (
            <li className={this.state.animating ? this.state.message : ""}>
                {this.renderMessage()}
            </li>
        )
    }
}

export default HeaderMessage;
