import React from "react";
import Navigation from "./components/Navigation.tsx";
import Main from "./components/Main.tsx";
import "./styles/App.scss";
import Feedback from "./components/feedbackBox.tsx";
function App() {
  const [registerEmail, setRegisterEmail]
}
const App = () => {
  return (
    <div id="page-container">
      <header>
        {/* Uncomment and update the content as needed */}
        {/* <div>
          <h1>Your Healthcare Inside + Out</h1>
          <p>Answering your health questions post-incarceration</p>
        </div> */}
        <Navigation />
      </header>
      <div id="main-container">
        <Main />
      </div>
      <Feedback />
    </div>
  );
};

export default App;
