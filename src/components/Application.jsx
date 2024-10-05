import './application.css'
import { useState } from 'react'


export default function Application() {
    
  const [counter, setCounter] = useState(3)
   
  const AnswersDuplicateAi = [
    {
      id: 1,
      answer: "1"
    },
    {
      id: 2,
      answer: "2"
    },
    {
      id: 3,
      answer: "3"
    },
    {
      id: 4,
      answer: ""
    }
  ]

  const [inputValues, setInputValues] = useState({
    variety: '',
    plantname: '',
    problem: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target; 
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value, 
    }));

    console.log(inputValues)
  };

  const handleCounter = () => {
    counter === 3 ? setCounter(0) : counter
    counter === 0 ? setCounter(1) : counter
    counter === 1 ? setCounter(2) : counter
    counter === 2 ? setCounter(3) : counter

  };



  return (
   
    <div className='application-positions'> 

<div className='background-transparent'>  
      <div className='artificial-intelligence'>
        <h2>GrowAI</h2>
        <p className='ai-text'>
          {AnswersDuplicateAi[counter].answer} 
        </p>
      </div>
    </div>


      <form action='' onSubmit={handleChange}>
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
              placeholder='Enter plant name' 
              className='input-plant' 
              name="plantname" 
              value={inputValues.plantname}
              onChange={handleChange}/>
            </div>
            <textarea 
            placeholder="How can I help you?" 
            className='textarea-problem'
            name="problem" 
            value={inputValues.problem}
            onChange={handleChange}
            ></textarea>
            
            
            <div className='submit-class-border'>
              <button type="submit" className='submit-class' onClick={handleCounter}>Find Problem</button>
            </div>
          </div>
       </div> 
      </form>
 

      </div>

     
  )
}
