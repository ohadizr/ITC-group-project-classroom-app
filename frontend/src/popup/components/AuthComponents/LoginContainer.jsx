import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { AuthContext } from "../../.././content/./contexts/AuthContext.jsx";
import { auth } from "../../.././content/./contexts/firebase-config.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function LoginContainer() {
  const [newUser, setNewUser] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [signupUserName, setSignupUserName] = useState("");

  const {
    addNewUser,
    signUpError,
    setSignUpError,
    signInUser,
    loginError,
    setLoginError,
    setSignupName,
  } = useContext(AuthContext);

  useEffect(() => {
    setSignupName(signupUserName);
  }, [signupUserName]);

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const addUserHandler = (emailRef, passwordRef) => {
    addNewUser(auth, emailRef, passwordRef);
  };
  const loginUserHandler = (loginEmailRef, loginPasswordRef) => {
    signInUser(auth, loginEmailRef, loginPasswordRef);
  };

  const removeSignupError = () => {
    setSignUpError(null);
  };
  const removeLoginError = () => {
    setLoginError(null);
  };

  const googleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.customData.email;

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "lightgrey solid 1px",
        borderRadius: "20px",
        width: "93%",
        height: "325px",
      }}
    >
      {newUser ? (
        <>
        <h2 //UserName
            style={{
              marginBottom: "5px",
            }}
          >
            UserName
          </h2>
          <input //UserName
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) => {
              removeSignupError();
              setSignupUserName(e.target.value);
            }}
            style={{
              height: "45px",
              border: "grey solid 1px",
              borderRadius: "10px",
            }}
          ></input>
          <h2 //email
            style={{
              marginBottom: "5px",
            }}
          >
            Email
          </h2>
          <input //email
            onChange={() => {
              removeSignupError();
            }}
            type="email"
            placeholder="example@email.com"
            required
            ref={emailRef}
            style={{
              height: "45px",
              border: "grey solid 1px",
              borderRadius: "10px",
            }}
          ></input>
          <h2 //password
            style={{
              marginBottom: "5px",
            }}
          >
            Password
          </h2>
          <input //password
            onChange={() => {
              removeSignupError();
            }}
            type="password"
            placeholder="- - - - - -"
            required
            ref={passwordRef}
            style={{
              height: "45px",
              border: "grey solid 1px",
              borderRadius: "10px",
            }}
          ></input>
          <h2 //Confirm Password
            style={{
              marginBottom: "5px",
            }}
          >
            Confirm Password
          </h2>
          <input //Confirm Password
            onChange={() => {
              removeSignupError();
            }}
            type="password"
            placeholder="- - - - - -"
            required
            ref={passwordConfirmRef}
            style={{
              height: "45px",
              border: "grey solid 1px",
              borderRadius: "10px",
            }}
          ></input>

          <button
            onClick={() => {
              if (
                passwordRef.current.value === passwordConfirmRef.current.value
              ) {
                addUserHandler(
                  emailRef.current.value,
                  passwordRef.current.value
                );
              } else {
                setSignUpError(
                  "Please make sure the passwords you entered match."
                );
              }
            }}
            style={{ borderRadius: "8px", height: "40px", marginTop: "8px" }}
          >
            Sign me up!
          </button>
          {signUpError ? (
            <p
              style={{
                margin: "10px 10px 0 10px",
                fontSize: "12px",
                color: "red",
              }}
            >
              {signUpError}
            </p>
          ) : null}
          <p>
            <span
              style={{ color: "blue" }}
              onClick={() => {
                setNewUser(false);
                removeSignupError();
              }}
            >
              Click here&nbsp;
            </span>
            to log in if you are an existing user.
          </p>
        </>
      ) : (
        <>
          <h2
            style={{
              marginBottom: "5px",
            }}
          >
            Email
          </h2>
          <input
            type="email"
            required
            ref={loginEmailRef}
            placeholder="example@email.com"
            onChange={() => {
              removeLoginError();
            }}
            style={{
              height: "25px",
              border: "grey solid 1px",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          ></input>
          <h2
            style={{
              marginBottom: "5px",
            }}
          >
            Password
          </h2>
          <input
            type="password"
            required
            ref={loginPasswordRef}
            onChange={() => {
              removeLoginError();
            }}
            style={{
              height: "25px",
              border: "grey solid 1px",
              borderRadius: "10px",
            }}
          ></input>
          <button
            onClick={() => {
              loginUserHandler(
                loginEmailRef.current.value,
                loginPasswordRef.current.value
              );
            }}
            style={{ borderRadius: "8px", height: "35px", marginTop: "24px" }}
          >
            Log me in!
          </button>
          <label
            htmlFor="googleLogin"
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "8px",
            }}
          >
            {/* <img src={require("../images/google_auth_pic.png")} /> */}

            <button
              id="googleLogin"
              style={{ display: "none" }}
              onClick={googleLoginHandler}
            />
          </label>
          {loginError ? (
            <p
              variant="danger"
              style={{
                margin: "10px 10px 0 10px",
                fontSize: "12px",
                color: "red",
              }}
            >
              {loginError}
            </p>
          ) : null}

          <p>
            <span
              style={{ color: "blue" }}
              onClick={() => {
                setNewUser(true);
                removeLoginError();
              }}
            >
              Click here&nbsp;
            </span>
            to sign up as a new user.
          </p>
        </>
      )}
    </div>
  );
}