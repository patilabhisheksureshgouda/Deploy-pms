import React, { useState } from 'react';
import './QuizForm.css';

const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correct, setCorrect] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3001/questions', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ question, answers, correct })
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to add question.');
  //     }
  //     // clear the form inputs
  //     setQuestion('');
  //     setAnswers(['', '', '', '']);
  //     setCorrect(1);
  //     // show a success message to the user
  //     setSuccessMessage('Question added successfully.');
  //   } catch (error) {
  //     setErrorMessage('Failed to add question.');
  //   }
  // };


  async function handleSubmit() {
    const questionData = {
      question,
      answers,
      correct
    };
  
    try {
      const response = await fetch('http://localhost:3001/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(questionData)
      });
  
      if (!response.ok) {
       
        throw new Error('Failed to add question');
     
      }
      alert('Question added successfully')
      console.log('Question added successfully');
      // Reset form fields after successful question submission
      setSuccessMessage('Question added successfully.');
      setQuestion('');
      setAnswers(['', '', '', '']);
      setCorrect(0);
    
    } catch (error) {
      console.error(error);
      alert('Failed to add question.')
      setErrorMessage('Failed to add question.');
      // Show error message to user
    }
  }

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  return (
    <div className="quiz-form-container">
      <h2>Add a New Question</h2>
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="question">Question:</label>
          <input type="text" id="question" value={question} onChange={(event) => setQuestion(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="answer1">Answer 1:</label>
          <input type="text" id="answer1" value={answers[0]} onChange={(event) => handleAnswerChange(0, event)} required />
        </div>
        <div>
          <label htmlFor="answer2">Answer 2:</label>
          <input type="text" id="answer2" value={answers[1]} onChange={(event) => handleAnswerChange(1, event)} required />
        </div>
        <div>
          <label htmlFor="answer3">Answer 3:</label>
          <input type="text" id="answer3" value={answers[2]} onChange={(event) => handleAnswerChange(2, event)} required />
        </div>
        <div>
          <label htmlFor="answer4">Answer 4:</label>
          <input type="text" id="answer4" value={answers[3]} onChange={(event) => handleAnswerChange(3, event)} required />
        </div>
        <div>
          <label htmlFor="correct">Correct Answer:</label>
          <select id="correct" value={correct} onChange={(event) => setCorrect(parseInt(event.target.value))} required>
            <option value="1">Answer 1</option>
            <option value="2">Answer 2</option>
            <option value="3">Answer 3</option>
            <option value="4">Answer 4</option>
          </select>
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default QuizForm;
