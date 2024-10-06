import './application.css';
import { useState } from 'react';

export default function Application() {
  const [counter, setCounter] = useState(0);
  const [inputValues, setInputValues] = useState({
    variety: '',
    plantname: '',
    problem: '',
  });
  const [thinking, setThinking] = useState(false);
  const [dotIndex, setDotIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const AnswersDuplicateAi = [
    {
      id: 1,
      answer: "Water grapes deeply and infrequently, checking soil moisture. Use mulch to retain moisture, water early to minimize evaporation, and avoid wetting leaves to prevent rot and fungal diseases."
    },
    {
      id: 2,
      answer: "Water melons need deep, infrequent watering, checking soil moisture about 6-8 inches down. Water early to minimize evaporation and avoid wet leaves. Use mulch for moisture retention and ensure good soil drainage to prevent rot and promote healthy growth."
    },
    {
      id: 3,
      answer: "Water  corn deeply and consistently, checking soil moisture about 6-8 inches down. Water early to minimize evaporation, use mulch for moisture retention, and avoid overwatering to prevent rot and promote healthy growth."
    }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value, 
    }));
  };

  const handleCounter = () => {
    setThinking(true);
    setDotIndex(0);
    setDisplayText('');

    // Show dots one by one
    const dotInterval = setInterval(() => {
      setDisplayText((prevText) => prevText + "."); 
      setDotIndex((prevIndex) => {
        if (prevIndex < 2) {
          return prevIndex + 1; 
        } else {
          clearInterval(dotInterval); 
          return prevIndex; 
        }
      });
    }, 500); 

    // Show answer text after dots
    setTimeout(() => {
      setThinking(false); 
      const plantNames = inputValues.plantname.toLowerCase().split(',').map(name => name.trim());
      const filteredAnswers = AnswersDuplicateAi.filter(answer => 
        plantNames.some(plant => answer.answer.toLowerCase().includes(plant))
      );

      if (filteredAnswers.length > 0) {
        setDisplayText(filteredAnswers.map(answer => answer.answer).join('\n'));
      } else {
        setDisplayText("No relevant information found for the given plant names.");
      }
    }, 2000); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCounter();
  };

  return (
    <div className='maindivs'>
      <div className='application-positions'> 
        <div className='background-transparent'>  
          <div className='artificial-intelligence'>
            <h2>GrowAI</h2>
            <p className='ai-text'>
              {thinking ? displayText : displayText}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='main'>
            <div className='main-background'>
              <div className='container-inputs'>
                <input 
                  type="text" 
                  placeholder='Enter plant variety' 
                  className='input-plant'
                  name="variety" 
                  value={inputValues.variety} 
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  placeholder='Enter plant name (e.g., grape, watermelon, corn)' 
                  className='input-plant' 
                  name="plantname" 
                  value={inputValues.plantname}
                  onChange={handleChange}
                />
              </div>
              <textarea 
                placeholder="How can I help you?" 
                className='textarea-problem'
                name="problem" 
                value={inputValues.problem}
                onChange={handleChange}
              ></textarea>
              
              <div className='submit-class-border'>
                <button type="submit" className='submit-class'>Find Problem</button>
              </div>
            </div>
          </div> 
        </form>
      </div>
    </div>
  );
}
