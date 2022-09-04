import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import Form from "../UI/Form";

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLXJh6psO1JBbDFjHlpPhMCpKedY6fPy8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLXJh6psO1JBbDFjHlpPhMCpKedY6fPy8";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <span className="span">
          <label className="label" htmlFor="email">
            Your Email
          </label>
          <input className="input" type="email" id="email" required ref={emailInputRef} />
        </span>
        <span className="span">
          <label className="label" htmlFor="password">
            Your Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </span>
        <span className="span">
          {!isLoading && (
            <button className="button">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Sending request...</p>}
        </span>
        <span className="span">
          <h5 onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </h5>
        </span>
      </Form>
    </Card>
  );
};

export default AuthForm;
