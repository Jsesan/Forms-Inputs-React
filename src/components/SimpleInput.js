import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const isValidName = enteredName.trim().length !== 0;
  const nameInputIsInvalid = !isValidName && nameIsTouched;

  const isValidEmail =
    enteredEmail.includes("@") && enteredEmail.trim().length > 1;
  const emailInputIsInvalid = !isValidEmail && emailIsTouched;

  let formIsValid = false;

  if (isValidName && isValidEmail) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);
    if (!isValidName || !isValidEmail) {
      return;
    }

    setEnteredName("");
    setEnteredEmail("");
    setNameIsTouched(false);
    setEmailIsTouched(false);
  };

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true);
  };

  const nameInputClases = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClases = emailInputIsInvalid
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

      <div className={emailInputClases}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Email is need it</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
