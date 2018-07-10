import React, { component } from "react";
import NavBar from "../Navbar";
import Header from "../Header";
import Data from "../Data.json";
import Footer from "../Footer";
import Container from "../ClickPicture";
import ClickPicture from "../ClickPicture";

class ClickGame extends Component {
    state = {
       Data,
       Score: 0,
       TopScore: 0
    }; 

    ComponentDidMount() {
        this.setState({Data: this.shuffleData(this.state.Data)});
    }

    ProcessCorrectGuess = newData => {
        const {TopScore, Score } = this.state;
        const newScore = Score + 1;
        const newTopScore = newScore > TopScore ? newScore : TopScore;
        this.setState({
            Data: this.shuffleData(newData),
            Score: newScore,
            TopScore: newTopScore
        });
    };

    ProcessIncorrectGuess = Data => {
        this.setState({
            Data: this.resetData(Data),
            Score: 0
        });
    };

    resetData = Data => {
        const resetData = Data.map(item => ({ ...item, clicked: false}));
        return this.shuffleData(resetData);
    }

    shuffleData = Data => {
        let i = Data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = Data[i];
            data[i] = Data[j];
            Data[j] = temp;
            i--;
        }
        return Data;
    };

    ProcessPictureClick = id => {
       let correctGuess = false;
       const newData = this.state.Data.map(item => {
           const newItem = { ...item };
           if (newItem.id === id) {
               newItem.clicked = true;
               correctGuess = true;
           }
       }) 
    }
    
}