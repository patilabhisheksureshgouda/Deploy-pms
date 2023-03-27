async function getQuestions() {
    const response = await fetch('http://localhost:3001/quiz');
    const data = await response.json();
    return data;
  }
  
  export default getQuestions;
  