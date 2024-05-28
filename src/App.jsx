import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import EssayScoring from "./components/EssayScoring/EssayScoring";

function App() {
  return (
    <>
      <Router>
        {/* Uncomment the following line if you need the Google sign-in prompt */}
        {/* <div id="google-signin-prompt" className="google-signin-prompt" /> */}
        <Routes>
          <Route path="/" element={<EssayScoring />} />
          {/* Uncomment the following line if you have a NotFound404ErrorPage component */}
          {/* <Route path="*" element={<NotFound404ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
