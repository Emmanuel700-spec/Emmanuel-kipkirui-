import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead
import classes from "./contactForm.module.css";
import Button from "../UI/Button";
import useInput from "../../hooks/useInput";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const [isEntering, setIsEntering] = useState(false);
  const navigate = useNavigate();

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    hasError: phoneInputHasError,
    isValid: enteredPhoneIsValid,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput((value) => value.trim().length >= 10);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    hasError: messageInputHasError,
    isValid: enteredMessageIsValid,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput((value) => value.trim().length >= 10);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }

  const [btnText, setBtnText] = useState("Send Message");
  const [isSent, setIsSent] = useState(false);
  const [enteredLName, setEnteredLName] = useState("");

  const lastNameChangeHandler = (event) => {
    setEnteredLName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredEmailIsValid ||
      !enteredMessageIsValid ||
      !enteredPhoneIsValid
    ) {
      return;
    }

    const message = {
      time: new Date().toUTCString(),
      name: enteredName + " " + enteredLName,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };

    finishEnteringHandler();
    sendMessageHanlder(message);
  };

  const sendMessageHanlder = async (message) => {
    setBtnText("Sending ...");
    await fetch(
      "https://react-redux-47ef8-default-rtdb.firebaseio.com/portfolio-messages.json",
      {
        method: "POST",
        body: JSON.stringify(message),
      }
    );
    setIsSent(true);
    setBtnText("Message Sent");
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocussedHandler = () => {
    setIsEntering(true);
  };

  const nameInputClasses = nameInputHasError
    ? `${classes.Inputs} ${classes.invalidInput}`
    : classes.Inputs;
  const emailInputClasses = emailInputHasError
    ? `${classes.Inputs} ${classes.invalidInput}`
    : classes.Inputs;
  const phoneInputClasses = phoneInputHasError
    ? `${classes.Inputs} ${classes.invalidInput}`
    : classes.Inputs;
  const messageInputClasses = messageInputHasError
    ? `${classes.Inputs} ${classes.invalidInput}`
    : classes.Inputs;
  const formClasses = isSent
    ? `${classes.contactForm} ${classes.sent}`
    : classes.contactForm;

  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  // Using window.onbeforeunload to ask for confirmation before leaving
  useEffect(() => {
    if (isEntering) {
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = "Are you sure you want to leave? All your entered data will be lost!";
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [isEntering]);

  return (
    <Fragment>
      <div className={classes.contactFormCard}>
        <h1 style={{ color: nonThemeColor }}>Leave A Message</h1>
        <form
          onFocus={formFocussedHandler}
          action=""
          onSubmit={formSubmitHandler}
          className={formClasses}
        >
          <input
            value={enteredName}
            onBlur={nameBlurHandler}
            onChange={nameChangedHandler}
            type="text"
            className={nameInputClasses}
            placeholder="First Name"
            disabled={isSent}
          />
          <input
            type="text"
            id="lName"
            value={enteredLName}
            onChange={lastNameChangeHandler}
            className={classes.Inputs}
            placeholder="Last Name (optional)"
            disabled={isSent}
          />

          <input
            value={enteredEmail}
            onBlur={emailBlurHandler}
            onChange={emailChangedHandler}
            type="email"
            className={emailInputClasses}
            placeholder="Email"
            disabled={isSent}
          />
          <input
            value={enteredPhone}
            onBlur={phoneBlurHandler}
            onChange={phoneChangedHandler}
            type="text"
            className={phoneInputClasses}
            placeholder="Phone"
            minLength={10}
            maxLength={12}
            disabled={isSent}
          />
          <br />
          <textarea
            value={enteredMessage}
            onBlur={messageBlurHandler}
            onChange={messageChangedHandler}
            className={messageInputClasses}
            name="message"
            placeholder="Message"
            disabled={isSent}
          ></textarea>
          <div className={classes.sendBtn}>
            <Button type="submit" disabled={!formIsValid || isSent}>
              {btnText}
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
