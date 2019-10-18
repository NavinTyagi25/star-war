import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="jumbotron">
      <div className="container login-container">
        <div className="col-md-12">
          <h2>
            Login
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
