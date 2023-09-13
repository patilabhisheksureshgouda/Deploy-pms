import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header_footer/Header.jsx';
import Main from './components/core/Main.jsx';
import Footer from './components/header_footer/Footer.jsx';
import './resources/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 600, // 10 minutes in seconds
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.timeRemaining === 0) {
      clearInterval(this.timerID);
      alert('Time is up!');
      window.location.reload(); // Reloads the page to terminate the quiz
    } else {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="timer">Time Left: {this.state.timeRemaining} seconds</div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';

// import './resources/styles.css';

// import Header from './components/header_footer/Header.jsx';
// import Main from './components/core/Main.jsx';
// import Footer from './components/header_footer/Footer.jsx';

// class App extends React.Component {
//     render() {
//       return (
//         <div className="App">
//             <Header/>
//             <Main />
//             <Footer/>
//         </div>
//     );
//   }
// }

// ReactDOM.render(<App/>, document.getElementById('root'));



















// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // import './resources/styles.css';

// // import Header from './components/header_footer/Header.jsx';
// // import Main from './components/core/Main.jsx';
// // import Footer from './components/header_footer/Footer.jsx';

// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       timeRemaining: 600, // 10 minutes * 60 seconds
// //       currentQuestion: 1,
// //     };
// //   }

// //   componentDidMount() {
// //     this.interval = setInterval(() => {
// //       const { timeRemaining, currentQuestion } = this.state;
// //       if (timeRemaining > 0) {
// //         this.setState({ timeRemaining: timeRemaining - 1 });
// //         if (timeRemaining % 60 === 0 && currentQuestion <= 10) {
// //           // If a minute has passed and there are still questions remaining,
// //           // move on to the next question
// //           this.setState({ currentQuestion: currentQuestion + 1 });
// //         }
// //       } else {
// //         // When the timer runs out, stop the interval and show a message
// //         clearInterval(this.interval);
// //         alert('Time is up!');
// //       }
// //     }, 1000); // Run every second
// //   }

// //   componentWillUnmount() {
// //     clearInterval(this.interval);
// //   }

// //   render() {
// //     const { timeRemaining, currentQuestion } = this.state;
// //     return (
// //       <div className="App">
// //         <Header />
// //         <Main currentQuestion={currentQuestion} />
// //         <Footer />
// //         <div>Time remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}</div>
// //       </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<App />, document.getElementById('root'));



// // // import React from 'react';
// // // import ReactDOM from 'react-dom';

// // // import './resources/styles.css';
// // // import Header from './components/header_footer/Header.jsx';
// // // import Main from './components/core/Main.jsx';
// // // import Footer from './components/header_footer/Footer.jsx';

// // // class App extends React.Component {
// // //   constructor(props) {
// // //     super(props);

// // //     this.state = {
// // //       timeLeft: 600 // 10 minutes in seconds
// // //     };
// // //   }

// // //   componentDidMount() {
// // //     this.timerID = setInterval(() => this.tick(), 1000);
// // //   }

// // //   componentWillUnmount() {
// // //     clearInterval(this.timerID);
// // //   }

// // //   tick() {
// // //     this.setState({
// // //       timeLeft: this.state.timeLeft - 1
// // //     });

// // //     if (this.state.timeLeft === 0) {
// // //       clearInterval(this.timerID);
// // //       alert('Time is up!');
// // //     }
// // //   }


// // //   render() {
// // //     return (
// // //       <div className="App">
// // //         <Header />
// // //         <Main />
// // //         <Footer />
// // //         <div className="timer">Time Left: {this.state.timeLeft} seconds</div>
// // //       </div>
// // //     );
// // //   }
  
// // // }
// // // ReactDOM.render(<App />, document.getElementById('root'));


// // //   // render() {
// // //   //   return (
// // //   //     <div className="App">
// // //   //       <Header />
// // //   //       <Main />
// // //   //       <Footer />
// // //   //       <div>Time Left: {this.state.timeLeft} seconds</div>
// // //   //     </div>
// // //   //   );
// // //   // }

// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // import './resources/styles.css';

// // import Header from './components/header_footer/Header.jsx';
// // import Main from './components/core/Main.jsx';
// // import Footer from './components/header_footer/Footer.jsx';

// // class App extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       remainingTime: 600, // 10 minutes in seconds
// //     };
// //   }

// //   componentDidMount() {
// //     this.intervalId = setInterval(() => {
// //       this.setState(prevState => ({
// //         remainingTime: prevState.remainingTime - 1,
// //       }));
// //     }, 1000);
// //   }

// //   componentWillUnmount() {
// //     clearInterval(this.intervalId);
// //   }

// //   render() {
// //     const { remainingTime } = this.state;
// //     return (
// //       <div className="App">
// //         <Header remainingTime={remainingTime} />
// //         <Main remainingTime={remainingTime} />
// //         <Footer remainingTime={remainingTime} />
// //       </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<App />, document.getElementById('root'));
