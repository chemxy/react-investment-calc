import './App.css';
import Header from './components/Header.js'
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";
import UserInput2 from "./components/UserInput2";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    // option 1
    // function handleChange(type, newValue) {
    //     const updatedUserInput = {
    //         ...userInput,
    //         [type]: Number(newValue)
    //     }
    //     console.log(updatedUserInput)
    //     setUserInput(updatedUserInput)
    //     // setShow(false)
    // }

    //option 2
    const [show, setShow] = useState(false);

    function showResult(input) {
        setUserInput(input);
        setShow(true);
    }

    //nice to have: input validation
    const isInputValid = userInput.duration > 0;

    return (
        <div className="App">
            <Header/>
            {/*option 1*/}
            {/*<UserInput userInput={userInput} onChangeInput={handleChange}/>*/}
            {/*{isInputValid  && <Results input={userInput}/>}*/}

            {/*option 2*/}
            <UserInput2 input={userInput} showResult={showResult}/>
            {isInputValid && show && <Results input={userInput}/>}

            {!isInputValid && <p>Please provide valid input!</p>}

        </div>
    );
}

export default App;
