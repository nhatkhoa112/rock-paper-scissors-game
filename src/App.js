import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PublicNavbar from './components/PublicNavbar/PublicNavbar';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import ChoiceCard from './components/ChoiceCard/ChoiceCard';
function App() {

    
	const shapes = ['rock', 'paper', 'scissors'];
	const [playerChoice, setPlayerChoice] = useState('');
	const [playerResult, setPlayerResult] = useState('tie');
	const [playerScore, setPlayerScore] = useState(0);
	const [computerChoice, setComputerChoice] = useState('');
	const [computerResult, setComputerResult] = useState('tie');
	const [computerScore, setComputerScore] = useState(0);
    const [playerName, setPlayerName] = useState("You");

	const randomMove = (move) => {
		const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
		const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
		setPlayerChoice(move);
        // setPlayerChoice(newPlayerChoice);
		setComputerChoice(newComputerChoice);
		calculateWinner(newComputerChoice, move);
	};

	const calculateWinner = (computerChoice, playerChoice) => {
		if (computerChoice === playerChoice) {
			setComputerResult('tie');
			setPlayerResult('tie');
		} else if (computerChoice === 'rock') {
			if (playerChoice === 'paper') {
				setComputerResult('loss');
				setPlayerResult('win');
				setPlayerScore(playerScore + 1);
			} else {
				setComputerResult('win');
				setComputerScore(computerScore + 1);
				setPlayerResult('loss');
			}
		} else if (computerChoice === 'paper') {
			if (playerChoice === 'scissors') {
				setComputerResult('loss');
				setPlayerResult('win');
				setPlayerScore(playerScore + 1);
			} else {
				setComputerResult('win');
				setComputerScore(computerScore + 1);
				setPlayerResult('loss');
			}
		} else {
			if (playerChoice === 'rock') {
				setComputerResult('loss');
				setPlayerResult('win');
				setPlayerScore(playerScore + 1);
			} else {
				setComputerResult('win');
				setComputerScore(computerScore + 1);
				setPlayerResult('loss');
			}
		}
	};

    const onNameChange = (event) => {
		if (event.target.value) {
			setPlayerName(event.target.value);
		} else {
			setPlayerName("You");
		}
	};

    const onRestart = () => {
		setPlayerChoice("");
		setPlayerResult("tie");
		setPlayerScore(0);
		setComputerChoice("");
		setComputerResult("tie");
		setComputerScore(0);
	};

    // const play = () => {
    //     randomMove();
    //     calculateWinner()
    // }

    // play()

    return (
        <div>
            <PublicNavbar />
            <div className="text-center">
                Name:
				<input className="m-2" onChange={(e) => onNameChange(e)}></input>
            </div>
            <Container>
                <ChoiceCard title={playerName} 
                            result={playerResult} 
                            shape={playerChoice} 
                            score={playerScore} />
                <ChoiceCard title="Computer" 
                            result={computerResult} 
                            shape={computerChoice}
                            score={computerScore} />  
            </Container>
            <div className="text-center">
                <ButtonGroup>
                    <Button
                        variant="outline-dark"
                        className="mx-1"
                        onClick={() => randomMove("rock")}
                    >
                        Play 👊👊👊
                    </Button>
                    <Button
                        variant="outline-dark"
                        className="mx-1"
                        onClick={() => randomMove("paper")}
                    >
                        Play 🤚🤚🤚
                    </Button>
                    <Button
                        variant="outline-dark"
                        className="mx-1"
                        onClick={() => randomMove("scissors")}
                    >
                        Play ✌✌✌
                    </Button>
                    <Button
                        variant="dark"
                        onClick={onRestart}
                    >
                        Restart
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default App;