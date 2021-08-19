import useInput from "../hooks/use-inputs";

const BasicForm = (props) => {
  const namesValidation = (value) => value.trim().length >= 3;
  //First Name
  const {
    value: firstNameValue,
    isValid: firstNameValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(namesValidation);

  const firstNameClasses = firstNameError
    ? "form-control invalid"
    : "form-control";

  //Last Name
  const {
    value: lastNameValue,
    isValid: lastNameValid,
    hasError: lastNameError,
    valueChangeHandler: lastNameHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(namesValidation);

  const lastNameClasses = lastNameError
    ? "form-control invalid"
    : "form-control";

  //Email
  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailError,
    valueChangeHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));

  const emailClasses = emailError ? "form-control invalid" : "form-control";

  //Form validity
  let formValid = false;
  if (firstNameValid && lastNameValid && emailValid) {
    formValid = true;
  }

  const submitFormHanlder = (event) => {
    event.preventDefault();

    if (!firstNameValid || !lastNameValid || !emailValid) return;

    console.log("FirstName: " + firstNameValue);
    console.log("LastName: " + lastNameValue);
    console.log("Email: " + emailValue);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHanlder}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameError && (
            <p className="error-text">
              First name must have more than 3 characters
            </p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
          />
          {lastNameError && (
            <p className="error-text">
              Last name must have more than 3 characters
            </p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailError && <p className="error-text">Must be a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
