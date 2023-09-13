import React, { Component } from 'react';
// import data from '../questions_data/data';
import Answers from './Answers.jsx';
import Popup from './Popup.jsx';
import getQuestions from './data';
import regeneratorRuntime from "regenerator-runtime";
import Webcam from "react-webcam";



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      total: null,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: 'flex',
      isLoading: true,
      data: []
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  async componentDidMount() {
    const data = await getQuestions();
    console.log(data)
    const question = data[0].question;
    const answers = data[0].answers;
    const correct = data[0].correct;

    await this.setState({
      question,
      answers,
      correct,
      total: data.length,
      isLoading: false,
      data: data
    });

    console.log('ans', this.state.total)
  }


  insertData(count) {
    let { data } = this.state;

    this.setState({
      question: data[count].question,
      answers: [
        data[count].answers[0],
        data[count].answers[1],
        data[count].answers[2],
        data[count].answers[3]
      ],
      correct: data[count].correct,
      count: this.state.count + 1
    });
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true
    })
  }

  nextQuestion() {
    let { count, total } = this.state;

    if (count === total) {
      this.setState({
        displayPopup: 'flex'
      });
    } else {

      this.insertData(count);
      this.setState({
        showButton: false,
        questionAnswered: false
      });
    }
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: 'none',
      count: 1
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1
    });
  }



  render() {
    let { count, total, question, answers, correct, showButton, questionAnswered, displayPopup, score, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loader">Loading...

        </div>
      );
    }

    return (
      <div className="container">

        {/* <Webcam
          style={{
            alignSelf: 'flex-end',
            marginTop: 0,
            right: 0,
            position: 'absolute'
          }}
          height={300}
          width={300}
        /> */}

        <Popup style={{ display: displayPopup }}
          score={score}
          total={total}
          startQuiz={this.handleStartQuiz}
        />

        <div className="row">
          <div className="col-lg-12 col-md-10">
            <div id="question">
              <h4 className="bg-light">Question {count}/{total}</h4>
              <p>{question}</p>
            </div>

            <Answers
              answers={answers}
              correct={correct}
              showButton={this.handleShowButton}
              isAnswered={questionAnswered}
              increaseScore={this.handleIncreaseScore}
            />

            <div id="submit">
              {showButton ?
                <button className="fancy-btn"
                  onClick={this.nextQuestion} >
                  {count === total ? 'Finish quiz' : 'Next question'}
                </button> : <span></span>}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Main;
