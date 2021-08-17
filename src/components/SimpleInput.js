import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValidName = enteredName.trim().length !== 0;
  const nameInputIsInvalid = !isValidName && isTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    if(!isValidName){
      return;
    }
    
    setEnteredName("");
    setIsTouched(false);
  };

  const nameInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const nameInputClases = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClases}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
