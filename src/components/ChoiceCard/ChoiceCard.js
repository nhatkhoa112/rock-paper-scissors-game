import React from 'react';
import './ChoiceCard.css';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import question from '../../assets/images/question.png';


const ChoiceCard = (props) => {
    console.log(props)

    return (
        <div
			className={`choice-card ${
				props.result === "win" || props.result === "flawless victory"
					? "border-success"
					: props.result === "tie"
					? "border-dark"
					: "border-danger"
			}`}
		>
            <div className="text-center" >
			    <h2>{props.title}</h2>
            </div>
			<img
				src={props.shape === "scissors" ? scissors : props.shape === "rock" ? rock : props.shape === "paper" ? paper : question}
				alt={props.shape}
			/>
            <div className="text-center" >
                <h3>{props.result.toUpperCase()}</h3>
                <h4>{props.score}</h4>
            </div>
		</div>
    )
}

export default ChoiceCard
