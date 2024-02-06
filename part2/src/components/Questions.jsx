import React from 'react'
import { useState } from 'react'
import questions from '../questions'
import './Questions.css'

function Questions() {

    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [play, setPlay] = useState(false)
    const [playAgain, setPlayAgain] = useState(true)
    const [scorepage, setScorePage] = useState(false)

    const optionClick = (event)=>{
        if(event.target.id == 0){
            setScore(prevScore => prevScore+1)
        }else{
            setScore(prevScore => prevScore-1)
        }
    }

    const next = () =>{
        if (count< questions.length-1){
            setCount(prevCount => prevCount+1)
        }else{
            scorePage()
        }
        console.log(score)
    }

    const previous = () =>{
        if (count>0){
            setCount(prevCount => prevCount-1)
        }
    }

    const scorePage = ()=>{
            setScorePage(true)
    }

    const playButton = ()=>{
        setPlay(!play)
    }

    const playagain = () => {
        setCount(0)
        setScore(0)
        setScorePage(false)
        setPlayAgain(true)
      };
      

  return (
    <div>
        <div>
            {/* first page */}
            <div className="firstpage" style={play ? { display: 'none' } : (playAgain ? { display: 'block' } : null)}>
                <h2>Quiz App</h2>
                <button className='play' onClick={playButton}>Play</button>
            </div>
            {/* quesstion box */}
            <div className="main" style={play && !scorepage ? { display: 'block' } : null}>
                <h1>Question</h1>
                <h4 className='questionCount'>{count+1} of 5</h4>
                <h2>{questions[count].text}</h2>
                <div className="options">
                    <button className='btn' onClick={optionClick} id='0'>{questions[count].options[0].text}</button>
                    <button className='btn' onClick={optionClick} id='1'>{questions[count].options[1].text}</button>
                    <button className='btn' onClick={optionClick} id='2'>{questions[count].options[2].text}</button>
                    <button className='btn' onClick={optionClick} id='3'>{questions[count].options[3].text}</button>
                </div>
                <div className="btns">
                    <button style={{backgroundColor: '#3E7EAA', color: 'black'}} onClick={previous}>Previous</button>
                    <button style={{backgroundColor: '#008001', color: 'black'}} onClick={next}>Next</button>
                    <button style={{backgroundColor: 'red', color: 'black'}}>Quit</button>
                </div>
            </div>
            {/* reuslt box */}
            <div className="result" style={scorepage && playAgain ? {display: 'block'} : {display: 'none'}}>
                <h2>Result</h2>
                <div className="scoreCard">
                    <div className="top">
                        <h4>x</h4>
                        <h2>y</h2>
                    </div>
                    <div className='bottom'>
                        <div className="bottom1">
                            <p>Total number of questions</p>
                            <p>Number of attempted questions</p>
                            <p>Number of correct answers</p>
                            <p>Number of wrong answers</p>
                        </div>
                        <div className="bottom2">
                            <p>5</p>
                            <p>{5-score}</p>
                            <p>{score}</p>
                            <p>{5-score}</p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="playAgain" onClick={playagain}>Play Again</button>
                    <button className="backToHome">Back To Home</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Questions;
