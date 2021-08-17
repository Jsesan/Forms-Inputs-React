
import useInput from "../hooks/use-inputs";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: isValidName,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim().length !== 0);

  const {
    value: enteredEmail,
    isValid: isValidEmail,
    hasError: emailInputIsInvalid,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@") && value.trim().length > 1);

  let formIsValid = false;

  if (isValidName && isValidEmail) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!isValidName || !isValidEmail) {
      return;
    }

    resetName();
    resetEmail();
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
