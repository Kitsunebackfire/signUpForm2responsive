import "./App.css";
import Form from "./components/Form";
import Wallpaper from "./components/Wallpaper";
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordMessage = document.getElementById("passwordMessage");
  const passwordMark = document.getElementById("passwordMark");
  const confirmPasswordMessage = document.getElementById(
    "confirmPasswordMessage"
  );
  const confirmPasswordMark = document.getElementById("confirmPasswordMark");

  const handleChange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    }
  };

  const checkPassword = () => {
    if (password === confirmPassword) {
      passwordMessage.previousElementSibling.style.borderColor = "green";
      passwordMark.innerText = "✔️";
      passwordMark.style.color = "green";
      passwordMessage.innerHTML = "passwords match";
      passwordMessage.style.color = "green";

      confirmPasswordMessage.previousElementSibling.style.borderColor = "green";
      confirmPasswordMark.innerText = "✔️";
      confirmPasswordMark.style.color = "green";
      confirmPasswordMessage.innerText = "passwords match";
      confirmPasswordMessage.style.color = "green";
    } else {
      passwordMessage.previousElementSibling.style.borderColor = "red";
      passwordMark.innerText = "❌";
      passwordMark.style.color = "red";
      passwordMessage.innerHTML = "passwords do not match";
      passwordMessage.style.color = "red";

      confirmPasswordMessage.previousElementSibling.style.borderColor = "red";
      confirmPasswordMark.innerText = "❌";
      confirmPasswordMark.style.color = "red";
      confirmPasswordMessage.innerText = "passwords do not match";
      confirmPasswordMessage.style.color = "red";
    }
  };
  return (
    <div className="app">
      <Wallpaper />
      <Form
        handleChange={handleChange}
        password={password}
        confirmPassword={confirmPassword}
        checkPassword={checkPassword}
      />
    </div>
  );
}

export default App;
