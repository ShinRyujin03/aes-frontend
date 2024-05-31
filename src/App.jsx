import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import EssayScoring from "./components/EssayScoring/EssayScoring";
import Home from "./components/Home/Home";
import SamplePage from "./components/SampleBand/SamplePage";
import NotFound404ErrorPage from "./components/404Page/404Page";
import ButtonToTop from "./components/ButtonToTop";

function App() {
  return (
    <>
      <Router>
        {/* Uncomment the following line if you need the Google sign-in prompt */}
        {/* <div id="google-signin-prompt" className="google-signin-prompt" /> */}
        <Routes>
          <Route path="/check-essay" element={<EssayScoring />} />
          <Route path="/" element={<Home />} />
          <Route path="/sample" element={<SamplePage />} />
          {/* Uncomment the following line if you have a NotFound404ErrorPage component */}
          <Route path="*" element={<NotFound404ErrorPage />} />
        </Routes>
        <ButtonToTop />
      </Router>
    </>
  );
}

export default App;
