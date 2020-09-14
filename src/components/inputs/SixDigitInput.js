import React, {useState, useRef} from 'react';
import { useEffect } from 'react';

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

const SixDigitButton = (props) => {

    const {show, goalMet, handleCode} = props;
    
    const [code, setCode] = useState('');
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);
    const input6 = useRef(null);
    const bSpace = useKeyPress('Backspace')
    
    useEffect(() => {
      if(show) {
        if(!first && !second && !third && !fourth && !fifth && !sixth) {
          input1.current.focus()
        } else if(first && !second && !third && !fourth && !fifth && !sixth) {
          input2.current.focus()
        } else if(first && second && !third && !fourth && !fifth && !sixth) {
          input3.current.focus()
        } else if(first && second && third && !fourth && !fifth && !sixth) {
          input4.current.focus()
        } else if(first && second && third && fourth && !fifth && !sixth) {
          input5.current.focus()
        } else if(first && second && third && fourth && fifth && !sixth) {
          input6.current.focus()
        } else if(first && second && third && fourth && fifth && sixth) {
          setCode(`${first}${second}${third}${fourth}${fifth}${sixth}`)
        }      
      } else {
      }
    }, [show, first, second, third, fourth, fifth, sixth, code]);

    useEffect(() => {
      if(code && show && !goalMet) {
        handleCode(code)
      }
    }, [code, show, goalMet, handleCode]);

  const handleKeyPress = (event) => {
        if (bSpace) {
          console.log(bSpace)
            event.target.previous.focus();
        }
    }

  return (
    <div className={`SixDigitButton m-v-1 ${show && !goalMet ? "" : "hidden"}`}>
        <div className="mm-number">
			<div className="mm-number-container">
				<div className="mm-number-input">
					<div className="mm-number-input-container animated">
						<div className="mm-number-input-item">
              <input 
              name="input1"
              value={first}
              type="number" 
              pattern="\d*" 
              className="animated" 
              maxLength={1}
              placeholder="-" 
              ref={input1}
              onChange={event => setFirst(event.target.value.slice(0, event.target.maxLength))}
              onKeyPress={handleKeyPress}/>
						</div>
						<div className="mm-number-input-item">
              <input 
              name="input2"
              value={second}
              type="number" 
              pattern="\d*" 
              className="animated" 
              maxLength={1} 
              placeholder="-" 
              ref={input2}
              onChange={event => setSecond(event.target.value.slice(0, event.target.maxLength))}
              onKeyPress={handleKeyPress}/>
						</div>
						<div className="mm-number-input-item">
              <input 
              name="input3"
              value={third}
              type="number" 
              pattern="\d*" 
              className="animated" 
              maxLength={1} 
              placeholder="-" 
              ref={input3}
              onChange={event => setThird(event.target.value.slice(0, event.target.maxLength))}/>
						</div>
						<div className="mm-number-input-item">
              <input 
              name="input4"
              value={fourth}
              type="number" 
              pattern="\d*" 
              className="animated" 
              maxLength={1} 
              placeholder="-" 
              ref={input4}
              onChange={event => setFourth(event.target.value.slice(0, event.target.maxLength))}/>
						</div>
						<div className="mm-number-input-item">
              <input 
              name="input5"
              value={fifth}
              type="number" 
              pattern="\d*" 
              className="animated" 
              maxLength={1} 
              placeholder="-" 
              ref={input5}
              onChange={event => setFifth(event.target.value.slice(0, event.target.maxLength))}/>
						</div>
						<div className="mm-number-input-item">
              <input 
              name="input6"
              value={sixth}
              type="number" 
              pattern="\d*" 
              className="animated" 
              maxLength={1} 
              placeholder="-" 
              ref={input6}
              onChange={event => setSixth(event.target.value.slice(0, event.target.maxLength))}/>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
};

export default SixDigitButton;